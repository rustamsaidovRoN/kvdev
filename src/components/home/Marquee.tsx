const ITEMS = [
  "Печерськ",
  "Клубні будинки",
  "Резиденції",
  "Козин",
  "De Luxe",
  "Котеджні містечка",
  "Сервіс 5*",
  "Архітектура",
  "Конча-Заспа",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-hair bg-ink py-5">
      <div className="flex w-max animate-marquee items-center">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="label whitespace-nowrap px-8 text-bone/45">{t}</span>
            <span className="h-[6px] w-[6px] rotate-45 border border-gold/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
