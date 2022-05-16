/*
id
original_title
overview
poster_path
vote_average
*/


const API_KEY = "7f1f1402996361135b864d977d5871b8";

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7f1f1402996361135b864d977d5871b8&language=fr-FR&page=1`, {
        method: "GET"
    })
    .then((response) => {
        return response.json();
    })
    .then(data => {

        console.log(data); // <- {id: number, name: string}[]


        data.results.forEach(element => {
            let originalTitle = element.original_title;
            let overview = element.overview;
            let posterPath = element.poster_path;
            let voteAverage = element.vote_average;

            cardMovie.innerHTML += `
                        <div id="cardMovieCss" class="col-6 col-md-3">
                            <!-- CARD -->
                            <div class="row ">
                                <div id="imgMovie" class="col-4 align-self-center">
                                <img src="https://image.tmdb.org/t/p/w500${posterPath}">
                                </div>
                                <div class="col-8">
                                    <div id="titleMovie" class="row h-50">
                                        <div class="col h-50">
                                            <strong>${originalTitle}</strong>
                                        </div>
                                    </div>
                                    <div id="textMovie" class="row h-40">
                                        <div class="col h-100">
                                        ${overview.substring(0, 80)}...
                                        </div>
                                    </div>
                                    <div id="voteAverage" class="row h-10">
                                        <div id="starsMovie" class="col">

                                        </div>
                                        <div id="noteMovie" class="col">
                                            ${voteAverage}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
        })
    })






    .catch(function (error) {
        console.error(error);
    });
