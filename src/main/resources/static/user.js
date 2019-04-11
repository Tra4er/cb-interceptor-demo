var userId = 1;

$(document).ready(function () {
	$.ajax({
		url: 'http://localhost:8080/api/users',
		type: 'GET',
		success: function(data) {
			// $("#result").text(data);
		},
		error: function(e) {
			// $("#result").text(e.responseJSON.message);
		}
	});
});

$("#select-user").change(function(e) {
	var optionSelected = $("option:selected", this);
	userId = this.value;

	$.ajax({
		url: 'http://localhost:8080/api/users/' + userId,
		type: 'GET',
		success: function(data) {
			$("#result").text(data);
		},
		error: function(e) {
			$("#result").text(e.responseJSON.message);
		}
	});
	console.log(userId)
});
$("#form-pib").submit(function(e) {
	var inputs = $("#form :input");
	e.preventDefault();

	console.log(inputs)
	// $.ajax({
	// 	url: 'http://localhost:8090/api/users/' + userId,
	// 	type: 'PUT',
	// 	success: function(data) {
	// 		$("#result").text(data);
	// 	},
	// 	error: function(e) {
	// 		$("#result").text(e.responseJSON.message);
	// 	}
	// });
});
$("#button-sendTenToHP").click(function(){
	$.ajax({
		url: 'http://localhost:8090/api?param=HP',
		type: 'GET',
		success: function(data) {
			$("#result").text(data);
		},
		error: function(e) {
			$("#result").text(e.responseJSON.message);
		}
	});
});
$("#button-exception").click(function(){
	$.ajax({
		url: 'http://localhost:8090/api/exception',
		type: 'GET',
		success: function(data) {
			$("#result").text(data);
		},
		error: function(e) {
			$("#result").text(e.responseJSON.message);
		}
	});
});