import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CategoryItem = ({item, navigation}) => {
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('products', { item: item })}>
      <Text style={styles.categoryText}>{item}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },

    categoryText: {
        fontSize: 23,
        margin: 5,
        padding: 5,
        color: colors.white,
        textAlign: 'center',
        width: "60%",
        borderColor: colors.blue1,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.blue2,
    }
})

export default CategoryItem