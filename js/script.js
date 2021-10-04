// nanbar
const toggleBtn = document.querySelector(".toggle-btn");
const spanToggle = toggleBtn.querySelectorAll("span");
const menu = document.querySelector(".menu");

for (let i = 0; i < spanToggle.length; i++) {
	toggleBtn.addEventListener("click", () => {
		spanToggle[i].classList.toggle("active");
		menu.classList.toggle("active");
	});
}
document.addEventListener("wheel", (e) => {
	if (window.innerWidth > 800) {
		if (e.deltaY > 0) {
			menu.style.transform = "translateY(-25vh)";
		} else {
			menu.style.transform = "translateY(0)";
		}
	} else if (scrollY >= window.innerHeight) {
		toggleBtn.style.background = "black";
	} else {
		toggleBtn.style.background = "none";
	}
});
window.addEventListener("scroll", () => {
	if (scrollY > window.innerHeight) {
		menu.style.background = "black";
	} else {
		menu.style.background = "none";
	}
});
// // ------------------Caroussel Home--------------
// const sliders = document.querySelectorAll(".caroussel__container");
// const sliderImg = document.querySelectorAll(".caroussel__container__image");
// const sliderTitle = document.querySelectorAll(".caroussel__container__title");
// //Image array
// const urlImage = [
// 	"assets/restaurant.jpg",
// 	"assets/platsHeader.jpg",
// 	"assets/barPhoto.jpg",
// 	"assets/newsphoto.jpg",
// ];
// let count = 0;
// sliderImg[count].style.backgroundImage = `url(assets/restaurant.jpg)`;

// function slideNext() {
// 	sliderImg[count].style.transform = "scale(1.0)";
// 	sliderTitle[count].style.zIndex = "0";
// 	sliders[count].style.opacity = "0";
// 	if (count < sliders.length - 1) {
// 		count++;
// 	} else {
// 		count = 0;
// 	}
// 	sliderImg[count].style.backgroundImage = `url(${urlImage[count]})`;
// 	sliders[count].style.opacity = "1";
// 	sliderTitle[count].style.zIndex = "1";
// 	sliderImg[count].style.transform = "scale(1.05)";
// }
// document.querySelector(".right").addEventListener("click", () => {
// 	slideNext();
// });

// function slidePrev() {
// 	sliderImg[count].style.transform = "scale(1.0)";
// 	sliderTitle[count].style.zIndex = "0";
// 	sliders[count].style.opacity = "0";

// 	if (count > 0) {
// 		count--;
// 	} else {
// 		count = sliders.length - 1;
// 	}
// 	sliderImg[count].style.backgroundImage = `url(${urlImage[count]})`;
// 	sliders[count].style.opacity = "1";
// 	sliderTitle[count].style.zIndex = "1";
// 	sliderImg[count].style.transform = "scale(1.05)";
// }
// document.querySelector(".left").addEventListener("click", () => {
// 	slidePrev();
// });
// let timer = setInterval(slideNext, 5000);
// function startTimer() {
// 	timer = setInterval(slideNext, 5000);
// }
// function stopTimer() {
// 	clearInterval(timer);
// }

// // End caroussel------------------------------
// // Reveal chevrons caroussel-----------------------------
// const chevronRight = document.querySelector(".right");
// const chevronLeft = document.querySelector(".left");
// chevronRight.addEventListener("mouseover", () => {
// 	chevronRight.style.opacity = "1";
// 	stopTimer();
// });
// chevronRight.addEventListener("mouseout", () => {
// 	chevronRight.style.opacity = "0";
// 	startTimer();
// });
// chevronLeft.addEventListener("mouseover", () => {
// 	chevronLeft.style.opacity = "1";
// 	stopTimer();
// });
// chevronLeft.addEventListener("mouseout", () => {
// 	chevronLeft.style.opacity = "0";
// 	startTimer();
// });

// // End reveal chevrons caroussel---------------------------
// // scroll Chevron-------------------------------------------
// document.querySelector(".down").addEventListener("click", () => {
// 	window.scrollTo(0, window.innerHeight);
// });
// // End scroll chevrons
// // ---------------End caroussel Home---------------------
// ///////////////// slider home  ///////////////////////////
// const homeSliderItems = document.querySelectorAll(".homeEvents__slider__item");
// let i = 0;
// showSlides();

