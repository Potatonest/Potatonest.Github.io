$(document).ready(function () {
	$('#ftemp').submit(function (event){
			event.preventDefault();
			var ftemp=parseFloat($('#tempf').val());
			ctemp=(ftemp-32)*5/9;
			if (ctemp<=16) {
				$('body').css("background-image", "url(images/coldcat.jpg)")
			}
			else if (ctemp<=24) {
				$('body').css("background-image", "url(images/nicecat.jpg)")
			} 
			else {
				$('body').css("background-image", "url(images/hotcat.jpg)")
			}
			$('#temperature').text('The temperature is ' + ctemp+" C");
		})
	$('#ctemp').submit(function (event){
			event.preventDefault();
			var ctemp=parseFloat($('#tempc').val());
			ftemp=(ctemp*9/5)+32;
			if (ftemp<=60) {
				$('body').css("background-image", "url(images/coldcat.jpg)")
			}
			else if (ftemp<=78) {
				$('body').css("background-image", "url(images/nicecat.jpg)")
			}
			else  {
				$('body').css("background-image", "url(images/hotcat.jpg)")
			}
			$('#temperature').text('The temperature is ' + ftemp + " F");
		})


})