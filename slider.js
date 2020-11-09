
var isLoading = false;
window.onload = function()
{
    let slider_element = document.getElementById('slider');
  let element = document.getElementById('slider').getElementsByClassName('pager-dot');

  for(let i = 0 ; i < element.length; i++){
  	element[i].addEventListener("click", function(event){
        if(isLoading) return;
        let eve = event.target;
		if(!eve.classList.contains("active")) {
            isLoading = true;
            let elements = document.getElementById('slider').getElementsByClassName('pager-dot');
            let active = document.getElementById('slider').getElementsByClassName('pager-dot active')[0];
            let last_number = 0;
            for(let i =0; i< elements.length; i++){
                if(element[i].classList.contains("active")){
                    last_number = i;
                    break;
                }
            }
            active.classList.remove("active");
            eve.classList.add("active");


			let slide_active = document.getElementById('slider').getElementsByClassName('slide active')[0];

			slide_active.classList.remove("active");
			slide_active.classList.remove("animationLeft");
			slide_active.classList.remove("animationRight");
            slide_active.style.display = "block";
            slide_active.style.visibility = "visible";
            setTimeout(function (){
                slide_active.style.display = "none"
                slide_active.style.visibility = "hidden";

            },1500);
            elements = document.getElementById('slider').getElementsByClassName('pager-dot');
            let sli_number = 0;
            for(let i =0; i< elements.length; i++){
                if(element[i].classList.contains("active")){
                    sli_number = i;
                    break;
                }
            }
			let slide = document.getElementById('slider').getElementsByClassName('slide')[sli_number];
			slide.classList.add("active");
			if(last_number < sli_number) slide.classList.add("animationLeft");
			else{
                slide.classList.add("animationRight");
            }
            slide.style.display = "block";
            slide.style.visibility = "visible";
            setTimeout(function (){
             isLoading = false;

            },1800);

        }

	});
  }
  let arrow_left = document.getElementById('slider').getElementsByClassName("slider-arrow left")[0];
  let arrow_right = document.getElementById('slider').getElementsByClassName("slider-arrow right")[0];
  arrow_right.addEventListener("click", function(event){
      if(isLoading) return;
      isLoading = true;

	  let elements = document.getElementById('slider').getElementsByClassName('pager-dot');
	  let active = document.getElementById('slider').getElementsByClassName('pager-dot active')[0];

	  let sli_number = 0;
	  for(let i =0; i< elements.length; i++){
	  	if(element[i].classList.contains("active")){
	  		sli_number = i;
	  		break;
		}
	  }
	  active.classList.remove("active");
	  if(sli_number == 0){
	  	sli_number = elements.length-1;

	  }
	  else{
		  sli_number = sli_number-1;
	  }
	  elements[sli_number].classList.add("active");

	  let slide_active = document.getElementById('slider').getElementsByClassName('slide active')[0];
	  slide_active.classList.remove("active");
	  slide_active.classList.remove("animationLeft");
	  slide_active.classList.remove("animationRight");
	  slide_active.style.display = "block";
	  slide_active.style.visibility = "visible";
	  setTimeout(function (){
          slide_active.style.display = "none"
          slide_active.style.visibility = "hidden";

      },1500);

	  let slide = document.getElementById('slider').getElementsByClassName('slide')[sli_number];
	  slide.classList.add("active");
      slide.style.display = "block";
      slide.style.visibility = "visible";
	  slide.classList.add("animationRight");

      setTimeout(function (){
          isLoading = false;
      },1600);

  });
  arrow_left.addEventListener("click", function(event){
      if(isLoading) return;
      isLoading = true;
	  let elements = document.getElementById('slider').getElementsByClassName('pager-dot');
	  let active = document.getElementById('slider').getElementsByClassName('pager-dot active')[0];

	  let sli_number = 0;
	  for(let i =0; i< elements.length; i++){
		  if(element[i].classList.contains("active")){
			  sli_number = i;
			  break;
		  }
	  }
	  active.classList.remove("active");

	  if(sli_number == elements.length-1){
		  sli_number = 0;
	  }
	  else{
		  sli_number = sli_number+1;
	  }
	  elements[sli_number].classList.add("active");

	  let slide_active = document.getElementById('slider').getElementsByClassName('slide active')[0];
	  slide_active.classList.remove("active");
	  slide_active.classList.remove("animationLeft");
	  slide_active.classList.remove("animationRight");
      slide_active.style.display = "block";
      slide_active.style.visibility = "visible";
      setTimeout(function (){
          slide_active.style.display = "none"
          slide_active.style.visibility = "hidden";

      },1500);

	  let slide = document.getElementById('slider').getElementsByClassName('slide')[sli_number];
	  slide.classList.add("active");
      slide.style.display = "block";
      slide.style.visibility = "visible";
	  slide.classList.add("animationLeft");
      setTimeout(function (){
          isLoading = false;
      },1600);

  });

  let g_play_buttons = document.getElementsByClassName("g__play_button-circle");

  for(let i = 0 ; i < g_play_buttons.length; i++){
		g_play_buttons[i].addEventListener("click", function(event){
			let video = document.getElementById("video_banner");
			video.style.display = "block";
            video.style.visibility = "visible";
		});
	}
  let close_button = document.getElementById("close-button-video");
  close_button.addEventListener("click", function (){
	  let video = document.getElementById("video_banner");

	  var iframe = document.getElementById( 'pop_up_video');
		  var iframeSrc = iframe.src;
		  iframe.src = iframeSrc;
	  video.style.display = "none";
	  video.style.visibility = "hidden";


  });
  slider_element.addEventListener('touchstart', handleTouchStart, false);
  slider_element.addEventListener('touchmove', handleTouchMove, false);

}

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            if(isLoading) return;
            isLoading = true;
            let elements = document.getElementById('slider').getElementsByClassName('pager-dot');
            let active = document.getElementById('slider').getElementsByClassName('pager-dot active')[0];

            let sli_number = 0;
            for(let i =0; i< elements.length; i++){
                if(element[i].classList.contains("active")){
                    sli_number = i;
                    break;
                }
            }
            active.classList.remove("active");

            if(sli_number == elements.length-1){
                sli_number = 0;
            }
            else{
                sli_number = sli_number+1;
            }
            elements[sli_number].classList.add("active");

            let slide_active = document.getElementById('slider').getElementsByClassName('slide active')[0];
            slide_active.classList.remove("active");
            slide_active.classList.remove("animationLeft");
            slide_active.classList.remove("animationRight");
            slide_active.style.display = "block";
            slide_active.style.visibility = "visible";
            setTimeout(function (){
                slide_active.style.display = "none"
                slide_active.style.visibility = "hidden";

            },1500);

            let slide = document.getElementById('slider').getElementsByClassName('slide')[sli_number];
            slide.classList.add("active");
            slide.style.display = "block";
            slide.style.visibility = "visible";
            slide.classList.add("animationLeft");
            setTimeout(function (){
                isLoading = false;
            },1600);

        } else {
            if(isLoading) return;
            isLoading = true;

            let elements = document.getElementById('slider').getElementsByClassName('pager-dot');
            let active = document.getElementById('slider').getElementsByClassName('pager-dot active')[0];

            let sli_number = 0;
            for(let i =0; i< elements.length; i++){
                if(element[i].classList.contains("active")){
                    sli_number = i;
                    break;
                }
            }
            active.classList.remove("active");
            if(sli_number == 0){
                sli_number = elements.length-1;

            }
            else{
                sli_number = sli_number-1;
            }
            elements[sli_number].classList.add("active");

            let slide_active = document.getElementById('slider').getElementsByClassName('slide active')[0];
            slide_active.classList.remove("active");
            slide_active.classList.remove("animationLeft");
            slide_active.classList.remove("animationRight");
            slide_active.style.display = "block";
            slide_active.style.visibility = "visible";
            setTimeout(function (){
                slide_active.style.display = "none"
                slide_active.style.visibility = "hidden";

            },1500);

            let slide = document.getElementById('slider').getElementsByClassName('slide')[sli_number];
            slide.classList.add("active");
            slide.style.display = "block";
            slide.style.visibility = "visible";
            slide.classList.add("animationRight");

            setTimeout(function (){
                isLoading = false;
            },1600);
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};
