import{a as u,S as f,i as n}from"./assets/vendor--6n4cVRZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="52770413-51c449e2c65101d33f96e6ea5",p="https://pixabay.com/api/";async function y(a){try{return(await u.get(p,{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error(t),t}}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const t=a.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){l.innerHTML=""}function w(){d.classList.remove("loader-hidden")}function c(){d.classList.add("loader-hidden")}const b=document.querySelector(".form");b.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements["search-text"].value.trim();if(!t){n.error({title:"Error",message:"Please enter a search term!"});return}L(),w();try{const r=await y(t);if(c(),!r.hits.length){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(r.hits)}catch(r){c(),n.error({title:"Error",message:"Something went wrong. Please try again!"}),console.error(r)}});
//# sourceMappingURL=index.js.map
