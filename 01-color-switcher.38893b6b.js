const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let r=null;e.addEventListener("click",(()=>{r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),o.addEventListener("click",(()=>{clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.38893b6b.js.map
