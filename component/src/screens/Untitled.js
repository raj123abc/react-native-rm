import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <MaterialFixedLabelTextbox
        label="FixedLabel"
        label="NAME"
        inputStyle="ENTER NAME"
        style={styles.materialFixedLabelTextbox}
      ></MaterialFixedLabelTextbox>
      <MaterialStackedLabelTextbox
        label="StackedLabel"
        inputStyle="Input"
        label="NAME"
        inputStyle="ENTER NAME "
        style={styles.materialStackedLabelTextbox}
      ></MaterialStackedLabelTextbox>
      <View style={styles.group}>
        <MaterialStackedLabelTextbox
          inputStyle="Input"
          inputStyle="ENTER NAME "
          label="MANUFACTURER"
          style={styles.materialStackedLabelTextbox1}
        ></MaterialStackedLabelTextbox>
      </View>
      <View style={styles.group2}>
        <MaterialStackedLabelTextbox
          inputStyle="Input"
          label="PURCHAGE RATE"
          inputStyle="ENTER PURCHAGE RATE"
          style={styles.materialStackedLabelTextbox2}
        ></MaterialStackedLabelTextbox>
      </View>
      <View style={styles.group3}>
        <MaterialStackedLabelTextbox
          inputStyle="Input"
          inputStyle="ENTER SELLING RATE RATE"
          label="SELLING RATE"
          style={styles.materialStackedLabelTextbox3}
        ></MaterialStackedLabelTextbox>
      </View>
      <MaterialButtonPrimary
        caption="SUBMIT DETAILS"
        style={styles.materialButtonPrimary}
      ></MaterialButtonPrimary>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialFixedLabelTextbox: {
    height: 43,
    width: 375,
    marginTop: 145,
    marginLeft: -2
  },
  materialStackedLabelTextbox: {
    height: 60,
    backgroundColor: "rgba(154,200,152,1)",
    width: 375,
    marginTop: 25
  },
  group: {
    width: 375,
    height: 60,
    marginTop: 26
  },
  materialStackedLabelTextbox1: {
    height: 60,
    backgroundColor: "rgba(154,200,152,1)",
    width: 375
  },
  group2: {
    width: 375,
    height: 60,
    marginTop: 28
  },
  materialStackedLabelTextbox2: {
    height: 60,
    backgroundColor: "rgba(154,200,152,1)",
    width: 375
  },
  group3: {
    width: 375,
    height: 60,
    marginTop: 23,
    marginLeft: -2
  },
  materialStackedLabelTextbox3: {
    height: 60,
    backgroundColor: "rgba(154,200,152,1)",
    width: 375
  },
  materialButtonPrimary: {
    height: 62,
    width: 229,
    marginTop: 51,
    marginLeft: 66
  }
});

export default Untitled;
