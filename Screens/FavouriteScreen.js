import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet, ImageBackground } from 'react-native';
import { useCartFavourites } from '../Context/CartFavouritesContext';

export default function FavouriteScreen() {
  const { favourites, removeFromFavourites } = useCartFavourites();

  const handleRemoveFromFavorites = (book) => {
    removeFromFavourites(book.id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.cover }} style={styles.coverImage} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>by {item.author}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Button title="Remove from Favourites" onPress={() => handleRemoveFromFavourites(item)} />
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/yhK0qil.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  coverImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
});
