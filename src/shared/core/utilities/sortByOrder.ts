export default function sortByOrder(a: any, b: any) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  // a должно быть равным b
  return 0;
}
