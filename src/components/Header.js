import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        height: 85,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.grey,
        
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
        color: colors.blue1,
    },
}) 

export default Header