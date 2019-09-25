var clickIcons = function() {
                
    $(".img-predict-mark").click(function() {
        window.location.href = SERVER_PATH + "login.html";
    });

    $(".img-location-mark").click(function() {
        window.location.href = SERVER_PATH + "map.html";
    });
    
    $(".logout-mark").click(function() {
        window.location.href = SERVER_PATH + "login.html";
    });

    $(".img-sunny-mark").click(function() {
        window.location.href = SERVER_PATH + "location.html";
    });
}