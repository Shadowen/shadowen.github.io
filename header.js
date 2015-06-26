$(function () {
    $("header").load("/header.html", function () {
        $("header > nav > div :contains('" + $("header").attr("active") + "')").last().parent().attr("class", "active");
    });
});