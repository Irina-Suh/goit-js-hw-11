import{S as u,a as p,i as c}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function d(s,r){const o=document.querySelector(r),i=s.map(e=>`
    <li class="gallery-item">
    <a href="${e.largeImageURL}" class="gallery-link">
      
        <img class="li-img"
        src="${e.webformatURL}"
             alt="${e.tags}" />
        <div class="info">
          <p> Likes: <br>${e.likes}</br></p>
          <p> Views: <br>${e.views}</br></p>
          <p>Comments: <br>${e.comments}</br></p>
          <p>Downloads: <br>${e.downloads}</br></p>
        </div>
    </a>
     </li>
  `).join("");o.insertAdjacentHTML("afterbegin",i),new u(r+" a",{captionsData:"alt",captionDelay:250}).refresh()}const m="48860281-d74be350dbe4d701146d01f08";function f(s){const o=`https://pixabay.com/api?${new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:10})}`;return p.get(o)}const l=document.querySelector(".js-img-form"),h=document.querySelector(".searchInput"),a=document.querySelector(".wait-msg");l.addEventListener("submit",s=>{s.preventDefault();let r=h.value.trim();if(!r){c.error({position:"topRight",title:"Error",message:"Input search string"});return}a.innerHTML='"Wait, the image is loaded" <span class="loader"></span>',f(r).then(o=>{o.data.hits.length===0?c.error({close:"true",position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):d(o.data.hits,".gallery"),a.textContent=""}).catch(o=>{a.textContent="Ups ...",console.log(o)}),l.reset()});
//# sourceMappingURL=index.js.map
