$( document ).ready(function() {
    $(".nav2 li").each(function(index, item) {
        var link = $("a", item);
        if (window.location.pathname == $(link).attr("href")) {
            $(item).addClass("active");
        }
    });
});
