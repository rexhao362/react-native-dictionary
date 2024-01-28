import { TextInput, View } from "react-native"

const searchBar = () => {
    return (
        <View>
            <TextInput
                style={{ flex: 5 }}
                placeholder="Search..."
                onChangeText={newWord => setWord(newWord)}
                defaultValue={word}
            />
            <Button
                style={{ flex: 1 }}
                onPress={getDefinitions()}
        /></View>
    )}