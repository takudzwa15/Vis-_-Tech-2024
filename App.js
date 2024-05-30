import React, {useState,useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions, NavigationContainer, StackActions } from '@react-navigation/native';
import OnbordingScreen from './screens/OnbordingScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import DrawerNav from './screens/DrawerNav';
// import {firebase} from './config'



const AppStack = createStackNavigator();

export default function App() {

  // const [initializing, setInitializing] = useState(true);
  // const [user,setUser] = useState();


  return (
    <NavigationContainer independent={true}>
      <AppStack.Navigator headerMode="none" >
        <AppStack.Screen name="Onbording" component={OnbordingScreen}/>
        <AppStack.Screen name="Login" component={LoginScreen}/>
        <AppStack.Screen name="SignUpScreen" component={RegisterScreen}/>
        <AppStack.Screen name='HomeScreen' component={HomeScreen}/>
        <AppStack.Screen name='DrawerNav' component={DrawerNav}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}


