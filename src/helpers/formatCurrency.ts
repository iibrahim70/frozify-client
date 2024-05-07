const formatCurrency = (
  amount: number = 0,
  locale: string = "en-US",
  currency: string = "USD"
) => {
  return amount.toLocaleString(locale, {
    style: "currency",
    currency,
  });
};

export default formatCurrency;
