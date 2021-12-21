function ShowMoviesByGenre() {
    window.onload = function() {
        var movieGenre = localStorage.getItem("movieGenre");  
        $('#genre').val(movieGenre);
    }
    $("#genre").on("change", function () {
        var genre = $(this).val();
        localStorage.setItem("movieGenre", genre);
        $.ajax({
            method: "GET",
            url: "./movie-reservation?genre=" + $("#genre").val(),
            success: function () {
                window.location.assign("./movie-reservation?genre=" + $("#genre").val());
            }
        });
    });
 }
 ShowMoviesByGenre();
