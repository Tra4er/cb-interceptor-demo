$(document).ready(function () {
	console.log("HERE")
});
$( "#target" ).click(function() {
	alert( "Handler for .click() called." );
});
$("#button-sendTenToHP").click(function(){
	console.log("HERslakdjaslkdjslkdlskE");
	$.ajax({
		url: 'http://localhost:8080/api',
		type: 'GET',
		success: function(data) {
			console.log("HERE")
		},
		error: function(e) {
			//called when there is an error
			//console.log(e.message);
		}
	});
	// sendAjaxPost(form, '/api/groups', 'add-dialog');
});
