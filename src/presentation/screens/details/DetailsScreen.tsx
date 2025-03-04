import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../routes/Navigation';
import { useMovie } from '../../hooks/useMovie';


interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;
    const { movie } = useMovie(movieId);
    return (
        <View>
            <Text>Movie: {movie.originalTitle}</Text>
        </View>
    );
};

