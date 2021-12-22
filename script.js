"use strict";

const day = document.getElementById("day");
const week = document.getElementById("profile-timeline-week");
const month = document.getElementById("profile-timeline-month");
const trackTimeWork = document.getElementById("track-time-work");
const trackTimePlay = document.getElementById("track-time-play");
const trackTimeStudy = document.getElementById("track-time-study");
const trackTimeExercise = document.getElementById("track-time-exercise");
const trackTimeSocial = document.getElementById("track-time-social");
const trackTimeSelfcare = document.getElementById("track-time-selfcare");
const trackTimelineWork = document.getElementById("track-timeline-work");
const trackTimelinePlay = document.getElementById("track-timeline-play");
const trackTimelineStudy = document.getElementById("track-timeline-study");
const trackTimelineExercise = document.getElementById(
  "track-timeline-exercise"
);
const trackTimelineSocial = document.getElementById("track-timeline-social");
const trackTimelineSelfcare = document.getElementById(
  "track-timeline-selfcare"
);

let daily = ["5hrs", "1hr", "0hrs", "1hr", "1hr", "0hrs"];
let dailyPrev = ["7hrs", "2hrs", "1hr", "1hr", "3hrs", "1hr"];
let weekly = ["32hrs", "10hrs", "4hrs", "4hrs", "5hrs", "2hrs"];
let weeklyPrev = ["36hrs", "8hrs", "7hrs", "5hrs", "10hrs", "2hrs"];
let monthly = ["103hrs", "23hrs", "13hrs", "11hrs", "21hrs", "7hrs"];
let monthlyPrev = ["128hrs", "29hrs", "19hrs", "18hrs", "23hrs", "11hrs"];

day.addEventListener("click", function () {
  trackTimeWork.textContent = daily[0];
  trackTimePlay.textContent = daily[1];
  trackTimeStudy.textContent = daily[2];
  trackTimeExercise.textContent = daily[3];
  trackTimeSocial.textContent = daily[4];
  trackTimeSelfcare.textContent = daily[5];
});

day.addEventListener("click", function () {
  trackTimelineWork.textContent = dailyPrev[0];
  trackTimelinePlay.textContent = dailyPrev[1];
  trackTimelineStudy.textContent = dailyPrev[2];
  trackTimelineExercise.textContent = dailyPrev[3];
  trackTimelineSocial.textContent = dailyPrev[4];
  trackTimelineSelfcare.textContent = dailyPrev[5];
});

week.addEventListener("click", function () {
  trackTimeWork.textContent = weekly[0];
  trackTimePlay.textContent = weekly[1];
  trackTimeStudy.textContent = weekly[2];
  trackTimeExercise.textContent = weekly[3];
  trackTimeSocial.textContent = weekly[4];
  trackTimeSelfcare.textContent = weekly[5];
});

week.addEventListener("click", function () {
  trackTimelineWork.textContent = weeklyPrev[0];
  trackTimelinePlay.textContent = weeklyPrev[1];
  trackTimelineStudy.textContent = weeklyPrev[2];
  trackTimelineExercise.textContent = weeklyPrev[3];
  trackTimelineSocial.textContent = weeklyPrev[4];
  trackTimelineSelfcare.textContent = weeklyPrev[5];
});

month.addEventListener("click", function () {
  trackTimeWork.textContent = monthly[0];
  trackTimePlay.textContent = monthly[1];
  trackTimeStudy.textContent = monthly[2];
  trackTimeExercise.textContent = monthly[3];
  trackTimeSocial.textContent = monthly[4];
  trackTimeSelfcare.textContent = monthly[5];
});

month.addEventListener("click", function () {
  trackTimelineWork.textContent = monthlyPrev[0];
  trackTimelinePlay.textContent = monthlyPrev[1];
  trackTimelineStudy.textContent = monthlyPrev[2];
  trackTimelineExercise.textContent = monthlyPrev[3];
  trackTimelineSocial.textContent = monthlyPrev[4];
  trackTimelineSelfcare.textContent = monthlyPrev[5];
});

// console.log(day);
// Report for Jeremy Robson Daily Weekly Monthly Work 5hrs
// <!-- daily -->
// Previous - 7hrs
// <!-- daily -->
// 32hrs
// <!-- weekly -->
// Previous - 36hrs
// <!-- weekly -->
// 103hrs
// <!-- monthly -->
// Previous - 128hrs
// <!-- monthly -->

// Play 1hr
// <!-- daily -->
// Previous - 2hrs
// <!-- daily -->
// 10hrs
// <!-- weekly -->
// Previous - 8hrs
// <!-- weekly -->
// 23hrs
// <!-- monthly -->
// Previous - 29hrs
// <!-- monthly -->

// Study 0hrs
// <!-- daily -->
// Previous - 1hr
// <!-- daily -->
// 4hrs
// <!-- weekly -->
// Previous - 7hrs
// <!-- weekly -->
// 13hrs
// <!-- monthly -->
// Previous - 19hrs
// <!-- monthly -->

// Exercise 1hr
// <!-- daily -->
// Previous - 1hr
// <!-- daily -->
// 4hrs
// <!-- weekly -->
// Previous - 5hrs
// <!-- weekly -->
// 11hrs
// <!-- monthly -->
// Previous - 18hrs
// <!-- monthly -->

// Social 1hr
// <!-- daily -->
// Previous - 3hrs
// <!-- daily -->
// 5hrs
// <!-- weekly -->
// Previous - 10hrs
// <!-- weekly -->
// 21hrs
// <!-- monthly -->
// Previous - 23hrs
// <!-- monthly -->

// Self Care 0hrs
// <!-- daily -->
// Previous - 1hr
// <!-- daily -->
// 2hrs
// <!-- weekly -->
// Previous - 2hrs
// <!-- weekly -->
// 7hrs
// <!-- monthly -->
// Previous - 11hrs
// <!-- monthly -->
