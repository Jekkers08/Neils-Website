let elem = document.querySelector(".grid");
let msnry = new Masonry(elem, {
  // options
  itemSelector: ".grid-item",
  columnWidth: 80,
});

msnry.layout();

// const lightbox = document.createElement("div");
// lightbox.id = "lightbox";
// document.body.appendChild(lightbox);

// const images = document.querySelectorAll("img:not(#logo)");

// images.forEach((image) => {
//   image.addEventListener("click", (e) => {
//     lightbox.classList.add("active");
//     const img = document.createElement("img");
//     img.src = image.src;
//     while (lightbox.firstChild) {
//       lightbox.removeChild(lightbox.firstChild);
//     }
//     lightbox.appendChild(img);
//   });
// });

// lightbox.addEventListener("click", (e) => {
//   if (e.target !== e.currentTarget) return;
//   lightbox.classList.remove("active");
// });

// function dropDown() {
//   document.getElementById("dropDownMenu").classList.toggle("show");
// }
