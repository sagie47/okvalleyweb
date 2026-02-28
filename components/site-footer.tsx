import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/images/logo.png" alt="ValleyWeb Logo" width={150} height={40} className="h-8 w-auto" />
            </div>
            <p className="text-slate-500 mb-6">
              Creating exceptional digital experiences that drive business growth and user engagement.
            </p>
            <div className="flex gap-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <Link
                  key={social}
                  href={
                    social === "instagram"
                      ? "https://www.instagram.com/okvalleyweb/"
                      : social === "twitter"
                      ? "https://x.com/okvalleyweb"
                      : `https://${social}.com`
                  }
                  className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-black hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  {social === "twitter" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  )}
                  {social === "facebook" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  )}
                  {social === "instagram" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )}
                  {social === "linkedin" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                { name: "Web Development", path: "/services/web-development" },
                { name: "AI Solutions", path: "/services/ai-solutions" },
                { name: "Google Ads", path: "/services/google-ads" },
                { name: "SEO", path: "/services/seo" },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.path} className="text-slate-500 hover:text-black transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-6">Our Work</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", path: "/about-us" },
                { name: "Our Work", path: "/blog" },
                { name: "Pricing", path: "/pricing" },
                { name: "FAQ", path: "/faq" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-slate-500 hover:text-black transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-slate-500 hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500">info@okvallweyweb.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-500">+1 (236) 361 5061</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ValleyWeb. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-slate-500 hover:text-black transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies-policy" className="text-sm text-slate-500 hover:text-black transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
