particlesJS("particles-js", {
  particles: {
    number: {
      value: 236,
      density: { enable: true, value_area: 1843.9238699953512 }
    },
    color: { value: "#d20202" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 6 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 4.008530152163807,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");
// update = function() {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);

// just trying somthing
const trigger = document.querySelector(".img-circle");
const background = document.querySelector(".dropdownBackground");
const photo = document.querySelector("img");
const text = document.getElementById("introduction");

function toggleText(e) {
  this.classList.toggle("move");
  setTimeout(insertContent, 2000);
}

function insertContent(e) {
  const location = document.querySelector(".dropdown");

  location.innerHTML =
    "<div class='card-white' id='introduction'><h1>Hello, I am Gautier 🤓</h1><p>After 10 years in the music industry I decided to change my life!🌍</p><p>Have a look to my booking artist web app !</p><a href='https://airfyre-arnolac.herokuapp.com/' class='btn-blue' target='_blank' >Discover Airfyre</a></div>";
}

// when click on the photo, run toggleDiv and photo goes up
trigger.addEventListener("click", toggleText);
// trigger.addEventListener("click", insertContent);
