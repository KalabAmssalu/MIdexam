import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';


// Screens
import HomeScreen from './screens/HomeScreen';
import contactScreen from './screens/contactScreen';
import aboutScreen from './screens/aboutScreen';

//Screen names
const home = "Employee";
const contact = "Students";
const About = "Teachers";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === home) {
              iconName = focused ? 'md-person-sharp' : 'md-person-sharp';

            } else if (rn === contact) {
              iconName = focused ? 'book' : 'book';

            } else if (rn === About) {
              iconName = focused ? 'pencil' : 'pencil';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ad1f6d',
          inactiveTintColor: '#1f91ad',
          labelStyle: { paddingBottom: 5, fontSize: 15 },
          style: { padding: 20, height: 80}
        }}>

        <Tab.Screen name={home} component={HomeScreen} />
        <Tab.Screen name={contact} component={contactScreen} />
        <Tab.Screen name={About} component={aboutScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  nav: {
    backgroundColor:'brown'
  },
})
export default MainContainer;