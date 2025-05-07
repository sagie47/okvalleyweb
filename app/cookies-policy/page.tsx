import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-heading tracking-tight mb-6">Cookies Policy</h1>
            <p className="text-slate-600 mb-4">
              This Cookies Policy explains how we use cookies and similar tracking technologies on our site. A cookie is a small data file placed on your device to collect standard internet log information and visitor behavior information.
            </p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">What Are Cookies?</h2>
            <p className="text-slate-600 mb-6">Cookies are small text files stored on your device by websites you visit. They help the site remember your actions and preferences.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Types of Cookies We Use</h2>
            <ul className="list-disc list-inside text-slate-600 mb-6">
              <li><strong>Essential Cookies:</strong> Necessary for website functionality.</li>
              <li><strong>Performance Cookies:</strong> Collect anonymous information about site usage.</li>
              <li><strong>Functionality Cookies:</strong> Remember your choices (e.g., language).</li>
              <li><strong>Targeting Cookies:</strong> Deliver relevant ads based on your interests.</li>
            </ul>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Managing Cookies</h2>
            <p className="text-slate-600 mb-6">You can set your browser to refuse cookies or to alert you when cookies are being sent. Note that blocking cookies may impact site features.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Changes to This Policy</h2>
            <p className="text-slate-600 mb-6">We may update this policy periodically. Any changes will be posted here with the revised effective date.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Contact Us</h2>
            <p className="text-slate-600">If you have questions about our Cookies Policy, email us at <a href="mailto:hello@valleyweb.com" className="text-blue-600 hover:underline">hello@valleyweb.com</a>.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
