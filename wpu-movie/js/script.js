function searchMovie() {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '807a0210',
            's': $('#search-input').val()
        },
        success: function (result) {
            if (result.Response == "True") {
                let movies = result.Search;

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img src="` + data.Poster + `" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">` + data.Title + `</h5>
                                <h6 class="card-subtitle mb-2 text-muted">` + data.Year + `</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` + data.imdbID + `">See detail</a>
                            </div>
                        </div>
                    </div>
                    `)
                });

                $('#search-input').val('');

            } else {
                $('#movie-list').html(`
                <div class="col>
                    <h1 class="text-center">` + result.Error + `</h1>
                </div>`);
            }
        }
    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchMovie();
    }
});

$('#movie-list').on('click', '.see-detail', function () {
    // console.log($(this).data('id'));
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '807a0210',
            'i': $(this).data('id')
        },
        success: function (movie) {
            $('.modal-body').html('');
            if (movie.Response === "True") {
                $('#movie-title').html(`<h4>` + movie.Title + `</h4>`);
                $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="` + movie.Poster + `" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><b>Actors :</b> <p>` + movie.Actors + `</p></li>
                                <li class="list-group-item"><b>Country :</b><p>` + movie.Country + `</p></li>
                                <li class="list-group-item"><b>Genre :</b><p>` + movie.Genre + `</p></li>
                                <li class="list-group-item"><b>Released :</b><p>` + movie.Released + `</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                `);
            }
        }
    });
});