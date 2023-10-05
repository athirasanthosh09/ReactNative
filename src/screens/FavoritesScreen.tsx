import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen = ({ route }) => {
    const { favorites } = route.params;
    const navigation = useNavigation();

    const handleCityPress = (city) => {
        navigation.navigate('PlaceDetails', { city });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Favorites</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleCityPress(item)}>
                        <View style={styles.cityContainer}>
                            <Text style={styles.cityName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    cityContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
    },
    cityName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default FavoritesScreen;
