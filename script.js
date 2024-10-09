let movies = [
    {
        name:"Dark",
        poster:"https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg",
        rating: 9.5,
        gener:"Drama · Fantasy · Horror"
    },
    {
        name:"The last of us",
        poster:"https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1600.jpg",
        rating: 8.2,
        gener: "Action · Adventure · Game"
    },
    {
        name:"Walk Alone",
        poster:"https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg",
        rating: 5.6,
        gener:"Crime · Drama · Film-Noir"
    },
    {
        name:"John Wick",
        poster:"https://th.bing.com/th/id/OIP.AhSvMdKQJ41hrJzEKjIfIQHaKl?rs=1&pid=ImgDetMain",
        rating: 9.5,
        gener:"Action · Crime · Thriller"
    },
    {
        name:"Looper",
        poster:"https://c8.alamy.com/comp/PM879D/tristar-pictures-film-district-and-end-game-entertainments-action-thriller-looper-poster-PM879D.jpg",
        rating: 7.2,
        gener:"Action · Drama · Sci-Fi · Thriller"
    },
    {
        name:"Matrix",
        poster:"https://th.bing.com/th/id/OIP.TgRVOiJlUISKctGTdnf5sAHaKa?rs=1&pid=ImgDetMain",
        rating: 6.2,
        gener:"Sci-Fi · Adventure"
    },
    {
        name:"Noah",
        poster:"https://th.bing.com/th/id/R.683696985b7a7f51fed49734b2d7b899?rik=M14gcePMZ7J%2bMw&riu=http%3a%2f%2fuiconstock.com%2fwp-content%2fuploads%2f2014%2f05%2fnoah-2014-movie-poster.jpg&ehk=yMmaEp8n20br9qxvKkWVXeHWMXjnKI%2fL6L4sBkzUZ0w%3d&risl=&pid=ImgRaw&r=0",
        rating: 6.2,
        gener:"Action · Adventure · Drama"
    },
    {
        name:"Love Story",
        poster:"https://marketplace.canva.com/EAFMq1PnMF0/1/0/1131w/canva-black-minimalist-love-story-movie-poster-Vzujes4EjVY.jpg",
        rating: 5.6,
        gener:"Love · Drama · Story"
    },
    {
        name:"Us",
        poster:"https://th.bing.com/th/id/OIP.c8lgkj4r8IDcgQvNXXKFpAHaLu?rs=1&pid=ImgDetMain",
        rating: 4.8,
        gener:"Horror · Mystery · Thriller"
    },
    {
        name:"Aladdin",
        poster:"https://webneel.com/daily/sites/default/files/images/daily/09-2019/2-movie-poster-design-aladdin-disney-glossy-composite.jpg",
        rating:5.9 ,
        gener:"Adventure · Comedy · Family · Fantasy · Musical · Romance"
    },
    {
        name:"Venom",
        poster:"https://image.tmdb.org/t/p/original/rTFdf7OLQ1d0R0TfEPm8vpscFGo.jpg",
        rating: 6.6,
        gener:"Action · Adventure · Sci-Fi"
    },
    {
        name:"Titanic",
        poster:"https://image.tmdb.org/t/p/original/tr5y5H4qOlqCGbZKaT9Q97cscVj.jpg",
        rating: 7.9,
        gener:"Drama · Romance"
    },
    {
        name:"Blade Runner 2049",
        poster:"https://image.tmdb.org/t/p/original/5EuXvLuNVIVsYDa3d4VrPtnBy5.jpg",
        rating: 8,
        gener:"Action · Drama · Mystery · Sci-Fi · Thriller"
    },
    {
        name:"Shutter Island",
        poster:"https://th.bing.com/th/id/OIP.q3Eq-BcX41Xu_yFl-O03jQHaLH?rs=1&pid=ImgDetMain",
        rating: 8.2,
        gener:"Psychological Thriller · Drama · Mystery · Thriller "
    },
    {
        name:"Deadpool",
        poster:"https://picfiles.alphacoders.com/127/thumb-1920-127251.jpg",
        rating: 8,
        gener:"Action · Comedy"
    },
    {
        name:"Spider-Man: Into the Spider-Verse",
        poster:"https://th.bing.com/th/id/OIP.TNOGqZ23BC0mRtKAr1kIIQHaKu?rs=1&pid=ImgDetMain",
        rating: 8.4,
        gener:"Animation · Action · Adventure · Comedy · Family · Fantasy · Sci-Fi"
    }

];



function searchMovie() {
    let movieName = document.getElementById('search').value;
 //    console.log(movieName)

    if(movieName !=="") {

        let result = movies.filter(function(movie) {
                        return movie.name.toUpperCase().includes( movieName.toUpperCase())
                    })

        displayMovies(result);

    }  else {
        displayMovies(movies);
    }
}




function displayMovies(data)  {

    document.getElementById("movies").innerHTML=""; //first cleane whole div blank


    let htmlString = ` `;

        for (let i=0;i<data.length;i++) {
            
            htmlString =htmlString + `
            <div class="movie">
            <div class="overlay">

                <div class="video"></div>
                <div class="details">
                    <h1>${data[i].name}</h1>
                    <h2>IMBD :${data[i].rating}</h2>
                    <h3>Gener: ${data[i].gener}</h3>
                </div>
            </div>
            <img class="poster" src="${data[i].poster}" alt="Poster">
        </div>

            `
        }

        document.getElementById("movies").innerHTML = htmlString;

}

displayMovies(movies) 

