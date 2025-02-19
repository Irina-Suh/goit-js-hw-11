import{a as u,S as d,i as c}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const f="48860281-d74be350dbe4d701146d01f08",m="https://pixabay.com",p="/api";function h(s){const r=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=m+p+`?${r}`;return u.get(o)}function g(s,r){const o=document.querySelector(r),n=s.map(e=>`
    <li class="gallery-item">
    <a href="${e.largeImageURL}" class="gallery-link">
      
        <img src="${e.webformatURL}"
             alt="${e.tags}" />
        <div class="info">
          <p><b> Likes:</b> ${e.likes}</p>
          <p><b> Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
    </a>
     </li>
  `).join("");o.insertAdjacentHTML("afterbegin",n),new d(r+" a",{captionsData:"alt",captionDelay:250}).refresh()}const l=document.querySelector(".js-img-form"),y=document.querySelector(".searchInput"),i=document.querySelector(".wait-msg");l.addEventListener("submit",s=>{s.preventDefault();let r=y.value.trim();if(!r){c.show({message:"Input search string"});return}i.textContent="Wait, the image is loaded",h(r).then(o=>{o.data.hits.length==0?c.show({message:"Sorry, there are no images matching your search query. Please try again!"}):g(o.data.hits,".gallery"),i.textContent=""}).catch(o=>{i.textContent="Ups ...",console.log(o)}),l.reset()});
//# sourceMappingURL=index.js.map
