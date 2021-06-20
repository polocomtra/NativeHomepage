import React  from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './src/components/TabNavigator';
import BlankPage from './src/screens/BlankPage';
import ModalCpn from './src/components/ModalCpn';
import * as Linking from 'expo-linking'

const Stack=createStackNavigator();

const prefix=Linking.createURL('/')

export default function App() {
  const linking={
    prefixes: [prefix],
    config:{
      screens:{
        Main:'Main',
        BlankPage:'BlankPage'
      }
    }
  }
  return (
      <NavigationContainer linking={linking}>
        <Stack.Navigator initialRouteName="ModalPopup">
          <Stack.Screen name="Main" component={TabNavigator} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name="BlankPage" component={BlankPage}></Stack.Screen>
          <Stack.Screen name="ModalPopup" component={ModalCpn} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer> 
      
    )
  
}

const styles = StyleSheet.create({});
