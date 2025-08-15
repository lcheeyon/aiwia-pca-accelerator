import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Data Privacy Policy - AIWIA",
    "description": "AIWIA's comprehensive data privacy policy compliant with Singapore's Personal Data Protection Act (PDPA)",
    "url": "https://aiwia.app/privacy-policy"
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Data Privacy Policy | AIWIA - PDPA Compliant Privacy Protection"
        description="AIWIA's comprehensive data privacy policy compliant with Singapore's Personal Data Protection Act (PDPA). Learn how we protect and manage your personal data."
        keywords="data privacy policy, PDPA, personal data protection, Singapore privacy law, data protection, AIWIA privacy"
        canonicalUrl="https://aiwia.app/privacy-policy"
        structuredData={structuredData}
      />
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-aiwia-black mb-8">Data Privacy Policy</h1>
          
          <div className="bg-blue-50 border-l-4 border-aiwia-blue p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2"><strong>Effective Date:</strong> January 1, 2025</p>
            <p className="text-sm text-gray-600"><strong>Last Updated:</strong> January 1, 2025</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">1. Introduction</h2>
            <p className="mb-4">
              AIWIA Consultancy ("we," "us," or "our") is committed to protecting your personal data and respecting your privacy rights. 
              This Privacy Policy explains how we collect, use, disclose, and protect your personal data in compliance with Singapore's 
              Personal Data Protection Act 2012 ("PDPA") and other applicable data protection laws.
            </p>
            <p>
              By using our services or providing us with your personal data, you consent to the collection, use, and disclosure of your 
              personal data as described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">2. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>AIWIA Consultancy</strong></p>
              <p>111 North Bridge Road, #20-05</p>
              <p>Peninsular Plaza, Singapore 179098</p>
              <p>UEN: 202530684N</p>
              <p>Email: info@aiwia.app</p>
              <p>Website: aiwia.app</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">3. Personal Data We Collect</h2>
            <p className="mb-4">We may collect the following types of personal data:</p>
            
            <h3 className="text-xl font-medium text-aiwia-black mb-3">3.1 Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (name, email address, phone number, mailing address)</li>
              <li>Professional information (job title, company name, industry)</li>
              <li>Training and certification records</li>
              <li>Payment and billing information</li>
              <li>Communications with us (emails, chat messages, feedback)</li>
              <li>Marketing preferences and consent records</li>
            </ul>

            <h3 className="text-xl font-medium text-aiwia-black mb-3">3.2 Information Automatically Collected</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Website usage data (pages visited, time spent, click patterns)</li>
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Log files and analytics data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">4. How We Use Your Personal Data</h2>
            <p className="mb-4">We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Delivery:</strong> To provide AI consultancy, training, and compliance services</li>
              <li><strong>Communication:</strong> To respond to inquiries and provide customer support</li>
              <li><strong>Business Operations:</strong> To process payments, maintain records, and manage relationships</li>
              <li><strong>Marketing:</strong> To send relevant information about our services (with your consent)</li>
              <li><strong>Compliance:</strong> To meet legal and regulatory requirements</li>
              <li><strong>Improvement:</strong> To enhance our services and website functionality</li>
              <li><strong>Security:</strong> To protect against fraud, security threats, and unauthorized access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">5. Legal Basis for Processing</h2>
            <p className="mb-4">Under the PDPA, we process your personal data based on:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Consent:</strong> You have given clear consent for specific processing activities</li>
              <li><strong>Contract:</strong> Processing is necessary for performing services you've requested</li>
              <li><strong>Legal Obligation:</strong> Processing is required to comply with applicable laws</li>
              <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">6. Disclosure of Personal Data</h2>
            <p className="mb-4">We may disclose your personal data to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations (cloud services, payment processors)</li>
              <li><strong>Business Partners:</strong> Partners involved in delivering services to you</li>
              <li><strong>Legal Authorities:</strong> Government agencies when required by law or court order</li>
              <li><strong>Professional Advisors:</strong> Lawyers, accountants, and other professional service providers</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of business assets</li>
            </ul>
            <p>We ensure all third parties provide adequate protection for your personal data.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">7. International Data Transfers</h2>
            <p className="mb-4">
              Your personal data may be transferred to and stored in countries outside Singapore. When we transfer personal data 
              internationally, we ensure adequate protection through:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Adequacy decisions or similar mechanisms</li>
              <li>Standard contractual clauses</li>
              <li>Certification schemes</li>
              <li>Other appropriate safeguards as required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">8. Data Retention</h2>
            <p className="mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as 
              required by law. Retention periods vary based on:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The nature of the data and services provided</li>
              <li>Legal and regulatory requirements</li>
              <li>Business needs and legitimate interests</li>
              <li>Your preferences and consent</li>
            </ul>
            <p>When no longer needed, we securely delete or anonymize your personal data.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">9. Your Rights Under PDPA</h2>
            <p className="mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Access:</strong> Request copies of your personal data we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for processing (where consent is the legal basis)</li>
              <li><strong>Data Portability:</strong> Request transfer of your data in a structured format</li>
              <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
            </ul>
            <p>To exercise these rights, contact us using the details provided in Section 2.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">10. Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal data, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security assessments and updates</li>
              <li>Staff training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">11. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              Our website uses cookies and similar technologies to improve user experience and analyze website performance. 
              You can manage cookie preferences through your browser settings. For detailed information, please refer to our Cookie Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">12. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from 
              children under 18. If you become aware that a child has provided us with personal data, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">13. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of significant changes by:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Posting the updated policy on our website</li>
              <li>Sending email notifications (where appropriate)</li>
              <li>Other communication methods as deemed necessary</li>
            </ul>
            <p>Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">14. Complaints and Contact</h2>
            <p className="mb-4">
              If you have concerns about how we handle your personal data or wish to make a complaint, please contact us first using 
              the details in Section 2. We will investigate and respond to your concerns promptly.
            </p>
            <p className="mb-4">
              If you are not satisfied with our response, you may lodge a complaint with the Personal Data Protection Commission 
              Singapore (PDPC):
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Personal Data Protection Commission Singapore</strong></p>
              <p>Website: www.pdpc.gov.sg</p>
              <p>Email: enquiries@pdpc.gov.sg</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-aiwia-black mb-4">15. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of Singapore. Any disputes arising from this Privacy Policy shall be 
              subject to the exclusive jurisdiction of the courts of Singapore.
            </p>
          </section>

          <div className="border-t pt-8 mt-12">
            <p className="text-sm text-gray-600">
              This Privacy Policy demonstrates our commitment to protecting your personal data in accordance with Singapore's 
              Personal Data Protection Act and international best practices. For any questions or clarifications, 
              please contact us at info@aiwia.app.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;