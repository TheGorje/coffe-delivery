export function convertToCurrency(value: number): string {
  // Converter o texto para número
  const locale = 'pt-BR'
  const currency = 'BRL'

  // Formatar o número para a moeda especificada usando Intl.NumberFormat
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value)
}
