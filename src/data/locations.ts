export const locations = [
  {
    name: "Kuchai Lama",
    addr: "Lot 689, Jalan Kuchai Lama, Taman Goodwood, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    services: ["SATURDAY 3PM • 5.30PM", "SUNDAY 1.30PM"],
  },
  {
    name: "Setapak",
    addr: "2nd Floor, Lot 9163, Prima Setapak, Batu 4, Jalan Genting Kelang, 53300 Kuala Lumpur",
    services: ["SATURDAY 5PM", "SUNDAY 10.30AM"],
  },
  {
    name: "Kepong",
    addr: "1-19 & 1-20, Plaza Menjalara, No.1, Jalan Menjalara Idaman, Bandar Menjalara, Kepong, 52200 Kuala Lumpur",
    services: ["SATURDAY 4PM", "SUNDAY 10.30AM"],
  },
  {
    name: "Sg. Long",
    addr: "Mahkota Point, Level 1, Lot 35052, Persiaran Mahkota Cheras 1, Jalan Penggwa, Bandar Mahkota Cheras, 43200 Cheras, Selangor",
    services: ["SUNDAY 10.30AM • 1.30PM"],
  },
  {
    name: "Seremban",
    addr: "SCS Prima Sdn Bhd, 287-1, Jalan S2 B, Up Town Avenue, 70300 Seremban",
    services: ["SATURDAY 5PM"],
  },
  {
    name: "USJ",
    addr: "12 & 14, Jalan Indusri USJ 1/6, Taman Perindustrian USJ 1, 47600 Subang Jaya, Selangor",
    services: ["SATURDAY 4.30PM", "SUNDAY 10.30AM"],
  },
  {
    name: "Serdang",
    addr: "24 & 26, Jalan PSK 4, Pusat Perdagangan Seri Kembangan, 43300 Seri Kembangan, Selangor",
    services: ["SUNDAY 10.30AM • 1.30PM"],
  },
  // {
  //   name: "The Blessing (Puchong)",
  //   addr: "Puchong IOI Boulevard",
  //   services: [],
  // },
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
