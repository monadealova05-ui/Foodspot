feather.replace();

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburgerMenu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Fetching Data

const foods = [
  {
    category: "Makanan Indonesia",
    title: "Nasi Goreng",
    description: "Nasi goreng gurih dan cocok dinikmati kapan saja.",
    price: "Rp 20.000",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
  {
    category: "Makanan Indonesia",
    title: "Mie Ayam",
    description: "Mie dengan topping ayam yang lezat dan mengenyangkan.",
    price: "Rp 18.000",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
  },
  {
    category: "Dessert",
    title: "Pancake",
    description: "Pancake lembut dengan topping manis yang menggugah selera.",
    price: "Rp 25.000",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
  },
  {
    category: "Minuman",
    title: "Es Kopi Susu",
    description: "Kopi susu segar untuk menemani waktu santaimu.",
    price: "Rp 15.000",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
  },
];

function displayFoods(foods) {
  const foodList = document.querySelector("#course-list");

  foodList.innerHTML = "";

  foods.forEach((food) => {
    foodList.innerHTML += `
      <div class="menu-card">
        <img src="${food.image}" alt="${food.title}">
        <div class="menu-card-content">
          <span>${food.category}</span>
          <h3>${food.title}</h3>
          <p>${food.description}</p>
          <small>Rekomendasi Foodspot</small>
          <strong>${food.price}</strong>
<a href="food.html">Lihat Rekomendasi</a>
      </div>
    `;
  });
}

displayFoods(foods);
