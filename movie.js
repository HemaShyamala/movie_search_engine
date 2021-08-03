function slideShow() {
    var arr = [
        "https://images.designtrends.com/wp-content/uploads/2016/11/11112716/Untitled-10.jpg",
        "https://reeltimedublin.files.wordpress.com/2018/03/collage-compilation-mashup-youtube-walt-disney-feature-films-from-walt-animated-movies-collage-disney-feature-films-from-huang-chiencheng-hchiencheng-on-pinterest-huang.jpg",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/deeb3q0-b1a3614e-7bc5-4775-baed-ecf75a5e0617.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGVlYjNxMC1iMWEzNjE0ZS03YmM1LTQ3NzUtYmFlZC1lY2Y3NWE1ZTA2MTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.x10WVaoa0EW61SwkljZZxq5v_mNgZ9pTQvjop5m2TQk",
        "https://telugutracks.com/wp-content/uploads/2020/11/Telugu-Movies-Download-Best-Websites-To-Download-Telugu-Movies-For-Free.jpg",
        "https://i.ytimg.com/vi/jpwspmerk5c/maxresdefault.jpg",
        "https://i.ytimg.com/vi/xlMnpnnZms0/maxresdefault.jpg",
        "https://data1.ibtimes.co.in/en/full/614522/august-malayalam-releases.jpg",
    ];
    let div = document.getElementById("slideshow");
    let img = document.createElement("img");
    img.src = arr[0];
    let i = 0;
    div.append(img);

    setInterval(function() {
        img.src = arr[i];
        i++;
        if (i == arr.length) {
            i = 0;
        }
        // div.append(img);
    }, 2000);
}
slideShow();

let movie_container = document.getElementById("movie");

async function requestMovies() {
    let movie_name = document.getElementById("movie_name").value;
    try {
        let movies = await fetch(
            `http://www.omdbapi.com/?apikey=e69cfdd0&t=${movie_name}`
        );

        let data = await movies.json();
        console.log(data);
        appendData(data);
    } catch (err) {
        console.log(err);
        let body = document.querySelectorAll("body");
        let div = document.createElement("img");
        div.src =
            "https://in.bmscdn.com/iedb/movies/images/website/poster/large/keep-smiling--gaigiment--et00017432-24-03-2017-18-45-49.jpg";

        body.append(div);
    }
}

function appendData(data) {
    movie_container.innerHTML = null;
    let h1 = document.createElement("h1");
    if (data.Error == "Movie not found!") {
        let div = document.createElement("img");
        div.style.width = "600px";
        div.style.height = "700px";
        div.src =
            "https://in.bmscdn.com/iedb/movies/images/website/poster/large/keep-smiling--gaigiment--et00017432-24-03-2017-18-45-49.jpg";
        h1.innerHTML = "No Movie Found";
        movie_container.append(h1, div);
    } else {
        let div = document.createElement("div");

        let m_name = document.createElement("h1");
        m_name.innerHTML = `${data.Title}`;

        let m_actor = document.createElement("p");
        m_actor.innerHTML = `Casting: ${data.Actors}`;

        let poster = document.createElement("img");
        poster.src = data.Poster;

        let director = document.createElement("p");
        director.innerHTML = `Director: ${data.Director}`;

        let rating = document.createElement("p");
        rating.innerHTML = `Rating: ${data.imdbRating}`;

        let plot = document.createElement("p");
        plot.innerHTML = `Plot:${data.Plot}`;

        let release = document.createElement("p");
        release.innerHTML = `Release Date${data.Released}`;

        let language = document.createElement("p");
        language.innerHTML = `${data.Language}`;
        // let m_name = document.createElement("p");
        // let m_name = document.createElement("p");
        // let m_name = document.createElement("p");

        div.append(
            m_name,
            poster,
            m_actor,

            director,
            rating,
            plot,
            release,
            language
        );
        movie_container.append(div);
    }
}