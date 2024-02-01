import { Button, Text, View } from 'react-native'
const styles = require('./src/styles')
const displayDefSections = require('./app_functions')

const DictScreen = ({ route, navigation }) => {
    const { word, definitions, phonetic } = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.word}>{word}</Text>
            <Text style={styles.phonetic}>{phonetic}</Text>
            {displayDefSections(definitions)}
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

module.exports = DictScreen
