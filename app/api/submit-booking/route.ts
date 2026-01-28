import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      company,
      phone,
      projectType,
      description,
      budget,
      timeline,
      additional,
    } = body;

    // Validate required fields
    if (!fullName || !email || !projectType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to client
    await resend.emails.send({
      from: 'Optimus Consulting <onboarding@resend.dev>',
      to: email,
      subject: 'We received your consultation request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for reaching out, ${fullName}!</h2>
          <p>We've received your consultation request and will be in touch shortly.</p>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your Project Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Full Name:</strong> ${fullName}</li>
              <li><strong>Company:</strong> ${company || 'N/A'}</li>
              <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
              <li><strong>Project Type:</strong> ${projectType}</li>
              <li><strong>Budget:</strong> €${budget?.toLocaleString() || 'Not specified'}</li>
              <li><strong>Timeline:</strong> ${timeline || 'Not specified'}</li>
            </ul>
            ${description ? `<p><strong>Project Description:</strong></p><p>${description}</p>` : ''}
            ${additional ? `<p><strong>Additional Details:</strong></p><p>${additional}</p>` : ''}
          </div>
          
          <p>Our team will review your request and get back to you within 24-48 hours.</p>
          <p>Best regards,<br/>The Optimus Consulting Team</p>
        </div>
      `,
    });

    // Send email to admin
    await resend.emails.send({
      from: 'Optimus Consulting <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL || 'admin@optimusconsulting.com',
      subject: `New consultation request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Consultation Request</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Client Information:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Name:</strong> ${fullName}</li>
              <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
              <li><strong>Company:</strong> ${company || 'Not specified'}</li>
              <li><strong>Phone:</strong> ${phone || 'Not specified'}</li>
              <li><strong>Project Type:</strong> ${projectType}</li>
              <li><strong>Budget:</strong> €${budget?.toLocaleString() || 'Not specified'}</li>
              <li><strong>Timeline:</strong> ${timeline || 'Not specified'}</li>
            </ul>
            ${description ? `<p><strong>Project Description:</strong></p><p>${description}</p>` : ''}
            ${additional ? `<p><strong>Additional Details:</strong></p><p>${additional}</p>` : ''}
          </div>
          
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Booking submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting booking:', error);
    return NextResponse.json(
      { error: 'Failed to submit booking' },
      { status: 500 }
    );
  }
}
