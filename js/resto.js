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
          if (mealsVegeList[i]) {
            mealsVegeList[i].classList.remove("active");
            mealsVegeList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;
          }
          mealsMeatList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;
          mealsFishList[i].style.transition = `1s ease-in-out`;
          document.getElementById(
            "meals__image"
          ).src = `assets/resto/meals/12.jpg`;
          mealsFishList[i].classList.add("active");
          document.getElementById("title_meal").innerHTML =
            mealsFishList[1].textContent;
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
          if (mealsVegeList[i]) {
            mealsVegeList[i].style.transition = `1s ease-in-out`;
            mealsVegeList[i].classList.add("active");
          }
          document.getElementById(
            "meals__image"
          ).src = `assets/resto/meals/23.jpg`;
          document.getElementById("title_meal").innerHTML =
            mealsVegeList[1].textContent;
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
          if (mealsVegeList[i]) {
            mealsVegeList[i].classList.remove("active");
            mealsVegeList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;
          }
          mealsFishList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;

          document.getElementById(
            "meals__image"
          ).src = `assets/resto/meals/1.jpg`;
          document.getElementById("title_meal").innerHTML =
            mealsMeatList[1].textContent;
        }
      });
    }
  }
  const mealInfos = document.querySelectorAll(".meals__main--text__grid > li");
  for (let i = 0; i < mealInfos.length; i++) {
    mealInfos[i].addEventListener("click", (e) => {
      document.getElementById(
        "meals__image"
      ).src = `assets/resto/meals/${i}.jpg`;
      document.getElementById("title_meal").innerHTML = e.target.textContent;
    });
    mealInfos[i].addEventListener("mouseover", () => {
      mealInfos[i].style.color = "white";
    });
    mealInfos[i].addEventListener("mouseout", () => {
      mealInfos[i].style.color = "black";
    });
  }
}
// reveal titre accompagenement plats
const titleSide = document.querySelectorAll(".side__grid--plate");
for (let i = 0; i < titleSide.length; i++) {
  titleSide[i].addEventListener("mouseover", () => {
    const h3 = titleSide[i].childNodes;
    for (let j = 0; j < h3.length; j++) {
      h3[j].style.opacity = "1";
      h3[j].style.height = "18%";
    }
  });
  titleSide[i].addEventListener("mouseout", () => {
    const h3 = titleSide[i].childNodes;
    for (let j = 0; j < h3.length; j++) {
      h3[j].style.opacity = "0";
      h3[j].style.height = "0";
    }
  });
}
// --------Hover desserts------------------
const gridText = document.querySelectorAll(".dessert__grid--text");

for (let i = 0; i < gridText.length; i++) {
  gridText[i].addEventListener("mouseover", () => {
    gridText[i].style.opacity = "1";
  });
  gridText[i].addEventListener("mouseout", () => {
    gridText[i].style.opacity = "0";
  });
}
