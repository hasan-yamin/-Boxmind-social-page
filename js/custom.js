
// Start Navbar

// profile menu
let profBtn = document.querySelector(".personal-profile");
profBtn.addEventListener('click',function(){
    document.querySelector(".personal-profile-menu").classList.toggle("active");
});
// chat
document.querySelectorAll("nav .chat span i")[0].addEventListener('click',function(){
    this.classList.toggle("active");
});
document.querySelectorAll("nav .chat span i")[1].addEventListener('click',function(){
    this.classList.toggle("active");
});
//mood
let darkMod = document.querySelector("nav .mod span .fa-moon");
let lightMod = document.querySelector("nav .mod span .fa-sun");

darkMod.addEventListener('click',function(){
    darkMod.classList.add("active");
    lightMod.classList.remove("active");
    document.documentElement.style.setProperty('--bckgrdColor', '#121212');
});
lightMod.addEventListener('click',function(){
    lightMod.classList.add("active");
    darkMod.classList.remove("active");
    document.documentElement.style.setProperty('--bckgrdColor', '#ffffff');
});

// Write button
let writefBtn = document.querySelector(".write button");
let writeArea = document.querySelector(".write-screen");
writefBtn.addEventListener('click',function(){
    writeArea.classList.add("active");
});
document.querySelector(".write-screen i").addEventListener('click',function(){
    writeArea.classList.remove("active");
});

// End Navbar

// Start Favorite author
// add img profile to Favorite author part
let imgProfile = [
    "images/1.png",
    "images/2.png",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.png",
    "images/8.jpg",
    "images/9.png",
    "images/10.png",
    "images/11.png",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.png",
];
// adding first 10 profiles on the page
let favAuthor = document.querySelector(".favorite-author div");
// console.log(favAuthor);
// Show the first 10 profiles on the page
for (let i = 0; i < imgProfile.length; i++) {
    let im = document.createElement("img");
    im.setAttribute("src", imgProfile[i]);
    im.classList.add("active");
    favAuthor.appendChild(im);
    if (i >= 9) {
        break
    }
}
// next and previous buttons
let nextAuthor = document.querySelector(".favorite-author .fa-caret-right");
let prevAuthor = document.querySelector(".favorite-author .fa-caret-left");
// add event to next and previous buttons
nextAuthor.addEventListener('click', function () {
    // shift imgProfile array 1 element backward
    console.log(imgProfile.push(imgProfile.shift()));
    // get div which contains active profiles
    let imgProfile1 = document.querySelectorAll(".favorite-author div img");
    // update image src from shifted array
    imgProfile1.forEach(function (item, index) {
        item.setAttribute("src", imgProfile[index]);
    });
});
prevAuthor.addEventListener('click', function () {
    // shift imgProfile array 1 element forward
    console.log(imgProfile.unshift(imgProfile.pop()));
    // get div which contains active profiles
    let imgProfile1 = document.querySelectorAll(".favorite-author div img");
    // update image src from shifted array
    imgProfile1.forEach(function (item, index) {
        item.setAttribute("src", imgProfile[index]);
    });

});
// End Favorite author

// followers
let floowingBtn = document.querySelectorAll(".authors .foolowing .followers span")[0];
let followerBtn = document.querySelectorAll(".authors .foolowing .followers span")[1];

floowingBtn.addEventListener('click',function(){
    floowingBtn.classList.add("active");
    followerBtn.classList.remove("active");
});
followerBtn.addEventListener('click',function(){
    followerBtn.classList.add("active");
    floowingBtn.classList.remove("active");
});

//left bar

let trendBtn = document.querySelector(".left-bar .setting .fa-grip");
let trendStories = document.querySelector(".upper-sec .trend-stories");
let upperpart = document.querySelector(".upper-sec")
trendBtn.addEventListener('click',function(){
    trendBtn.classList.toggle("active");
    trendStories.classList.toggle("active");
    console.log(getComputedStyle(upperpart).width);
    console.log(getComputedStyle(trendStories).width);
    document.querySelector(".authors").style.width= (parseFloat(getComputedStyle(upperpart).width) -parseFloat(getComputedStyle(trendStories).width) )+"px";
});

//left bar height
// let leftHeight = document.querySelector(".left-bar");
// window.addEventListener('scroll',function(){
//     leftHeight.style.height = window.innerHeight + window.scrollY - 155 + "px";
// });