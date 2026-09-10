/* =========================
   AZOMA - JAVASCRIPT
========================= */


/* =========================
   MENU DATA
========================= */

const menuItems = [

    // MOLokhia
    {
        id: 1,
        name: "ملوخية عزومة",
        category: "ملوخية",
        description: "ملوخية مصرية بالثوم والكزبرة على الطريقة الأصلية.",
        ingredients: ["ملوخية طازة", "ثوم", "كزبرة", "شوربة مصرية"],
        price: 95,
        image: "molokhia.jpg"
    },
    {
        id: 2,
        name: "ملوخية بالفراخ",
        category: "ملوخية",
        description: "ملوخية خضراء مع قطع فراخ طرية وتقلية مصرية.",
        ingredients: ["ملوخية", "فراخ", "ثوم", "كزبرة"],
        price: 145,
        image: "ferakh.jpg"
    },
    {
        id: 3,
        name: "ملوخية بالحمام",
        category: "ملوخية",
        description: "ملوخية بلدي مع حمام محشي على أصوله.",
        ingredients: ["ملوخية", "حمام", "ثوم", "كزبرة"],
        price: 260,
        image: "hamam.jpg"
    },

    // RICE
    {
        id: 4,
        name: "رز بالشعرية",
        category: "أرز",
        description: "رز مصري أبيض محضر بالشعرية والسمنة البلدي.",
        ingredients: ["أرز مصري", "شعرية", "سمنة بلدي"],
        price: 55,
        image: "rise.jpg"
    },
    {
        id: 5,
        name: "رز بالخلطة",
        category: "أرز",
        description: "رز بالخلطة المصرية والمكسرات والكبد والقوانص.",
        ingredients: ["أرز", "مكسرات", "كبد", "قوانص", "توابل"],
        price: 85,
        image: "m.jpg"
    },
    {
        id: 6,
        name: "رز معمر",
        category: "أرز",
        description: "رز مصري باللبن والسمنة البلدي في الفرن.",
        ingredients: ["أرز", "لبن", "سمنة بلدي"],
        price: 85,
        image: "mm.jpg"
    },

    // CASSEROLES
    {
        id: 7,
        name: "طاجن بامية باللحمة",
        category: "طواجن",
        description: "بامية مطبوخة على نار هادية مع قطع لحمة طرية.",
        ingredients: ["بامية", "لحمة", "صلصة", "ثوم", "توابل"],
        price: 220,
        image: "p.jpg"
    },
    {
        id: 8,
        name: "طاجن بطاطس باللحمة",
        category: "طواجن",
        description: "بطاطس مع لحمة وبصل وتتبيلة مصرية في طاجن فخار.",
        ingredients: ["بطاطس", "لحمة", "بصل", "طماطم"],
        price: 210,
        image: "poteto.jpg"
    },
    {
        id: 9,
        name: "طاجن عكاوي",
        category: "طواجن",
        description: "عكاوي طرية مطبوخة ببطء مع صوص غني.",
        ingredients: ["عكاوي", "بصل", "طماطم", "توابل"],
        price: 280,
        image: "akawy.jpg"
    },
    {
        id: 10,
        name: "طاجن مكرونة باللحمة",
        category: "طواجن",
        description: "مكرونة بالصلصة واللحمة المفرومة في الفرن.",
        ingredients: ["مكرونة", "لحمة مفرومة", "صلصة", "توابل"],
        price: 155,
        image: "tag.jpg"
    },

    // GRILLS
    {
        id: 11,
        name: "كفتة مشوية",
        category: "مشويات",
        description: "كفتة حاتي متبلة ومشوية على الفحم.",
        ingredients: ["لحمة مفرومة", "بصل", "بقدونس", "توابل"],
        price: 190,
        image: "kofta.jpg"
    },
    {
        id: 12,
        name: "كباب حاتي",
        category: "مشويات",
        description: "قطع لحم طرية متبلة ومشوية على الفحم.",
        ingredients: ["لحم", "بصل", "فلفل", "توابل"],
        price: 290,
        image: "kk.jpg"
    },
    {
        id: 13,
        name: "شيش طاووق",
        category: "مشويات",
        description: "قطع فراخ متبلة بالتتبيلة المصرية ومشوية على الفحم.",
        ingredients: ["فراخ", "زبادي", "ليمون", "توابل"],
        price: 185,
        image: "t.jpg"
    },
    {
        id: 14,
        name: "ميكس جريل عزومة",
        category: "مشويات",
        description: "كباب وكفتة وشيش طاووق وريش وفراخ مشوية.",
        ingredients: ["كباب", "كفتة", "شيش", "ريش", "فراخ"],
        price: 495,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=85"
    },

    // CHICKEN
    {
        id: 15,
        name: "فراخ مشوية على الفحم",
        category: "فراخ",
        description: "فراخ مشوية بتتبيلة عزومة الخاصة.",
        ingredients: ["فراخ", "ثوم", "ليمون", "توابل"],
        price: 190,
        image: "aa.jpg"
    },
    {
        id: 16,
        name: "فراخ بالبطاطس",
        category: "فراخ",
        description: "فراخ وقطع بطاطس بتتبيلة مصرية في الفرن.",
        ingredients: ["فراخ", "بطاطس", "بصل", "توابل"],
        price: 180,
        image: "s.jpg"
    },

    // MAHASHI
    {
        id: 17,
        name: "محشي مشكل",
        category: "محاشي",
        description: "كرنب وورق عنب وكوسة وفلفل وباذنجان.",
        ingredients: ["كرنب", "ورق عنب", "كوسة", "فلفل", "باذنجان"],
        price: 180,
        image: "mmm.jpg"
    },
    {
        id: 18,
        name: "محشي ورق عنب",
        category: "محاشي",
        description: "ورق عنب محشي بالخلطة المصرية.",
        ingredients: ["ورق عنب", "أرز", "خضرة", "توابل"],
        price: 150,
        image: "a.jpg"
    },

    // KOSHARY
    {
        id: 19,
        name: "كشري كلاسيك",
        category: "كشري",
        description: "أرز وعدس ومكرونة وحمص وبصل ودقة وصلصة.",
        ingredients: ["أرز", "عدس", "مكرونة", "حمص", "بصل"],
        price: 70,
        image: "cll.jpg"
    },
    {
        id: 20,
        name: "كشري عزومة",
        category: "كشري",
        description: "كشري مصري كامل بإضافات عزومة الخاصة.",
        ingredients: ["أرز", "عدس", "مكرونة", "حمص", "بصل", "شطة", "دقة"],
        price: 95,
        image: "cl.jpg"
    },

    // PASTA
    {
        id: 21,
        name: "مكرونة بشاميل",
        category: "مكرونة",
        description: "مكرونة باللحمة المفرومة والبشاميل في الفرن.",
        ingredients: ["مكرونة", "لحمة مفرومة", "لبن", "دقيق", "جبنة"],
        price: 145,
        image: "basha.jpg"
    },
    {
        id: 22,
        name: "مكرونة عزومة بالفرن",
        category: "مكرونة",
        description: "مكرونة بالخلطة المصرية واللحمة والجبنة.",
        ingredients: ["مكرونة", "لحمة", "صلصة", "جبنة", "توابل"],
        price: 165,
        image: "basta.jpg"
    },

    // MEAT
    {
        id: 23,
        name: "كبدة إسكندراني",
        category: "لحوم",
        description: "كبدة متقطعة مع فلفل وثوم وخلطة إسكندراني.",
        ingredients: ["كبدة", "فلفل", "ثوم", "خل", "توابل"],
        price: 125,
        image: "kebda.jpg"
    },
    {
        id: 24,
        name: "سجق إسكندراني",
        category: "لحوم",
        description: "سجق بلدي مع الفلفل والطماطم والتتبيلة المصرية.",
        ingredients: ["سجق", "فلفل", "طماطم", "بصل"],
        price: 145,
        image: "sogok.jpg"
    },

    // DESSERT
    {
        id: 25,
        name: "أم علي",
        category: "حلويات",
        description: "رقائق مخبوزة باللبن والمكسرات والقشطة.",
        ingredients: ["رقائق", "لبن", "مكسرات", "قشطة"],
        price: 75,
        image: "om ali.jpg"
    },
    {
        id: 26,
        name: "أرز بلبن",
        category: "حلويات",
        description: "أرز بلبن كريمي على الطريقة المصرية.",
        ingredients: ["أرز", "لبن", "سكر", "فانيليا"],
        price: 55,
        image: "blaban.jpg"
    },
    {
        id: 27,
        name: "كنافة بالقشطة",
        category: "حلويات",
        description: "كنافة مصرية ذهبية بالقشطة والمكسرات.",
        ingredients: ["كنافة", "قشطة", "مكسرات", "شربات"],
        price: 90,
        image: "konafa.jpg"
    },
    {
        id: 28,
        name: "فطير مشلتت",
        category: "حلويات",
        description: "فطير مشلتت طازة بالعسل والقشطة.",
        ingredients: ["دقيق", "سمنة بلدي", "عسل", "قشطة"],
        price: 120,
        image: "mesh.jpg"
    }

];


