// ---------------Meals modal menu------------------------

// -----------------Variable---------------------------
const mealsMeat = document.getElementById("meatMeal");
const mealsMeatList = mealsMeat.querySelectorAll("li");
const buttonsMeat = document.querySelectorAll(".meals__main--buttons > button");
const mealsFish = document.getElementById("fishMeal");
const mealsFishList = mealsFish.querySelectorAll("li");
const mealsVege = document.getElementById("vegeMeal");
const mealsVegeList = mealsVege.querySelectorAll("li");
mealsMeat.style.zIndex = 7; //Je place ma variable en premiere position
for (let i = 0; i < mealsMeatList.length; i++) {
  mealsMeatList[i].classList.add("active");

  for (let j = 0; j < buttonsMeat.length; j++) {
    buttonsMeat[j].addEventListener("click", () => {
      // const transitionTranslate = `${(i + 0.2) / 5}s ease-in`; //variable transition appartion liste
      if (j === 1) {
        mealsFish.style.zIndex = 7;
        mealsMeat.style.zIndex = 2; //modif priorité de placement
        mealsVege.style.zIndex = 2;

        buttonsMeat[1].classList.add("active");
        buttonsMeat[0].classList.remove("active");
        buttonsMeat[2].classList.remove("active");

        mealsMeatList[i].classList.remove("active");
        mealsVegeList[i].classList.remove("active");

        mealsVegeList[i].style.transition = `${(i + 0.2) / 5}s ease-in`; // j'attribue une transition différente a chaque éléments
        mealsMeatList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;

        mealsFishList[i].style.transition = `1s ease-in-out`;
        mealsFishList[i].classList.add("active");

        document.querySelector(
          ".meals__main--image"
        ).style.backgroundImage = `url(assets/resto/meals/10.jpg)`;

        document.getElementById("title_meal").innerHTML =
          mealsFishList[1].textContent; // image numero 1 qui s'affiche lors du changement de catégorie
      } else if (j === 2) {
        mealsFish.style.zIndex = 2;
        mealsMeat.style.zIndex = 2;
        mealsVege.style.zIndex = 7;

        buttonsMeat[2].classList.add("active");
        buttonsMeat[0].classList.remove("active");
        buttonsMeat[1].classList.remove("active");

        mealsMeatList[i].classList.remove("active");
        mealsFishList[i].classList.remove("active");

        mealsFishList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;
        mealsMeatList[i].style.transition = `${(i + 0.2) / 5}s ease-in`; //idem j===1

        mealsVegeList[i].style.transition = `1s ease-in-out`;
        mealsVegeList[i].classList.add("active");

        document.querySelector(
          ".meals__main--image"
        ).style.backgroundImage = `url(assets/resto/meals/20.jpg)`;

        document.getElementById("title_meal").innerHTML =
          mealsVegeList[1].textContent;
      } else {
        mealsFish.style.zIndex = 2;
        mealsMeat.style.zIndex = 7;
        mealsVege.style.zIndex = 2;

        buttonsMeat[0].classList.add("active");
        buttonsMeat[1].classList.remove("active");
        buttonsMeat[2].classList.remove("active");

        mealsFishList[i].classList.remove("active");
        mealsVegeList[i].classList.remove("active");

        mealsVegeList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;
        mealsFishList[i].style.transition = `${(i + 0.2) / 5}s ease-in`;

        mealsMeatList[i].style.transition = `1s ease-in-out`; //idem j===1
        mealsMeatList[i].classList.add("active");

        document.querySelector(
          ".meals__main--image"
        ).style.backgroundImage = `url(assets/resto/meals/0.jpg)`;

        document.getElementById("title_meal").innerHTML =
          mealsMeatList[1].textContent;
      }
    });
  }
}
const mealInfos = document.querySelectorAll(".meals__main--text__grid > li");
let result = [].filter.call(mealInfos, function (el) {
  return !el.classList.contains("titlemeal");
});

for (let i = 0; i < result.length; i++) {
  if (i % 2 == 0) {
    result[i].addEventListener("click", (e) => {
      console.log(i);
      // modif de l'image a chaque plat selectionné

      document.querySelector(
        ".meals__main--image"
      ).style.backgroundImage = `url(assets/resto/meals/${i}.jpg)`;
      document.getElementById("title_meal").innerHTML = e.target.textContent; //modif titre a chaque plat selectionné
    });
    result[i].addEventListener("mouseover", () => {
      result[i].style.color = "white";
      console.log(i);
    });
    result[i].addEventListener("mouseout", () => {
      result[i].style.color = "black";
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
// ----------------------------Reveal Scroll-------------------------------
//animation Scroll
const ratio = 0.4;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("revealScroll");
      entry.target.classList.remove("revealRestoLeft");
      entry.target.classList.remove("revealRestoRight"); // remove la class de base et j'ajoute la class qui permet de supprimer l'opacité et la translation
      entry.target.classList.remove("revealRestoBottom");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".revealRestoLeft").forEach(function (r) {
  observer.observe(r);
});
document.querySelectorAll(".revealRestoRight").forEach(function (r) {
  //j'attribue des class a chacun des effets désirés
  observer.observe(r);
});
document.querySelectorAll(".revealRestoBottom").forEach(function (r) {
  observer.observe(r);
});

const dessertGridImage = document.querySelectorAll(".dessert__grid--image");
for (let i = 0; i < dessertGridImage.length; i++) {
  dessertGridImage[i].style.transitionDelay = `${(i + 0.5) / 10}s`; // j'attribue un délai de transition différent a chacun de mes éléments
}
