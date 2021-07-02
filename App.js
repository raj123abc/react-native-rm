import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground ,Pressable, Alert} from 'react-native';
import Button from "./component/buttons";
import Firstpage from './component/firstpage';
import Secondpage from './component/secondpage';
import Thirdpage from  './component/third'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// export fire base

import * as firebase from 'firebase';
import {firebaseConfig} from './config';



firebase.initializeApp(firebaseConfig);



// function HomeScreen({ navigation }) {
//   return(
//     <View>
//       <Text>
//         home screen
//       </Text>
      //  <Button 
      //   title="new button"
      //   onPress={() => navigation.navigate("Details")}
      //  >

      //  </Button>
     
//     </View>
//   )
  
// }
// function DetailScreen() {
//   return(
//     <View>
//       <Text>
//         Detail screen
//       </Text>
      
//     </View>
//   )
  
// }

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Firstpage} />
        <Stack.Screen name="Details" component={Secondpage} />
        <Stack.Screen name="Search" component={Thirdpage} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};