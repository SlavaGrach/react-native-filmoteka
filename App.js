import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Todos from './src/screens/Todos/Todos'
import Filmoteka from './src/screens/Filmoteka/Filmoteka'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarAllowFontScaling: true,
          tabBarLabelStyle: {
            fontSize: 22,
            paddingBottom: 10,
          },
          tabBarIcon: () => {
            return
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Todos" component={Todos} />
        <Tab.Screen name="Filmoteka" component={Filmoteka} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
