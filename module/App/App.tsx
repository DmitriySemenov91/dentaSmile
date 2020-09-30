import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerContent from '../screens/DrawerContent';
import PatientScreen from '../screens/PatientScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Patients' }}
        />
        <Stack.Screen
          name="Patients"
          component={PatientScreen}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
