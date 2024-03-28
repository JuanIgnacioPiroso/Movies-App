import {Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entity';

export const useMovie = (movieID: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, [movieID]);

  const loadMovie = async () => {
    setIsLoading(true);

    const fullMovie = await UseCases.getMovieByIdeUseCase(
      movieDBFetcher,
      movieID,
    );
    setMovie(fullMovie);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
  };
};
