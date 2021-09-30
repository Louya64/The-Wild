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
	console.log(window.innerHeight);
	if (window.innerWidth > 800) {
		if (e.deltaY === 150) {
			menu.style.transform = "translateY(-25vh)";
			window.addEventListener("scroll", () => {
				if (scrollY > window.innerHeight) {
					menu.style.background = "black";
				} else {
					menu.style.background = "none";
				}
			});
		} else {
			menu.style.transform = "translateY(0)";
		}
	} else if (scrollY >= window.innerHeight) {
		toggleBtn.style.background = "black";
	} else {
		toggleBtn.style.background = "none";
	}
});

////// slider home  /////////
const homeSliderItems = document.querySelectorAll(".homeEvents__slider__item");
let i = 0;
showSlides();

function showSlides() {
	if (i === 0) {
		homeSliderItems[homeSliderItems.length - 2].classList.remove("active");
		homeSliderItems[homeSliderItems.length - 2].classList.remove("activeEnd");
		homeSliderItems[homeSliderItems.length - 1].classList.add("activeEnd");
		homeSliderItems[i].classList.add("active");
	} else if (i === 1) {
		homeSliderItems[homeSliderItems.length - 1].classList.remove("active");
		homeSliderItems[homeSliderItems.length - 1].classList.remove("activeEnd");
		homeSliderItems[i - 1].classList.add("activeEnd");
		homeSliderItems[i].classList.add("active");
	} else {
		homeSliderItems[i - 2].classList.remove("active");
		homeSliderItems[i - 2].classList.remove("activeEnd");
		homeSliderItems[i - 1].classList.add("activeEnd");
		homeSliderItems[i].classList.add("active");
	}
	i++;
	if (i === homeSliderItems.length) {
		i = 0;
	}
	setTimeout(showSlides, 5000);
}
