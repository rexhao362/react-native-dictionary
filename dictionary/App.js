import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, SafeAreaView, SectionList, Text, TextInput, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
const styles = require('./components/src/styles')
const Definition = require('./components/src/dictionary_req')
const displayDefSections = require('./components/app_functions');

export default function App() {
    const [word, setWord] = useState('')
    const [defWord, setDefWord] = useState({})
    const [definitions, setDefinitions] = useState([])
    const [phonetic, setPhonetic] = useState('')

    const getDefinitions = () => {
        setDefWord(new Definition(word)).then(() => {
            setDefinitions(defWord.def)
            setPhonetic(defWord.phonetic)
        })
    }

    return (
        <NavigationContainer>
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SafeAreaView>
                <View style={styles.textBox}>
                    <TextInput
                        style={{ flex: 5 }}
                        placeholder="Search"
                        onChangeText={newWord => setWord(newWord)}
                        defaultValue={word}
                    />
                    <Button
                        style={{ flex: 1 }}
                        onPress={getDefinitions()}
                    />
                </View>
                <Text>
                    {word}
                </Text>
                <Text>
                    {phonetic}
                </Text>
                <View>
                    {displayDefSections(definitions)}
                </View>
            </SafeAreaView>
        </View>
        </NavigationContainer>
    )
}
