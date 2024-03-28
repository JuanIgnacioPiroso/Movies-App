import {StackScreenProps} from '@react-navigation/stack';
import {Text} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieID} = route.params;
  const {isLoading, movie, cast = []} = useMovie(movieID);

  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />

      {/* Detalles */}
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
