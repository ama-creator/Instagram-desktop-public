!function(){document.querySelector(".posts").addEventListener("click",(t=>{const e=t.target;if(e.classList.contains("insta-liked")||e.classList.contains("insta-like")){const t=e.parentNode;"true"===t.getAttribute("like")?(t.removeAttribute("like"),t.innerHTML='<i class="fa-solid fa-heart post-actions__item-icon insta-like" style="color: #a4a4a4"></i>'):(t.setAttribute("like","true"),t.innerHTML='<i class="fa-solid fa-heart post-actions__item-icon insta-liked"></i>')}}));{const s={img:"http://placeimg.com/378/570/any?img=",user:{photo:"https://i.pravatar.cc/240?img=",nickName:"@anatoly_m"}};function t(t,e,s){const i=document.createElement("div");return i.className=s?"post post-gorizontal":"post",i.innerHTML=`\n    <div class="post-pic"> \n    <img class="post-pic__item" src="${t}" alt="">\n</div>\n    <div class="post-footer">\n        <div class="post-user">\n            <div class="user user--row">\n                <div>\n                    <img src="${e}" alt="" class="user-avatar">\n                </div>\n                <div class="user-nickname">@anatoly_m</div>\n            </div>\n        </div>\n        <div class="post-container">\n            <div class="post-actions">\n                <div class="post-actions__item">\n                    <i class="fa-solid fa-heart post-actions__item-icon insta-like"></i>\n                </div>\n                <div class="post-actions__item">\n                    <i class="fa-solid fa-comment post-actions__item-icon"></i>\n                </div>\n                <div class="post-actions__item">\n                    <i class="fa-solid fa-paper-plane post-actions__item-icon"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n    `,i}const i=function(e=1){const i=[];let n=!1;for(let a=1;a<=e/2;a++){const e=t(s.img+a,s.user.photo+a,n),o=t(s.img+a+1,s.user.photo+a+1,!n),c=document.createElement("div");c.appendChild(e),c.appendChild(o),i.push(c),n=!n}return i}(11),n=document.querySelector(".posts");n.innerHTML="",i.forEach((t=>{n.appendChild(t)}));const a=document.querySelector(".new-post__button"),o=document.querySelector(".modal"),c={text:o.querySelector(".modal-text"),img:o.querySelector("#image-link"),hashteg:o.querySelector("#hashtag"),saveBtn:o.querySelector("#save-post")};function e(){o.classList.add("modal--hidden"),c.text.value="",c.img.value="",c.hashteg.value=""}a.addEventListener("click",(()=>{o.classList.contains("modal--hidden")&&o.classList.remove("modal--hidden")})),o.addEventListener("click",(t=>{t.target.classList.contains("modal")&&e()})),c.saveBtn.addEventListener("click",(()=>{(function(){let t=!1;return c.text.classList.remove("modal-arror"),c.img.classList.remove("modal-error"),c.text.value||(c.text.classList.add("modal-error"),t=!0),c.img.value||(c.img.classList.add("modal-error"),t=!0),t})()||(function(e){const s=document.querySelector(".posts"),i=document.querySelector(".posts > div:last-child"),n=i.querySelectorAll(".post"),a=n[n.length-1].classList.contains("post-gorizontal"),o=t(e,"https://i.pravatar.cc/240",n.length<2?!a:a);if(console.log(n),n.length>1){const t=document.createElement("div");t.appendChild(o),s.appendChild(t)}else i.appendChild(o)}(c.img.value),e())}))}}();