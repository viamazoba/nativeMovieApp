import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView, Text } from 'react-native';
import { RootStackParams } from '../../routes/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';


interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;
    const { isLoading, movie, cast } = useMovie(movieId);

    if (isLoading) {
        return <Text>Loading</Text>;
    }
    return (
        <ScrollView>
            <MovieHeader
                poster={movie.poster}
                title={movie.title}
                originalTitle={movie.originalTitle}
            />
            <MovieDetails
                movie={movie}
                cast={cast!}
            />
        </ScrollView>
    );
};

