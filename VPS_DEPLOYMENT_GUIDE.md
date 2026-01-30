# Complete VPS Deployment Guide for Your Next.js Website

## Table of Contents
1. [Understanding VPS Basics](#understanding-vps-basics)
2. [Choosing a VPS Provider](#choosing-a-vps-provider)
3. [Step 1: Setting Up Your VPS](#step-1-setting-up-your-vps)
4. [Step 2: Prepare Your Application](#step-2-prepare-your-application)
5. [Step 3: Deploy Your Application](#step-3-deploy-your-application)
6. [Step 4: Set Up Domain & SSL](#step-4-set-up-domain--ssl)
7. [Step 5: Monitoring & Maintenance](#step-5-monitoring--maintenance)

---

## Understanding VPS Basics

**What is a VPS?**
- VPS = Virtual Private Server
- It's like renting a computer in the cloud that only YOU have access to
- Your website files, database, and application run 24/7 on this remote computer
- Much cheaper than a dedicated server but more powerful than shared hosting

**What You Get with a VPS:**
- A Linux operating system (usually Ubuntu 22.04 or newer)
- Full control via SSH (secure command line access)
- Ability to install any software you need
- Dedicated resources (CPU, RAM, storage)

---

## Choosing a VPS Provider

**Popular, Beginner-Friendly VPS Providers:**

1. **Linode** (Recommended for beginners)
   - $5-10/month for basic plans
   - Simple interface
   - Good documentation
   - Visit: linode.com

2. **DigitalOcean**
   - $4-6/month for Droplets (their VPS)
   - Very beginner-friendly
   - Excellent tutorials
   - Visit: digitalocean.com

3. **Vultr**
   - $2.50-5/month
   - Good performance
   - Visit: vultr.com

4. **AWS Lightsail**
   - $3.50-10/month
   - Amazon's simplified VPS offering
   - Visit: aws.amazon.com/lightsail

**What to Choose:**
- **Minimum specs for your site:** Ubuntu 22.04, 1-2GB RAM, 25GB SSD
- **Bandwidth:** Choose at least 1-2TB/month
- **Location:** Choose closest to your users for better speed

---

## STEP 1: Setting Up Your VPS

### 1.1 Create Your VPS Account & Instance

1. Go to your chosen provider's website
2. Sign up for an account
3. Create a new VPS instance with these settings:
   - **OS:** Ubuntu 22.04 LTS (or latest LTS)
   - **Size:** 1GB RAM minimum (2GB recommended)
   - **Location:** Closest to your main audience
   - **Hostname:** something like `optimus-server`

### 1.2 Receive Your Login Credentials

You'll receive:
- **IP Address** (e.g., `123.45.67.89`) - your server's address
- **Root Password** - initially use this, but we'll set up better security
- **SSH Port** (usually 22)

### 1.3 Initial Server Security Setup

**On your Windows computer, open PowerShell and run:**

```powershell
# First, SSH into your server (it will ask for password)
ssh root@YOUR_IP_ADDRESS
# Example: ssh root@123.45.67.89
```

**You'll be connected to your remote server. Now run these commands one by one:**

```bash
# Step 1: Update the system (installs latest security patches)
apt update && apt upgrade -y

# Step 2: Create a new user (don't use root for daily work - it's too risky)
adduser deploy
# It will ask for a password - create a strong one

# Step 3: Give this user admin privileges
usermod -aG sudo deploy

# Step 4: Set up SSH key authentication (more secure than passwords)
mkdir -p /home/deploy/.ssh
chmod 700 /home/deploy/.ssh
```

**On your Windows computer, generate an SSH key pair:**

```powershell
# Run this on your Windows machine
ssh-keygen -t rsa -b 4096 -f ~/.ssh/vps_key
# Press Enter twice (leave passphrase empty for now)
```

**Then copy your public key to the server:**

```powershell
# Still on Windows
$key = Get-Content ~/.ssh/vps_key.pub
ssh root@YOUR_IP_ADDRESS "echo '$key' >> /home/deploy/.ssh/authorized_keys"
```

**Back on the server (via SSH as root), run:**

```bash
# Fix permissions for the deploy user
chown -R deploy:deploy /home/deploy/.ssh
chmod 600 /home/deploy/.ssh/authorized_keys

# Disable root SSH login (security measure)
nano /etc/ssh/sshd_config
# Find line: PermitRootLogin yes
# Change to: PermitRootLogin no
# Press Ctrl+X, then Y, then Enter to save

# Restart SSH service
systemctl restart ssh

# Exit the server
exit
```

**Now test login as deploy user from Windows:**

```powershell
ssh -i ~/.ssh/vps_key deploy@YOUR_IP_ADDRESS
```

---

## STEP 2: Prepare Your Application

### 2.1 Install Required Software on VPS

**Connect to your VPS and run:**

```bash
# Install Node.js (runtime for your Next.js app)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version

# Install Git (to clone your code)
sudo apt install -y git

# Install Nginx (web server that handles incoming requests)
sudo apt install -y nginx

# Install PM2 (keeps your app running 24/7)
sudo npm install -g pm2

# Install Certbot (for free SSL certificate)
sudo apt install -y certbot python3-certbot-nginx
```

### 2.2 Set Up Your Application Directory

```bash
# Create a directory for your app
sudo mkdir -p /var/www/optimus
sudo chown -R deploy:deploy /var/www/optimus
cd /var/www/optimus

# Clone your repository (if on GitHub)
# First, you need to push your code to GitHub if not already done:
git clone https://github.com/YOUR_USERNAME/optimus.git .
# Or if using a different Git service, use that URL

# Or manually upload files (we'll explain below)
```

**If you don't have your code on GitHub yet:**

1. Create a GitHub account (free at github.com)
2. Create a new repository called "optimus"
3. On your Windows machine, in your project folder:

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/optimus.git
git push -u origin main
```

### 2.3 Build Your Application for Production

```bash
cd /var/www/optimus

# Install dependencies
npm install

# Build the production version (this optimizes your code)
npm run build

# This creates a .next folder with optimized code
```

---

## STEP 3: Deploy Your Application

### 3.1 Configure PM2 to Run Your App

```bash
# Start your app with PM2
pm2 start npm --name "optimus" -- start

# Make PM2 start automatically on server restart
pm2 startup
# Copy and run the output command it gives you

# Save the PM2 configuration
pm2 save

# Check if app is running
pm2 status
```

### 3.2 Configure Nginx as Reverse Proxy

**What is a reverse proxy?**
- Nginx receives incoming web requests
- Sends them to your Next.js app
- Returns the response to visitors
- Handles SSL, caching, and more

**Create Nginx configuration:**

```bash
# Create a new config file
sudo nano /etc/nginx/sites-available/optimus
```

**Paste this configuration (replace YOUR_DOMAIN with your actual domain):**

```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN www.YOUR_DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Save the file:** Press `Ctrl+X`, then `Y`, then `Enter`

```bash
# Enable this site
sudo ln -s /etc/nginx/sites-available/optimus /etc/nginx/sites-enabled/optimus

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx
```

### 3.3 Verify Your Website is Running

Open your browser and visit:
```
http://YOUR_IP_ADDRESS
```

You should see your website! If you see an error, check:

```bash
# View PM2 app logs
pm2 logs optimus

# View Nginx errors
sudo tail -f /var/log/nginx/error.log
```

---

## STEP 4: Set Up Domain & SSL

### 4.1 Connect Your Domain to Your VPS

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings
3. Add an A Record pointing to your VPS IP:
   - Type: A
   - Name: @ (or leave blank)
   - Value: YOUR_VPS_IP_ADDRESS
   - TTL: 3600

4. Add another A Record for www:
   - Type: A
   - Name: www
   - Value: YOUR_VPS_IP_ADDRESS

5. **Wait 15-30 minutes** for DNS to update

**Verify DNS is updated:**

```powershell
# On Windows, open PowerShell
nslookup YOUR_DOMAIN
# Should show your VPS IP address
```

### 4.2 Install Free SSL Certificate (HTTPS)

**Once DNS is updated and domain points to your VPS:**

```bash
# Run Certbot to get a free SSL certificate
sudo certbot --nginx -d YOUR_DOMAIN -d www.YOUR_DOMAIN

# It will ask you:
# 1. Email address - for security alerts
# 2. Agree to terms - type 'Y'
# 3. Share email - type 'N' or 'Y'
# 4. Redirect HTTP to HTTPS - type '2' (recommended)

# Verify SSL certificate
ssl_certificate = /etc/letsencrypt/live/YOUR_DOMAIN/fullchain.pem
```

**Automatic Renewal (Certbot does this automatically):**

```bash
# Enable auto-renewal
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

# Test renewal process
sudo certbot renew --dry-run
```

### 4.3 Test Your HTTPS Website

Open your browser and visit:
```
https://YOUR_DOMAIN
```

You should see a lock icon indicating secure connection ✓

---

## STEP 5: Monitoring & Maintenance

### 5.1 Set Up Automated Backups

```bash
# Create a backup script
nano ~/backup.sh
```

**Paste this:**

```bash
#!/bin/bash
BACKUP_DIR="/home/deploy/backups"
BACKUP_DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR

# Backup your application
tar -czf $BACKUP_DIR/optimus_$BACKUP_DATE.tar.gz /var/www/optimus

# Keep only last 7 backups
find $BACKUP_DIR -name "optimus_*.tar.gz" -mtime +7 -delete

echo "Backup completed: $BACKUP_DATE"
```

**Make it executable and schedule it:**

```bash
chmod +x ~/backup.sh

# Add to cron for daily backups at 2 AM
crontab -e
# Add this line: 0 2 * * * /home/deploy/backup.sh
```

### 5.2 Monitor Server Resources

```bash
# Install monitoring tool
sudo apt install -y htop

# View real-time resource usage
htop

# Check disk space
df -h

# Check memory usage
free -h
```

### 5.3 Update Your Website

**When you update your code:**

```bash
cd /var/www/optimus

# Pull latest code from GitHub
git pull origin main

# Install any new dependencies
npm install

# Build new version
npm run build

# Restart your app
pm2 restart optimus
```

### 5.4 View Application Logs

```bash
# View live logs
pm2 logs optimus

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

---

## Troubleshooting Common Issues

### Website shows "502 Bad Gateway"
```bash
# Your app probably crashed
pm2 restart optimus
pm2 logs optimus  # Check why it crashed
```

### Domain not connecting
```bash
# DNS might not be updated yet - wait longer or verify:
nslookup YOUR_DOMAIN
```

### SSL certificate issues
```bash
# Renew certificate manually
sudo certbot renew --force-renewal
```

### Out of memory
```bash
# Check what's using RAM
htop  # Press 'P' to sort by memory usage
# You might need to upgrade to larger VPS
```

---

## Quick Reference Commands

| What you want | Command |
|---|---|
| Connect to VPS | `ssh -i ~/.ssh/vps_key deploy@YOUR_IP` |
| View app status | `pm2 status` |
| Restart app | `pm2 restart optimus` |
| View app logs | `pm2 logs optimus` |
| Stop app | `pm2 stop optimus` |
| Check disk space | `df -h` |
| Check memory usage | `free -h` |
| Update website | `cd /var/www/optimus && git pull && npm run build && pm2 restart optimus` |
| Restart web server | `sudo systemctl restart nginx` |

---

## Security Checklist

✓ Change root password  
✓ Create new deploy user  
✓ Set up SSH keys  
✓ Disable root SSH login  
✓ Install SSL certificate  
✓ Set up firewall (ufw)  
✓ Enable automatic updates  
✓ Regular backups  

---

## Next Steps After Deployment

1. Set up automated backups (see Section 5.1)
2. Monitor your website daily
3. Update your app whenever you make changes
4. Keep software updated: `sudo apt update && sudo apt upgrade -y`
5. Set up monitoring alerts for uptime

---

## Additional Resources

- Next.js Deployment Docs: https://nextjs.org/docs/deployment
- Ubuntu Server Guide: https://ubuntu.com/server/docs
- Nginx Documentation: https://nginx.org/en/docs/
- Let's Encrypt: https://letsencrypt.org/

