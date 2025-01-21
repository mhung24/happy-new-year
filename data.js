fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "ip"
    ).innerText = `Địa chỉ IP của bạn là: ${data.ip}`;

    console.log(data.ip);
  })
  .catch((error) => {
    console.error("Có lỗi xảy ra:", error);
  });
