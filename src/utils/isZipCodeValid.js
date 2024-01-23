export default function isZipCodeValid(zipCode) {
  // Remove todos os caracteres não numéricos
  const numericValue = zipCode.replace(/\D/g, '');

  // Verifica se o ZIP code tem o formato adequado
  const zipCodeRegex = /^\d{5}(-\d{4})?$/;
  return zipCodeRegex.test(zipCode);
}