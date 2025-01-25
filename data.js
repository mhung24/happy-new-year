const value = JSON.parse(localStorage.getItem("data"));
const err_gift = document.getElementById("err_gift");
const msg_err = document.getElementById("msg_err");
let ip;
fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    ip = data.ip;
  })
  .catch((error) => {
    console.error("Có lỗi xảy ra:", error);
  });
