const audioplayer = document.getElementById("audio");

function sim() {
  document.querySelector(".imagem").style.display = "block";
  document.querySelector(".heart-container").style.display = "flex";
  audioplayer.play();
}

function desvia(t) {
  const btn = t;
  btn.style.position = "absolute";
  btn.style.bottom = randomNumber(5, 95);
  btn.style.left = randomNumber(5, 95);
  console.log("opa desviei...");
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min) + "%";
}
