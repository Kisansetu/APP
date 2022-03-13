import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInMobileNumber from './src/screens/SignInMobileNumber'
import SignInSelectLanguage from './src/screens/SignInSelectLanguage'


const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Language'>
        <Stack.Screen name='Language' component={SignInSelectLanguage} options={{ title: 'SignUp' }}/>
        <Stack.Screen name='MobileNumber' component={SignInMobileNumber} options={{ title: '' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
