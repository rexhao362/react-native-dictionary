import { useState } from 'react'
import { Button, TextInput, View } from 'react-native'
const styles = require('./components/src/styles')
const newDictReq = require('./src/dictionary_req')

const searchScreen = async ({ navigation }) => {
    const [word, setWord] = useState('')

    return (
        <View style={styles.textBox}>
            <TextInput
                style={{ flex: 5 }}
                placeholder="Search"
                onChangeText={newWord => setWord(newWord)}
                defaultValue={word}
            />
            <Button
                title=""
                style={{ flex: 1 }}
                onPress={async () => {
                    const res = await newDictReq(word)
                    navigation.navigate('Dictionary', {
                        word: word,
                        definitions: res.definitions,
                        phonetic: res.phonetic,
                    })
                }}
            />
        </View>
    )
}

module.exports = searchScreen
