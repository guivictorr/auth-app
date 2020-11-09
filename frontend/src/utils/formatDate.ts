export default function formatDate(date: Date | string): string {
  const formatedDate = new Date(date).toLocaleDateString('pt-br');
  return formatedDate;
}
