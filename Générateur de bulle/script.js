document.addEventListener;

const score = document.querySelector(".score");
let compte = 0;

const creatBubble = () => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);
  const size = Math.random() * 200 + 150 + "px";

  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + 50 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  bubble.style.setProperty("left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    compte++;
    score.innerHTML = `<h1>${compte}</h1>`;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(() => {
  creatBubble();
}, 1000);
