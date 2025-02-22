import{S as p,a as d,i as u}from"./assets/vendor-DEenWwFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const i=document.querySelector(".gallery"),m=new p(".gallery a",{captionsData:"alt",captionDelay:250});function f(s){const o=s.map(e=>`
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
  `).join("");i.insertAdjacentHTML("afterbegin",o),m.refresh()}const g="48860281-d74be350dbe4d701146d01f08";function h(s){const e=`https://pixabay.com/api?${new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:10})}`;return d.get(e)}const n=document.querySelector(".js-img-form"),y=document.querySelector(".searchInput"),l=document.querySelector(".wait-msg");n.addEventListener("submit",s=>{s.preventDefault();let o=y.value.trim();if(!o){i.innerHTML="",u.error({position:"topRight",title:"Error",message:"Input search string"});return}l.innerHTML='"Wait, the image is loaded" <span class="loader"></span>',h(o).then(e=>{e.data.hits.length===0?(i.innerHTML="",u.error({close:"true",position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.reset()):f(e.data.hits),l.textContent=""}).catch(e=>{n.reset(),i.innerHTML="",l.textContent="Ups ...",console.log(e),n.reset()}).finally(()=>{n.reset()})});
//# sourceMappingURL=index.js.map
