import { View, Text, StyleSheet, Image, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { AntDesign } from '@expo/vector-icons';

const ProductDetail = ({navigation, route }) => {

    const { item } = route.params;

  return (
    <SafeAreaView>
        <Header title="Details"/>
        <View style={styles.imageContainer}>
            <Image
            resizeMode='cover'
            source={{uri: item.images[0]}}
            style={styles.image}
            />
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}> {item.title} </Text>
                <Text style={styles.description}> {item.description} </Text>
                <Text style={styles.price}> ${item.price} </Text>

                <Pressable style={styles.button} onPress={() => 'comprar producto...'}>
                    <Text style={styles.text}> Comprar ({item.stock} disponibles) </Text>
                </Pressable>

                <View style={styles.ratingContainer}>
                    <AntDesign name="star" size={21} color="black" />
                    <Text style={styles.rating}> Rating: {item.rating} </Text>
                </View>
            
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    image: {
        height: 385,
        width: '100%',
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
    },

    descriptionContainer: {
        marginVertical: 10,
        marginTop: 8,
    },
    title: {
        fontSize: 29,
        fontWeight: '700',
    },
    description: {
        fontSize: 21,
        fontWeight: '500',
        marginTop: 6,
    },
    price: {
        marginTop: 10,
        fontSize: 31,
    },
    button: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    rating: {
        marginLeft: 5,
        fontSize: 20,
    },
    ratingContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default ProductDetail;