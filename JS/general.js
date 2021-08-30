let menuToggle = document.querySelector('#menu-btn');
let container = document.querySelector('.container');
let navigation = document.querySelector('.navigation');
let navList = document.querySelector('.nav_list');
let search = document.querySelector('.bx-search');
let header = document.querySelector('.header')
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
let list = document.querySelectorAll('.list');
let content = document.querySelectorAll('.content');
const FuncName1 = [
    'Bảng điều khiển',
    'Hồ sơ sinh viên',
    'Đăng ký học phần',
    'Đăng ký lớp học',
    'Thời khóa biểu',
    'Kết quả học tập',
    'Công nợ học phí',
    'Đăng ký dich vụ'
];
const FuncName2 = [
    'Bảng điều khiển',
    'Hồ sơ giảng viên',
    'Đăng ký giảng dạy',
    'Phân công giảng dạy',
    'Thời khóa biểu',
    'Quản lý điểm'
]
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
        if (list.length > 6){
            document.getElementById('func_select').innerHTML = `${FuncName1[i]}`;
        }else{
            document.getElementById('func_select').innerHTML = `${FuncName2[i]}`;
        }
    }
}