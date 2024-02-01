import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const SearchScreen = require('./components/search_screen')
const DictScreen = require('./components/dict_screen')

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <StatusBar style="auto" />
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
    )
}
