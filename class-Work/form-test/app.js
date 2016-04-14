$(document).ready(function () {

		$('#myForm').submit(function(event){
				console.log(event);
				event.preventDefault();
				var myInput=$('#name-input').val();
				$('#target').text(myInput);	
		})
})
