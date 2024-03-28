import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieID} = route.params;
  const {isLoading, movie} = useMovie(movieID);

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  return (
    <View>
      {/* Header */}
      <MovieHeader movie={movie!} />
    </View>
  );
};
