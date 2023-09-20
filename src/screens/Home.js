import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import {categories} from '../data/categories'
import CategoryItem from '../components/CategoryItem'

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header title="Categories" navigation={navigation}/>
      <View>
        <FlatList 
          data={categories}
          keyExtractor={key => key}
          renderItem={({item}) => <CategoryItem navigation={navigation} item={item}/>}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home