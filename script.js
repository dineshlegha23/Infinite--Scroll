const loader = document.getElementById("loader");

const container = document.querySelector(".container");

const apiKey = "BmAT4A-1sY-ArISx8hZ6GuvIL6tCEvqf2OfIgVx6ugk";

const totalImages = 5;

// let url = `https://api.unsplash.com/search/photos?query=random&client_id=${apiKey}&per_page=${totalImages}`;

let url = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${totalImages}`;

function loading() {
  loader.hidden = false;
  container.hidden = true;
}

function complete() {
  container.hidden = false;
  loader.hidden = true;
}

function displayPhoto(photos) {
  loading();
  photos.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    let img = document.createElement("img");
    img.setAttribute("src", `${photo.urls.regular}`);
    img.setAttribute("title", `${photo.alt_description}`);
    container.append(img);

    item.appendChild(img);
    container.appendChild(item);
    complete();
  });
}

async function getData() {
  loading();
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data.results);
  console.log(data);
  displayPhoto(data);
  complete();
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