/* =========================
   VARIABLES
========================= */

const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");
const filterButtons = document.getElementById("filterButtons");

const cartButton = document.getElementById("cartButton");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const emptyCart = document.getElementById("emptyCart");

const foodModal = document.getElementById("foodModal");
const closeFoodModal = document.getElementById("closeFoodModal");
const foodModalContent = document.getElementById("foodModalContent");

const reservationModal = document.getElementById("reservationModal");
const reservationBtn = document.getElementById("reservationBtn");
const heroReservation = document.getElementById("heroReservation");
const finalReservation = document.getElementById("finalReservation");
const closeReservation = document.getElementById("closeReservation");

const reservationForm = document.getElementById("reservationForm");
const reservationSuccess = document.getElementById("reservationSuccess");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

const backTop = document.getElementById("backTop");
const header = document.getElementById("header");

let cart = JSON.parse(localStorage.getItem("azomaCart")) || [];
let favorites = JSON.parse(localStorage.getItem("azomaFavorites")) || [];

let currentFilter = "الكل";
let currentReview = 0;


/* =========================
   DISPLAY MENU
========================= */

function displayMenu(items) {

    menuGrid.innerHTML = "";

    if (items.length === 0) {
        document.getElementById("noResults").style.display = "block";
        return;
    }

    document.getElementById("noResults").style.display = "none";

    items.forEach(item => {

        const isFavorite = favorites.includes(item.id);

        const card = document.createElement("article");

        card.className = "food-card";

        card.innerHTML = `
            <div class="food-image">

                <img 
                    src="${item.image}" 
                    alt="${item.name}"
                    loading="lazy"
                >

                <button class="favorite ${isFavorite ? "active" : ""}" 
                        onclick="toggleFavorite(${item.id})">

                    <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>

                </button>

            </div>

            <div class="food-info">

                <span class="food-category">${item.category}</span>

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <div class="food-bottom">

                    <span class="food-price">
                        ${item.price} جنيه
                    </span>

                    <button class="add-btn" onclick="addToCart(${item.id})">
                        + أضف للعزومة
                    </button>

                </div>

            </div>
        `;

        card.addEventListener("click", function(event) {

            if (
                event.target.closest(".favorite") ||
                event.target.closest(".add-btn")
            ) {
                return;
            }

            openFoodModal(item.id);
        });

        menuGrid.appendChild(card);
    });
}


