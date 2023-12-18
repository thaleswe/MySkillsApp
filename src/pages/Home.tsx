import React, { Fragment } from "react";
import { View, Text } from "react-native";

const randomNumber:number = parseFloat((Math.random()).toFixed(2));

export function Home() {
  return (
    <Fragment>
      <View style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
        }}>
        <Text>Hello World</Text>
      <Text style={{ color: "blue" }}>Hello Wendel {randomNumber * 100}</Text>
      </View>

    </Fragment>
  )
}