const price = document.getElementById("price");
const tax = document.getElementById("tax");
const discount = document.getElementById("discount");
const svip = document.getElementById("svip");
const list = document.getElementById("list");
const income = document.getElementById("income");
const sumArray = document.getElementById("sumArray");

let sum = 0;
let priceMinus = 0;
let array = [];
let lengthInput = 0;

const addDataPrice = () => {
  let item = {
    id: Date.now(),
    sum,
  };
  resetDataInput();
  array = [...array, item];
  display(array);
  getSum();
};
const getSum = () => {
  let tongCong = 0;
  array?.map((item) => (tongCong = Math.ceil(tongCong + item.sum)));
  sumArray.innerHTML = tongCong.toLocaleString("vi-VN");
};

const resetDataInput = () => {
  price.value = "";
  tax.innerHTML = 0;
  income.innerHTML = 0;
  discount.value = 0;
  svip.value = 0;
};

setInterval(() => {
  lengthInput = price.value.length;

  if (lengthInput !== 0) {
    setPrice();
  } else {
    tax.innerHTML = 0;
    income.innerHTML = 0;
  }
}, 1);

const setPrice = () => {
  priceMinus = Math.ceil((+price.value * 40) / 100);
  tax.innerHTML = "-" + priceMinus.toLocaleString("vi-VN");

  if (+discount.value === 0 && +svip.value === 0) {
    sum = Math.ceil(+price.value - priceMinus);
    income.innerHTML = sum.toLocaleString("vi-VN");
  } else if (+discount.value !== 0 && +svip.value === 0) {
    sum = Math.ceil(
      +price.value - priceMinus + (priceMinus * +discount.value) / 100
    );
    income.innerHTML = sum.toLocaleString("vi-VN");
  } else if (+discount.value === 0 && +svip.value !== 0) {
    sum = Math.ceil(
      +price.value - priceMinus + (priceMinus * +svip.value) / 100
    );
    income.innerHTML = sum.toLocaleString("vi-VN");
  } else {
    sum = Math.ceil(
      +price.value -
        priceMinus +
        (priceMinus * +svip.value) / 100 +
        (priceMinus * +discount.value) / 100
    );
    income.innerHTML = sum.toLocaleString("vi-VN");
  }
};

const display = (arr = []) => {
  list.innerHTML = arr
    ?.map((item, index) => {
      return ` 
            <tr>
                <td>${index + 1}</td>
                <td>${item.sum.toLocaleString("vi-VN")}</td>
                <td>
                  <button  onclick="deleteItem(${item.id})")>Xoá</button>
                </td>
            </tr>
    `;
    })
    .join("");
};

const deleteItem = (id) => {
  const newArray = array.filter((item) => item.id !== id);

  array = [...newArray];
  display(array);
  getSum();
};

const deleteAll = () => {
  array = [];
  display(array);
  getSum();
};
