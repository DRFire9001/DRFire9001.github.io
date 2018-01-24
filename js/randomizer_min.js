function scramble(){
	var variable = [`--img1`, `--img2`, `--img3`, `--img4`, `--img5`, `--img6`];
	var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
	for ( i = 0; i < variable.length; i++){
		var imgs= images[Math.floor(Math.random() * images.length)];
		if (window.innerWidth > 600){
			document.documentElement.style.setProperty(variable[i], 'url(../images/' + imgs + ')' );
		}
		else{
			document.documentElement.style.setProperty(variable[i], 'url(../images/phone/' + imgs + ')' );
		}
		//remove(images, imgs);
	}	
}
function remove(array, element) {
	const index = array.indexOf(element);
	if (index !== -1) {array.splice(index, 1);}
}		
$(document).ready(function () {scramble();}); //run when page first loads
$(window).resize(function () {scramble();});  //run on every window resize