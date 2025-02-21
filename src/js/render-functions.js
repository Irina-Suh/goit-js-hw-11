
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';



 
export function ShowGallery(images,tagGallery){
    
   
  const gallery = document.querySelector(tagGallery);
    const markup = images.map(image => `
    <li class="gallery-item">
    <a href="${image.largeImageURL}" class="gallery-link">
      
        <img class="li-img"
        src="${image.webformatURL}"
             alt="${image.tags}" />
        <div class="info">
          <p> Likes: <br>${image.likes}</br></p>
          <p> Views: <br>${image.views}</br></p>
          <p>Comments: <br>${image.comments}</br></p>
          <p>Downloads: <br>${image.downloads}</br></p>
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
