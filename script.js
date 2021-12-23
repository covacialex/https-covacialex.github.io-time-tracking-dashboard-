"use strict";

const day = document.getElementById("profile-timeline-day");
const week = document.getElementById("profile-timeline-week");
const month = document.getElementById("profile-timeline-month");

const timeWork = document.getElementById("time-work");
const timePlay = document.getElementById("time-play");
const timeStudy = document.getElementById("time-study");
const timeExercise = document.getElementById("time-exercise");
const timeSocial = document.getElementById("time-social");
const timeSelfcare = document.getElementById("time-selfcare");

const timelinePrev = document.querySelectorAll(".timeline-prev");
const timelineWork = document.getElementById("timeline-work");
const timelinePlay = document.getElementById("timeline-play");
const timelineStudy = document.getElementById("timeline-study");
const timelineExercise = document.getElementById("timeline-exercise");
const timelineSocial = document.getElementById("timeline-social");
const timelineSelfcare = document.getElementById("timeline-selfcare");

let daily = ["5hrs", "1hr", "0hrs", "1hr", "1hr", "0hrs"];
let dailyPrev = ["7hrs", "2hrs", "1hr", "1hr", "3hrs", "1hr"];
let weekly = ["32hrs", "10hrs", "4hrs", "4hrs", "5hrs", "2hrs"];
let weeklyPrev = ["36hrs", "8hrs", "7hrs", "5hrs", "10hrs", "2hrs"];
let monthly = ["103hrs", "23hrs", "13hrs", "11hrs", "21hrs", "7hrs"];
let monthlyPrev = ["128hrs", "29hrs", "19hrs", "18hrs", "23hrs", "11hrs"];

const changeText = function (el) {
  el.classList.add(`profile-timeline-active`);

  if (el === day) {
    week.classList.add("profile-timeline");
    week.classList.remove(`profile-timeline-active`);
    month.classList.remove(`profile-timeline-active`);
  } else if (el === week) {
    day.classList.remove(`profile-timeline-active`);
    month.classList.remove(`profile-timeline-active`);
  } else if (el === month) {
    week.classList.add("profile-timeline");
    day.classList.remove(`profile-timeline-active`);
    week.classList.remove(`profile-timeline-active`);
  }
};

day.addEventListener("click", function () {
  timelinePrev.forEach((element) => (element.textContent = `Yesterday - `));

  changeText(day);

  timeWork.textContent = daily[0];
  timePlay.textContent = daily[1];
  timeStudy.textContent = daily[2];
  timeExercise.textContent = daily[3];
  timeSocial.textContent = daily[4];
  timeSelfcare.textContent = daily[5];
  timelineWork.textContent = dailyPrev[0];
  timelinePlay.textContent = dailyPrev[1];
  timelineStudy.textContent = dailyPrev[2];
  timelineExercise.textContent = dailyPrev[3];
  timelineSocial.textContent = dailyPrev[4];
  timelineSelfcare.textContent = dailyPrev[5];
});

week.addEventListener("click", function () {
  timelinePrev.forEach((element) => (element.textContent = `Last Week - `));
  changeText(week);

  timeWork.textContent = weekly[0];
  timePlay.textContent = weekly[1];
  timeStudy.textContent = weekly[2];
  timeExercise.textContent = weekly[3];
  timeSocial.textContent = weekly[4];
  timeSelfcare.textContent = weekly[5];

  timelineWork.textContent = weeklyPrev[0];
  timelinePlay.textContent = weeklyPrev[1];
  timelineStudy.textContent = weeklyPrev[2];
  timelineExercise.textContent = weeklyPrev[3];
  timelineSocial.textContent = weeklyPrev[4];
  timelineSelfcare.textContent = weeklyPrev[5];
});

month.addEventListener("click", function () {
  timelinePrev.forEach((element) => (element.textContent = `Last Month - `));

  changeText(month);

  timeWork.textContent = monthly[0];
  timePlay.textContent = monthly[1];
  timeStudy.textContent = monthly[2];
  timeExercise.textContent = monthly[3];
  timeSocial.textContent = monthly[4];
  timeSelfcare.textContent = monthly[5];

  timelineWork.textContent = monthlyPrev[0];
  timelinePlay.textContent = monthlyPrev[1];
  timelineStudy.textContent = monthlyPrev[2];
  timelineExercise.textContent = monthlyPrev[3];
  timelineSocial.textContent = monthlyPrev[4];
  timelineSelfcare.textContent = monthlyPrev[5];
});
