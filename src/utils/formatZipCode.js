export default function formatZipCode(zipCode) {
  // Remove todos os caracteres não numéricos
  const numericValue = zipCode.replace(/\D/g, '');

  // Aplica a máscara apenas se houver 6 ou mais dígitos
  const formattedValue = numericValue.length >= 6 ?
      numericValue.replace(/^(\d{5})(\d{0,4})?/, '$1-$2').trim() :
      numericValue;

  return formattedValue;
}