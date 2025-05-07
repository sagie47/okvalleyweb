import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-heading tracking-tight mb-6">Privacy Policy</h1>
            <p className="text-slate-600 mb-4">
              This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
            </p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Information We Collect</h2>
            <p className="text-slate-600 mb-6">We collect information you provide directly, such as when filling out forms or contacting us. This may include your name, email, phone number, and any other details you share.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">How We Use Your Information</h2>
            <p className="text-slate-600 mb-6">Your information helps us deliver services, respond to inquiries, improve our offerings, and send updates or promotional content if you opt-in.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Sharing Your Information</h2>
            <p className="text-slate-600 mb-6">We do not sell your personal data. We may share information with trusted partners who support our services, under confidentiality obligations, or when required by law.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-slate-600 mb-6">We use cookies to analyze site traffic, maintain session state, and personalize content. You can disable cookies in your browser settings, but some features may not function properly.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Security</h2>
            <p className="text-slate-600 mb-6">We implement industry-standard measures to protect your data. However, no system is completely secure, so we cannot guarantee absolute security.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Changes to This Policy</h2>
            <p className="text-slate-600 mb-6">We may update this policy periodically. Changes will be posted with a new effective date at the top of this page.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Contact Us</h2>
            <p className="text-slate-600">For questions about this Privacy Policy, contact us at <a href="mailto:hello@valleyweb.com" className="text-blue-600 hover:underline">hello@valleyweb.com</a>.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
