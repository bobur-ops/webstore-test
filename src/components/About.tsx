const logoText = () => {
  return (
    <div className="inline-block font-roboto-slab">
      <span className="font-bold">Web</span>
      <span className="text-accent">Store</span>
    </div>
  );
};

export default function About() {
  return (
    <div className="relative pt-14">
      <div className="absolute top-[-25%] left-0 right-0 bottom-[-25%] bg-background-secondary z-[-1]"></div>

      <div className="max-w-[960px] px-4 xl:px-0 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="">
            <div className="font-roboto-slab font-bold text-3xl text-foreground-secondary mb-10 lg:mb-32">
              О компании
            </div>

            <div className="space-y-5 lg:space-y-10 font-light text-foreground-secondary text-lg">
              <p>
                {logoText()} — многопрофильная студия дизайна, основанная в 2006
                году. За эти годы мы успели поработать в разных направлениях,
                реализовали множество проектов, достигли профессиональных высот
                и собрали внушительное портфолио. Сегодня мы сосредоточились на
                том, что нам по-настоящему нравится: дизайн и разработка
                веб-сайтов и мобильных приложений.
              </p>

              <p>
                Мы гордимся своей замечательной командой по-настоящему
                талантливых людей: дизайнеров, программистов, менеджеров,
                тестировщиков, проектировщиков. Все сотрудники {logoText()}{" "}
                работают в штате, поэтому мы гарантируем, что весь комплекс
                работ по разработке, созданию, поддержке и продвижению сайтов
                выполняется строго профессионально и качественно.
              </p>

              <p>
                Мы уверены, что хорошая, чёткая и последовательная разработка
                имеет большое значение для эффективного маркетинга. Поэтому
                предлагаем высококачественный дизайн, удобство и
                функциональность, адаптированные под каждого клиента в
                зависимости от его потребностей и поставленных бизнес-задач.
              </p>
            </div>
          </div>

          <div className="shrink-0 lg:w-[50%]">
            <img src="/images/camera-1.png" />

            <img src="/images/notebook.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
