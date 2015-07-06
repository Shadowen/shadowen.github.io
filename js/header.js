/* On document load */
$(function () {
    /* Load the header HTML */
    $("header").load("/header.html", function () {
        /* Set the active item on the navbar to to the one specified */
        $("#" + $("header").attr("active")).attr("class", "active");
    });
    /* Fix anchors */
    var shiftWindow = function () { scrollBy(0, -50); };
    window.onhashchange = shiftWindow;
    // Alternative method of above
    // window.addEventListener("hashchange", shiftWindow);
    if (window.location.hash) shiftWindow();
});
