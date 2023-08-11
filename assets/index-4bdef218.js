(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();let l=0;const b=t=>t?Math.floor(Math.random()*t.length):void 0,g=(t,o)=>t.id===o.id?{score:l,condition:"tie"}:t.id==="paper-btn"&&o.id==="rock-btn"?{score:++l,condition:"win"}:t.id==="scissors-btn"&&o.id==="paper-btn"?{score:++l,condition:"win"}:t.id==="rock-btn"&&o.id==="scissors-btn"?{score:++l,condition:"win"}:(l=0,{score:l,condition:"lose"}),i={scoreCounterEl:document.querySelector(".score-container__counter"),rulesBtnEl:document.querySelector(".rules-btn"),rulesModalEl:document.querySelector(".rules-modal"),rulesWindowBtnEl:document.querySelector(".rules-header__btn"),mainSectionEl:document.querySelector(".main-section")},E=()=>{const t=`
    <div class="selections">
          <div class="selection-container">
            <p class="selection-container__title">You picked</p>
            <div class="selection-container__bg" id= "your-pick">
            </div>
          </div>
          <div class= "results">
          </div>
          <div class="selection-container">
            <p class="selection-container__title">House Picked</p>
            <div class="selection-container__bg" id= "house-pick">
            </div>
          </div>
        </div> `;i.mainSectionEl.insertAdjacentHTML("afterbegin",t)},v=(t,o,r,s,e)=>{const n=a=>{a.target.classList.contains("result-container__btn")&&(i.mainSectionEl.innerHTML="",s(),i.mainSectionEl.addEventListener("click",e))};document.querySelector(".selections").addEventListener("click",n),i.mainSectionEl.querySelector("#your-pick").append(o);const c=t(o,r);setTimeout(()=>{i.scoreCounterEl.innerHTML=c.score,i.mainSectionEl.querySelector("#house-pick").append(r),document.querySelector(".results").insertAdjacentHTML("afterbegin",`<div class="result-container">
        <h3 class="result-container__title"></h3>
        <button class="result-container__btn">play Again</button>
        </div>`);const a=document.querySelector(".result-container__title"),u=document.querySelector(".result-container__btn");c.condition==="tie"?a.textContent="It is a TIE":c.condition==="win"?(u.style.color="green",a.textContent="You WIN",o.classList.add("win")):c.condition==="lose"&&(u.style.color="red",a.textContent="You LOST",r.classList.add("win"))},1e3)},_="/assets/icon-paper-90d57903.svg",y="/assets/icon-rock-e16feca1.svg",S="/assets/icon-scissors-f778df73.svg";let p,m;const d=[`<button class="game-container__paper" type="button" id= "paper-btn">
  <img src="${_}" alt="paper button" />
  </button>`,`<button class="game-container__scissors" type="button" id= "scissors-btn">
  <img src="${S}" alt="scissors button" />
  </button>`,`<button class="game-container__rock" type="button" id= "rock-btn">
  <img src="${y}" alt="rock button" />
  </button>`],L=()=>{i.rulesBtnEl.addEventListener("click",()=>{i.rulesModalEl.showModal()}),i.rulesWindowBtnEl.addEventListener("click",()=>{i.rulesModalEl.close()})},f=()=>{const t=`
  <div class="game-container">
    ${String(d).replaceAll(",","")}
  </div>`;i.mainSectionEl.insertAdjacentHTML("afterbegin",t)},M=(t,o)=>{const r=s=>{if(s.target.id!=="paper-btn"&&s.target.id!=="rock-btn"&&s.target.id!=="scissors-btn")return;i.mainSectionEl.removeEventListener("click",r);const e=t(d),n=document.createElement("div");n.innerHTML=d[e],p=s.target,m=n.firstElementChild,i.mainSectionEl.innerHTML="",E(),v(o,p,m,f,r)};i.mainSectionEl.addEventListener("click",r)},h=()=>{L(),f(),M(b,g)};h();
