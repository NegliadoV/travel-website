

//Hreader Fix


let header = document.querySelector('.header')

let nav = document.querySelector('#nav__linck');
let nav2 = document.querySelector('#nav__linck1');
let nav3 = document.querySelector('#nav__linck2');
let nav4 = document.querySelector('#nav__linck3');
let nav5 = document.querySelector('#nav__linck4');

let posY = innerHeight / 1.2

let headerLogo = document.querySelector('#headerLogo');
let headerInner = document.querySelector('#headerInner');



window.addEventListener('scroll', function () {


    if (pageYOffset > posY ) {
        header.classList.add('fixed')

    } else {
        header.classList.remove('fixed');

    }

    if (this.pageYOffset > posY) {
        nav.classList.add('fix_nav')
        nav2.classList.add('fix_nav')
        nav3.classList.add('fix_nav')
        nav4.classList.add('fix_nav')
        nav5.classList.add('fix_nav')
    }

    else {
        nav.classList.remove('fix_nav')
        nav2.classList.remove('fix_nav')
        nav3.classList.remove('fix_nav')
        nav4.classList.remove('fix_nav')
        nav5.classList.remove('fix_nav')
    }

    if (this.pageYOffset > posY) {
        headerLogo.style.display = ('none')
    }
    else {
        headerLogo.style.display = ('block')
    }

    if (this.pageYOffset > posY) {
        headerInner.classList.add('header__inner-fix')
    }
    else {
        headerInner.classList.remove('header__inner-fix')
    }

})


// InputLeft

function introFunction() {

var inputL, filter, ulL, liL, a, i, txtValue;
inputL = document.getElementById('introInputLeft');
filter = inputL.value.toUpperCase();
ulL = document.getElementById("introUlLeft");
liL = ulL.getElementsByTagName('li');



    for (i = 0; i < liL.length; i++) {
    a = liL[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    console.log(i);
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        liL[i].style.display = "";
    } else {
        liL[i].style.display = "none";
    }

}


}



