if (window.innerWidth > 600){
			var variable = [`--img1`, `--img2`, `--img3`, `--img4`, `--img5`, `--img6`];
			var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
			
			for ( i = 0; i < variable.length; i++){
				var imgs= images[Math.floor(Math.random() * images.length)];
				document.documentElement.style.setProperty(variable[i], 'url(../images/' + imgs + ')' );
				remove(images, imgs);
			}
		}
		else {
			var variable2 = [`--img1m`, `--img2m`, `--img3m`, `--img4m`, `--img5m`, `--img6m`];
			var images2 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
			for ( i = 0; i < variable2.length; i++){
				var imgs2= images2[Math.floor(Math.random() * images2.length)];
				document.documentElement.style.setProperty(variable2[i], 'url(../images/phone/' + imgs2 + ')' );
				remove(images2, imgs2);
			}
		
		}
			
			function remove(array, element) {
				const index = array.indexOf(element);
    
				if (index !== -1) {
					array.splice(index, 1);
				}
			}