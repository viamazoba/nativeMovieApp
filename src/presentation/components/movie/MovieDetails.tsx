import { FlatList, Text, View } from 'react-native';
import { FullMovie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import { CastActor } from '../cast/CastActor';
import { Divider } from '../generalComponents/Divider';

interface Props {
    movie: FullMovie;
    cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {

    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ fontSize: 23, marginTop: 15, marginBottom: 5, fontWeight: '500' }}>
                    Géneros
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    {movie.genres.map((genre, index) => (
                        <Text key={index} style={{
                            fontSize: 18,
                            color: '#f8f9fa',
                            backgroundColor: 'rgba(52, 58, 64, 0.55)',
                            borderRadius: 8,
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                        }}>{genre}</Text>
                    ))}
                </View>

                <Text style={{ fontSize: 23, marginTop: 15, marginBottom: 5, fontWeight: '500' }}>
                    Rating
                </Text>
                <Text>{movie.rating}</Text>

                <Text style={{ fontSize: 23, marginTop: 15, marginBottom: 5, fontWeight: '500' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>{movie.description}</Text>

                <Text style={{ fontSize: 23, marginTop: 15, marginBottom: 5, fontWeight: '500' }}>
                    Presupuesto
                </Text>

                <Text style={{ fontSize: 18 }}>
                    {Formatter.currency(movie.budget)}
                </Text>
            </View>

            <View style={{ marginVertical: 20 }}>
                <Divider />
            </View>

            <View style={{ backgroundColor: '#343a40', marginBottom: 50 }}>
                <Text
                    style={{
                        fontSize: 23,
                        color: '#f8f9fa',
                        marginVertical: 10,
                        fontWeight: 'bold',
                        marginHorizontal: 20,
                        marginBottom: 15,
                    }}
                >
                    Actores
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CastActor actor={item} />}
                />
            </View>

        </>
    );
};
