import React from 'react';
import { StyleSheet, Text, View,ImageBackground ,Pressable, Alert,  Button , TextInput} from 'react-native';
// import {Formik} from 'formik';
import './style';
import styles from './style';
import { Value } from 'react-native-reanimated';

class secondpage extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            company:'',
            distributor:'',
            Prate:'',
            Srate:'',


        }

    }
    submit(){
        console.warn(this.state)
    }
   render(){
    return(
        <View style={{marginTop:'15%',padding:8}}>
            <TextInput
                multiline
                placeholder='enter name'
                onChangeText={(text)=>{ this.setState({name:text})}}
                style={{borderColor:'skyblue', borderRadius:5,borderWidth:3,margin:10,fontSize:20,textAlign:'center'}}

            >

            </TextInput>
            <TextInput
                multiline
                placeholder='comapny name'
                onChangeText={(text)=>{ this.setState({company:text})}}
                style={{borderColor:'skyblue', borderRadius:5,borderWidth:3,margin:10,fontSize:20,textAlign:'center'}}

            >

            </TextInput>
            <TextInput
                multiline
                placeholder='distributor'
                onChangeText={(text)=>{ this.setState({distributor:text})}}
                style={{borderColor:'skyblue', borderRadius:5,borderWidth:3,margin:10,fontSize:20,textAlign:'center'}}

            >

            </TextInput>
            <TextInput
                multiline
                placeholder='p-rate'
                onChangeText={(text)=>{ this.setState({Prate:text})}}
                keyboardType="number-pad"
                style={{borderColor:'skyblue', borderRadius:5,borderWidth:3,margin:10,fontSize:20,textAlign:'center'}}

            >

            </TextInput>
            <TextInput
                multiline
                placeholder='s-rate'
                keyboardType='number-pad'
                onChangeText={(text)=>{ this.setState({Srate:text})}}
                style={{borderColor:'skyblue', borderRadius:5,borderWidth:3,margin:10,fontSize:20,textAlign:'center'}}

            >

            </TextInput>
            <Button
            title="submit"
            onPress={()=>{this.submit()}}
            
            >

            </Button>
            
            
        </View>
    )
   }
    

}

export default secondpage;
