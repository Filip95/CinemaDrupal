$(function showMoviesByGenre() {
    window.onload = function() {
        const movieGenre = localStorage.getItem("movieGenre"); 
        $('#genre').val(movieGenre);
    }

    $("#genre").on("change", function () {
        const genre = $(this).val();
        localStorage.setItem("movieGenre", genre);
        $.get({
            url: "./movie-reservation?genre=" + $("#genre").val(),
            success: function () {
                window.location.href = "./movie-reservation?genre=" + $("#genre").val();
            }
        });
    });
});

$(document).ready(function(){
        $("div[id^='movie-']").each(function(){
            const ID = parseInt(this.id.replace("movie-", ""),10);
            const movieID = "#movie-" + ID;
            const reserveButtonID = "#reservation-button-" + ID;
            const popupID = "#popup-" + ID;
            const cancelButtonID = "#cancel-" + ID;
            const confirmButtonID = "#confirm-reservation-button-" + ID;
            $(movieID).mouseenter(function () {
                $(this).addClass("movie-class-clicked");
                $(reserveButtonID).addClass("show-button");
            });

            $(movieID).mouseleave(function () {
                $(this).removeClass("movie-class-clicked");
                $(reserveButtonID).removeClass("show-button");
            });
             
            $(reserveButtonID).on("click", function () {
                $(popupID).toggleClass("show-popup");
                if(!$(movieID).hasClass("movie-class-clicked") && $(popupID).hasClass("show-popup")){
                    $(popupID).removeClass("show-popup");
                }
            });
        
            $(popupID).on("change", function () {
                $(cancelButtonID).show();
                $(confirmButtonID).addClass("show-confirmation");
                if(!$(movieID).hasClass("movie-class-clicked") && $(confirmButtonID).hasClass("show-confirmation")){
                    $(confirmButtonID).removeClass("show-confirmation");
                    $(cancelButtonID).hide();
                }
            });
        
            $(cancelButtonID).on("click", function () {
                $(confirmButtonID).removeClass("show-confirmation");
                $(popupID).removeClass("show-popup");
            });
        });        
});
