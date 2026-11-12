import { Reveal, SectionHead } from '../components/ui.jsx'
import { site } from '../data/site.js'

export function Privacy() {
  return (
    <div style={{ paddingTop: 130, paddingBottom: 100 }}>
      <div className="container legal">
        <Reveal>
          <div className="kicker">Legal</div>
          <h1 className="title">Privacy Policy</h1>
          <p className="lead">How {site.name} collects, uses, and protects your information.</p>

          <h2>1. What We Collect</h2>
          <p>
            When you submit an enquiry through our contact forms or reach out via WhatsApp/email, we collect your name, email address, phone number, and project details. We do not run advertising trackers, third-party cookies, or sell customer data.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used solely to respond to your inquiry, discuss project scopes, provide quotes, and deliver our services. We never add your email to promotional mailing lists without your explicit permission.
          </p>

          <h2>3. Data Retention</h2>
          <p>
            Enquiry messages are retained for up to 12 months in our internal records so we can reference previous requirements and pick up future revisions smoothly. You can request immediate deletion of your records at any time.
          </p>

          <h2>4. Your Rights</h2>
          <p>
            You may contact us at any time to inspect, modify, or permanently delete any personal information we hold regarding you or your organization.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please reach us directly at <a href={`mailto:${site.email}`} style={{ color: 'var(--blue)' }}>{site.email}</a>.
          </p>
        </Reveal>
      </div>
    </div>
  )
}

export function Terms() {
  return (
    <div style={{ paddingTop: 130, paddingBottom: 100 }}>
      <div className="container legal">
        <Reveal>
          <div className="kicker">Legal</div>
          <h1 className="title">Terms of Service</h1>
          <p className="lead">The terms that govern website and design deliverables from {site.name}.</p>

          <h2>1. Fixed Quotes &amp; Scopes</h2>
          <p>
            Every project starts with an itemized, fixed UGX quote and an agreed written timeline. Any changes to the initial scope during development are mutually agreed upon in writing before extra work commences.
          </p>

          <h2>2. Revisions</h2>
          <p>
            Standard projects include the revision rounds specified in our pricing tier (e.g. 2 to 3 revision iterations). Extra iterations or post-approval rewrites outside the original scope are quoted separately.
          </p>

          <h2>3. Payment Schedule</h2>
          <p>
            Projects typically begin with a 50% deposit to secure your start date, with the remaining 50% balance due upon project completion and testing prior to final launch. We accept Mobile Money (MTN MoMo / Airtel Money) and direct bank transfers.
          </p>

          <h2>4. Ownership &amp; Code Handover</h2>
          <p>
            Upon settlement of the final invoice, full intellectual property and ownership of all delivered source code, design assets, and credentials belong entirely to you.
          </p>

          <h2>5. Warranty &amp; Support</h2>
          <p>
            Every delivery includes our standard complimentary support window (2 to 4 weeks depending on the package) covering any bug fixes, technical clarifications, and minor launch adjustments.
          </p>
        </Reveal>
      </div>
    </div>
  )
}
