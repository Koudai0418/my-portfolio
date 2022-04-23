const name = document.getElementById("name");
const Age = document.getElementById("Age");
const Born = document.getElementById("Born");
const University = document.getElementById("University");
const Faculty = document.getElementById("Faculty");
const grade = document.getElementById("grade");
const hobby = document.getElementById("hobby");

name.onmousemove = function () {
  nameanswer.textContent = "内海航大";
};
Age.onmousemove = function () {
  Ageanswer.textContent = "22歳";
};
Born.onmousemove = function () {
  Bornanswer.textContent = "愛知";
};
University.onmousemove = function () {
  Universityanswer.textContent = "芝浦工業大学";
};
Faculty.onmousemove = function () {
  Facultyanswer.textContent = "機械工学科 ";
};
grade.onmousemove = function () {
  gradeanswer.textContent = "3年 ";
};

hobby.onmousemove = function () {
  hobbyanswer.textContent = "旅行、ドライブ";
};
