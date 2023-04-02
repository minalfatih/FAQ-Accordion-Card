let qu = document.querySelector(".question");
console.log(qu);
let arrow = document.querySelector(".arrow");
let quesActive = document.querySelector(".quesActive");
console.log(quesActive);
let active = document.querySelector(".active");
console.log(active);
let ans = document.querySelector(".ans");
console.log(ans);

let arrAns = [];
let pAns = document.querySelectorAll(".ans");
for (let i = 0; i < pAns.length; i++) {
  arrAns.push(pAns[i]);
}
console.log(arrAns);

let arrQu = [];
let qus = document.querySelectorAll(".question");
for (let i = 0; i < qus.length; i++) {
  arrQu.push(qus[i]);
}
console.log(arrQu);

let arrowArr = [];
let arro = document.querySelectorAll(".arrow");
for (let i = 0; i < arro.length; i++) {
  arrowArr.push(arro[i]);
}
console.log(arrowArr);

arrQu[0].onclick = function () {
  ansAndqu(arrowArr[0], arrQu[0], arrAns[0]);
};
arrQu[1].onclick = function () {
  ansAndqu(arrowArr[1], arrQu[1], arrAns[1]);
};
arrQu[2].onclick = function () {
  ansAndqu(arrowArr[2], arrQu[2], arrAns[2]);
};
arrQu[3].onclick = function () {
  ansAndqu(arrowArr[3], arrQu[3], arrAns[3]);
};
arrQu[4].onclick = function () {
  ansAndqu(arrowArr[4], arrQu[4], arrAns[4]);
};

function ansAndqu(arrow, arrQu, arrAns) {
  if (arrAns.style.display !== "none") {
    arrQu.style.cssText =
      "color: var(--Very-dark-grayish-blue); font-weight: normal;";
    arrAns.style.display = "none";
    arrow.style.cssText = "transform: rotate(0deg); transition: .3s;";
  } else {
    arrQu.style.cssText =
      "color: var(--Very-dark-desaturated-blue); font-weight: bold;";
    arrAns.style.display = "flex";
    arrow.style.cssText = "transform: rotate(-180deg); transition: .3s;";
  }
}
