import { CheckIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const pricingPlans = [
  {
    name: "BASIC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
    price: "$99",
    period: "/per month",
    features: [
      "Real-time Threat Monitoring",
      "User Training Programs",
      "Email Security",
    ],
    featured: false,
    className: "top-[476px] left-[98px]",
  },
  {
    name: "STANDARD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
    price: "$199",
    period: "/per month",
    features: [
      "Everything in Basic",
      "Vulnerability Assessments",
      "Free Snack and Refill 2x",
      "24/7 Incident Response",
    ],
    featured: true,
    className: "top-[400px] left-[524px]",
  },
  {
    name: "PREMIUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
    price: "$399",
    period: "/per month",
    features: [
      "Everything in Standard",
      "Compliance Audits",
      "Advanced Threat Intelligence",
    ],
    featured: false,
    className: "top-[476px] left-[954px]",
  },
];

export const SubscriptionPricingSection = () => {
  return (
    <section className="relative w-full py-20 bg-bg-dark overflow-hidden">
      <div className="top-[781px] left-[1186px] rotate-180 absolute w-[533px] h-[533px] bg-[#2fcadb99] rounded-[266.5px] blur-[74px] opacity-20" />

      <img
        className="absolute top-[625px] left-[1177px] w-[487px] h-[725px]"
        alt="Vector"
        src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector-1.svg"
      />

      <div className="top-[-284px] left-[-201px] absolute w-[533px] h-[533px] bg-[#2fcadb99] rounded-[266.5px] blur-[74px] opacity-20" />

      <img
        className="absolute top-[-440px] left-[-146px] w-[487px] h-[725px]"
        alt="Vector"
        src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector-2.svg"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6 max-w-[711px] mx-auto mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="flex flex-col items-start gap-2 w-full">
            <h3 className="w-full [font-family:'Titillium_Web',Helvetica] font-semibold text-accent-1 text-[21px] text-center tracking-[0] leading-6">
              PRICING TABLE
            </h3>

            <h2 className="w-full font-headings-h2-600 font-[number:var(--headings-h2-600-font-weight)] text-[#ffffff] text-[length:var(--headings-h2-600-font-size)] text-center tracking-[var(--headings-h2-600-letter-spacing)] leading-[var(--headings-h2-600-line-height)] [font-style:var(--headings-h2-600-font-style)]">
              Start Using Cyber Security Protect
            </h2>
          </div>

          <p className="w-full font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-[#ffffff] text-[length:var(--main-text-p1-400-font-size)] text-center tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue metus quis accumsan euismod. Maecenas sed est mollis,
            convallis nisi convallis, imperdiet massa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1244px] mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${200 + index * 200}ms] ${
                plan.featured
                  ? "border-[none] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] bg-[linear-gradient(137deg,rgba(23,23,23,1)_0%,rgba(50,51,53,1)_0%,rgba(90,90,90,0)_49%,rgba(23,23,23,1)_100%)] shadow-background-blur before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-2xl before:[background:linear-gradient(299deg,rgba(10,118,123,1)_0%,rgba(0,167,214,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                  : "backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] bg-[linear-gradient(137deg,rgba(23,23,23,1)_0%,rgba(50,51,53,1)_0%,rgba(90,90,90,0)_49%,rgba(23,23,23,1)_100%)] shadow-background-blur"
              } ${plan.featured ? "lg:-mt-[76px]" : ""}`}
            >
              <CardContent className="flex flex-col items-center gap-6 p-8">
                <h3 className="[font-family:'Titillium_Web',Helvetica] font-semibold text-accent-1 text-[21px] text-center tracking-[0] leading-6">
                  {plan.name}
                </h3>

                <p className="font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-[#ffffff] text-[length:var(--main-text-p1-400-font-size)] text-center tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)]">
                  {plan.description}
                </p>

                <div
                  className={`flex items-center justify-center gap-4 px-6 py-4 w-full rounded-[50px] ${
                    plan.featured
                      ? "shadow-drop-shadow bg-[linear-gradient(351deg,rgba(10,118,123,1)_0%,rgba(0,167,214,1)_100%)]"
                      : "bg-bg-dark"
                  }`}
                >
                  <span className="font-headings-h4-600 font-[number:var(--headings-h4-600-font-weight)] text-[#ffffff] text-[length:var(--headings-h4-600-font-size)] tracking-[var(--headings-h4-600-letter-spacing)] leading-[var(--headings-h4-600-line-height)] whitespace-nowrap [font-style:var(--headings-h4-600-font-style)]">
                    {plan.price}
                  </span>

                  <img
                    className="w-px h-[22px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector-5.svg"
                  />

                  <span className="font-headings-h7-600 font-[number:var(--headings-h7-600-font-weight)] text-[#ffffff] text-[length:var(--headings-h7-600-font-size)] tracking-[var(--headings-h7-600-letter-spacing)] leading-[var(--headings-h7-600-line-height)] whitespace-nowrap [font-style:var(--headings-h7-600-font-style)]">
                    {plan.period}
                  </span>
                </div>

                <div className="flex flex-col items-start justify-center gap-4 w-full">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 w-full"
                    >
                      <CheckIcon className="w-6 h-6 text-accent-1 flex-shrink-0" />

                      <span className="flex-1 font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-[#ffffff] text-[length:var(--main-text-p1-400-font-size)] tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button className="h-auto w-full p-6 rounded-lg bg-[linear-gradient(351deg,rgba(10,118,123,1)_0%,rgba(0,167,214,1)_100%)] font-[number:var(--button-font-weight)] text-[#ffffff] text-[length:var(--button-font-size)] font-button tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)] hover:opacity-90 transition-opacity">
                  Purchase
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
