import { Button } from "./Button";

export default function Hero() {
  return (
    <div className="h-[700px] xl:h-[700px] mt-4 relative">
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "radial-gradient(circle,rgba(111, 112, 130, 1) 0%, rgba(81, 83, 89, 1) 100%)",
          clipPath: "polygon(0 0, 100% 10%, 100% 85%, 0% 100%)",
        }}
      ></div>

      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "radial-gradient(circle,rgba(111, 112, 130, 1) 0%, rgba(81, 83, 89, 1) 100%)",
          clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)",
        }}
      ></div>

      <div className="max-w-[960px] px-4 xl:px-0 mx-auto w-full h-full flex flex-col justify-center relative">
        <img
          className="hidden lg:block max-w-[80%] sm:max-w-[60%] absolute right-0 xl:right-[-10%] top-0"
          src="/images/imack.png"
        />

        <div className="text-4xl lg:text-6xl text-white mb-10 relative z-10">
          <span className="font-bold">
            Корпоративный <br /> сайт
          </span>{" "}
          <br /> <span className="font-thin">от</span> <br />{" "}
          <span className="text-foreground-black font-black">50 000</span>{" "}
          <br /> <span className="font-thin">рублей</span>
        </div>

        <div>
          <Button>Заказать сайт</Button>
        </div>

        <img
          className="block lg:hidden max-w-[80%] sm:max-w-[60%] mx-auto"
          src="/images/imack.png"
        />
      </div>
    </div>
  );
}
