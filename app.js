const canvas = document.getElementById("canvas");

let rnd = Math.random;
let w = (canvas.width = innerWidth);
let h = (canvas.height = innerHeight);

let ctx = canvas.getContext("2d");
ctx.translate(w / 2, h / 2);
ctx.textAlign = "center";
ctx.textBaseline = "middle";

let pts = Array(99)
  .fill(0)
  .map(() => {
    let d = rnd() * Math.PI * 2;
    let size = rnd() * 22 + 11;
    return {
      size,
      dir: d,
      targetDir: d,
      speed: 1 + (rnd() / size) * 11,
      x: rnd() * w - w / 2,
      y: rnd() * h - h / 2
    };
  });

function draw(t) {
  requestAnimationFrame(draw);
  ctx.fillStyle = "#00000012";
  ctx.fillRect(-1e5, -1e5, 2e5, 2e5);
  ctx.fillStyle = "white";
  pts.forEach(p => {
    p.dir += (p.targetDir - p.dir) / 10;
    p.x += Math.cos(p.dir) * p.speed;
    p.y += Math.sin(p.dir) * p.speed;
    if (rnd() > 0.99 && !p.inside) p.targetDir = rnd() * Math.PI * 2;
    if (p.x < -w / 2) p.x = w / 2;
    else if (p.x > w / 2) p.x = -w / 2;
    else if (p.y < -h / 2) p.y = h / 2;
    else if (p.y > h / 2) p.y = -h / 2;
    let inside = p.x * p.x + p.y * p.y < 40000;
    if (inside && !p.inside) {
      p.inside = true;
      p.targetDir += Math.PI;
    }
    p.inside = inside;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.dir + Math.PI / 2);
    ctx.font = `${p.size}px Arial`;
    ctx.fillText("A", 0, 0);
    ctx.rotate(-p.dir - Math.PI / 2);
    ctx.translate(-p.x, -p.y);
  });
}

requestAnimationFrame(draw);
// document.body.style.background = "url(" + canvas.toDataURL() + ")";

function setDynamicBackground() {
  //generate the image from the canvas
  var imageDataURL = canvas.toDataURL();

  //set the dynamic image as the background
  document.body.style.background =
    "transparent url('" + imageDataURL + "') repeat";
}

// setDynamicBackground();
