
export const form = document.querySelector('.js-img-form');
const input = document.querySelector(".searchInput");

const waitMsg = document.querySelector(".wait-msg");



import { searchImages } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { ShowGallery } from "./js/render-functions";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  

  let searchName = input.value.trim();
  
  if (!searchName) {
    iziToast.show ({
      // backgroundColor: 'rgba(239, 64, 64, 1)',
      // messageColor: `rgba(255, 255, 255, 1)`,
      // close: `true`,
      // position: "topRight",
      // title: 'Error',
      // titleColor: '#fff',
      // titleSize: '16px',
      message: 'Input search string'
  });
  return
  }
  waitMsg.textContent = "Wait, the image is loaded";
 // waitMsg.innerHTML = '"Wait, the image is loaded" <span class="loader"></span>'
  searchImages(searchName)
    .then(response => {
      if (response.data.hits.length == 0) {
        iziToast.show ({
          // backgroundColor: 'rgba(239, 64, 64, 1)',
          // messageColor: `rgba(255, 255, 255, 1)`,
          // close: `true`,
          // position: "topRight",
          // title: 'Error',
          // titleColor: '#fff',
          // titleSize: '16px',
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