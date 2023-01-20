export const currencyFormatter = (number, currencyName) => {
  const currencies = {
    "rupiah": {
      lang: 'id-ID',
      currency: 'IDR'
    },
    "poundsterling": {
      lang: 'en-GB',
      currency: 'GBP'
    }
  }

  const formattedNumber = new Intl.NumberFormat(currencies[currencyName]?.lang, {
    style: 'currency',
    currency: currencies[currencyName]?.currency
  })
  .format(number)
  .toString();

  return formattedNumber;
}