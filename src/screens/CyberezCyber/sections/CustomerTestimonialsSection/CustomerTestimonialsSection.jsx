import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
    name: "Miss Sammy Feeney",
    role: "Investor Metrics Executive",
    avatar: "https://c.animaapp.com/mkqpn2lneLubiq/img/image-3.png",
    avatarHeight: "h-[calc(100%_+_34px)]",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
    name: "Regina Weissnat",
    role: "Regional Branding Consultant",
    avatar: "https://c.animaapp.com/mkqpn2lneLubiq/img/image-3-1.png",
    avatarHeight: "h-[calc(100%_+_13px)]",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
    name: "Rosemary Mante",
    role: "Human Integration Agent",
    avatar: "https://c.animaapp.com/mkqpn2lneLubiq/img/image-3-2.png",
    avatarHeight: "h-[calc(100%_+_34px)]",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
    name: "Marianne Bode",
    role: "Product Intranet Agent",
    avatar: "https://c.animaapp.com/mkqpn2lneLubiq/img/image-3-3.png",
    avatarHeight: "h-[calc(100%_+_34px)]",
  },
];

export const CustomerTestimonialsSection = () => {
  return (
    <section className="relative w-full py-20 bg-bg-dark overflow-hidden">
      <div className="absolute top-[635px] left-[-300px] w-[533px] h-[533px] bg-[#2fcadb99] rounded-full blur-[74px] opacity-20" />

      <img
        className="absolute top-[479px] left-[-221px] w-[487px] h-[725px]"
        alt="Vector"
        src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector-2.svg"
      />

      <div className="absolute top-[-284px] right-[254px] rotate-180 w-[533px] h-[533px] bg-[#2fcadb99] rounded-full blur-[74px] opacity-20" />

      <img
        className="absolute top-[-440px] right-[263px] w-[487px] h-[725px]"
        alt="Vector"
        src="https://c.animaapp.com/mkqpn2lneLubiq/img/vector-1.svg"
      />

      <div className="container mx-auto px-4 max-w-[1440px] relative">
        <header className="flex flex-col items-center gap-6 max-w-[761px] mx-auto mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="flex flex-col items-start gap-2 w-full">
            <h3 className="w-full [font-family:'Titillium_Web',Helvetica] font-semibold text-accent-1 text-[21px] text-center leading-6 tracking-[0]">
              TESTIMONIAL
            </h3>

            <h2 className="w-full font-headings-h2-600 font-[number:var(--headings-h2-600-font-weight)] text-white text-[length:var(--headings-h2-600-font-size)] text-center tracking-[var(--headings-h2-600-letter-spacing)] leading-[var(--headings-h2-600-line-height)] [font-style:var(--headings-h2-600-font-style)]">
              See What Others People Are Saying
            </h2>
          </div>

          <p className="w-full font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-white text-[length:var(--main-text-p1-400-font-size)] text-center tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue metus quis accumsan euismod. Maecenas sed est mollis,
            convallis nisi convallis, imperdiet massa.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1244px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`testimonial-${index}`}
              className="translate-y-[-1rem] animate-fade-in opacity-0 bg-style rounded-2xl overflow-hidden backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] shadow-background-blur border-0"
              style={{ "--animation-delay": `${(index + 1) * 200}ms` }}
            >
              <CardContent className="flex flex-col items-start justify-center gap-6 p-8">
                <p className="font-main-text-p1-400 font-[number:var(--main-text-p1-400-font-weight)] text-white text-[length:var(--main-text-p1-400-font-size)] tracking-[var(--main-text-p1-400-letter-spacing)] leading-[var(--main-text-p1-400-line-height)] [font-style:var(--main-text-p1-400-font-style)]">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-4 w-full">
                  <Avatar className="w-14 h-14 bg-main-text">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className={`w-[calc(100%_+_4px)] ${testimonial.avatarHeight} object-cover`}
                    />
                    <AvatarFallback className="bg-main-text text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col items-start gap-2 flex-1">
                    <h4 className="font-headings-h5-600 font-[number:var(--headings-h5-600-font-weight)] text-white text-[length:var(--headings-h5-600-font-size)] tracking-[var(--headings-h5-600-letter-spacing)] leading-[var(--headings-h5-600-line-height)] [font-style:var(--headings-h5-600-font-style)]">
                      {testimonial.name}
                    </h4>

                    <p className="font-main-text-p2-400 font-[number:var(--main-text-p2-400-font-weight)] text-white text-[length:var(--main-text-p2-400-font-size)] tracking-[var(--main-text-p2-400-letter-spacing)] leading-[var(--main-text-p2-400-line-height)] [font-style:var(--main-text-p2-400-font-style)]">
                      {testimonial.role}
                    </p>

                    <div className="inline-flex items-center justify-center gap-2">
                      {[...Array(5)].map((_, starIndex) => (
                        <img
                          key={`star-${starIndex}`}
                          className="w-[15.22px] h-[14.47px]"
                          alt="Star"
                          src="https://c.animaapp.com/mkqpn2lneLubiq/img/star-2.svg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
