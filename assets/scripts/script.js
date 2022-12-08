let wrapper = document.getElementById('toggle_wrapper');
let ring = document.getElementById('toggle_ring');
let toggled = false;

wrapper.addEventListener("click", toggleRing);

function toggleRing() {
  this.toggled = !this.toggled;

  if (this.toggled = true) {
    ring.style.display = "block";
  } else {
    ring.style.display = "none";
  }

}
