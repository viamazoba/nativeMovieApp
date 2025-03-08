import { ActivityIndicator, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';


export const FullScreenLoader = () => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', gap: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: 500, color: '#212529', alignSelf: 'center' }}>Cargando</Text>
            <ActivityIndicator size={70} color="#212529" />
        </View>
    );
};
