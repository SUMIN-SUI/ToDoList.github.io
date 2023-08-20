const date = document.querySelector(".date");

const today = new Date();

date.innerHTML = `${today.getFullYear()}/${
  today.getMonth() + 1
}/${today.getDate()}`;
