import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const PlaceDetailsScreen = () => {
    const route = useRoute();
    const { city } = route.params;

    return (
        <View>
            <Image source={{ uri: city.image }} style={{ width: 200, height: 200 }} />
            <Text>{city.name}</Text>
            <Text>{city.description}</Text>
        </View>
    );
};

export default PlaceDetailsScreen;
