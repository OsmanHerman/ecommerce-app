import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CategoryItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>{item}</Text>
    </View>
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