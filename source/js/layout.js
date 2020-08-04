$(document).ready(function () {
    $("#header").load("/source/html/header.html");
    $("#footer").load("/source/html/footer.html");
    if ($('#side')[0]) {
        $("#side").load("/source/html/side.html");

        if ($('#art').height() < 610)
            $('#art').height('610');
    }
});