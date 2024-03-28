import {Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entity';
import {Cast} from '../../core/entities/cast.entity';

export const useMovie = (movieID: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieID]);

  const loadMovie = async () => {
    setIsLoading(true);

    const fullMoviePromise = await UseCases.getMovieByIdeUseCase(
      movieDBFetcher,
      movieID,
    );
    const castPromise = await UseCases.getMovieCastUseCase(
      movieDBFetcher,
      movieID,
    );

    const [fullMovie, cast] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);
    setMovie(fullMovie);
    setCast(cast);
    setIsLoading(false);

    console.log({fullMovie});
  };

  return {
    isLoading,
    movie,
    cast,
  };
};
