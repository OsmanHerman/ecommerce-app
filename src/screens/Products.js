import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'
import { colors } from '../theme/colors'

const Products = ({route, navigation}) => {
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState(null);

  const { item } = route.params;

  useEffect(() => {
    const categoryProducts = products.filter((el) => el.category === item);
    setCategoryProd(categoryProducts);

    if (text) {
      const titleProduct = products.filter(
        (el) => el.title.toLowerCase() === text.toLowerCase()
      );
      setCategoryProd(titleProduct);
    }
  }, [text, item]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={item} navigation={navigation}/>
      <Search text={text} setText={setText} />

      <FlatList 
        data={categoryProd}
        keyExtractor={categoryProd.id}
        renderItem={({item}) => <ProductItem navigation={navigation} item={item}/>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
})

export default Products