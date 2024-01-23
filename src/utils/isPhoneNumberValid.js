export default function isPhoneNumberValid(phoneNumber) {
  const regex = /^\(\d{3}\) \d{3} \d{4}$/;
  return regex.test(phoneNumber);
}