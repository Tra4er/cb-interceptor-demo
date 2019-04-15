var userId = 1;

var logResponse = function (response) {
	$("#resultConsole").text(JSON.stringify(response));
}

$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8080/api/users',
        type: 'GET',
        success: function (data) {
            var id = userId - 1;
            $("#name:text").val(data[id].name);
            $("#secondName:text").val(data[id].secondName);
            $("#surname:text").val(data[id].surname);
            $("#email:text").val(data[id].email);
        },
        error: function (e) {
            // $("#result").text(e.responseJSON.message);
        }
    }).always(function(r) {
		logResponse(r)
	});
});

$("#select-user").change(function (e) {
    userId = this.value;

    $.ajax({
        url: 'http://localhost:8080/api/users/' + userId,
        type: 'GET',
        success: function (data) {
			$("#name:text").val(data.name);
			$("#secondName:text").val(data.secondName);
			$("#surname:text").val(data.surname);
			$("#email:text").val(data.email);
        },
        error: function (e) {
        }
    }).always(function(r) {
		logResponse(r)
	});
});
$("#form-pib").submit(function (e) {
    var inputs = $("#form-pib :input");
    e.preventDefault();
    var request = {};
    inputs.each(function (index) {
        request[this.id] = this.value;
    })
    delete request["button-save-PIB"];
    $.ajax({
        url: 'http://localhost:8080/api/users/' + userId,
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(request),
        success: function (data) {
            $("#result").text(data);
        },
        error: function (e) {
            $("#result").text(e.responseJSON.message);
        }
    }).always(function(r) {
		logResponse(r)
	});
});
$("#form-email").submit(function (e) {
    var inputs = $("#form-email :input");
    e.preventDefault();
    var request = {};
    inputs.each(function (index) {
        request[this.id] = this.value;
    });
    $.ajax({
        url: 'http://localhost:8080/api/users/email/' + userId,
        type: 'PUT',
        contentType: "text/plain",
        data: request.email,
        success: function (data) {
            if (data.code) {
                $("#email-err").text(data.message);
                $("#email-err").removeAttr('hidden');
            } else {
                $("#email-err").attr('hidden', 'hidden');
            }
        },
        error: function (e) {
            $("#email-err").text(e.responseText);
            $("#email-err").removeAttr('hidden');
        }
    }).always(function(r) {
		logResponse(r)
	});
});

$("#button-docs").click(function () {
    $("#docs-loader").removeAttr('hidden');
    $.ajax({
        url: 'http://localhost:8080/api/users/docs',
        type: 'GET',
        success: function (data) {
            $("#docs-err").text(data.message);
            $("#docs-loader").attr('hidden', 'hidden');
            $("#docs-err").removeAttr('hidden');
        },
        error: function (e) {
            $("#docs-loader").attr('hidden', 'hidden');
            $("#docs-err").removeAttr('hidden');
        }
    }).always(function(r) {
		logResponse(r)
	});
});