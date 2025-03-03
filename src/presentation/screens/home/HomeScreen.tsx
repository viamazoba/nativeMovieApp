import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { Divider } from '../../components/generalComponents/Divider';


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

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

                <View
                    style={{
                        backgroundColor: '#f8f9fa',
                        paddingTop: 10,
                        paddingBottom: 20,
                    }}
                >

                    <HorizontalCarousel
                        title="Populares"
                        movies={popular}
                        loadNextPage={popularNextPage}
                    />
                    <Divider />
                </View>

                <View
                    style={{
                        paddingTop: 10,
                        paddingBottom: 20,
                    }}
                >
                    <HorizontalCarousel
                        variant="secondary"
                        title="Mejor calificadas"
                        movies={topRated}
                    />
                    <Divider />
                </View>

                <View
                    style={{
                        backgroundColor: '#f8f9fa',
                        paddingTop: 10,
                        paddingBottom: 20,
                    }}
                >
                    <HorizontalCarousel
                        title="Próximamente"
                        movies={upcoming}
                    />
                    <Divider />
                </View>
            </View>
        </ScrollView>
    );
};

