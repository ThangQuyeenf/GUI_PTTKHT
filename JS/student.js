let menuToggle = document.querySelector('#menu-btn');
let container = document.querySelector('.container');
let navigation = document.querySelector('.navigation');
let navList = document.querySelector('.nav_list');
let search = document.querySelector('.bx-search');
let profile = document.querySelectorAll('.profile')
menuToggle.onclick = function(e){
    container.classList.toggle('active');
    navigation.classList.toggle('active');
    navList.classList.toggle('active');
}
search.onclick = function(e){
    container.classList.toggle('active');
    navigation.classList.toggle('active');
    navList.classList.toggle('active');
}

let profileBtn = document.querySelector('.bx-user-circle');
profileBtn.onclick = function(){
    for(let i = 0 ;i< profile.length;i++){
        profile[i].classList.toggle('active');
    }
}