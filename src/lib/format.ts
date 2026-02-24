export function formatCHF(amount: number): string {
  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatFlaeche(m2: number): string {
  return `${m2} m²`;
}

export function formatZimmer(zimmer: number): string {
  return zimmer % 1 === 0 ? `${zimmer}` : `${zimmer}`;
}
