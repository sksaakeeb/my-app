import { View, Text, Image } from "react-native";
import React from "react";

const home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>I didn't design this screen.</Text>
      <View style={{ flexDirection: "row" }}>
        {/* <Image style={{height: 75, width: 100}} source={require("../../assets/images/2.png")} />
        <Image style={{height: 75, width: 100}} source={require("../../assets/images/2.png")} /> */}
      </View>
    </View>
  );
};

export default home;
