export default function GetUser() {
  let user = "user";
  return new Promise((resolve, reject) => {
    if (user === "admin") {
      return setTimeout(resolve, 5000, true);
    } else {
      return setTimeout(resolve, 5000, false);
    }
  });
}
//used in panel lauout
