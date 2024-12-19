let list = document.querySelector(".listMenu");
let nav = document.querySelector(".navigationMenu");
let header = document.querySelector(".header");
let btn = document.querySelector(".menu_comp");
let btnImage = document.querySelector(".arrow_down")
let image1 = document.querySelector(".image1")
let image2 = document.querySelector(".image2")
let image3 = document.querySelector(".image3")
let image4 = document.querySelector(".image4")
let body = document.querySelector("body")
let section = document.querySelector(".section")
let theme = document.querySelector(".themeChange")
let container = document.querySelector(".container")
let footer = document.querySelector(".footer")
let logo = document.querySelector(".logo")
let logoSpan = document.querySelector(".log_span")
let logo2 = document.querySelector(".logo2")
let logoSpan2 = document.querySelector(".log_span2")
let menuElement = document.querySelector(".listMenuItem")
let like = document.querySelector(".likee")
let likeImage = document.querySelector(".likeImage")
let likeText = document.querySelector(".halo")
let cookie = document.querySelector(".cookies-agreement")
let cookieButton = document.querySelector(".cookies-button")
let commentBtn = document.querySelector(".comment")
let comntSect = document.querySelector(".comments_section")
let commentForm = document.querySelector(".comment-form")
let commentField = document.querySelector(".comment-field")
let commentList = document.querySelector(".comment-list")
let submitButton = document.querySelector(".submit-button")
// меню
btn.addEventListener("click", addMenu)
function addMenu(){
    if(list.classList.contains("active")){
        list.classList.remove("active")
        nav.style.height = "auto";
        btnImage.classList.remove("rotative")
        section.style.opacity = "93%"
    }else{
        list.classList.add("active")
        btnImage.classList.add("rotative")
        section.style.opacity = "100%"
    }
}

// картинка 1, що розкладається
image1.addEventListener("click", addImage1);
function addImage1(){
    image1.classList.toggle("image1_big")
    // if(image1.classList.contains("image1_big")){
    //     image1.classList.remove("image1_big")
    // }else{
    //     image1.classList.add("image1_big")
    // }
}

// картинка 2, що розкладається
image2.addEventListener("click", addImage2);
function addImage2(){
    image2.classList.toggle("image2_big")
}

// картинка 3, що розкладається
image3.addEventListener("click", addImage3);
function addImage3(){
    image3.classList.toggle("image3_big")
}
// image4.addEventListener("click", addImage4);
// function addImage4(){
//     image4.classList.toggle("image4_big")
// }
// зміна кольору
theme.addEventListener("click", themeChanging);
function themeChanging(){
    body.classList.toggle("light_theme")
    header.classList.toggle("light_footer_header")
    footer.classList.toggle("light_footer_header")
    section.classList.toggle("light_section")
    logo.classList.toggle("logo_light")
    logoSpan.classList.toggle("log_span_light")
    logo2.classList.toggle("logo2_light")
    logoSpan2.classList.toggle("log_span_light2")
    btn.classList.toggle("menu_comp_light")
    btn.classList.toggle("menu_comp_two:hover")
    list.classList.toggle("listMenu_light")
    // commentList.classList.toggle("user-comment-light")
    like.addEventListener("click", () => {
        likeImage.classList.toggle("likee_added_light")
    })
    commentForm.classList.toggle("comment-form_light")
    submitButton.classList.toggle("submit-button_light")
}

// like
let numberBig = 19;
let numberSmall = 18;
like.addEventListener("click", likeFucntion)
function likeFucntion(){
    likeImage.classList.toggle("likee_added")
    if(likeImage.classList.contains("likee_added")){
        likeText.innerText = 18 + 1;
    }else   {
        likeText.innerText = 19 - 1;
    }
}

// cookies
let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);
cookieButton.addEventListener("click", () => {
    cookie.classList.add("cookies-agreement-closed")
    overlay.classList.remove("overlay")
})

// коменти відкриття
commentBtn.addEventListener("click", () => {
    comntSect.classList.toggle("comments_section_active")
})
// коменти робочі
function commentFunk(evt){
    evt.preventDefault();
    let commentItem = document.createElement("li")
    commentItem.classList.add("user-comment");
    commentItem.textContent = evt.target.commentField.value;
    commentList.appendChild(commentItem)
    evt.target.commentField.value = ""
}
commentForm.addEventListener("submit", commentFunk)



