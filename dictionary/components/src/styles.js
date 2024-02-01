import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#ccc',
        padding: 5,
        borderRadius: 5,
        top: 40,
    },
    input: {
        flex: 5,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 5,
    },
    word: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    phonetic: {
        fontStyle: 'italic',
        marginBottom: 15,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    definition: {
        fontSize: 16,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
    },
})

module.exports = styles
