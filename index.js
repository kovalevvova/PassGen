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

formCopy.onclick = function() {
  console.log(result);
  const sysInput = document.createElement('input');
  sysInput.setAttribute('value', result);
  document.body.appendChild(sysInput);
  sysInput.select();
  document.execCommand('copy');
  document.body.removeChild(sysInput);
}
