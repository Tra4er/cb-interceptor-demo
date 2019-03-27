var sendOneRequests = false;

$("#button-sendTenToDell").click(function(){

    while(sendOneRequests) {
        $.ajax({
            url: 'http://localhost:8080/api?param=dell',
            type: 'GET',
            success: function (data) {
                $("#result").text(data);
                console.log("HERE")
            },
            error: function (e) {
                //called when there is an error
                //console.log(e.message);
            }
        });
    }
});