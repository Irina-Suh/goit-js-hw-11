
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { ShowGallery , gallery } from "./js/render-functions"; 
import { searchImg } from "./js/pixabay-api";

 const form = document.querySelector('.js-img-form');
const input = document.querySelector('.searchInput');
const waitMsg = document.querySelector('.wait-msg');


form.addEventListener("submit", (e) => {
  e.preventDefault();
gallery.innerHTML = '';

  let searchName = input.value.trim();
  
  if (!searchName) {
     
      //  gallery.innerHTML = '';
    iziToast.error ({
      position: "topRight",
      title: 'Error',
      message: 'Input search string'
    });
   
  return
  }

  waitMsg.innerHTML = '"Wait, the image is loaded" <span class="loader"></span>'
  // gallery.innerHTML = '';
  searchImg (searchName)
    .then(response => {
      if (response.data.hits.length === 0) {
      
        gallery.innerHTML = '';
        iziToast.error ({
          close: `true`,
          position: "topRight",
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        form.reset();
       
      } else {
     //   gallery.innerHTML = '';   
      ShowGallery (response.data.hits);
    }
    waitMsg.textContent = "";
  
  })

    .catch(error => {
       form.reset();
       
      waitMsg.textContent = 'Ups ...';
      console.log(error);
     //  gallery.innerHTML = '';
      form.reset();
    
    })
    .finally(() => { 
   form.reset();   
        });

});