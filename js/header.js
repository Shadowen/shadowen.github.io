/* On document load */
$(function() {
    /* Load the header HTML */
    $("header").load("/header.html", function() {
        /* Set the active item on the navbar to to the one specified */
        $("#" + $("header").attr("active")).attr("class", "active");
    });
});
