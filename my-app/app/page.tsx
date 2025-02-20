import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/calvin%20and%20hobbes-S4yubhXlZc0EC2yWP16WPCRaXX7EvP.webp"
        alt="Starry night sky with Calvin and Hobbes"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto backdrop-blur-[2px] rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-bold font-medium text-white text-shadow-sm">Mark Gould</h1>
            <p className="text-slate-200 font-medium text-shadow-sm">
              Technical Customer Success Manager & Big on New Experiences
            </p>
          </div>

          <div className="p-6 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold font-medium text-white mb-2 text-shadow-sm">Background</h2>
              <p className="text-slate-200 font-medium text-shadow-sm">
                I have over a decade of experience in Customer Success, specializing in Enterprise SaaS, APIs, and
                technical integrations. I've managed multi-million-dollar portfolios across EMEA and APAC, helping
                customers integrate DAM, CMS, and PIM systems while optimizing workflows with automation. I'm passionate
                about problem-solving and value-driven adoption, and looking forward to my next challenge in a similar
                space.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-medium text-white mb-2 text-shadow-sm">
                Professional Experience
              </h2>
              <ul className="space-y-6 text-slate-200 font-medium text-shadow-sm">
                <li>
                  <h3 className="font-semibold font-medium">
                    Senior Technical Customer Success Manager, Enterprise | Cloudinary (Jan 2023 – Present)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Owns a $3.1M ARR EMEA/APAC portfolio, focusing on retention, renewals, and usage growth.</li>
                    <li>Drives 125% Net Rate Retention, optimizing value realization for Enterprise customers.</li>
                    <li>Leads onboarding and technical integrations for DAM/CMS/PIM systems via APIs/SDKs.</li>
                    <li>Mentors junior team members and enhances strategic value communication with clients.</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold font-medium">
                    Technical Customer Success Manager, Enterprise | Cloudinary (Jan 2021 – Dec 2023)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Managed a $3.5M ARR developer-first Enterprise portfolio across EMEA/APAC.</li>
                    <li>Led technical onboarding and feature adoption, achieving 97% retention (2021-22).</li>
                    <li>Implemented Monday.com for global CSM team, improving collaboration and efficiency.</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold font-medium">
                    Technical Customer Success Manager, Mid-Market Lead | Cloudinary (June 2019 – Dec 2020)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Oversaw a $11M ARR global mid-market portfolio of 500+ accounts.</li>
                    <li>Drove 120% performance target achievement across two consecutive years.</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold font-medium">
                    Customer Success Manager | Pusher (July 2017 – Jan 2019)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Managed 200+ accounts, growing revenue from $50K MRR to $150K MRR in 9 months.</li>
                    <li>
                      Developed an Account Health Checklist, driving security, performance, and upsell visibility.
                    </li>
                    <li>Created a new crypto exchange use case, increasing vertical revenue by 200%.</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold font-medium">
                    Business Development Manager | Upsight (Feb 2014 – Nov 2016)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Managed new business, renewals, and upsells, closing $180K ARR in 6-month cycles.</li>
                    <li>Earned an 18-month sponsored J1 Visa to work in San Francisco HQ.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-medium text-white mb-2 text-shadow-sm">Interests</h2>
              <p className="text-slate-200 font-medium text-shadow-sm">
                When I'm not working, you can find me travelling, playing sports, and learning languages. I love trying
                new experiences and staying curious about the world around me.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold font-medium text-white mb-2 text-shadow-sm">
                Why I'm Excited About Vercel
              </h2>
              <p className="text-slate-200 font-medium text-shadow-sm">
                Vercel plays in a similar space to where I am today - front-end best practices and integrations with
                other systems. Many of my customers now choose to deploy on Vercel (or a competitor) to create a highly
                performant web experience for their users as part of their composable commerce strategy. I've also
                watched the growth of Vercel from afar - now having 3 former colleagues join you, seeing the rise in
                popularity of Next.js, and seeing at least 2 Vercel billboards in San Francisco.
              </p>
            </section>
          </div>

          <div className="px-6 py-4">
            <p className="text-sm text-slate-300 font-medium text-shadow-sm">
              Connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/mgould16/"
                className="underline font-semibold hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add custom text shadow utility
const styles = `
  @layer utilities {
    .text-shadow-sm {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    }
  }
`

// Add styles to the document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

