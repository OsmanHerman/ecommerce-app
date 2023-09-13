import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';

const Search = ({ text, setText}) => {

    const removeInput = () => {
        setText("");
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={(value) => setText(value)}
                placeholder='Search product...'
            />
            <Pressable onPress={removeInput}>
                <AntDesign name='close' size={30} color='black'/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        columnGap: 10,
        backgroundColor: colors.white,
    },
    input: {
        marginVertical: 10,
        color: colors.blue1,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.blue1,
        width: '80%',
        fontSize: 20,
    }
})

export default Search