/* =========================
   FILTER MENU
========================= */

filterButtons.addEventListener("click", function(event) {

    const button = event.target.closest(".filter-btn");

    if (!button) {
        return;
    }

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    currentFilter = button.dataset.filter;

    filterMenu();
});


function filterMenu() {

    const searchValue = menuSearch.value.trim().toLowerCase();

    let filteredItems = menuItems.filter(item => {

        const matchesCategory =
            currentFilter === "الكل" ||
            item.category === currentFilter;

        const matchesSearch =
            item.name.toLowerCase().includes(searchValue) ||
            item.description.toLowerCase().includes(searchValue) ||
            item.category.toLowerCase().includes(searchValue);

        return matchesCategory && matchesSearch;
    });

    displayMenu(filteredItems);
}


/* =========================
   SEARCH
========================= */

menuSearch.addEventListener("input", function() {
    filterMenu();
});


/* =========================
   CATEGORY CARDS
========================= */

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", function() {

        const category = this.dataset.category;

        currentFilter = category;

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");

            if (btn.dataset.filter === category) {
                btn.classList.add("active");
            }
        });

        filterMenu();

        document.getElementById("menu").scrollIntoView({
            behavior: "smooth"
        });
    });

});


/* =========================
   FAVORITES
========================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites = favorites.filter(itemId => itemId !== id);

        showToast("اتشال من المفضلة");

    } else {

        favorites.push(id);

        showToast("اتضاف للمفضلة ❤️");
    }

    localStorage.setItem(
        "azomaFavorites",
        JSON.stringify(favorites)
    );

    filterMenu();
}


/* =========================
   CART
========================= */

function addToCart(id) {

    const item = menuItems.find(product => product.id === id);

    if (!item) {
        return;
    }

    const existingItem = cart.find(product => product.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: item.id,
            quantity: 1
        });
    }

    saveCart();

    showToast(`تمت إضافة ${item.name} إلى العزومة ❤️`);

    updateCart();

    cartButton.classList.add("cart-bounce");

    setTimeout(() => {
        cartButton.classList.remove("cart-bounce");
    }, 400);
}


