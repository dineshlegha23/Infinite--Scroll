const container = document.querySelector(".container");

const apiKey = "BmAT4A-1sY-ArISx8hZ6GuvIL6tCEvqf2OfIgVx6ugk";
const imgType = "random";
const totalImages = 5;

let url = `https://api.unsplash.com/search/photos?query=${imgType}&client_id=${apiKey}&per_page=${totalImages}`;

function displayPhoto(photos) {
  photos.forEach((photo) => {
    const url = photo.urls.full;
    let img = document.createElement("img");
    img.setAttribute("src", `${url}`);
    container.append(img);
  });
}

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data.results);
  console.log(data);
  displayPhoto(data.results);
}

getData();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    getData();
  }
});
