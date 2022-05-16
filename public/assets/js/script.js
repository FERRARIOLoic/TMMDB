/*
id
original_title
overview
poster_path
vote_average
*/


const API_KEY = "7f1f1402996361135b864d977d5871b8";

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=fr&page=1`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {

        console.log(data); // <- {id: number, name: string}[]


        data.results.forEach(element => {
            let originalTitle = element.original_title;
            let overview = element.overview;
            let posterPath = element.poster_path;
            let voteAverage = element.vote_average;
            let movie_id = element.id;
            console.table(`https://api.themoviedb.org/3/movie/238/alternative_titles?api_key=${API_KEY}&country=fr`)
            
            if (voteAverage >= 0 && voteAverage <= 1) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starHalf.svg"></div>
                </div>`;
            }
            else if (voteAverage > 1 && voteAverage <= 2) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                </div>`;
            }
            else if (voteAverage >2 && voteAverage <= 3) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starHalf.svg"></div>
                </div>`;
            }
            else if (voteAverage >3 && voteAverage <= 4) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                </div>`;
            }
            else if (voteAverage >5 && voteAverage <= 6) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starHalf.svg"></div>
                </div>`;
            }
            else if (voteAverage >6 && voteAverage <= 7) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                </div>`;
            }
            else if (voteAverage >7 && voteAverage <= 8) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starHalf.svg"></div>
                </div>`;
            }
            else if (voteAverage >8 && voteAverage <= 9) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                </div>`;
            }
            else if (voteAverage >9 && voteAverage <= 10) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starHalf.svg"></div>
                </div>`;
            }else if (voteAverage == 10) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                </div>`;
            }

            cardMovie.innerHTML += `
                        <div id="cardMovieCss" class="col-6 col-md-3">
                            <!-- CARD -->
                            <div class="row ">
                                <div id="imgMovie" class="col-4 align-self-center">
                                <img src="https://image.tmdb.org/t/p/w500${posterPath}">
                                </div>
                                <div class="col-8">
                                    <div id="titleMovie" class="row">
                                        <div class="col ">
                                            <strong>${originalTitle}</strong>
                                        </div>
                                    </div>
                                    <div id="textMovie" class="row">
                                        <div class="col ">
                                        ${overview.substring(0, 90)}...
                                        </div>
                                    </div>
                                    <div id="voteAverage" class="row ">
                                        <div id="starsMovie" class="col-12">

                                        ${voteStars}

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