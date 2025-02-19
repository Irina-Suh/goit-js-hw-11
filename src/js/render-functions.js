
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';



export function ShowGallery(images,tagGallery){
    
   
  const gallery = document.querySelector(tagGallery);
    const markup = images.map(image => `
    <li class="gallery-item">
    <a href="${image.largeImageURL}" class="gallery-link">
      
        <img src="${image.webformatURL}"
             alt="${image.tags}" />
        <div class="info">
          <p><b> Likes:</b> ${image.likes}</p>
          <p><b> Views:</b> ${image.views}</p>
          <p><b>Comments:</b> ${image.comments}</p>
          <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
    </a>
     </li>
  `).join('');
  gallery.insertAdjacentHTML('afterbegin', markup);


    const lightbox = new SimpleLightbox(tagGallery+" a", {
        captionsData: 'alt',
        captionDelay: 250,
    });
    lightbox.refresh();
    
}
