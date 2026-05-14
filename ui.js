function setResult(text){
  const el = document.getElementById("out");

  el.style.opacity = "0";

  setTimeout(() => {
    el.innerText = text;
    el.style.opacity = "1";
  }, 120);
}