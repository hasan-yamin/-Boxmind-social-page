
// Start Navbar

// profile menu

// XMLHttpRequest
var myRequest = new XMLHttpRequest();
myRequest.open("GET", "../js/friends.json" , true);
// "https://randomuser.me/api/"
myRequest.send();
myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var myJsObj = JSON.parse(this.responseText);
        // document.querySelector(".personal-profile img").src = myJsObj.results[0].picture.large;
        // document.querySelector(".personal-profile-menu .name").innerHTML = myJsObj.results[0].name.first + " " + myJsObj.results[0].name.last;
        document.querySelector(".personal-profile img").src = myJsObj[0].profiile_image;
        document.querySelector(".personal-profile-menu .name").innerHTML = myJsObj[0].name;
    }
};
// End XMLHttpRequest

let profBtn = document.querySelector(".personal-profile");
profBtn.addEventListener('click', function () {
    document.querySelector(".personal-profile-menu").classList.toggle("active");
});

// chat
document.querySelectorAll("nav .chat span i")[0].addEventListener('click', function () {
    this.classList.toggle("active");
});
document.querySelectorAll("nav .chat span i")[1].addEventListener('click', function () {
    this.classList.toggle("active");
});
//mood
let darkMod = document.querySelector("nav .mod span .fa-moon");
let lightMod = document.querySelector("nav .mod span .fa-sun");

darkMod.addEventListener('click', function () {
    darkMod.classList.add("active");
    lightMod.classList.remove("active");
    document.documentElement.style.setProperty('--bckgrdColor', '#121212');
});
lightMod.addEventListener('click', function () {
    lightMod.classList.add("active");
    darkMod.classList.remove("active");
    document.documentElement.style.setProperty('--bckgrdColor', '#ffffff');
});

// Write button
let writefBtn = document.querySelector(".write button");
let writeArea = document.querySelector(".write-screen");
writefBtn.addEventListener('click', function () {
    writeArea.classList.add("active");
});
document.querySelector(".write-screen i").addEventListener('click', function () {
    writeArea.classList.remove("active");
});

// End Navbar

// Start Favorite author
// add img profile to Favorite author part
let imgProfile = [];

// "images/1.png",
// "images/2.png",
// "images/3.jpg",
// "images/4.jpg",
// "images/5.jpg",
// "images/6.jpg",
// "images/7.png",
// "images/8.jpg",
// "images/9.png",
// "images/10.png",
// "images/11.png",
// "images/12.jpg",
// "images/13.png",
// "images/14.jpg",
// "images/15.png",

// get imgProfile from database (friends.json)
// XMLHttpRequest
var get_friends = new XMLHttpRequest();
get_friends.open("GET", "../js/friends.json", true);
get_friends.send();
get_friends.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var myFriendsJsObj = JSON.parse(this.responseText);
        for (var i = 0; i < myFriendsJsObj.length; i++) {
            imgProfile[i] = myFriendsJsObj[i].profiile_image;
            console.log(imgProfile[i]);
        }
        console.log(imgProfile.length);
        show_profile_images(imgProfile);
    }
};
// End XMLHttpRequest
function show_profile_images(imgProfile) {
    // adding first 10 profiles on the page
    let favAuthor = document.querySelector(".favorite-author div");
    console.log("hehihih" + imgProfile.length);
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

floowingBtn.addEventListener('click', function () {
    floowingBtn.classList.add("active");
    followerBtn.classList.remove("active");
});
followerBtn.addEventListener('click', function () {
    followerBtn.classList.add("active");
    floowingBtn.classList.remove("active");
});

//left bar

let trendBtn = document.querySelector(".left-bar .setting .fa-grip");
let trendStories = document.querySelector(".upper-sec .trend-stories");
let upperpart = document.querySelector(".upper-sec")
trendBtn.addEventListener('click', function () {
    trendBtn.classList.toggle("active");
    trendStories.classList.toggle("active");
    console.log(getComputedStyle(upperpart).width);
    console.log(getComputedStyle(trendStories).width);
    document.querySelector(".authors").style.width = (parseFloat(getComputedStyle(upperpart).width) - parseFloat(getComputedStyle(trendStories).width)) + "px";
});

//left bar height
// let leftHeight = document.querySelector(".left-bar");
// window.addEventListener('scroll',function(){
//     leftHeight.style.height = window.innerHeight + window.scrollY - 155 + "px";
// });