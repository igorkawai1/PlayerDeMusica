const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title:
      "O que é DevOps?",
    artist: "DevOps vivo",
    cover: "files/cafecomincidente.jpg",
    file: "files/vdm.mp3"
};

cover.style.background = `url("${data.cover}") no-repeat center center / cover`
title.innerText = data.title;
artist.innerText = data.artist;
audio.src = data.file;

