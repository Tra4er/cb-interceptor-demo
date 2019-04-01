var timer = 1000;
var pOne;
var pTwo;
var pErr;

$("#button-timer").click(function () {
    timer = $("#input-timer").val();
})

$("#button-request").click(function () {
    var method = "/api?param=dell";
    $.ajax({
        url: 'http://localhost:8080' + method,
        type: 'GET',
        success: function (data) {
            if (data.code !== undefined) {
                addConsoleLog(22, method, data.message);
            } else {
                addConsoleLog(null, method, data);
            }
        },
        error: function (e) {
            addConsoleLog(null, "/api?param=dell", e);
        }
    });
});

$("#button-populate-one").click(function () {
    var method = "/api?param=asus";
    pOne = setInterval(function () {
            $.ajax({
                url: 'http://localhost:8080' + method,
                type: 'GET',
                success: function (data) {
                    if (data.code !== undefined) {
                        addConsoleLog(22, method, data.message);
                    } else {
                        addConsoleLog(null, method, data);
                    }
                },
                error: function (e) {
                    addConsoleLog(null, method, e);
                }
            })
        },
        timer);
});

$("#button-populate-one-stop").click(function () {
    clearInterval(pOne);
});

$("#button-populate-two").click(function () {
    var method = "/api?param=hp";
    pTwo = setInterval(function () {
            $.ajax({
                url: 'http://localhost:8080' + method,
                type: 'GET',
                success: function (data) {
                    if (data.code !== undefined) {
                        addConsoleLog(22, method, data.message);
                    } else {
                        addConsoleLog(null, method, data);
                    }
                },
                error: function (e) {
                    addConsoleLog(null, method, e);
                }
            })
        },
        timer);
});

$("#button-populate-two-stop").click(function () {
    clearInterval(pTwo);
})

$("#button-populate-err").click(function () {
    var method = "/api/exception";
    pErr = setInterval(function () {
            $.ajax({
                url: 'http://localhost:8080' + method,
                type: 'GET',
                success: function (data) {
                    if (data.code !== undefined) {
                        addConsoleLog(22, method, data.message);
                    } else {
                        addConsoleLog(null, method, data);
                    }
                },
                error: function (e) {
                    addConsoleLog(null, method, e);
                }
            })
        },
        timer);
});

$("#button-populate-err-stop").click(function () {
    clearInterval(pErr);
});

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