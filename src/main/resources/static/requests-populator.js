var host = 'http://localhost:8080';
var timer = 1000;
var pOne;
var pTwo;
var pTimeout;
var pErr;

$("#button-timer").click(function () {
    timer = $("#input-timer").val();
})

$("#button-request").click(function () {
    var method = "/api?param=dell";
    makeRequest(method);
});

$("#button-populate-one").click(function () {
    var method = "/api?param=asus";
    pOne = setInterval(function () {
        makeRequest(method)
    }, timer);
});

$("#button-populate-one-stop").click(function () {
    clearInterval(pOne);
});

$("#button-populate-two").click(function () {
    var method = "/api?param=hp";
    pTwo = setInterval(function () {
        makeRequest(method)
    }, timer);
});

$("#button-populate-two-stop").click(function () {
    clearInterval(pTwo);
})

$("#button-populate-timeout").click(function () {
    var method = "/api/timeout";
    pTimeout = setInterval(function () {
        makeRequest(method)
    }, timer);
});

$("#button-populate-timeout-stop").click(function () {
    clearInterval(pTimeout);
})

$("#button-populate-err").click(function () {
    var method = "/api/exception";
    pErr = setInterval(function () {
        makeRequest(method)
    }, timer);
});

$("#button-populate-err-stop").click(function () {
    clearInterval(pErr);
});

var makeRequest = function (method) {
    $.ajax({
        url: host + method,
        type: 'GET',
        success: function (data) {
            if (data.code !== undefined) {
                addConsoleLog(data.code, method, data.message);
            } else {
                addConsoleLog(null, method, data);
            }
        },
        error: function (e) {
            addConsoleLog(null, method, "500 - Server Error");
        }
    })
}

var addConsoleLog = function (code, method, message) {
    var danger = "class='table-danger'";
    if (!code) {
        code = "~";
        danger = "";
    }
    $("#table-console").prepend($("<tr " + danger + ">\n" +
        "                    <th scope=\"row\">" + code + "</th>\n" +
        "                    <td>" + method + "</td>\n" +
        "                    <td>" + message + "</td>\n" +
        "                </tr>"))
}