import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="py-8">
      <h1 className="font-bold text-2xl">Terms of Service</h1>
      <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
      <p>{`Welcome to Ship MVP Fast ("we," "our," or "us"). By accessing or using our website and services, you agree to these Terms of Service. If you do not agree with any part of these terms, please do not use our services.`}</p>

      <h2 className="text-xl font-semibold mt-4">2. Services Provided</h2>
      <p>Ship MVP Fast provides MVP development services for clients. We reserve the right to modify or discontinue our services at any time.</p>

      <h2 className="text-xl font-semibold mt-4">3. User Responsibilities</h2>
      <p>By using our services, you agree to:</p>
      <ul className="list-disc ml-6">
        <li>Provide accurate information when requesting services.</li>
        <li>Use our services legally and ethically.</li>
        <li>Not engage in any activity that disrupts our operations or violates applicable laws.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">4. Payments and Refunds</h2>
      <ul className="list-disc ml-6">
        <li>Payments for our services must be made as agreed upon in our service contract.</li>
        <li>Refunds are only provided at our discretion or as stated in individual agreements.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">5. Intellectual Property</h2>
      <ul className="list-disc ml-6">
        <li>Any intellectual property developed for clients remains their property upon full payment.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">6. Limitation of Liability</h2>
      <p>Ship MVP Fast is not liable for any indirect, incidental, or consequential damages resulting from the use of our services.</p>

      <h2 className="text-xl font-semibold mt-4">7. Termination</h2>
      <p>We reserve the right to terminate or suspend access to our services if users violate these Terms of Service.</p>

      <h2 className="text-xl font-semibold mt-4">8. Changes to Terms</h2>
      <p>We may update these Terms of Service at any time. Continued use of our services after changes are posted constitutes acceptance of the revised terms.</p>
    </div>
  )
}
