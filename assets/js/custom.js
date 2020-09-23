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


    let sliders = document.getElementsByClassName("slid-btn");
    for(let i = 0; i<sliders.length;i++){
        sliders[i].addEventListener("click", function (event){
           let ele = event.target;
           let par = ele.parentNode;
           for(let j =0; j< par.children.length; j++){
               let innEle = par.children[j];
               if(!innEle.classList.contains("slid-btn-multi")){
                   innEle.classList.remove("slid-active");
                   innEle.classList.add("slid-not-active");
               }
           }
           if(ele.classList.contains("slid-active")){
               ele.classList.add("slid-not-active");
               ele.classList.remove("slid-active");
           }
           else{
               ele.classList.remove("slid-not-active");
               ele.classList.add("slid-active");
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