function saveCart() {

    localStorage.setItem(
        "azomaCart",
        JSON.stringify(cart)
    );
}


function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {

        emptyCart.style.display = "flex";

    } else {

        emptyCart.style.display = "none";

        cart.forEach(cartItem => {

            const product = menuItems.find(
                item => item.id === cartItem.id
            );

            if (!product) {
                return;
            }

            const itemTotal =
                product.price * cartItem.quantity;

            total += itemTotal;
            count += cartItem.quantity;

            const cartElement = document.createElement("div");

            cartElement.className = "cart-item";

            cartElement.innerHTML = `

                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                >

                <div class="cart-item-info">

                    <h4>${product.name}</h4>

                    <p>${product.price} جنيه</p>

                    <div class="quantity">

                        <button onclick="changeQuantity(${product.id}, -1)">
                            -
                        </button>

                        <span>${cartItem.quantity}</span>

                        <button onclick="changeQuantity(${product.id}, 1)">
                            +
                        </button>

                    </div>

                </div>

                <button 
                    class="remove-item"
                    onclick="removeFromCart(${product.id})"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>

            `;

            cartItems.appendChild(cartElement);
        });
    }

    cartCount.textContent = count;
    cartTotal.textContent = total;
}


function changeQuantity(id, change) {

    const item = cart.find(product => product.id === id);

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
    }

    saveCart();
    updateCart();
}


function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();
    updateCart();

    showToast("تم حذف الطبق من العزومة");
}


/* =========================
   OPEN CART
========================= */

cartButton.addEventListener("click", function() {
    openCart();
});


function openCart() {

    cartSidebar.classList.add("active");
    overlay.classList.add("active");

    document.body.classList.add("no-scroll");
}


function closeCartSidebar() {

    cartSidebar.classList.remove("active");
    overlay.classList.remove("active");

    document.body.classList.remove("no-scroll");
}


closeCart.addEventListener("click", closeCartSidebar);
overlay.addEventListener("click", closeCartSidebar);


/* =========================
   FOOD MODAL
========================= */

function openFoodModal(id) {

    const item = menuItems.find(product => product.id === id);

    if (!item) {
        return;
    }

    foodModalContent.innerHTML = `

        <div class="food-detail">

            <div class="food-detail-image">
                <img 
                    src="${item.image}" 
                    alt="${item.name}"
                >
            </div>

            <div class="food-detail-info">

                <span class="food-category">
                    ${item.category}
                </span>

                <h2>${item.name}</h2>

                <div class="gold-line"></div>

                <p>
                    ${item.description}
                </p>

                <ul class="ingredients">

                    ${item.ingredients
                        .map(ingredient => `<li>${ingredient}</li>`)
                        .join("")
                    }

                </ul>

                <div class="detail-price">
                    ${item.price} جنيه
                </div>

                <button 
                    class="detail-add"
                    onclick="addToCart(${item.id}); closeFoodModalWindow();"
                >
                    + أضف للعزومة
                </button>

            </div>

        </div>
    `;

    foodModal.classList.add("active");

    document.body.classList.add("no-scroll");
}


function closeFoodModalWindow() {

    foodModal.classList.remove("active");

    document.body.classList.remove("no-scroll");
}


closeFoodModal.addEventListener(
    "click",
    closeFoodModalWindow
);

foodModal.addEventListener("click", function(event) {

    if (event.target === foodModal) {
        closeFoodModalWindow();
    }

});


/* =========================
   RESERVATION
========================= */

function openReservation() {

    reservationModal.classList.add("active");

    document.body.classList.add("no-scroll");
}


function closeReservationModal() {

    reservationModal.classList.remove("active");

    document.body.classList.remove("no-scroll");
}


reservationBtn.addEventListener("click", openReservation);

heroReservation.addEventListener("click", openReservation);

finalReservation.addEventListener("click", openReservation);

closeReservation.addEventListener(
    "click",
    closeReservationModal
);


reservationModal.addEventListener("click", function(event) {

    if (event.target === reservationModal) {
        closeReservationModal();
    }

});


/* =========================
   RESERVATION FORM
========================= */

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("reservationName").value.trim();

    const phone =
        document.getElementById("reservationPhone").value.trim();

    const people =
        document.getElementById("reservationPeople").value;

    const date =
        document.getElementById("reservationDate").value;

    const time =
        document.getElementById("reservationTime").value;


    if (!name || !phone || !people || !date || !time) {

        showToast("من فضلك املأ كل البيانات المطلوبة");

        return;
    }


    if (phone.length < 10) {

        showToast("اكتب رقم هاتف صحيح");

        return;
    }


    reservationForm.style.display = "none";

    reservationSuccess.classList.add("show");

});


