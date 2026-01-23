import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const quickLinks = [
  { label: "Our Service", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonial", href: "#" },
];

const contactInfo = [
  {
    icon: "https://c.animaapp.com/mkqpn2lneLubiq/img/group-61.png",
    text: "hello@website.com",
  },
  {
    icon: "https://c.animaapp.com/mkqpn2lneLubiq/img/group-62.png",
    text: "838 Cantt Sialkot, ENG",
  },
  {
    icon: "https://c.animaapp.com/mkqpn2lneLubiq/img/group-63.png",
    text: "+02 5421234560",
  },
];

export const SiteFooterSection = () => {
  return (
    <footer className="relative w-full bg-bg-dark overflow-hidden">
      <div className="absolute top-[-437px] left-[-221px] w-[487px] h-[725px] pointer-events-none">
        <img
          className="w-full h-full"
          alt="Vector"
          src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector-2.svg"
        />
      </div>

      <div className="absolute top-[-281px] left-[-300px] w-[533px] h-[533px] rounded-full bg-[#2fcadb99] blur-[74px] opacity-20 pointer-events-none" />

      <div className="relative container mx-auto px-6 lg:px-[98px] py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <div className="flex flex-col gap-4">
              <h2 className="font-headings-h4-600 font-[number:var(--headings-h4-600-font-weight)] text-[length:var(--headings-h4-600-font-size)] leading-[var(--headings-h4-600-line-height)] tracking-[var(--headings-h4-600-letter-spacing)] [font-style:var(--headings-h4-600-font-style)]">
                <span className="text-white">Cyber</span>
                <span className="text-accent-1">Ez</span>
              </h2>

              <p className="font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-white text-[length:var(--main-text-p1-400-font-size)] tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Morbi sit amet neque tortor.
              </p>
            </div>

            <img
              className="w-full"
              alt="Social media icons"
              src="https://c.animaapp.com/mkqpn2lneLubiq/img/sosmed.svg"
            />
          </div>

          <div className="flex flex-col gap-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h3 className="font-headings-h6-600 font-[number:var(--headings-h6-600-font-weight)] text-white text-[length:var(--headings-h6-600-font-size)] tracking-[var(--headings-h6-600-letter-spacing)] leading-[var(--headings-h6-600-line-height)] [font-style:var(--headings-h6-600-font-style)]">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-white text-[length:var(--main-text-p1-400-font-size)] tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)] hover:text-accent-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h3 className="font-headings-h6-600 font-[number:var(--headings-h6-600-font-weight)] text-white text-[length:var(--headings-h6-600-font-size)] tracking-[var(--headings-h6-600-letter-spacing)] leading-[var(--headings-h6-600-line-height)] [font-style:var(--headings-h6-600-font-style)]">
              Contact Us
            </h3>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img
                      className="w-4 h-4 flex-shrink-0"
                      alt="Contact icon"
                      src={contact.icon}
                    />
                    <span className="font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-white text-[length:var(--main-text-p1-400-font-size)] tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)]">
                      {contact.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h3 className="font-headings-h6-600 font-[number:var(--headings-h6-600-font-weight)] text-white text-[length:var(--headings-h6-600-font-size)] tracking-[var(--headings-h6-600-letter-spacing)] leading-[var(--headings-h6-600-line-height)] [font-style:var(--headings-h6-600-font-style)]">
              Newsletter
            </h3>

            <div className="relative flex items-center h-20 bg-white rounded-3xl overflow-hidden">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-full border-0 bg-transparent px-6 font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-paragraph text-[length:var(--main-text-p1-400-font-size)] tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)] placeholder:opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="absolute right-2 h-16 px-6 py-4 rounded-3xl bg-[linear-gradient(351deg,rgba(10,118,123,1)_0%,rgba(0,167,214,1)_100%)] font-button font-[number:var(--button-font-weight)] text-white text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)] hover:opacity-90 transition-opacity">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
