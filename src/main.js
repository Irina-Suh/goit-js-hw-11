
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { ShowGallery } from "./js/render-functions"; 
import { searchImg } from "./js/pixabay-api";

export const form = document.querySelector('.js-img-form');
const input = document.querySelector('.searchInput');
const waitMsg = document.querySelector('.wait-msg');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  

  let searchName = input.value.trim();
  
  if (!searchName) {
    iziToast.error ({
      position: "topRight",
      title: 'Error',
      message: 'Input search string'
  });
  return
  }

  waitMsg.innerHTML = '"Wait, the image is loaded" <span class="loader"></span>'
  searchImg (searchName)
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error ({
          close: `true`,
          position: "topRight",
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!'
      });
    } else {
      ShowGallery (response.data.hits,'.gallery');
    }
    waitMsg.textContent = "";
  
  })

    .catch(error => {
      waitMsg.textContent = 'Ups ...';
      console.log(error);
  })

  form.reset()

});