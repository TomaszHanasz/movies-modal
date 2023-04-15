"use strict";

console.log("dupa");

const watchMovieBtn = document.querySelectorAll(".watch-movie");
const moviesList = document.querySelectorAll(".movie-modal");
const overlay = document.querySelector(".overlay");
const closeMovie = document.querySelectorAll(".close-modal");
const trailerVideo = document.querySelectorAll(".trailer");

const watchMovieHandler = (index) => {
  moviesList[index].classList.remove("hidden");
  moviesList[index].classList.add("watch-flex");
  overlay.classList.remove("hidden");
};

const closeMovieHandler = (index) => {
  moviesList[index].classList.add("hidden");
  moviesList[index].classList.remove("watch-flex");
  overlay.classList.add("hidden");
};

closeMovie.forEach((el, index) => {
  el.addEventListener("click", () => closeMovieHandler(index));
});

watchMovieBtn.forEach((el, index) => {
  el.addEventListener("click", () => watchMovieHandler(index));
});

document.querySelector("body").addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    moviesList.forEach((el, index) => {
      el.addEventListener("click", closeMovieHandler(index));
    });
  }
});
