import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", active: true },
  { label: "FAQ", active: false },
  { label: "Contact us", active: false },
  { label: "Our Menu", active: false },
];

export const DigitalEmpowermentHeroSection = () => {
  return (
    <section className="relative w-full min-h-[831px] bg-bg-dark overflow-hidden">
      <img
        className="absolute top-[-440px] left-[-610px] w-[1739px] h-[969px]"
        alt="Vector"
        src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector.svg"
      />

      <div className="absolute top-[calc(50.00%_-_456px)] left-[773px] w-[893px] h-[893px] bg-[#2fcadb99] rounded-[446.5px] blur-[74px] opacity-20" />

      <img
        className="absolute top-[182px] left-[853px] w-[530px] h-[530px] object-cover opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]"
        alt="Wepik export"
        src="https://c.animaapp.com/mkqpn2lneLubiq/img/wepik-export-20231026003443tja7-1.png"
      />

      <header className="flex w-full items-center justify-between px-[98px] py-5">
        <div className="relative w-fit font-headings-h4-600 font-[number:var(--headings-h4-600-font-weight)] text-transparent text-[length:var(--headings-h4-600-font-size)] tracking-[var(--headings-h4-600-letter-spacing)] leading-[var(--headings-h4-600-line-height)] whitespace-nowrap [font-style:var(--headings-h4-600-font-style)] opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]">
          <span className="text-[#ffffff] font-headings-h4-600 [font-style:var(--headings-h4-600-font-style)] font-[number:var(--headings-h4-600-font-weight)] tracking-[var(--headings-h4-600-letter-spacing)] leading-[var(--headings-h4-600-line-height)] text-[length:var(--headings-h4-600-font-size)]">
            Cyber
          </span>
          <span className="text-[#3ed5dd] font-headings-h4-600 [font-style:var(--headings-h4-600-font-style)] font-[number:var(--headings-h4-600-font-weight)] tracking-[var(--headings-h4-600-letter-spacing)] leading-[var(--headings-h4-600-line-height)] text-[length:var(--headings-h4-600-font-size)]">
            Ez
          </span>
        </div>

        <nav className="flex w-[507px] items-center justify-between p-[15px] bg-[#cef8fd21] rounded-[100px] overflow-hidden backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] shadow-background-blur opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className={`inline-flex flex-col items-center justify-center gap-2 px-[18px] py-2.5 rounded-[40px] overflow-hidden transition-colors ${
                item.active
                  ? "bg-[linear-gradient(351deg,rgba(10,118,123,1)_0%,rgba(0,167,214,1)_100%)]"
                  : "hover:bg-[#cef8fd11]"
              }`}
            >
              <span className="w-fit font-[number:var(--headings-h7-600-font-weight)] text-[#ffffff] text-[length:var(--headings-h7-600-font-size)] whitespace-nowrap font-headings-h7-600 tracking-[var(--headings-h7-600-letter-spacing)] leading-[var(--headings-h7-600-line-height)] [font-style:var(--headings-h7-600-font-style)]">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </header>

      <div className="flex flex-col max-w-[675px] items-start justify-center gap-10 px-[98px] pt-[143px]">
        <h1 className="self-stretch font-headings-h1-600 font-[number:var(--headings-h1-600-font-weight)] text-[#ffffff] text-[length:var(--headings-h1-600-font-size)] tracking-[var(--headings-h1-600-letter-spacing)] leading-[var(--headings-h1-600-line-height)] [font-style:var(--headings-h1-600-font-style)] opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
          Empowering You in the Digital Age
        </h1>

        <p className="max-w-[626px] font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-[#ffffff] text-[length:var(--main-text-p1-400-font-size)] tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)] opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:800ms]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          congue metus quis accumsan euismod. Maecenas sed est mollis, convallis
          nisi convallis, imperdiet massa. Proin ipsum nunc, lacinia ac faucibus
          quis, ullamcorper non metus.
        </p>

        <Button className="w-[324px] h-auto items-center justify-center gap-2 p-6 rounded-lg bg-[linear-gradient(351deg,rgba(10,118,123,1)_0%,rgba(0,167,214,1)_100%)] hover:opacity-90 transition-opacity opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:1000ms]">
          <span className="flex items-center justify-center flex-1 font-button font-[number:var(--button-font-weight)] text-[#ffffff] text-[length:var(--button-font-size)] text-center tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
            Purchase
          </span>
        </Button>
      </div>
    </section>
  );
};
