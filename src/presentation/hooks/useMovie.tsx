import {Text, View} from 'react-native';
import {useEffect, useState} from 'react';

export const useMovie = (movieID: number) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMovie();
  }, [movieID]);

  const loadMovie = () => {};

  return {};
};
