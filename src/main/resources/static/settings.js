var configParam = function(key, value) {
    return $("<div class=\"form-group\">\n" +
        "    <label for=\"exampleFormControlInput1\">" + key + "</label>\n" +
        "    <input type=\"text\" class=\"form-control\" id=\"" + key + "\" value=\"" + value + "\" >\n" +
        "  </div>")
}

$.ajaxSetup({
    contentType: "application/json; charset=utf-8"
});

$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8080/api/configs',
        type: 'GET',
        success: function(data) {
            $.each(Object.keys(data), function( index, key ) {
                $("#form").append(configParam(key, data[key]))
            });
        },
        error: function(e) {
            //called when there is an error
            //console.log(e.message);
        }
    });
});

$("#form").submit(function(e) {
    var inputs = $("#form :input");
    console.log(inputs)
    e.preventDefault();
    console.log("HERE")
    var request = {};
    inputs.each(function(index){
        if (index === 0)
            return;
        // console.log(value.map(function(i, v){ return v}))
        request[this.id] = this.value;
    })
    console.log(request)
    $.ajax({
        url: 'http://localhost:8080/api/configs',
        type: 'POST',
        data: JSON.stringify(request),
        success: function(data) {
            $("#result").text(data);
            console.log("HERE")
        },
        error: function(e) {
            //called when there is an error
            //console.log(e.message);
        }
    });
});

$("#button-sendTenToDell").click(function(){
    $.ajax({
        url: 'http://localhost:8080/api?param=dell',
        type: 'GET',
        success: function(data) {
            $("#result").text(data);
            console.log("HERE")
        },
        error: function(e) {
            //called when there is an error
            //console.log(e.message);
        }
    });
});