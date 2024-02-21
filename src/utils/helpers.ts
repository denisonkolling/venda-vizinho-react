const CURRENCRY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "BRL",
  style: "currency",
});

export const formatCurrencry = (number: any) => {
  return CURRENCRY_FORMATTER.format(number);
};

export const getDate = (date: Date) => {
  return new Date(date).toLocaleDateString("pt-br");
};

export const baseUrl = import.meta.env.VITE_API_URL;