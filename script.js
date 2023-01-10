var canvas = document.getElementById("canvas");
var container = canvas.getContext("2d");

container.fillStyle = "#8b8b8b";
var jogador1 = { px: 80, py: 160, tx: 20, ty: 140 };
var jogador2 = { px: 700, py: 160, tx: 20, ty: 140 };
var bolinha = { px: 370, py: 228, tx: 18, ty: 18, dir: 8 };

container.font = "20px Arial";
var pts1 = 0;
var pts2 = 0;

function Move_Ball() {
  bolinha.px += bolinha.dir;

  if (bolinha.px > 690) {
    bolinha.dir *= -1;
  } else if (bolinha.px < 100) {
    bolinha.dir *= -1;
  }
}

document.addEventListener("Keydown", function () {
  jogador1.py += 8;
});

function Draw() {
  container.fillRect(jogador1.px, jogador1.py, jogador1.tx, jogador1.ty);
  container.fillRect(jogador2.px, jogador2.py, jogador2.tx, jogador2.ty);
  container.fillRect(bolinha.px, bolinha.py, bolinha.tx, bolinha.ty);
  container.fillText("Score 1:" + pts1, 150, 50);
  container.fillText("Score 2:" + pts2, 600, 50);
}

function Main() {
  container.clearRect(0, 0, 800, 500);
  Draw();
  Move_Ball();
}

setInterval(Main, 10);
