import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'
import { colors } from '../theme/colors'

const Products = ({category}) => {
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState(null);

  useEffect(() => {
    const categoryProducts = products.filter((el) => el.category === category);
    setCategoryProd(categoryProducts);

    if (text) {
      const titleProduct = products.filter(
        (el) => el.title.toLowerCase() === text.toLowerCase()
      );
      setCategoryProd(titleProduct);
    }
  }, [text, category]);

  return (
    <View style={styles.container}>
      <Header title="Products"/>
      <Search text={text} setText={setText} />

      <FlatList 
        data={categoryProd}
        keyExtractor={categoryProd.id}
        renderItem={({item}) => <ProductItem item={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
})

export default Products