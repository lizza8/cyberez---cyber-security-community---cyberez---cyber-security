import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    icon: "https://c.animaapp.com/mkqpn2lneLubiq/img/customize.svg",
    title: "Customized Security Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    delay: "200ms",
  },
  {
    icon: "https://c.animaapp.com/mkqpn2lneLubiq/img/threat-1.svg",
    title: "Vulnerability Assessment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    delay: "400ms",
  },
  {
    icon: "https://c.animaapp.com/mkqpn2lneLubiq/img/24-hours-service.svg",
    title: "24/7 Incident Response",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    delay: "600ms",
  },
  {
    icon: "https://c.animaapp.com/mkqpn2lneLubiq/img/training.svg",
    title: "User Training Programs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    delay: "800ms",
  },
];

export const DigitalAssetProtectionFeaturesSection = () => {
  return (
    <section className="relative w-full bg-bg-dark overflow-hidden py-20">
      <img
        className="absolute top-[-440px] left-[-227px] w-[487px] h-[725px] pointer-events-none"
        alt="Vector"
        src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector-2.svg"
      />

      <img
        className="absolute bottom-[-125px] right-[-227px] w-[487px] h-[725px] pointer-events-none"
        alt="Vector"
        src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector-1.svg"
      />

      <div className="absolute top-[686px] right-[268px] w-[533px] h-[533px] rounded-full bg-[#2fcadb99] blur-[74px] opacity-20 pointer-events-none" />

      <div className="absolute top-[-240px] left-[-201px] w-[533px] h-[533px] bg-[#2fcadb99] rounded-full blur-[74px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0">
            <div className="w-full max-w-[521px] h-auto aspect-[521/880] bg-white rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Cleaning"
                src="https://c.animaapp.com/mkqpn2lneLubiq/img/cleaning-2021-09-02-08-09-16-utc-1.png"
              />
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="flex flex-col gap-2">
                <p className="[font-family:'Titillium_Web',Helvetica] font-semibold text-accent-1 text-[21px] leading-6">
                  FEATURE POINT
                </p>

                <h2 className="font-headings-h2-600 font-[number:var(--headings-h2-600-font-weight)] text-white text-[length:var(--headings-h2-600-font-size)] tracking-[var(--headings-h2-600-letter-spacing)] leading-[var(--headings-h2-600-line-height)] [font-style:var(--headings-h2-600-font-style)]">
                  Key Service Features Protecting You
                </h2>
              </div>

              <p className="font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-white text-[length:var(--main-text-p1-400-font-size)] tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est
                mollis, convallis nisi convallis, imperdiet massa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {featureCards.map((feature, index) => (
                <Card
                  key={index}
                  className="translate-y-[-1rem] animate-fade-in opacity-0 border-0 rounded-2xl overflow-hidden backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] bg-[linear-gradient(137deg,rgba(23,23,23,1)_0%,rgba(50,51,53,1)_0%,rgba(90,90,90,0)_49%,rgba(23,23,23,1)_100%)] shadow-background-blur"
                  style={{ "--animation-delay": feature.delay }}
                >
                  <CardContent className="flex flex-col items-start justify-center gap-2 p-8">
                    <img
                      className="w-16 h-16"
                      alt={feature.title}
                      src={feature.icon}
                    />

                    <div className="flex flex-col items-start gap-4 w-full">
                      <h3 className="font-headings-h5-600 font-[number:var(--headings-h5-600-font-weight)] text-white text-[length:var(--headings-h5-600-font-size)] tracking-[var(--headings-h5-600-letter-spacing)] leading-[var(--headings-h5-600-line-height)] [font-style:var(--headings-h5-600-font-style)]">
                        {feature.title}
                      </h3>

                      <p className="font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-white text-[length:var(--main-text-p1-400-font-size)] tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)]">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
