import MovieName from "./MovieName";
function Movie(){
    let movie_name='kgf';
    
return (
        <div className="bg-info">
        <MovieName name={movie_name}/>
        </div>
        )     
}
export default Movie;