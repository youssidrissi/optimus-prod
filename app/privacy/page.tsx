'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-30"></div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-gray-700 dark:text-gray-400 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p>
              Optimus Consulting (&#34;we&#34; or &#34;us&#34; or &#34;our&#34;) operates the website. This page informs you of our
              policies regarding the collection, use, and disclosure of personal data when you use our
              Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Information Collection and Use
            </h2>
            <p>
              We collect several different types of information for various purposes to provide and
              improve our Service to you.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal Data: While using our Service, we may ask you to provide us with certain
                personally identifiable information that can be used to contact or identify you
                (&#34;Personal Data&#34;). This may include:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </li>
              <li>Usage Data: We may also collect information on how the Service is accessed and
                used (&#34;Usage Data&#34;).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. Use of Data
            </h2>
            <p>Optimus Consulting uses the collected data for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. Security of Data
            </h2>
            <p>
              The security of your data is important to us but remember that no method of
              transmission over the Internet or method of electronic storage is 100% secure. While we
              strive to use commercially acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &#34;effective date&#34; at the
              top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: contact@optimusconsulting.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
