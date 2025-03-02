import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying } = useMovies();

    if (isLoading) {
        return (
            <Text>Cargando...</Text>
        );
    }


    return (
        <ScrollView
            contentContainerStyle={{
                backgroundColor: '#e8e5da',
            }}
        >
            <View style={{
                paddingTop: 30,
                marginTop: top + 20,
                backgroundColor: '#343a40',
            }}>
                <PosterCarousel
                    movies={nowPlaying}
                />
            </View>
        </ScrollView>
    );
};

