$(document).ready(function () {
});
$("#button-sendTenToDell").click(function(){
	$.ajax({
		url: 'http://localhost:8080/api?param=dell',
		type: 'GET',
		success: function(data) {
			$("#result").text(data);
		},
		error: function(e) {
			$("#result").text(e.responseJSON.message);
		}
	});
});
$("#button-sendTenToHP").click(function(){
	$.ajax({
		url: 'http://localhost:8080/api?param=HP',
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
		url: 'http://localhost:8080/api/exception',
		type: 'GET',
		success: function(data) {
			$("#result").text(data);
		},
		error: function(e) {
			$("#result").text(e.responseJSON.message);
		}
	});
});