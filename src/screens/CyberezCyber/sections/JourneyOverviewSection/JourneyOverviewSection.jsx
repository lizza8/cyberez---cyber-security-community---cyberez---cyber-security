import { Button } from "../../../../components/ui/button";

export const JourneyOverviewSection = () => {
  return (
    <section className="relative w-full bg-bg-dark overflow-hidden py-20">
      <img
        className="absolute top-[322px] right-0 w-[487px] h-[725px] pointer-events-none"
        alt="Vector"
        src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector-1.svg"
      />

      <div className="absolute top-[calc(50%_-_381px)] left-1/2 -translate-x-1/2 w-[893px] h-[893px] bg-[#2fcadb99] rounded-full blur-[74px] opacity-20 pointer-events-none" />

      <div className="absolute top-[509px] right-[calc(50%_-_622px)] w-[493px] h-[493px] rounded-full bg-[#2fcadb99] blur-[74px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex flex-col gap-6 lg:gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <div className="relative w-[383px] h-[440px] rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                className="w-full h-full object-cover"
                alt="Cleaning workspace"
                src="https://c.animaapp.com/mkqpn2lneLubiq/img/cleaning-2021-09-02-08-09-16-utc-1-1.png"
              />
            </div>

            <div className="relative w-[393px] h-[440px] rounded-2xl overflow-hidden bg-white shadow-lg lg:ml-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <img
                className="w-full h-full object-cover"
                alt="Cleaning workspace detail"
                src="https://c.animaapp.com/mkqpn2lneLubiq/img/cleaning-2021-09-02-08-09-16-utc-1-2.png"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="flex flex-col gap-2">
              <p className="[font-family:'Titillium_Web',Helvetica] font-semibold text-accent-1 text-[21px] leading-6 tracking-[0]">
                ABOUT US
              </p>

              <h2 className="[font-family:'Titillium_Web',Helvetica] font-semibold text-white text-[67px] tracking-[0] leading-[70px] max-w-[635px]">
                Discover Our Journey Protecting Your Digital World With
                Expertise And Care
              </h2>
            </div>

            <p className="font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-white text-[length:var(--main-text-p1-400-font-size)] tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)] max-w-[635px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum congue metus quis accumsan euismod. Maecenas sed est
              mollis, convallis nisi convallis, imperdiet massa. Proin ipsum
              nunc, lacinia ac faucibus quis, ullamcorper non metus. Aliquam
              viverra volutpat feugiat. Donec fringilla aliquam mollis. Sed
              cursus quam nibh, quis placerat metus dapibus sed. <br />
              Nam varius nisi in nisi maximus blandit sit amet ac tellus.
            </p>

            <Button className="w-fit h-auto px-6 py-6 rounded-lg bg-[linear-gradient(351deg,rgba(10,118,123,1)_0%,rgba(0,167,214,1)_100%)] hover:opacity-90 transition-opacity translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <span className="font-button font-[number:var(--button-font-weight)] text-white text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                Read More
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
