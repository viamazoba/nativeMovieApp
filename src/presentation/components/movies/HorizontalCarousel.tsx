import { Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';


interface Props {
    variant?: 'primary' | 'secondary';
    movies: Movie[];
    title: string;
}

export const HorizontalCarousel = ({
    variant = 'primary',
    movies,
    title,
}: Props) => {

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
            />
        </View>
    );
};
