export default function Map() {
  return (
    <div className="relative z-10 h-[900px]">
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0% 100%)",
        }}
      >
        <img className="w-full h-full object-cover" src="/images/map.png" />
      </div>

      <div
        className="absolute inset-0 lg:hidden"
        style={{
          clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0% 100%)",
        }}
      >
        <img className="w-full h-full object-cover" src="/images/map.png" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="bg-white p-4 lg:p-7 gap-5 grid grid-cols-1 lg:grid-cols-2 w-full lg:w-2/3">
          <div className="space-y-2">
            <div className="flex gap-5 text-foreground-secondary">
              <div className="min-w-[80px] font-bold">Адрес:</div>

              <div className="font-light text-sm">
                г. Москва, <br /> ул. Дербеневская, дом 1, строение 6, подъезд
                4, этаж 2.
              </div>
            </div>

            <div className="flex gap-5 text-foreground-secondary">
              <div className="min-w-[80px] font-bold">Телефоны:</div>

              <div className="font-light font-roboto-slab">
                +7 (495) 926-01-26 <br /> +7 (495) 646-00-94
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex gap-5 text-foreground-secondary">
              <div className="min-w-[80px] lg:min-w-[50px] font-bold">
                E-mail:
              </div>

              <div className="text-accent font-normal">
                info@nologostudio.ru
              </div>
            </div>
            <div className="flex gap-5 text-foreground-secondary">
              <div className="min-w-[80px] lg:min-w-[50px] font-bold">
                Skype:
              </div>

              <div className="font-normal">alex-trainer</div>
            </div>

            <div className="font-light mt-4 text-foreground-secondary">
              © 1997-2014 WebStore
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Телефоны:
