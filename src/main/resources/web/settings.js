var configParam = function(key, value) {
    return $("<div class=\"form-group\">\n" +
        "    <label for=\"exampleFormControlInput1\">" + key + "</label>\n" +
        "    <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" value=\"" + value + "\">\n" +
        "  </div>")
}

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
    e.preventDefault();
    console.log("HERE")

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