import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const styles = require('./components/src/styles')

const SearchScreen = require('./components/search_screen')
const DictScreen = require('./components/dict_screen')

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SafeAreaView>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Search"
                            component={SearchScreen}
                        />
                        <Stack.Screen
                            name="Dictionary"
                            component={DictScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </View>
    )
}
