export default function formatPhone(phoneNumber) {
    // Remove todos os caracteres não numéricos
    const numericValue = phoneNumber.replace(/\D/g, '');

    const formattedValue = numericValue.length >= 4 ?
      numericValue.replace(/^(\d{0,3})(\d{0,3})?(\d{0,4})?/, '($1) $2 $3').trim() :
      numericValue;

    // Atualiza o valor do input
    return formattedValue;
}