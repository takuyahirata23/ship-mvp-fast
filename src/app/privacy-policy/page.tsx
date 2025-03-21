import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="py-8">
      <h1 className="font-bold text-2xl">Privacy Policy</h1>
      <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
      <p>{`Welcome to Ship MVP Fast ("we," "our," or "us"). This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website and use our services.`}</p>

      <h2 className="text-xl font-semibold mt-4">2. Information We Collect</h2>
      <ul className="list-disc ml-6">
        <li><strong>Personal Information:</strong> Name, email address, and other contact details when you inquire about our services.</li>
        <li><strong>Payment Information:</strong> If applicable, payment details are processed securely through third-party payment providers.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">3. How We Use Your Information</h2>
      <p>We use the collected information to:</p>
      <ul className="list-disc ml-6">
        <li>Provide and improve our services.</li>
        <li>Communicate with you about inquiries, projects, and updates.</li>
        <li>Process transactions securely.</li>
        <li>Analyze website usage to improve user experience.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">4. Sharing Your Information</h2>
      <p>We do not sell, trade, or rent your personal information. However, we may share your information with:</p>
      <ul className="list-disc ml-6">
        <li><strong>Service Providers:</strong> Third-party services that help us operate our business (e.g., payment processors, hosting providers).</li>
        <li><strong>Legal Compliance:</strong> If required by law, to comply with legal obligations or protect our rights.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">5. Data Security</h2>
      <p>We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

      <h2 className="text-xl font-semibold mt-4">6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul className="list-disc ml-6">
        <li>Request access to your personal information.</li>
        <li>Request correction or deletion of your data.</li>
        <li>Withdraw consent for data processing, where applicable.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">7. Third-Party Links</h2>
      <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices, so we encourage you to review their policies.</p>

      <h2 className="text-xl font-semibold mt-4">8. Changes to This Privacy Policy</h2>
      <p>We may update this policy from time to time. Any changes will be posted on this page with the updated effective date.</p>
    </div>
  )
}
