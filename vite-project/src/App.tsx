import './App.css'

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <h1 className="animate__animated animate__bounce">{props.title}</h1>
    </header>
  );
};
interface CinemaProps {
  name: string;
  movies: Movie[];
}
interface Movie {
  title: string;
  director: string;
}
const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.movies.map((movie, index) => (
          <li key={index}>
            <strong>{movie.title}</strong> - Réalisateur {" "}
            {movie.director}
          </li>
        ))}
      </ul>
        
      
    </div>
  );
}

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const movie1 = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2 = {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  };

  const cinema2Name = "UGC Toison d'Or";
  const movie3 = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };

  return (
    <div>
      <Header title={pageTitle} />

      <Cinema name={cinema1Name} movies={[movie1, movie2]} />

      <Cinema name={cinema2Name} movies={[movie3, movie4]} />
    </div>
  );
};


export default App;

