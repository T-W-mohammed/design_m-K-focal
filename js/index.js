
// shuffle background images
const header = document.querySelector(".home");

	
let bk_images = ["00.jpg","01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];


function rand(){
	setInterval(()=> {
		let randomnum = Math.floor(Math.random() * bk_images.length);
		header.style.backgroundImage = "url('images/header/"+bk_images[randomnum] +"')";
	}, 5000);
};

rand();

$('.home').height($(window).height());
$('.home').width($(window).width());
$('.home .navber').height(($(window).height())/7);
$('ul.block').height(($(window).height() - 
		$('.home .navber').height(($(window).height())/7)));
$(window).resize(function(){
	$('.home').height($(window).height());
	$('.home').width($(window).width());
	if($(window).width() <= 767){
	$('.home').width($(window).width());
	$('.home .navber').height(($(window).height())/7);
	}
	$('.block').height(($(window).height() - 
		$('.home .navber').height(($(window).height())/7)));
	
});

/////////btn ///////////////////


$(".home .navber .container .btn").click(function(){
	/*$('.header .navber .container ul').css("display","block");*/
	$('.home .navber .container ul').toggleClass(" block ");

});

/// ////////////////////header/////////////////////////


// auto slider code
	(function autoslider(){
		$('.slider .active').each(function(){
			if(!$(this).is(':last-child')){
				$(this).delay(3000).fadeOut(1000,function(){
					$(this).removeClass("active").next().addClass("active").fadeIn();
					autoslider();
				});
			}
			else{
				$(this).delay(3000).fadeOut(1000,function(){
					$(this).removeClass('active');
					$('.slider div').eq(0).addClass('active').fadeIn();
					autoslider();
				});
			}
		});

	}());


// Create links According To The Number OF Sections
let ul = document.querySelector(".home .navber .container ul");
let Parent = document.querySelector(" body ");

let sections = Array.from(Parent.children);

let secNumber = sections.length;

let link = sections[0].getAttribute("class");




for (let i = 1 ;i < secNumber - 3 ; i++){
	
	let li = document.createElement("li");

	let a = document.createElement("a");

	a.innerHTML = sections[i].getAttribute("class");

	a.setAttribute("href","#" + sections[i].getAttribute("class"));

	sections[i].setAttribute("id",sections[i].getAttribute("class"));

	

	li.appendChild(a);

	ul.appendChild(li);

		
}



// add active class and deleted 

let li = document.querySelectorAll(".home .navber .container ul li a");

li.forEach(l =>{

	l.onclick =()=>{

		li.forEach(a =>{
			a.classList.remove("active");
		});
		l.classList.add("active");
	}
});
