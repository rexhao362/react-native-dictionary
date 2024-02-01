import { useState } from 'react'
import { Button, TextInput, View } from 'react-native'

const styles = require('./src/styles')
const newDictReq = require('./src/dictionary_req')

const SearchScreen = ({ navigation }) => {
    const [word, setWord] = useState('')

    const fetchData = async () => {
        const res = await newDictReq(word)
        navigation.navigate('Dictionary', {
            word: word,
            definitions: res.definitions,
            phonetic: res.phonetic,
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={newWord => setWord(newWord)}
                    defaultValue={word}
                    onSubmitEditing={() => fetchData()}
                />
                <Button
                    title="?"
                    onPress={() => fetchData()}
                />
            </View>
        </View>
    )
}

module.exports = SearchScreen
