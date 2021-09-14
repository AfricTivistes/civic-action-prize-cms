$(document).ready(function () {
    "use strict";

    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const vote = urlParams.get('vote') || false
    
    if (vote) {
        $("#contact-form").css("display", "none")
        $("#vote-form").css("display", "block")
    } else{
        $("#vote-form").css("display", "none")
    }

});
