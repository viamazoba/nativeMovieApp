import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '../generalComponents/Divider';

interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}


export const MovieHeader = ({ poster, originalTitle, title }: Props) => {

    const { height: screenHeight } = useWindowDimensions();
    const navigation = useNavigation();

    return (
        <>
            <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
                <View style={styles.imageBorder}>
                    <Image
                        style={styles.posterImage}
                        source={{ uri: poster }}
                    />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>
                    {originalTitle}
                </Text>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>

            <View style={{ marginTop: 5, marginBottom: 10 }}>
                <Divider />
            </View>

            <View style={styles.backButton}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Regresar</Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 1,

        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },

    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },

    marginContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 20,
        opacity: 0.8,
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 35,
        left: 10,
        backgroundColor: 'rgba(255, 209, 0, 0.55)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    backButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});
