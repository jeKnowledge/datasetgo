var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    console.log(this);
    //var acc = document.getElementsByClassName("accordion");
    this.classList.toggle("active");
  });
}
