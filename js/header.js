/* On document load */
$(function () {
    /* Load the header HTML */
    $("header").load("/header.html", function () {
        /* Set the active item on the navbar to to the one specified */
        $("#" + $("header").attr("active")).attr("class", "active");
    });
    /* Fix anchors to account for the header */
    var shiftWindow = function () { scrollBy(0, -50); };
    window.onhashchange = shiftWindow;
    // Alternative method of above
    // window.addEventListener("hashchange", shiftWindow);
    if (window.location.hash) shiftWindow();


    /* Load the footer HTML */
    $("#page-footer").load("/footer.html");

    // Allows .selectable elements to be selected in a single click.
    //$('.selectable').hover(function () { }, function () { });
    //    background-color: rgba(255,255,255,0.6);
    //    color: rgb(0,0,0);
    //    content: 'Click to select text';
    // http://keestalkstech.com/2014/04/click-to-select-all-on-the-pre-element/
    $('.selectable').click(function () {
        //        if (this.select) {
        //            console.log('select');
        //            this.select();
        //        } else if (document.selection) {
        //            console.log('document');
        //            var range = document.body.createTextRange();
        //            range.moveToElementText(this);
        //            range.select();
        //        } else
        if (window.getSelection) {
            var range = document.createRange();
            range.selectNodeContents(this);
            window.getSelection().addRange(range);
        }
    });
});
