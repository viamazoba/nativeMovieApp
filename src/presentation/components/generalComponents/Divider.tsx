import { StyleSheet, View } from 'react-native';


export const Divider = () => {

    return (
        <View
            style={style.container}
        >
            <View style={style.divider} />
        </View>
    );
};


const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
    },
    divider: {
        backgroundColor: '#ffd100',
        shadowColor: '#ffee32',
        shadowOpacity: 0.24,
        elevation: 10,
        borderRadius: 5,
        height: 5,
        width: 80,
    },
});