// function showSlides() {
// 	if (window.innerWidth < 800) {
// 		if (i === 0) {
// 			homeSliderItems[homeSliderItems.length - 2].classList.remove("active");
// 			homeSliderItems[homeSliderItems.length - 2].classList.remove("activeEnd");
// 			homeSliderItems[homeSliderItems.length - 1].classList.add("activeEnd");
// 			homeSliderItems[i].classList.add("active");
// 		} else if (i === 1) {
// 			homeSliderItems[homeSliderItems.length - 1].classList.remove("active");
// 			homeSliderItems[homeSliderItems.length - 1].classList.remove("activeEnd");
// 			homeSliderItems[i - 1].classList.add("activeEnd");
// 			homeSliderItems[i].classList.add("active");
// 		} else {
// 			homeSliderItems[i - 2].classList.remove("active");
// 			homeSliderItems[i - 2].classList.remove("activeEnd");
// 			homeSliderItems[i - 1].classList.add("activeEnd");
// 			homeSliderItems[i].classList.add("active");
// 		}
// 	} else if (window.innerWidth > 800) {
// 		if (i === 0) {
// 			if (
// 				!homeSliderItems[homeSliderItems.length - 1].classList.contains(
// 					"activeLeft"
// 				)
// 			) {
// 				homeSliderItems[homeSliderItems.length - 1].classList.add(
// 					"activeRight"
// 				);
// 				homeSliderItems[homeSliderItems.length - 1].classList.add("activeLeft");
// 			}
// 			homeSliderItems[homeSliderItems.length - 3].classList.remove(
// 				"activeRight"
// 			);
// 			homeSliderItems[homeSliderItems.length - 3].classList.remove(
// 				"activeLeft"
// 			);
// 			homeSliderItems[homeSliderItems.length - 3].classList.remove("activeEnd");
// 			homeSliderItems[homeSliderItems.length - 2].classList.add("activeEnd");
// 			homeSliderItems[homeSliderItems.length - 1].classList.add("activeLeft");
// 			homeSliderItems[i].classList.add("activeRight");
// 		} else if (i === 1) {
// 			homeSliderItems[homeSliderItems.length - 2].classList.remove(
// 				"activeRight"
// 			);
// 			homeSliderItems[homeSliderItems.length - 2].classList.remove(
// 				"activeLeft"
// 			);
// 			homeSliderItems[homeSliderItems.length - 2].classList.remove("activeEnd");
// 			homeSliderItems[homeSliderItems.length - 1].classList.add("activeEnd");
// 			homeSliderItems[i - 1].classList.add("activeLeft");
// 			homeSliderItems[i].classList.add("activeRight");
// 		} else if (i === 2) {
// 			homeSliderItems[homeSliderItems.length - 1].classList.remove(
// 				"activeRight"
// 			);
// 			homeSliderItems[homeSliderItems.length - 1].classList.remove(
// 				"activeLeft"
// 			);
// 			homeSliderItems[homeSliderItems.length - 1].classList.remove("activeEnd");
// 			homeSliderItems[i - 2].classList.add("activeEnd");
// 			homeSliderItems[i - 1].classList.add("activeLeft");
// 			homeSliderItems[i].classList.add("activeRight");
// 		} else {
// 			homeSliderItems[i - 3].classList.remove("activeRight");
// 			homeSliderItems[i - 3].classList.remove("activeLeft");
// 			homeSliderItems[i - 3].classList.remove("activeEnd");
// 			homeSliderItems[i - 2].classList.add("activeEnd");
// 			homeSliderItems[i - 1].classList.add("activeLeft");
// 			homeSliderItems[i].classList.add("activeRight");
// 		}
// 	}
// 	i++;
// 	if (i === homeSliderItems.length) {
// 		i = 0;
// 	}
// 	setTimeout(showSlides, 5000);
// }

// ///////////////// end slider home  ///////////////////////////
