export const TimeFormate = () => {
  let time = new Date().toString().split(" ").slice(0,5).join(" ")
  return time;
}
