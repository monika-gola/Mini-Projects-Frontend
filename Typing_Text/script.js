const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Everything";
  }, 0);
  setTimeout(() => {
    text.textContent = "Love";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Addiction";
  }, 8000); 
  setTimeout(() => {
    text.textContent = "Fun";
  }, 12000); 
};

textLoad();
setInterval(textLoad, 16000);