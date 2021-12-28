function ShowMoviesByGenre() {
    window.onload = function() {
        const movieGenre = localStorage.getItem("movieGenre"); 
        $('#genre').val(movieGenre);
    }

    $("#genre").on("change", function () {
        const genre = $(this).val();
        localStorage.setItem("movieGenre", genre);
        $.ajax({
            method: "GET",
            url: "./movie-reservation?genre=" + $("#genre").val(),
            success: function () {
                window.location.href = "./movie-reservation?genre=" + $("#genre").val();
            }
        });
    });

    $(".movie-class").on("click", function(){
        const popUpID = "#popup-" + $(this).attr("id");
        const reservationButtonID = "#reservation-button-" + $(this).attr("id");
        const confirmReservationButton = "#confirm-reservation-button-" + $(this).attr("id");
        const cancelPopupSelection = "#cancel-" + $(this).attr("id");
        $(this).toggleClass("movie-class-clicked");
        $(reservationButtonID).addClass("show-button");
        $(reservationButtonID).on("click",function(){
            $(popUpID).addClass("show-popup");
        });
        $(popUpID).on("change", function(){
            $(cancelPopupSelection).show();
            $(confirmReservationButton).addClass("show-confirmation");
        });
        $(cancelPopupSelection).on("click",function(){
            $(confirmReservationButton).removeClass("show-confirmation");
            $(popUpID).removeClass("show-popup");
        });
    });        
}
 ShowMoviesByGenre();
