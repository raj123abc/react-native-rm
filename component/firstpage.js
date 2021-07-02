import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground ,Pressable,Button} from 'react-native';
// import Button from "./buttons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.medContainer}> 
          <ImageBackground source={require('../assets/m.jpg')} style={styles.image}></ImageBackground>
          <View>

              <View style={styles.titles}>  
                  <Text style={styles.title}>
                    RAHUL MEDICAL
                  </Text>
                  <Text style={styles.subtitle}>
                    drugs details
                  </Text> 
              </View>
              
              <View style={styles.buttonContainer}>
                <View style={styles.btn}>
                    <Button 
                        title="enter details"
                        color={'black'}
                        onPress={() => navigation.navigate('Details')}
                        >

                    </Button>
                </View>
                <View style={styles.btn}>
                    <Button 
                        title="search details"
                        color={'black'}
                        onPress={() => navigation.navigate('Search')} 
                        >

                    </Button>
                </View>
              </View>
      </View>
     </View>
      
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
     flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
    height:"100%",width:'100%',
    
   
  },
  medContainer:{
    width:"100%",
    height:"100%",
  },
  image: {
    width:"100%",
    height:"100%",
    position:"absolute",
    resizeMode:"cover",
    

  },
  
  titles:{
    fontSize:40,
    // backgroundColor:'blue',
    color:'white',
    textShadowColor:'white',marginTop:"25%",
    alignItems:"center",
    
  },
  title:{
    fontSize:30,
    fontWeight:"bold",
    
    color:"black",
    

  },
  subtitle:{
    alignItems:"center",
    textAlign:"center",
    fontWeight:"bold",
    padding:5,fontSize:15,textTransform:'capitalize',letterSpacing:3,color:"red",

  },
  buttonContainer:{
    marginTop:'90%',
  },

  // SECOND BUTTONS DETAILS
  btn:{
      padding:10,
  }

});