/* =========================
   CHECKOUT
========================= */

document.getElementById("checkoutBtn")
    .addEventListener("click", function() {

        if (cart.length === 0) {

            showToast("العزومة لسه فاضية ❤️");

            return;
        }

        closeCartSidebar();

        openReservation();

        showToast("راجع بيانات الحجز لإتمام الطلب");

    });


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function() {

        toast.classList.remove("show");

    }, 3000);
}


/* =========================
   HEADER SCROLL
========================= */

window.addEventListener("scroll", function() {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

        backTop.classList.add("show");

    } else {

        header.classList.remove("scrolled");

        backTop.classList.remove("show");
    }

});


/* =========================
   BACK TO TOP
========================= */

backTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function() {

    navbar.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );
                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   STATS COUNTER
========================= */

const statsSection =
    document.querySelector(".stats-section");

let statsStarted = false;


const statsObserver =
    new IntersectionObserver(

        function(entries) {

            if (
                entries[0].isIntersecting &&
                !statsStarted
            ) {

                statsStarted = true;

                document
                    .querySelectorAll(".stat strong")
                    .forEach(counter => {

                        const target =
                            Number(counter.dataset.target);

                        let current = 0;

                        const increment =
                            Math.max(1, Math.ceil(target / 50));

                        const timer =
                            setInterval(function() {

                                current += increment;

                                if (current >= target) {

                                    current = target;

                                    clearInterval(timer);
                                }

                                counter.textContent =
                                    current + (target === 10 ? "" : "+");

                            }, 35);

                    });
            }

        },

        {
            threshold: 0.4
        }

    );


statsObserver.observe(statsSection);


/* =========================
   REVIEWS
========================= */

const reviews =
    document.querySelectorAll(".review");

const nextReview =
    document.getElementById("nextReview");

const prevReview =
    document.getElementById("prevReview");


function showReview(index) {

    reviews.forEach(review => {

        review.classList.remove("active");

    });

    reviews[index].classList.add("active");
}


nextReview.addEventListener("click", function() {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview(currentReview);

});


prevReview.addEventListener("click", function() {

    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    showReview(currentReview);

});


/* Auto Reviews */

setInterval(function() {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview(currentReview);

}, 6000);


/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages =
    document.querySelectorAll(".gallery-item img");


galleryImages.forEach(image => {

    image.addEventListener("click", function() {

        const lightbox =
            document.createElement("div");

        lightbox.style.position = "fixed";
        lightbox.style.inset = "0";
        lightbox.style.zIndex = "5000";
        lightbox.style.background = "rgba(20,10,8,0.92)";
        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";
        lightbox.style.padding = "30px";
        lightbox.style.cursor = "pointer";

        const imageElement =
            document.createElement("img");

        imageElement.src = this.src;

        imageElement.style.maxWidth = "100%";
        imageElement.style.maxHeight = "90vh";
        imageElement.style.objectFit = "contain";

        lightbox.appendChild(imageElement);

        document.body.appendChild(lightbox);

        document.body.classList.add("no-scroll");

        lightbox.addEventListener("click", function() {

            lightbox.remove();

            document.body.classList.remove("no-scroll");

        });

    });

});


/* =========================
   LANGUAGE SWITCH
========================= */

const languageBtn =
    document.getElementById("languageBtn");

const languageText =
    document.getElementById("languageText");

let englishMode = false;


languageBtn.addEventListener("click", function() {

    englishMode = !englishMode;

    if (englishMode) {

        languageText.textContent = "AR";

        showToast("English mode is available in this demo");

    } else {

        languageText.textContent = "EN";

        showToast("أهلاً بيك تاني في عزومة ❤️");

    }

});


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeCartSidebar();

        closeFoodModalWindow();

        closeReservationModal();

        navbar.classList.remove("active");

    }

});


/* =========================
   SET MINIMUM RESERVATION DATE
========================= */

const reservationDate =
    document.getElementById("reservationDate");

const today =
    new Date().toISOString().split("T")[0];

reservationDate.min = today;


/* =========================
   INITIALIZE
========================= */

displayMenu(menuItems);

updateCart();


/* =========================
   SIMPLE HERO PARALLAX
========================= */

window.addEventListener("scroll", function() {

    const hero =
        document.querySelector(".hero");

    if (!hero) {
        return;
    }

    const scrollPosition =
        window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.25}px`;
    }

});