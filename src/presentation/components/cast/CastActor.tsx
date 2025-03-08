import { Image, StyleSheet, View, Text } from 'react-native';
import { Cast } from '../../../core/entities/cast.entity';

interface Props {
    actor: Cast;
}

export const CastActor = ({ actor }: Props) => {

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: actor.avatar }}
                style={styles.image}
            />

            <View style={styles.actorInfo}>
                <Text style={styles.textTitle}>{actor.name}</Text>
                <Text style={styles.text}>{actor.character}</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 100,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
        shadowColor: '#f8f9fa',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f8f9fa',
    },
    text: {
        fontSize: 12,
        opacity: 0.7,
        color: '#f8f9fa',
    },
});
