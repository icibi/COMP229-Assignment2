const calories = document.querySelector(".bmr-calculator2 .result .calories");
const calculateBtn = document.querySelector(
  ".bmr-calculator2 .result .calculate-btn"
);
const age = document.querySelector(".bmr-calculator2 form #age");
const height = document.querySelector(".bmr-calculator2 form #height");
const weight = document.querySelector(".bmr-calculator2 form #weight");
const errorMessage = document.querySelector(
  ".bmr-calculator2 .result .error-message"
);


const calculateBMR = (weight, height, age, gender) => {
  if (gender == "male") {
    return 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
  }

  return 655 + weight * 4.35 + height * 4.7 - age * 4.7;
};

calculateBtn.addEventListener("click", () => {
  if (
    age.classList.contains("invalid") ||
    height.classList.contains("invalid") ||
    weight.classList.contains("invalid")
  ) {
    errorMessage.classList.add("active");
    return;
  }

  errorMessage.classList.remove("active");

  let genderValue = document.querySelector(
    ".bmr-calculator2 form input[name='gender']:checked"
  ).value;

  let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);

  calories.innerHTML = BMR.toLocaleString("en-US");
});

// Input Validation

age.addEventListener("input", (e) => {
  let ageValue = e.target.value;

  if (!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100) {
    age.classList.add("invalid");
  } else {
    age.classList.remove("invalid");
  }
});

height.addEventListener("input", (e) => {
  let heightValue = e.target.value;

  if (!heightValue || isNaN(heightValue) || heightValue < 0) {
    height.classList.add("invalid");
  } else {
    height.classList.remove("invalid");
  }
});

weight.addEventListener("input", (e) => {
  let weightValue = e.target.value;

  if (!weightValue || isNaN(weightValue) || weightValue < 0) {
    weight.classList.add("invalid");
  } else {
    weight.classList.remove("invalid");
  }
});