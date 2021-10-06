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