// ---------------Meals reveal------------------------
const mealsMeat = document.querySelector(".meals__main--text__grid");

if (mealsMeat) {
  const mealsMeatList = mealsMeat.querySelectorAll("li");
  const buttonsMeat = document.querySelectorAll(
    ".meals__main--buttons > button"
  );
  const mealsFish = document.getElementById("fishMeal");
  const mealsFishList = mealsFish.querySelectorAll("li");
  const mealsVege = document.getElementById("vegeMeal");
  const mealsVegeList = mealsVege.querySelectorAll("li");
  mealsMeat.style.zIndex = 7;
  for (let i = 0; i < mealsMeatList.length; i++) {
    mealsMeatList[i].classList.add("active");

    for (let j = 0; j < buttonsMeat.length; j++) {
      buttonsMeat[j].addEventListener("click", () => {
        if (j === 1) {
          mealsFish.style.zIndex = 7;
          mealsMeat.style.zIndex = 0;
          mealsVege.style.zIndex = 0;
          buttonsMeat[1].classList.add("active");
          buttonsMeat[0].classList.remove("active");
          buttonsMeat[2].classList.remove("active");
          mealsMeatList[i].classList.remove("active");
          mealsVegeList[i].classList.remove("active");
          mealsMeatList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;
          mealsVegeList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;
          mealsFishList[i].style.transition = `1s ease-in-out`;
          // mealsFishList[i].style.transitionDelay = `1s`;
          mealsFishList[i].classList.add("active");
        } else if (j === 2) {
          mealsFish.style.zIndex = 0;
          mealsMeat.style.zIndex = 0;
          mealsVege.style.zIndex = 7;
          buttonsMeat[2].classList.add("active");
          buttonsMeat[0].classList.remove("active");
          buttonsMeat[1].classList.remove("active");
          mealsMeatList[i].classList.remove("active");
          mealsFishList[i].classList.remove("active");
          mealsFishList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;
          mealsMeatList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;
          mealsVegeList[i].style.transition = `1s ease-in-out`;
          mealsVegeList[i].classList.add("active");
        } else {
          mealsFish.style.zIndex = 0;
          mealsMeat.style.zIndex = 7;
          mealsVege.style.zIndex = 0;
          buttonsMeat[0].classList.add("active");
          mealsMeatList[i].classList.add("active");
          buttonsMeat[1].classList.remove("active");
          buttonsMeat[2].classList.remove("active");
          mealsMeatList[i].style.transition = `1s ease-in-out`;
          mealsFishList[i].classList.remove("active");
          mealsVegeList[i].classList.remove("active");
          mealsFishList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;
          mealsVegeList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;
        }
      });
    }
  }
  const mealInfos = document.querySelectorAll(".meals__main--text__grid > li");
  for (let i = 0; i < mealInfos.length; i++) {
    mealInfos[i].addEventListener("click", () => {
      console.log("test");
    });
  }
}
