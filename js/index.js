const items = document.querySelectorAll(".accordion a");
console.log(items)

function toggleAccordion(){
console.log('um');
this.classList.toggle('active');
this.nextElementSibling.classList.toggle('active');

console.log(this)
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
