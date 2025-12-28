import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 lg:py-16 bg-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Privacy Policy
              </h1>
              <p className="mt-4 text-base lg:text-lg text-muted-foreground">
                This policy explains how BioIntel collects, uses, and protects personal information, including information provided during newsletter subscriptions.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-24 bg-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-10">
                <div className="text-muted-foreground">
                  Effective date: <span className="font-semibold text-foreground">December 28, 2025</span>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">What we collect</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    When you subscribe to the BioIntel newsletter or contact us, we may collect personal information such as your email address and any information you choose to provide.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">How we use your information</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">We use your information to:</p>
                  <ul className="mt-3 list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Send newsletter emails and product updates you opt into</li>
                    <li>Operate and improve the BioIntel website and content</li>
                    <li>Respond to requests and support inquiries</li>
                    <li>Maintain security and prevent abuse</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Newsletter subscriptions and email communications</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    If you subscribe, you will receive emails related to BioIntel content and updates. You can unsubscribe at any time using the unsubscribe link in our emails.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Sharing and service providers</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    We may use third-party service providers to help deliver email newsletters and operate the website. These providers may process personal information on our behalf under contractual obligations to protect it.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Cookies and analytics</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    We may use cookies or similar technologies for basic functionality and analytics to understand site usage. You can control cookies through your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Data retention</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    We retain personal information only as long as necessary for the purposes described in this policy, including maintaining your newsletter subscription and meeting legal obligations.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Your choices</h2>
                  <ul className="mt-3 list-disc pl-6 text-muted-foreground space-y-2">
                    <li>You can unsubscribe from emails at any time.</li>
                    <li>You can request access, correction, or deletion of your personal information where applicable.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Security</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    We take reasonable measures to protect personal information, but no method of transmission or storage is completely secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Contact</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy or your personal data, contact us at:
                  </p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Email:</span> privacy@biointel.example
                  </p>
                </div>

                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Changes to this policy</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    We may update this policy from time to time. We will post updates on this page with a new effective date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
