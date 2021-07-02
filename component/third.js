import React, { Component } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import MaterialStackedLabelTextbox1 from "../component/MaterialStackedLabelTextbox1";
import MaterialButtonViolet from "../component/MaterialButtonViolet";

function SearchScreen() {
    return (
      <View style={styles.container}>
      <MaterialStackedLabelTextbox1
        inputStyle="Input"
        label="NAME"
        inputStyle="ENTER NAME"
        style={styles.materialStackedLabelTextbox1}
      ></MaterialStackedLabelTextbox1>
      <MaterialStackedLabelTextbox1
        inputStyle="Input"
        inputStyle="ENTER COMPANY"
        label="COMPANY"
        style={styles.materialStackedLabelTextbox2}
      ></MaterialStackedLabelTextbox1>
      <MaterialStackedLabelTextbox1
        inputStyle="Input"
        inputStyle="ENTER DISTRIBUTERS"
        label="DISTRIBUTERS"
        style={styles.materialStackedLabelTextbox3}
      ></MaterialStackedLabelTextbox1>
      <MaterialStackedLabelTextbox1
        inputStyle="Input"
        inputStyle="ENTER COST PROCE"
        label="COST PROCE"
        style={styles.materialStackedLabelTextbox4}
        keyboardType="numeric"
      ></MaterialStackedLabelTextbox1>
      <MaterialStackedLabelTextbox1
        inputStyle="Input"
        inputStyle="ENTER SELLING PRICE"
        label="SELLING PRICE"
        style={styles.materialStackedLabelTextbox5}
        keyboardType="numeric"
      ></MaterialStackedLabelTextbox1>
      <View style={styles.group}>
        <MaterialButtonViolet
          caption="BUTTON"
          caption="SUBMIT DETAILS"
          style={styles.materialButtonViolet}
        ></MaterialButtonViolet>
      </View>
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(230, 230, 230,1)"
    },
    materialStackedLabelTextbox1: {
      height: 70,
      width: 339,
      marginTop: 44,
      marginLeft: 9
    },
    materialStackedLabelTextbox2: {
      height: 70,
      width: 339,
      marginTop: 19,
      marginLeft: 9
    },
    materialStackedLabelTextbox3: {
      height: 70,
      width: 339,
      marginTop: 22,
      marginLeft: 12
    },
    materialStackedLabelTextbox4: {
      height: 70,
      width: 339,
      marginTop: 16,
      marginLeft: 12
    },
    materialStackedLabelTextbox5: {
      height: 70,
      width: 339,
      marginTop: 29,
      marginLeft: 12,
     
      
    },
    group: {
      width: 223,
      height: 70,
      marginTop: 46,
      marginLeft: 58
    },
    materialButtonViolet: {
      height: 70,
      width: 223
    }
  });
  
 
  export default SearchScreen;