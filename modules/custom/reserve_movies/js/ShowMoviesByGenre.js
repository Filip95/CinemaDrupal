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
        $(this).toggleClass("movie-class-clicked");
        $(this).find(".reserve-movies-button").first().toggleClass("show-button");
    });
 }
 ShowMoviesByGenre();
