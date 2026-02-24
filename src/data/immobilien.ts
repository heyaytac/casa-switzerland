export type ImmobilienTyp = "Wohnung" | "Haus" | "Gewerbe" | "Grundstück";

export interface Immobilie {
  id: string;
  titel: string;
  beschreibung: string;
  typ: ImmobilienTyp;
  kanton: string;
  ort: string;
  adresse: string;
  preis: number;
  zimmer: number;
  flaeche: number;
  baujahr: number;
  bilder: string[];
  merkmale: string[];
  makler: {
    name: string;
    firma: string;
    telefon: string;
  };
  erstellt: string;
}

export const immobilien: Immobilie[] = [
  {
    id: "1",
    titel: "Moderne 4.5-Zimmer-Wohnung mit Seesicht",
    beschreibung:
      "Grosszügige Wohnung in Zürich mit atemberaubender Seesicht. Offene Küche, modernes Bad, grosser Balkon. Nahe Bahnhof und Einkaufsmöglichkeiten. Ideal für Familien oder Paare, die das urbane Leben mit Blick auf den Zürichsee geniessen möchten.",
    typ: "Wohnung",
    kanton: "Zürich",
    ort: "Zürich",
    adresse: "Seestrasse 45, 8002 Zürich",
    preis: 1850000,
    zimmer: 4.5,
    flaeche: 120,
    baujahr: 2021,
    bilder: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
    ],
    merkmale: ["Seesicht", "Balkon", "Minergie", "Tiefgarage", "Lift"],
    makler: {
      name: "Thomas Müller",
      firma: "Zürich Immobilien AG",
      telefon: "+41 44 123 45 67",
    },
    erstellt: "2026-01-15",
  },
  {
    id: "2",
    titel: "Charmantes Einfamilienhaus in Bern",
    beschreibung:
      "Wunderschönes Einfamilienhaus im Herzen von Bern. Grosser Garten, ruhige Lage, hervorragende Anbindung an den ÖV. Das Haus bietet viel Platz für die ganze Familie mit einem gemütlichen Wohnzimmer und einem modernen Essbereich.",
    typ: "Haus",
    kanton: "Bern",
    ort: "Bern",
    adresse: "Gartenweg 12, 3012 Bern",
    preis: 1450000,
    zimmer: 6,
    flaeche: 180,
    baujahr: 2015,
    bilder: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    ],
    merkmale: ["Garten", "Garage", "Ruhige Lage", "Minergie", "Kamin"],
    makler: {
      name: "Anna Schneider",
      firma: "Berner Immobilien GmbH",
      telefon: "+41 31 234 56 78",
    },
    erstellt: "2026-01-20",
  },
  {
    id: "3",
    titel: "Luxus-Penthouse in Luzern",
    beschreibung:
      "Exklusives Penthouse mit Panoramablick auf den Vierwaldstättersee und die Alpen. Hochwertige Ausstattung, Dachterrasse, Smart-Home-System. Ein einzigartiges Wohnerlebnis in der schönsten Stadt der Zentralschweiz.",
    typ: "Wohnung",
    kanton: "Luzern",
    ort: "Luzern",
    adresse: "Pilatusstrasse 88, 6003 Luzern",
    preis: 3200000,
    zimmer: 5.5,
    flaeche: 200,
    baujahr: 2023,
    bilder: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    ],
    merkmale: [
      "Seesicht",
      "Dachterrasse",
      "Smart Home",
      "Wellness",
      "Concierge",
    ],
    makler: {
      name: "Marco Weber",
      firma: "Luzern Premium Realty",
      telefon: "+41 41 345 67 89",
    },
    erstellt: "2026-02-01",
  },
  {
    id: "4",
    titel: "Stilvolle 3.5-Zimmer-Wohnung in Basel",
    beschreibung:
      "Lichtdurchflutete Wohnung im beliebten Gundeldinger Quartier. Frisch renoviert mit hochwertigen Materialien. Offener Grundriss, grosse Fenster und ein sonniger Balkon. Perfekt für den urbanen Lebensstil.",
    typ: "Wohnung",
    kanton: "Basel-Stadt",
    ort: "Basel",
    adresse: "Gundeldinger Strasse 34, 4053 Basel",
    preis: 890000,
    zimmer: 3.5,
    flaeche: 85,
    baujahr: 2019,
    bilder: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
    ],
    merkmale: ["Balkon", "Renoviert", "Parkett", "Waschturm", "Velokeller"],
    makler: {
      name: "Sophie Brunner",
      firma: "Basel Wohnen AG",
      telefon: "+41 61 456 78 90",
    },
    erstellt: "2026-02-05",
  },
  {
    id: "5",
    titel: "Grosszügiges Bauland in Zug",
    beschreibung:
      "Attraktives Baugrundstück in erstklassiger Lage in Zug. Ideal für den Bau einer exklusiven Villa oder eines Mehrfamilienhauses. Hervorragende Verkehrsanbindung und Nähe zum Zugersee.",
    typ: "Grundstück",
    kanton: "Zug",
    ort: "Zug",
    adresse: "Am Zugersee 15, 6300 Zug",
    preis: 2500000,
    zimmer: 0,
    flaeche: 850,
    baujahr: 0,
    bilder: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800",
    ],
    merkmale: [
      "Seenähe",
      "Erschlossen",
      "Gute Lage",
      "Zonierung Wohnzone",
    ],
    makler: {
      name: "Peter Hofer",
      firma: "Zug Estate Partners",
      telefon: "+41 41 567 89 01",
    },
    erstellt: "2026-01-28",
  },
  {
    id: "6",
    titel: "Modernes Gewerbeobjekt in Winterthur",
    beschreibung:
      "Repräsentative Gewerbefläche im Zentrum von Winterthur. Flexibel gestaltbar, ideal für Büro, Praxis oder Showroom. Moderne Infrastruktur, Glasfaser-Internet, und eigene Parkplätze vorhanden.",
    typ: "Gewerbe",
    kanton: "Zürich",
    ort: "Winterthur",
    adresse: "Technikumstrasse 21, 8400 Winterthur",
    preis: 750000,
    zimmer: 0,
    flaeche: 250,
    baujahr: 2020,
    bilder: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
    ],
    merkmale: [
      "Glasfaser",
      "Parkplätze",
      "Lift",
      "Klimaanlage",
      "Rollstuhlgängig",
    ],
    makler: {
      name: "Thomas Müller",
      firma: "Zürich Immobilien AG",
      telefon: "+41 44 123 45 67",
    },
    erstellt: "2026-02-10",
  },
  {
    id: "7",
    titel: "Bergchalet in Graubünden",
    beschreibung:
      "Traumhaftes Chalet in Davos mit direktem Zugang zu den Skipisten. Gemütliche Atmosphäre mit Arvenholz-Verkleidung, Cheminée und Sauna. Perfektes Feriendomizil oder Ganzjahresresidenz in den Bergen.",
    typ: "Haus",
    kanton: "Graubünden",
    ort: "Davos",
    adresse: "Bergallee 7, 7270 Davos",
    preis: 2100000,
    zimmer: 5,
    flaeche: 160,
    baujahr: 2018,
    bilder: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    ],
    merkmale: [
      "Skigebiet",
      "Cheminée",
      "Sauna",
      "Garage",
      "Bergpanorama",
    ],
    makler: {
      name: "Reto Caflisch",
      firma: "Graubünden Immobilien",
      telefon: "+41 81 678 90 12",
    },
    erstellt: "2026-02-08",
  },
  {
    id: "8",
    titel: "Familienwohnung mit Garten in St. Gallen",
    beschreibung:
      "Geräumige Erdgeschosswohnung mit privatem Gartenanteil. Familienfreundliche Umgebung, nahe Schulen und Parks. Moderne Einbauküche, zwei Badezimmer und ein grosser Hobbyraum im Untergeschoss.",
    typ: "Wohnung",
    kanton: "St. Gallen",
    ort: "St. Gallen",
    adresse: "Rosenbergstrasse 56, 9000 St. Gallen",
    preis: 780000,
    zimmer: 5.5,
    flaeche: 135,
    baujahr: 2017,
    bilder: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
    ],
    merkmale: [
      "Garten",
      "Familienfreundlich",
      "Hobbyraum",
      "2 Badezimmer",
      "Einbauküche",
    ],
    makler: {
      name: "Claudia Keller",
      firma: "Ostschweiz Immobilien",
      telefon: "+41 71 789 01 23",
    },
    erstellt: "2026-02-12",
  },
  {
    id: "9",
    titel: "Attische Wohnung in Aarau",
    beschreibung:
      "Helle Attikawohnung mit grosser Dachterrasse und Fernsicht. Im obersten Stock eines gepflegten Mehrfamilienhauses. Moderne Küche, Parkettböden und ein offenes Wohnkonzept. Ideal für anspruchsvolle Käufer.",
    typ: "Wohnung",
    kanton: "Aargau",
    ort: "Aarau",
    adresse: "Laurenzenvorstadt 12, 5000 Aarau",
    preis: 950000,
    zimmer: 4,
    flaeche: 110,
    baujahr: 2022,
    bilder: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
    ],
    merkmale: [
      "Dachterrasse",
      "Fernsicht",
      "Parkett",
      "Attika",
      "Tiefgarage",
    ],
    makler: {
      name: "Daniel Meier",
      firma: "Aargau Immo GmbH",
      telefon: "+41 62 890 12 34",
    },
    erstellt: "2026-02-14",
  },
];
