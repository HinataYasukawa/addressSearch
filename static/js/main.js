$(document).ready(function(){
    $("#search-button").click(function(){
        $.post("/search",
        {
            zipcode: $("#zipcode").val()
        },
        function(data, status){
            $("#result").text("Address: " + data);
        });
    });
});
