import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <View>
      <Header title="Categories" />
      <Categories />
    </View>
  )
}

export default Home