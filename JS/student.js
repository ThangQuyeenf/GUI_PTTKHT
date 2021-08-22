let menuToggle = document.querySelector('#menu-btn');
let container = document.querySelector('.container');
let navigation = document.querySelector('.navigation');
let navList = document.querySelector('.nav_list');
let search = document.querySelector('.bx-search');
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
const function_list =[
    'dashboard',
    'profile'
]
// let profile = document.querySelectorAll('.profile');
// let profileBtn = document.querySelector('.profile-btn');
// profileBtn.onclick = function(){
//     for(let i = 0 ;i< profile.length;i++){
//         profile[i].classList.toggle('active');
//     }
// }
// let dashboard = document.querySelector('.dashboard-btn')
// dashboard.onclick = function(){
//     for(let i = 0 ;i< profile.length;i++){
//         profile[i].classList.toggle('active');
//     }
// }

let list = document.querySelectorAll('.list');
let content = document.querySelectorAll('.content');
for( let i= 0; i<list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while( j < list.length){
            let tmp = j++;
            list[tmp].className = 'list';
            content[tmp].className = 'content';
        }
        list[i].className = 'list active';
        content[i].className = 'content active';
    }
}


