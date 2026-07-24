export type StatusKey = "construction" | "sale" | "done" | "design";

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  index: string;
  name: string;
  latin: string;
  category: string;
  district: string;
  address: string;
  year: string;
  status: string;
  statusKey: StatusKey;
  featured: boolean;
  lead: string;
  description: string[];
  specs: ProjectSpec[];
  features: string[];
  cover: string;
  gallery: string[];
}

/** Base Unsplash photo URLs (clean, watermark-free). */
const IMG = {
  ex1: "https://images.unsplash.com/photo-1774939234686-492c27d81383",
  ex2: "https://images.unsplash.com/photo-1758311631426-d23b1da03f7b",
  ex3: "https://images.unsplash.com/photo-1775735478842-c3bbcf5d2618",
  ex4: "https://images.unsplash.com/photo-1761600577013-7fc9f5f03f66",
  ex5: "https://images.unsplash.com/photo-1773429884524-bbff4d0c63d9",
  ex6: "https://images.unsplash.com/photo-1708406278927-4cfe4dca6bb1",
  ex7: "https://images.unsplash.com/photo-1760290761497-2af613e343c5",
  in1: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3",
  in2: "https://images.unsplash.com/photo-1761639935326-5a0223514f38",
  ct1: "https://images.unsplash.com/photo-1659256018440-32664db70cb7",
  ct2: "https://images.unsplash.com/photo-1696245944893-5c0e00e8f5e8",
  ct3: "https://images.unsplash.com/photo-1775136357605-e6cc76247679",
  ct4: "https://images.unsplash.com/photo-1763901258401-b56f9a10b7af",
};

/** Compose a sized Unsplash URL. */
export function img(base: string, w = 1600): string {
  if (base.startsWith("/")) {
    return base;
  }

  return `${base}?auto=format&fit=crop&q=80&w=${w}`;
}

export const heroImage = "/images/home-hero.png";
export const cityImage = IMG.ct2;
export const cityImageAlt = IMG.ct1;
export const manifestoImage = IMG.in1;

export const statusLabels: Record<StatusKey, string> = {
  construction: "Будується",
  sale: "Продаж",
  done: "Завершено",
  design: "Проєктування",
};

