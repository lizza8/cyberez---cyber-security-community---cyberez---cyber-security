import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    title: "Advanced upgrade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
    isHighlighted: false,
  },
  {
    title: "Mission Statement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
    isHighlighted: true,
  },
  {
    title: "Key Objectives",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
    isHighlighted: false,
  },
  {
    title: "Client-Centric Approach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
    isHighlighted: false,
  },
  {
    title: "Request Action",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
    isHighlighted: false,
  },
];

const paginationDots = [
  { isActive: false },
  { isActive: true },
  { isActive: false, hasBorder: true },
  { isActive: false },
  { isActive: false },
];

export const KeyServiceFeaturesSection = () => {
  return (
    <section className="relative w-full bg-bg-dark overflow-hidden py-20">
      <img
        className="absolute top-[321px] left-[-146px] w-[487px] h-[725px] pointer-events-none"
        alt="Vector"
        src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector-2.svg"
      />

      <div className="absolute top-[-354px] left-[1115px] w-[533px] h-[533px] bg-[#2fcadb99] rounded-[266.5px] blur-[74px] opacity-20 pointer-events-none" />

      <div className="absolute top-[600px] left-[-201px] w-[533px] h-[533px] bg-[#2fcadb99] rounded-[266.5px] blur-[74px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6 max-w-[761px] mx-auto mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          <header className="flex flex-col items-start gap-2 w-full">
            <h3 className="w-full [font-family:'Titillium_Web',Helvetica] font-semibold text-accent-1 text-[21px] text-center tracking-[0] leading-6">
              OUR GOALS
            </h3>

            <h2 className="w-full font-headings-h2-600 font-[number:var(--headings-h2-600-font-weight)] text-white text-[length:var(--headings-h2-600-font-size)] text-center tracking-[var(--headings-h2-600-letter-spacing)] leading-[var(--headings-h2-600-line-height)] [font-style:var(--headings-h2-600-font-style)]">
              Securing Your Digital World Together
            </h2>
          </header>

          <p className="w-full font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-white text-[length:var(--main-text-p1-400-font-size)] text-center tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue metus quis accumsan euismod. Maecenas sed est mollis,
            convallis nisi convallis, imperdiet massa.
          </p>
        </div>

        <div className="relative mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-[38px] min-w-max justify-center">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className={`flex-shrink-0 w-[388px] ${
                    card.isHighlighted
                      ? "w-[448px] border-2 border-[#3ed5dd]"
                      : "border-0"
                  } overflow-hidden rounded-2xl backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] bg-[linear-gradient(137deg,rgba(23,23,23,1)_0%,rgba(50,51,53,1)_0%,rgba(90,90,90,0)_49%,rgba(23,23,23,1)_100%)] shadow-background-blur transition-transform hover:scale-105`}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-4">
                      <h4 className="font-headings-h5-600 font-[number:var(--headings-h5-600-font-weight)] text-white text-[length:var(--headings-h5-600-font-size)] tracking-[var(--headings-h5-600-letter-spacing)] leading-[var(--headings-h5-600-line-height)] [font-style:var(--headings-h5-600-font-style)]">
                        {card.title}
                      </h4>

                      <p className="font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-white text-[length:var(--main-text-p1-400-font-size)] tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)]">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          {paginationDots.map((dot, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-lg transition-opacity ${
                dot.isActive
                  ? "bg-accent-1"
                  : dot.hasBorder
                    ? "bg-white opacity-30 border border-solid border-[#3ed5dd]"
                    : "bg-white opacity-30"
              } hover:opacity-100`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <img
        className="absolute top-[-440px] left-[1172px] w-[487px] h-[725px] pointer-events-none"
        alt="Vector"
        src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector-1.svg"
      />
    </section>
  );
};
