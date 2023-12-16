const buttonsCompra = document.querySelectorAll(".comprar-button1");
const modais = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-button");

buttonsCompra.forEach((button, index) => {
    button.addEventListener("click", () => {
        modais[index].style.display = "block";
    });
});

closeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        modais[index].style.display = "none";
    });
});

window.addEventListener("click", (event) => {
    modais.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});





let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}




function limitToppings() {
    var checkboxes = document.querySelectorAll('input[name="topping"]');
    var checkedCount = 0;

    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    checkboxes.forEach(function (checkbox) {
      checkbox.disabled = checkedCount === 2 && !checkbox.checked;
    });
  }

  function addToppings() {
    // Adicione sua lógica para adicionar os toppings aqui
  }