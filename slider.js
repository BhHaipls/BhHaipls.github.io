
window.onload = function()
{

  let element = document.getElementById('slider').getElementsByClassName('pager-dot');

  for(let i = 0 ; i < element.length; i++){
  	element[i].addEventListener("click", function(event){
  		let active = document.getElementById('slider').getElementsByClassName('pager-dot active')[0];
		console.log(active.classList);
		active.classList.remove("active");

		let eve = event.target;
		if(!eve.classList.contains("active")) {
			eve.classList.add("active");
			let slide_active = document.getElementById('slider').getElementsByClassName('slide active')[0];

			slide_active.classList.remove("active");
			slide_active.classList.remove("animationLeft");
			slide_active.classList.remove("animationRight");
			slide_active.classList.add("last");
			setTimeout(function (){
				slide_active.classList.remove("last");
			},1500);

			let slide = document.getElementById('slider').getElementsByClassName('slide')[i];
			slide.classList.add("active");
			if(slide_active.index < i ){
				slide.classList.add("animationLeft");
			}
			else{
				slide.classList.add("animationRight");
			}
		}

	});
  }
  let arrow_left = document.getElementById('slider').getElementsByClassName("slider-arrow left")[0];
  let arrow_right = document.getElementById('slider').getElementsByClassName("slider-arrow right")[0];
  arrow_right.addEventListener("click", function(event){
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
	  slide_active.classList.add("last");
	  setTimeout(function (){
		  slide_active.classList.remove("last");
	  },1500);

	  let slide = document.getElementById('slider').getElementsByClassName('slide')[sli_number];
	  slide.classList.add("active");
	  slide.classList.add("animationRight");

  });
  arrow_left.addEventListener("click", function(event){
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
	  slide_active.classList.add("last");

	  setTimeout(function (){
		  slide_active.classList.remove("last");
	  },1500);

	  let slide = document.getElementById('slider').getElementsByClassName('slide')[sli_number];
	  slide.classList.add("active");
	  slide.classList.add("animationLeft");

  });
  let g_play_buttons = document.getElementsByClassName("g__play_button-circle");
  for(let i = 0 ; i < g_play_buttons.length; i++){
		g_play_buttons[i].addEventListener("click", function(event){
			let video = document.getElementById("video_banner");
			video.style.display = "block";
		});
	}
  let close_button = document.getElementById("close-button-video");
  close_button.addEventListener("click", function (){
	  let video = document.getElementById("video_banner");

	  var iframe = document.getElementById( 'pop_up_video');
		  var iframeSrc = iframe.src;
		  iframe.src = iframeSrc;
	  video.style.display = "none";

  });
}
