/*
id
original_title
overview
poster_path
vote_average
*/

fetch("movies.json")
    .then(response => {
        return response.json();
    })

    .then(jsondata => {

        jsondata.results.forEach(element => {
            let originalTitle = element.original_title;
            let overview = element.overview.substring(0,80);
            let posterPath = element.poster_path;
            let voteAverage = element.vote_average;

            cardMovie.innerHTML += `
                <div id="cardMovieCss" class="col-6 col-md-3">
                    <!-- CARD -->
                    <div class="row ">
                        <div id="imgMovie" class="col-4 align-self-center">
                            <img src="${posterPath}">
                        </div>
                        <div class="col-8">
                            <div id="titleMovie" class="row h-50">
                                <div class="col h-50">
                                    <strong>${originalTitle}</strong>
                                </div>
                            </div>
                            <div id="textMovie" class="row h-40">
                                <div class="col h-100">
                                    ${overview}...
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



            console.log(`- ${originalTitle} / ${overview} / ${posterPath} / ${voteAverage}`);

        });


    });