const { Component } = require("react");
import React, { useState, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import FindBarcode from "./components/SeachingMachine"
export default function App() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);

  useEffect(() => {
    // FindBarcode("5000328160283");

    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      var a = await FindBarcode("5000328160283");
      console.log(a);

    })();
    // async function fetchData() {

    // }
    // fetchData();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log(data);
    setScanned(true);
    (async () => {
      FindBarcode(data);
    })();
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 0,
    }
  })

  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View style={{
        position: 'absolute',
        top: 120,
        left: 100,
        height: 50,
        width: 50,
        borderWidth: 1
      }} onPress={Animated.ValueXY({ x: 10, y: 450 })}>
        <Text>Yep</Text>
      </Animated.View>
      {!scanned ?
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        :
        <Button onPress={() => setScanned(!scanned)}
          title="Start"
          color="#841584"
          accessibilityLabel="Test" />

      }


    </View>

  );

}