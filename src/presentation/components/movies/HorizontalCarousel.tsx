/* eslint-disable curly */
import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';
import { useEffect, useRef } from 'react';


interface Props {
    variant?: 'primary' | 'secondary';
    movies: Movie[];
    title: string;
    loadNextPage?: () => void;
}

export const HorizontalCarousel = ({
    variant = 'primary',
    movies,
    title,
    loadNextPage,
}: Props) => {

    const isLoading = useRef(false);

    useEffect(() => {
        // Este tiempo es para un respiro para la app y la persona se encuentre con el final
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movies]);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        if (isLoading.current) return;
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        if (!isEndReached) return;

        isLoading.current = true;
        // Cargar las siguientes páginas para el scroll infinito
        loadNextPage && loadNextPage();
    };

    return (
        <View
            style={{ height: title ? 260 : 220 }}
        >
            {
                title && (
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: '500',
                            color: variant === 'primary' ? '#212529' : '#f8f9fa',
                            marginTop: 15,
                            marginLeft: 10,
                            marginBottom: 10,
                        }}
                    >
                        {title}
                    </Text>
                )
            }
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster movie={item} width={140} height={200} variant={variant} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
            />
        </View>
    );
};
