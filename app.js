let day = document.querySelector(".day input");
let month = document.querySelector(".month input");
let year = document.querySelector(".year input");

let yearOut = document.querySelector(".year_out");
let dayOut = document.querySelector(".day_out");
let monthOut = document.querySelector(".month_out");

let button = document.querySelector("button");
let m_error = document.querySelector(".m_error");
let d_error = document.querySelector(".d_error");
let y_error = document.querySelector(".y_error");

let today = new Date();
day.addEventListener("input", () => {
  if (day.value.trim() === "") {
    day.classList.add("red_border");
    d_error.innerHTML = "This field is required";
  } else if (day.value > 31 || day.value === 0 || day.value < 0) {
    day.classList.add("red_border");
    d_error.innerHTML = "Invalid day";
  } else if (isNaN(day.value)) {
    day.classList.add("red_border");
    d_error.innerHTML = "Must be a valid day";
  } else {
    day.classList.remove("red_border");
    d_error.innerHTML = "";
  }
});

month.addEventListener("input", () => {
  if (month.value.trim() === "") {
    month.classList.add("red_border");
    m_error.innerHTML = "This field is required";
  } else if (month.value > 12 || month.value === 0 || month.value < 0) {
    month.classList.add("red_border");
    m_error.innerHTML = "Invalid month";
  } else if (isNaN(month.value)) {
    month.classList.add("red_border");
    m_error.innerHTML = "Must be a valid month";
  } else {
    month.classList.remove("red_border");
    m_error.innerHTML = "";
  }
});

year.addEventListener("input", () => {
  if (year.value.trim() === "") {
    year.classList.add("red_border");
    y_error.innerHTML = "This field is required";
  } else if (isNaN(year.value)) {
    year.classList.add("red_border");
    y_error.innerHTML = "Must be a valid year";
  } else if (year.value > today.getFullYear()) {
    year.classList.add("red_border");
    y_error.innerHTML = "Must be in the past";
  } else if (year.value === 0 || year.value < 0) {
    year.classList.add("red_border");
    y_error.innerHTML = "Invalid year";
  } else {
    year.classList.remove("red_border");
    y_error.innerHTML = "";
  }
});

button.addEventListener("click", () => {
  let inputForm = `${month.value}/${day.value}/${year.value}`;
  let date = new Date(inputForm);
  let birthYear = date.getFullYear();
  let birthMonth = date.getMonth() + 1;
  let birthDay = date.getDate();
  console.log(birthYear);
  let years = today.getFullYear() - birthYear;
  let months = today.getMonth() + 1 - birthMonth;
  let days = today.getDate() - birthDay;
  if (days < 0) {
    months -= 1;
    const daysInLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days = daysInLastMonth + days;
  }

  if (months < 0) {
    years -= 1;
    months = 12 + months;
  }
  yearOut.innerHTML = years;
  dayOut.innerHTML = days;
  monthOut.innerHTML = months;
  if (isNaN(yearOut.innerHTML)) {
    y_error.innerHTML = "Invalid Inputs";
    m_error.innerHTML = "Invalid Inputs";
    d_error.innerHTML = "Invalid Inputs";
    yearOut.innerHTML = "- -";
    dayOut.innerHTML = "- -";
    monthOut.innerHTML = "- -";
  } else {
    y_error.innerHTML = "";
    m_error.innerHTML = "";
    d_error.innerHTML = "";
  }
});
