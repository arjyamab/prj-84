var img_image;
var imgNew;

function init() {
    var canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

	img_width = 300;
	img_height = 100;

	img_x = 0;
	img_y = 0;

	window.addEventListener("keydown", my_keydown);

	function my_keydown(e) {
		keyPressed = e.keyCode;
		console.log(keyPressed);
		
			if((keyPressed >=97 && keyPressed<=122) || (keyPressed >=65 && keyPressed<=90)) {
				alphabetkey();
				document.getElementById("d1").innerHTML = "You pressed alphabet Key";
				console.log("alphabet key");

			} else if ((keyPressed >=48 && keyPressed<=57)) {
				numberkey();
				document.getElementById("d1").innerHTML = "You pressed number Key";
				console.log("number key");

			} else if ((keyPressed >=37 && keyPressed<=40)) {
				arrowkey();
				document.getElementById("d1").innerHTML = "You pressed arrow key";
				console.log("arrow key");

			} else if ((keyPressed == 17 || keyPressed == 18 || keyPressed == 27 )) {
				specialkey();
				document.getElementById("d1").innerHTML = "You pressed special key";
				console.log("special key");
			} else {
				otherkey();
				document.getElementById("d1").innerHTML = "You pressed other key";
				console.log("other key");				
			}
			
	}

	function alphabetkey() {
		img_image="Alpkey.png";
		add(); 
	}

	function numberkey() {
		img_image="numkey.png";
		add();	
	}

	function arrowkey() {
		img_image="Arrkey.png";
		add();
	}

	function specialkey() {
		img_image="spkey.png";
		add();	
	}

	function otherkey() { 
		img_image="otherkey.png";
		add();
	}
	
}

function add() {
	imgNew = new Image(); 
	imgNew.onload = uploadimg();
	imgNew.src = img_image;
}

function uploadimg() {
	console.log("imgNew is "+imgNew);
	console.log("img_image is "+img_image);
	setTimeout(() => {
		ctx.drawImage(imgNew, img_x, img_y, img_width, img_height);
	}, 50)
}
