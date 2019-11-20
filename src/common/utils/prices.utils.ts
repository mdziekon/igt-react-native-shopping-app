require('intl');
require('intl/locale-data/jsonp/en-US');

export function priceStringToNumber(price: string) {
  return Number(price);
}

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function displayPrice(price: string): string;
export function displayPrice(price: number): string;

export function displayPrice(price: string | number) {
  const tempPrice =
    typeof price === 'string' ? priceStringToNumber(price) : price;

  return priceFormatter.format(tempPrice);
}
