export const locations = [
  {
    name: "Kuchai Lama",
    addr: "Lot 689, Jalan Kuchai Lama, Taman Goodwood, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    services: ["SATURDAY 3PM (Young Warrior)","SATURDAY 5:30PM (General Service)", "SUNDAY 1:30PM (General Service)"],
  },
  {
    name: "Setapak",
    addr: "2nd Floor, Lot 9163, Prima Setapak, Batu 4, Jalan Genting Kelang, 53300 Kuala Lumpur",
    services: ["SATURDAY 5PM (Youth)", "SUNDAY 10:30AM (General Service)"],
  },
  {
    name: "Kepong",
    addr: "Full Gospel Assembly Bhd Sg Mas Plaza. Lot 10B, Jalan Ipoh, Batu 5, 51200 Kuala Lumpur, WP Kuala Lumpur",
    services: ["SATURDAY 7:30PM (General Service)", "SUNDAY 10:30AM (General Service)"],
  },
  {
    name: "Sg. Long",
    addr: "Mahkota Point, Level 1, Lot 35052, Persiaran Mahkota Cheras 1, Jalan Penggwa, Bandar Mahkota Cheras, 43200 Cheras, Selangor",
    services: ["SATURDAY 7:30PM (Chinese)","SUNDAY 10:30am (English & Wonderkids)", "SUNDAY 1:30pm (Bilingual & Wonderkids)"],
  },
  {
    name: "Seremban",
    addr: "Blok A14-2 & A15-2, Block A, Jalan Haruan 5/9, Pusat Komersial Oakland 2, 70300 Seremban, Negeri Sembilan",
    services: ["SUNDAY 10:30AM (General Service & Wonderkids)"],
  },
  {
    name: "USJ",
    addr: "12 & 14, Jalan Indusri USJ 1/6, Taman Perindustrian USJ 1,47600 Subang Jaya, Selangor Darul Ehsan, Malaysia",
    services: ["SATURDAY 4:30PM (Young Warrior)", "SUNDAY 10:30AM (General Service & Wonderkids)"],
  },
  {
    name: "Serdang",
    addr: "24 & 26, Jalan PSK 4, Pusat Perdagangan Seri Kembangan, 43300 Seri Kembangan, Selangor",
    services: ["SUNDAY 10:30AM (General Service & Wonderkids)", "SUNDAY 1:30PM (General Service)"],
  },
  {
    name: "Setia Alam",
    addr: "Camellia Hall, 5C, Jalan Setia Nusantara U13/17 Seksyen U13, Setia Eco Park, 40170 Shah Alam, Selangor",
    services: ["SUNDAY 10:30AM (General Service & Wonderkids)"],
  },
  {
    name: "Johor",
    addr: "Infinity 8 @Mount Austin, 121, Jalan Mutiara Emas 2A, Taman Mount Austin, 81100 Johor Bahru, Johor",
    services: ["SATURDAY 7:30PM (General Service)"],
  },
  {
    name: "Penang",
    addr: "The Granite Luxury Hotel (Level 21), 191A, Jalan Magazine, 10300 George Town, Pulau Pinang",
    services: ["SATURDAY 7:30PM (General Service)"],
  }
];

export type ValueLabelPair<T> = { value: T; label: string };

export const cgLocations: ValueLabelPair<string>[] = [
  { value: "kuchai", label: "Kuchai" },
  { value: "serdang", label: "Serdang" },
  { value: "kepong", label: "Kepong" },
  { value: "usj", label: "USJ" },
  { value: "setapak", label: "Setapak" },
  { value: "sg_long", label: "Sungai Long" },
  { value: "seremban", label: "Seremban" },
  { value: "penang", label: "Penang" },
  { value: "johor", label: "Johor" },
];
