var viewBramaSrs =
    {
        "схема": "assets/img/brama/visual.jpg",
       "темний дуб": "assets/img/color/brama/темний дуб.png",
       "світлий дуб": "assets/img/color/brama/світлий дуб.png",
       "коричневий": "assets/img/color/brama/коричневий.png",
       "венге": "assets/img/color/brama/венге.png",
       "білий": "assets/img/color/brama/білий.png",
       "срібло": "assets/img/color/brama/срібло.png",
       "сірий": "assets/img/color/brama/сірий.png",
       "бежевий": "assets/img/color/brama/бежевий.png",
       "антрацит": "assets/img/color/brama/антрацит.png",
    };
var viewRoletSrs={
    "схема": "assets/img/brama/rolet.png",
    "коричневий": "assets/img/color/rolet/коричневий.png",
    "білий": "assets/img/color/rolet/білий.png",
    "сірий": "assets/img/color/rolet/сірий.png",
    "бежевий": "assets/img/color/rolet/бежевий.png",
    "антрацит": "assets/img/color/rolet/антрацит.png",
}
var colorBrama = 2;
window.onload = function (){
    let btnss = document.getElementsByClassName("tab-btn");
    for(let i =0; i < btnss.length; i++){
        btnss[i].addEventListener("click", function (event){
            for(let j =0; j< btnss.length; j++){
                btnss[j].classList.remove("active");
            }
            let e = event.target;
            e.classList.add("active");
        });
    }
    let navs = document.getElementsByClassName("nav-link");

    for(let i = 0 ; i< navs.length; i++){
        navs[i].addEventListener("mouseover", function (event){
            let target = event.target.parentNode;
            let ele = document.createElement("div");
            let ele2 = document.createElement("div");
            let ele3 = document.createElement("div");
            let ele4 = document.createElement("div");
            ele.setAttribute("class","box-angle box-angle-top box-angle-left");
            ele.setAttribute("id","br-tl");
            ele2.setAttribute("class","box-angle box-angle-top box-angle-right");
            ele2.setAttribute("id","br-tr");
            ele3.setAttribute("class","box-angle box-angle-bottom box-angle-left");
            ele3.setAttribute("id","br-bl");
            ele4.setAttribute("class","box-angle box-angle-bottom box-angle-right");
            ele4.setAttribute("id","br-br");
            target.appendChild(ele);
            target.appendChild(ele2);
            target.appendChild(ele3);
            target.appendChild(ele4);
        });
        navs[i].addEventListener("mouseout", function (event){
            let d = document.getElementById("br-tl");
            let d2 = document.getElementById("br-tr");
            let d3 = document.getElementById("br-bl");
            let d4 = document.getElementById("br-br");
            d.parentNode.removeChild(d);
            d2.parentNode.removeChild(d2);
            d3.parentNode.removeChild(d3);
            d4.parentNode.removeChild(d4);

        });
    }

    let colorContainer = document.getElementsByClassName("color-container");
    for(let i = 0; i < colorContainer.length;i++){
        colorContainer[i].addEventListener('click', function (event){
            let ele = event.target;
            let parNode = ele.parentNode;
            let parNode2 = parNode.parentNode;
            let inContainer = parNode2.getElementsByClassName("viewCheck");
            for(let j = 0; j < inContainer.length;j++){
                inContainer[j].classList.remove("viewCheck");
            }
            ele.classList.add("viewCheck");
        })
    }

    let sliders = document.getElementsByClassName("slid-btn");
    for(let i = 0; i<sliders.length;i++){
        sliders[i].addEventListener("click", function (event){
           let ele = event.target;
           if(ele.classList.contains("slid-btn")) {
               let par = ele.parentNode.getElementsByClassName("slid-btn");
               for (let j = 0; j < par.length; j++) {
                   let innEle = par[j];
                   if (!innEle.classList.contains("slid-btn-multi")) {
                       innEle.classList.remove("slid-active");
                       innEle.classList.add("slid-not-active");
                   }
               }
               if (ele.classList.contains("slid-active")) {
                   ele.classList.add("slid-not-active");
                   ele.classList.remove("slid-active");
               } else {
                   ele.classList.remove("slid-not-active");
                   ele.classList.add("slid-active");
               }
           }

        });
    }
}

var lastColor = "assets/img/color/brama/коричневий.png";
var isSchema = true;
function viewBrama(args){
    let ele = document.getElementById("brow-st");

    if(args == 0 ){
        this.isSchema = false;
        ele.src = lastColor;
    }
    else if(args == 1){
        this.isSchema = true;
        ele.src = "assets/img/brama/visual.jpg";
    }
    else{
        this.lastColor = viewBramaSrs[args];
        if(!isSchema){
            ele.src = lastColor;
        }
    }

}

function minusValueToText(ele){
    let par = document.getElementById(ele);
    let newV = par.value - 1;
    par.value = newV > 1? newV : 1;
}
function  addValueToText(ele){
    let par = document.getElementById(ele);
    let newV = Number(par.value) + 1;
    par.value = newV;
}


var lastColorRolet = "assets/img/color/rolet/коричневий.png";
var isSchemaRolet = true;
function viewRolet(args){
    let ele = document.getElementById("rolet-st");

    if(args == 0 ){
        this.isSchemaRolet = false;
        ele.src = lastColorRolet;
    }
    else if(args == 1){
        this.isSchemaRolet = true;
        ele.src = "assets/img/brama/rolet.png";
    }
    else{
        this.lastColorRolet = viewRoletSrs[args];
        if(!isSchemaRolet){
            ele.src = lastColorRolet;
        }
    }

}
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 700,
    framesCount = 40;

anchors.forEach(function(item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function(e) {
        // убираем стандартное поведение
        e.preventDefault();

        // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

        // запускаем интервал, в котором
        let scroller = setInterval(function() {
            // считаем на сколько скроллить за 1 такт
            let scrollBy = coordY / framesCount;

            // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
            // и дно страницы не достигнуто
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                // то скроллим на к-во пикселей, которое соответствует одному такту
                window.scrollBy(0, scrollBy);
            } else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
            // время интервала равняется частному от времени анимации и к-ва кадров
        }, animationTime / framesCount);
    });
});

var numberCardSt = 0;
function nextCard(){
    let numbs = document.getElementsByClassName("sli");
    if(this.numberCardSt < (numbs.length - 1)){
        this.numberCardSt = Number(this.numberCardSt)+1;

    }
    else{
        return;
    }
    if(numbs.length -3 > this.numberCardSt){
        for(let i = 0; i < this.numberCardSt; i++){
            numbs[i].classList.add("hide");
        }
        for(let i = this.numberCardSt; i < this.numberCardSt+3;i++){
            numbs[i].classList.remove("hide");
        }
        for(let i = this.numberCardSt + 3; i < numbs.length; i++){
            numbs[i].classList.add("hide");
        }
    }

}

(function() {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();