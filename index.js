const outImg = document.getElementById("displaySection");
const img1 = document.querySelector("#galleryImg1");
const img2 = document.querySelector("#galleryImg2");
const img3 = document.querySelector("#galleryImg3");
const img4 = document.querySelector("#galleryImg4");
const img5 = document.querySelector("#galleryImg5");

function addImage1() {
    outImg.style.background = "url('./Images&Videos/galleryImg1.jpg') no-repeat center center / contain";
}
function addImage2() {
    outImg.style.background = "url('./Images&Videos/galleryImg2.jpg') no-repeat center center / contain";
}
function addImage3() {
    outImg.style.background = "url('./Images&Videos/galleryImg3.jpg') no-repeat center center / contain";
}
function addImage4() {
    outImg.style.background = "url('./Images&Videos/galleryImg4.jpg') no-repeat center center / contain";
}
function addImage5() {
    outImg.style.background = "url('./Images&Videos/galleryImg5.jpg') no-repeat center center / contain";
}

img1.addEventListener('click', addImage1)
img2.addEventListener('click', addImage2)
img3.addEventListener('click', addImage3)
img4.addEventListener('click', addImage4)
img5.addEventListener('click', addImage5)
