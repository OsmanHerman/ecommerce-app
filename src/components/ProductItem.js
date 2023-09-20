import { View, Text, StyleSheet, Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const ProductItem = ({item, navigation}) => {
  const {height, width} = useWindowDimensions();
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("productDetail", { item })}>
      <Text style={width < 300 ? styles.textMin : styles.text}>{item.title}</Text>

      <Image 
      style={styles.image}
      height={80}
      width={80}
      source={{uri: item.images[0]}}
      resizeMode="cover"
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 30,
        borderColor: colors.blue2,
        borderRadius: 10,
        borderWidth: 2,
        height: 100,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    textMin: {
        fontSize: 10,
        fontWeight: '900',
        marginLeft: 20,
        width: '60%',
    },
    text: {
      fontSize: 20,
      fontWeight: '900',
      marginLeft: 20,
      width: '60%',
  },
    image: {
        marginRight: 10,
        objectFit: 'cover',
    },
})

export default ProductItem