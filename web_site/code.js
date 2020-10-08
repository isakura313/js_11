// alert("Привет! Это JavaScript!");
// let name = prompt("Введите свое имя!");
// alert("Привет " + name);

let h3 = document.querySelectorAll("h3");
h3 = Array.from(h3);
count = 0;

h3.map((el) => {
  el.innerHTML = "Товар " + count;
  count++;
});
