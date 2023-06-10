const reviews = [
  {
    id: 1,
    name: "Shiva Kumar",
    job: "java developer",
    img: "../photos/women.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur praesentium, voluptatem excepturi iure perferendis consequatur temporibus corporis molestias, nisi id libero necessitatibus. Accusantium ipsum magnam enim molestias, sapiente deserunt!",
  },
  {
    id: 2,
    name: "Mathilde Langevin",
    job: "UI Engineer",
    img: "../photos/womenThree.jpeg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur praesentium, voluptatem excepturi iure perferendis consequatur temporibus corporis molestias, nisi id libero necessitatibus. Accusantium ipsum magnam enim molestias, sapiente deserunt!",
  },
  {
    id: 3,
    name: "Ransford quaye",
    job: "Backend developer",
    img: "../photos/womenTwo.jpeg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur praesentium, voluptatem excepturi iure perferendis consequatur temporibus corporis molestias, nisi id libero necessitatibus. Accusantium ipsum magnam enim molestias, sapiente deserunt!",
  },
  {
    id: 4,
    name: "Michael dam",
    job: "Front end developer",
    img: "../photos/men.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi, corporis sapiente quae iusto aperiam inventore  quos. Sed, consectetur tenetur!",
  },
  {
    id: 5,
    name: "Jake nackos",
    job: "front end developer",
    img: "../photos/women.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptatibus voluptas quia laboriosam officia dolor natus corrupti sunt aperiam rem.",
  },
  {
    id: 6,
    name: "nishanth avva",
    job: "web developer",
    img: "../photos/womenFour.jpeg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, dolorem. Earum, deserunt. Recusandae ab minima animi corporis commodi rerum, perspiciatis nam blanditiis voluptates numquam quam.",
  },
  {
    id: 7,
    name: "clayton cardinalli",
    job: "developer",
    img: "../photos/menTwo.jpeg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, dolorem. orporis commodi rerum, perspiciatis nam blanditiis voluptates numquam quam.",
  },
];

const img = document.getElementById("toUpdateImage");
const name = document.getElementById("toUpdateName");
const designation = document.getElementById("designation");
const description = document.getElementById("description");

const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");

let currentItem = getRandomNumber();
console.log(currentItem);

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  designation.textContent = item.job;
  description.textContent = item.text;
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  name.textContent = item.name;
  designation.textContent = item.job;
  description.textContent = item.text;
}

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.lenght - 1;
  }
  showPerson(currentItem);
});

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

function getRandomNumber() {
  return Math.trunc(Math.random() * reviews.length);
}
