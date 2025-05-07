import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-heading tracking-tight mb-6">Terms of Service</h1>
            <p className="text-slate-600 mb-4">
              These Terms of Service govern your use of our website and services. By accessing or using the site, you agree to abide by these terms.
            </p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Acceptance of Terms</h2>
            <p className="text-slate-600 mb-6">By accessing or using our website, you agree to these Terms of Service and any future modifications we may make.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Intellectual Property</h2>
            <p className="text-slate-600 mb-6">All content on this site, including text, graphics, logos, and images, is our property or used under license. You may not reproduce or distribute any material without permission.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">User Obligations</h2>
            <p className="text-slate-600 mb-6">You agree not to misuse the site, upload harmful content, or infringe on the rights of others. You are responsible for any content you post.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Disclaimer of Warranties</h2>
            <p className="text-slate-600 mb-6">The site is provided "as is", without warranties. We disclaim all implied warranties to the fullest extent permitted by law.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Limitation of Liability</h2>
            <p className="text-slate-600 mb-6">We are not liable for any indirect, incidental, or consequential damages arising from your use of the site.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Changes to Terms</h2>
            <p className="text-slate-600 mb-6">We reserve the right to update these terms at any time. Continued use after changes indicates acceptance.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Governing Law</h2>
            <p className="text-slate-600 mb-6">These Terms are governed by the laws of British Columbia, Canada.</p>
            <h2 className="text-2xl font-heading tracking-tight mb-4">Contact Us</h2>
            <p className="text-slate-600">For questions, please email <a href="mailto:hello@valleyweb.com" className="text-blue-600 hover:underline">hello@valleyweb.com</a>.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
