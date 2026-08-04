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
  descriptionTitle?: string;
  description: string[];
  locationText?: string;
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
    slug: "tykha-19",
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
    lead: "Рідкісна адреса на Печерських пагорбах тільки для двадцяти шести родин.",
    descriptionTitle: "Аристократична неокласика на Печерських пагорбах",
    description: [
      "На одному з наймальовничіших пагорбів Печерська постає клубний будинок, архітектура якого продовжує традицію київських аристократичних резиденцій. Сучасна неокласика поєднує статус, стриманість і відчуття дому, що належить цьому місцю.",
    ],
    locationText:
      "Тиха 19 розташована в одному з тих рідкісних місць Печерська, про які знають переважно лише сусіди. Схована серед зелених схилів, вона дарує відчуття заміського спокою всього за кілька хвилин від ділового та культурного центру Києва.",
    specs: [
      { label: "Площа", value: "5 000 м²" },
      { label: "Поверховість", value: "5" },
      { label: "Резиденції", value: "26" },
      { label: "Стеля", value: "3,2 м" },
      { label: "Паркінг", value: "1–2 м/м" },
      { label: "Рік", value: "2026" },
    ],
    features: [
      "Панорами 360°",
      "Рецепція та приватний двір",
      "Підземний та гостьовий паркінг",
      "Власний каскадний парк",
      "Велике та надійне бомбосховище",
      "Лаунж-зона на даху",
      "Пасажирський ліфт",
      "Комори від 6 до 15 м²",
    ],
    cover: "/images/project-tykha-19-cover.png",
    gallery: [IMG.in1, IMG.ex6, IMG.in2, IMG.ct1],
  },
  {
    slug: "veletni",
    index: "02",
    name: "VELETNI",
    latin: "VELETNI",
    category: "Сервісне De Luxe котеджне містечко",
    district: "Козин. Конча-Заспа",
    address: "берег річки Козинка",
    year: "2024",
    status: "Продаж. Екватор будівництва.",
    statusKey: "sale",
    featured: true,
    lead: "Дев'ять резиденцій у сучасному японському стилі із сервісом 5* заміського клубного готелю на березі річки Козинка.",
    description: [
      "Дев'ять резиденцій у сучасному японському стилі із сервісом 5* заміського клубного готелю на березі річки Козинка.",
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
    slug: "kozyn-7-club",
    index: "03",
    name: "KOZYN 7 CLUB",
    latin: "KOZYN 7 CLUB",
    category: "Закрите клубне котеджне містечко",
    district: "Козин. Конча-Заспа",
    address: "Конча-Заспа",
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
    slug: "new-life",
    index: "04",
    name: "NEW LIFE",
    latin: "NEW LIFE",
    category: "Приватна резиденційна локація",
    district: "Конча-Заспа",
    address: "Конча-Заспа",
    year: "2023",
    status: "Завершено",
    statusKey: "done",
    featured: false,
    lead: "Нова якість заміського життя у приватній резиденційній локації Конча-Заспи.",
    description: [
      "NEW LIFE — приватна резиденційна локація у Конча-Заспі, де архітектура, сервіс і природне середовище формують новий рівень заміського життя.",
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
      "Приватна територія",
      "Сервісна інфраструктура",
      "Ландшафтний простір",
      "Клубний формат",
      "Керуюча компанія",
      "Закрита спільнота",
    ],
    cover: IMG.ex1,
    gallery: [IMG.in2, IMG.ex2, IMG.in1, IMG.ct3],
  },
  {
    slug: "vo",
    index: "05",
    name: "VO",
    latin: "VO",
    category: "Приватна резиденційна локація",
    district: "Конча-Заспа",
    address: "Конча-Заспа",
    year: "2022",
    status: "Завершено",
    statusKey: "done",
    featured: false,
    lead: "Камерний формат приватного життя у зеленій локації Конча-Заспи.",
    description: [
      "VO — камерна приватна локація у Конча-Заспі для резидентів, які цінують тишу, сервіс і довговічність середовища.",
    ],
    specs: [
      { label: "Площа", value: "13 800 м²" },
      { label: "Поверхи", value: "2" },
      { label: "Резиденції", value: "32" },
      { label: "Стелі", value: "до 3,0 м" },
      { label: "Паркінг", value: "1,2 м/м" },
      { label: "Рік", value: "2022" },
    ],
    features: [
      "Приватна територія",
      "Камерна спільнота",
      "Ландшафтний простір",
      "Консьєрж-сервіс",
      "Керуюча компанія",
      "Паркінг для резидентів",
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
