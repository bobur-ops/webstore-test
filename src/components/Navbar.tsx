import { Button } from "./Button";
import { MdiLightPhone } from "./icons/phone-icon";
import Logo from "./Logo";

const NAV_LINKS = [
  {
    label: "Компания",
    href: "#",
  },
  {
    label: "Услуги",
    href: "#",
  },
  {
    label: "Работы",
    href: "#",
  },
  {
    label: "Контакты",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <div className="max-w-[960px] mx-auto px-4 xl:px-0">
      <div className="pt-4 lg:pt-8 pb-2 lg:pb-4 border-b border-foreground-secondary flex flex-col gap-2 lg:flex-row justify-between lg:items-center">
        <Logo />

        <div className="flex items-center justify-between lg:gap-8">
          <div className="flex items-center gap-2 lg:gap-4">
            <div>
              <MdiLightPhone className="size-4 lg:size-7 text-accent" />
            </div>
            <div className="font-light text-foreground-secondary">
              +7 (495) 926-01-26
            </div>
          </div>
          <div>
            <Button variant={"outline"}>Заказать сайт</Button>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-8 flex items-center gap-4 lg:gap-10">
        {NAV_LINKS.map((l, idx) => (
          <div
            key={idx}
            className="font-black cursor-pointer text-xs lg:text-sm text-foreground-secondary hover:underline hover:text-foreground uppercase tracking-widest"
          >
            {l.label}
          </div>
        ))}
      </div>
    </div>
  );
}
