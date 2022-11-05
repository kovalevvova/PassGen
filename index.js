let arr1 = [
  "A",
  "B",
  "C",
  "D",
  "I",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//let arr2 = [a,b,c,d,i,f,g,h,i,j,k,l,m,p,q,r,s,t,u,v,w,x,y,z,];
let arr2 = [
  "a",
  "b",
  "c",
  "d",
  "i",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr4 = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "/",
  "?",
  "|",
  "~",
  "[",
  "]",
  "{",
  "}",
];

// слайдер
const slider = document.querySelector("#pointer");
let val = 6;
let result = 0;
slider.addEventListener("input", function () {
  val = document.querySelector("#pointer").innerHTML = this.value;
  document.querySelector("#password-length").innerHTML = val;
});

//генератор паролей
document.querySelector(".button").addEventListener("click", generatePass);

function generatePass(event) {
  let p = [];
  let checkbox_1 = document.querySelector("#checkbox-1").checked;
  let checkbox_2 = document.querySelector("#checkbox-2").checked;
  let checkbox_3 = document.querySelector("#checkbox-3").checked;
  let checkbox_4 = document.querySelector("#checkbox-4").checked;
  if (checkbox_1) {
    p.push.apply(p, arr1);
  }
  if (checkbox_2) {
    p.push.apply(p, arr2);
  }
  if (checkbox_3) {
    p.push.apply(p, arr3);
  }
  if (checkbox_4) {
    p.push.apply(p, arr4);
  }

  p.sort(randomize);

  function randomize(a, b) {
    return Math.random() - 0.5;
  }
  result = p.slice(0, val);
  result = result.join("");
  document.querySelector(".form-result p").innerHTML = result;
}

const formCopy = document.querySelector(".form-copy");

formCopy.onclick = function () {
  //создаём поле ввода input
  const sysInput = document.createElement("input");
  //записывает в input текст
  sysInput.setAttribute("value", result);
  //добавляем input в документ
  document.body.appendChild(sysInput);
  //выделяем тескт в input
  sysInput.select();
  //копируем текст из input  в буфер
  document.execCommand("copy");
  //удаляем input из документа
  document.body.removeChild(sysInput);
};

// переключение темы
const toggle = document.querySelectorAll(".toggle img");
const sun = document.querySelector("img.moon");
const moon = document.querySelector("img.sun");
//перебераем элементы и вешаем на них событие
toggle.forEach((timeOfday) => {
  timeOfday.addEventListener("click", function () {
    if (timeOfday === sun) {
      toggleClass();
      rootSun();
      console.log(sun);
    } else {
      toggleClass();
      rootMoon();
      console.log(moon);
    }
  });
});

function toggleClass() {
  moon.classList.toggle("active");
  sun.classList.toggle("active");
}

function rootMoon() {
  document.documentElement.style.setProperty("--color-hard", "#ffffff");
  document.documentElement.style.setProperty("--color-white", "#292929");
  sun.setAttribute("data-value", "active");
  moon.removeAttribute("data-value", "active");
}

function rootSun() {
  document.documentElement.style.setProperty("--color-hard", "#292929");
  document.documentElement.style.setProperty("--color-white", "#ffffff");
  moon.setAttribute("data-value", "active");
  sun.removeAttribute("data-value", "active");
}

/*if (document.querySelector(".sun.active")) {
  localStorage.setItem(rootMoon)
  }
  else {
    localStorage.setItem("style", "--color-hard:#ffffff; --color-white:#292929;")
  }
*/
