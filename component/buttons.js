import * as React from "react";

import { StyleSheet, Text, View,ImageBackground, Pressable,Button,Alert } from 'react-native';
import styles from "./style";
// import Secondpage from './secondpage';
// import { useNavigation } from '@react-navigation/native';



const Buttons =() => {
  // const navigation = useNavigation(); 
    return (
      <View style={styles.container}>
          <View style={styles.btn}>
          <Button 
               title="new button"
               onPress={() => navigation.navigate("Details")}
           >

       </Button>
           
          </View>   
  
      </View>
    );
  }
 
export default Buttons;
 