export const projects: Project[] = [
  {
    slug: "lypky",
    index: "01",
    name: "ТИХА 19",
    latin: "TYKHA 19",
    category: "Панорамний клубний будинок",
    district: "Печерськ",
    address: "Печерські пагорби",
    year: "2026",
    status: "Продаж. Дизайн-реконструкція.",
    statusKey: "sale",
    featured: true,
    lead: "Рідкісна адреса на Печерську для двадцяти шести родин на Печерських пагорбах.",
    description: [
      "Рідкісна адреса на Печерську для двадцяти шести родин на Печерських пагорбах.",
    ],
    specs: [
      { label: "Площа", value: "8 400 м²" },
      { label: "Поверхи", value: "7" },
      { label: "Резиденції", value: "12" },
      { label: "Стелі", value: "до 3,6 м" },
      { label: "Паркінг", value: "2 м/м" },
      { label: "Рік", value: "2026" },
    ],
    features: [
      "Приватний двір-сад",
      "Лаунж і рецепція",
      "Винний погріб",
      "Спа та хамам",
      "Підземний паркінг",
      "Смарт-інженерія",
    ],
    cover: "/images/project-tykha-19-cover.png",
    gallery: [IMG.in1, IMG.ex6, IMG.in2, IMG.ct1],
  },
  {
    slug: "riva",
    index: "02",
    name: "VELETNI",
    latin: "VELETNI",
    category: "Сервісне De Luxe котеджне містечко",
    district: "Козин. Конча-Заспа",
    address: "Набережно-Хрещатицька, 21",
    year: "2024",
    status: "Продаж. Екватор будівництва.",
    statusKey: "sale",
    featured: true,
    lead: "Дев'ять резиденцій у сучасному японському стилі із сервісом 5* заміського готелю на березі річки Козинка.",
    description: [
      "Дев'ять резиденцій у сучасному японському стилі із сервісом 5* заміського готелю на березі річки Козинка.",
    ],
    specs: [
      { label: "Площа", value: "22 600 м²" },
      { label: "Поверхи", value: "9" },
      { label: "Квартири", value: "84" },
      { label: "Стелі", value: "до 3,3 м" },
      { label: "Паркінг", value: "1,5 м/м" },
      { label: "Рік", value: "2024" },
    ],
    features: [
      "Вихід на набережну",
      "Фітнес із видом на воду",
      "Дитячий клуб",
      "Ландшафтний двір",
      "Консьєрж 24/7",
      "Зарядка для авто",
    ],
    cover: IMG.ex5,
    gallery: [IMG.ex7, IMG.in1, IMG.ct2, IMG.in2],
  },
  {
    slug: "parkova",
    index: "03",
    name: "KOZYN 7 CLUB",
    latin: "KOZYN 7 CLUB",
    category: "Закрите клубне котеджне містечко",
    district: "Козин. Конча-Заспа",
    address: "просп. Голосіївський, 58",
    year: "2020",
    status: "Створено. В управлінні.",
    statusKey: "done",
    featured: true,
    lead: "Легендарне котеджне містечко у Конча-Заспі, що створило новий рівень розуміння заміської розкоші.",
    description: [
      "Легендарне котеджне містечко у Конча-Заспі, що створило новий рівень розуміння заміської розкоші.",
    ],
    specs: [
      { label: "Площа", value: "31 000 м²" },
      { label: "Поверхи", value: "24" },
      { label: "Квартири", value: "168" },
      { label: "Стелі", value: "до 3,2 м" },
      { label: "Паркінг", value: "1,5 м/м" },
      { label: "Рік", value: "2020" },
    ],
    features: [
      "Басейн на даху",
      "Панорамний лаунж",
      "Фітнес та спа",
      "Коворкінг",
      "Ландшафтний парк",
      "Два рівні паркінгу",
    ],
    cover: IMG.ex3,
    gallery: [IMG.ex6, IMG.in1, IMG.ex4, IMG.ct2],
  },
  {
    slug: "zoloti-vorota",
    index: "04",
    name: "ЗОЛОТІ ВОРОТА",
    latin: "ZOLOTI VOROTA",
    category: "Реставрація та нова архітектура",
    district: "Центр",
    address: "Ярославів Вал, 7",
    year: "2023",
    status: "Завершено",
    statusKey: "done",
    featured: false,
    lead: "Історія та сучасність під однією адресою в центрі міста.",
    description: [
      "ЗОЛОТІ ВОРОТА — делікатна реставрація історичного будинку кінця ХІХ століття, доповнена сучасним об'ємом у глибині кварталу. Ми зберегли автентичний фасад, ліпнину й сходи, повернувши будівлі первісну гідність.",
      "За історичними стінами — простори з інженерією нового покоління, приватний двір та лише двадцять вісім резиденцій. Дім, у якому минуле й теперішнє існують на рівних.",
    ],
    specs: [
      { label: "Площа", value: "11 200 м²" },
      { label: "Поверхи", value: "6" },
      { label: "Резиденції", value: "28" },
      { label: "Стелі", value: "до 4,1 м" },
      { label: "Паркінг", value: "1 м/м" },
      { label: "Рік", value: "2023" },
    ],
    features: [
      "Відреставрований фасад",
      "Історичні сходи",
      "Приватний двір",
      "Лоббі з каміном",
      "Клубна бібліотека",
      "Підземний паркінг",
    ],
    cover: IMG.ex1,
    gallery: [IMG.in2, IMG.ex2, IMG.in1, IMG.ct3],
  },
  {
    slug: "sofia",
    index: "05",
    name: "СОФІЯ",
    latin: "SOFIA",
    category: "Клубний будинок",
    district: "Центр",
    address: "Володимирська, 24",
    year: "2022",
    status: "Завершено",
    statusKey: "done",
    featured: false,
    lead: "Клубний дім за крок від Софійського собору.",
    description: [
      "СОФІЯ — стриманий клубний будинок у самому осерді історичного Києва. Світлий фасад із натурального каменю, високі арочні вікна та лаконічний ритм пілястр створюють архітектуру позачасової елегантності.",
      "Тридцять дві резиденції, приватний внутрішній двір і панорамна тераса з видом на золоті бані. Локація, дорожча за будь-які метри, — за крок від тисячолітньої історії.",
    ],
    specs: [
      { label: "Площа", value: "13 800 м²" },
      { label: "Поверхи", value: "7" },
      { label: "Резиденції", value: "32" },
      { label: "Стелі", value: "до 3,5 м" },
      { label: "Паркінг", value: "1 м/м" },
      { label: "Рік", value: "2022" },
    ],
    features: [
      "Тераса з видом на собор",
      "Приватний двір",
      "Лоббі-галерея",
      "Спа-зона",
      "Консьєрж-сервіс",
      "Підземний паркінг",
    ],
    cover: IMG.ex2,
    gallery: [IMG.in1, IMG.ex1, IMG.in2, IMG.ct1],
  },
  {
    slug: "marina",
    index: "06",
    name: "МАРИНА",
    latin: "MARINA",
    category: "Квартал на воді",
    district: "Оболонь",
    address: "Оболонська набережна, 3",
    year: "2025",
    status: "Продаж",
    statusKey: "sale",
    featured: false,
    lead: "Життя біля води в новому кварталі Оболонської затоки.",
    description: [
      "МАРИНА — світлий житловий квартал на березі Оболонської затоки. Теплі відтінки фасадів, широкі лоджії та власний причал формують атмосферу приморського курорту в межах міста.",
      "Прогулянкова набережна, яхтова марина й ландшафтні двори без машин роблять квартал місцем, куди хочеться повертатися. Панорамні квартири з видом на воду доступні до продажу.",
    ],
    specs: [
      { label: "Площа", value: "46 500 м²" },
      { label: "Поверхи", value: "16" },
      { label: "Квартири", value: "320" },
      { label: "Стелі", value: "до 3,0 м" },
      { label: "Паркінг", value: "1,2 м/м" },
      { label: "Рік", value: "2025" },
    ],
    features: [
      "Власна марина",
      "Набережна-променад",
      "Двори без машин",
      "Пляжний клуб",
      "Фітнес та спа",
      "Комерція на 1 поверсі",
    ],
    cover: IMG.ex7,
    gallery: [IMG.in2, IMG.ex5, IMG.ct2, IMG.in1],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
