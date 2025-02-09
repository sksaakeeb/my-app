import { Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import Colors from "../constant/Colors";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        style={{ width: "100%", height: 350 }}
        source={require("../assets/images/landing.png")}
      />

      <View
        style={{
          padding: 20,
          backgroundColor: "#6699CC",
          height: "100%",
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Welcome to the React Native
        </Text>
        <Text style={{ textAlign: "center", fontSize: 16, marginTop: 10 }}>
          This is a simple example app that has been developed by Sakib
        </Text>

        <View>
          <TouchableOpacity
            onPress={() => router.push("/auth/signup")}
            style={{
              marginTop: 20,
              backgroundColor: Colors.WHITE,
              padding: 15,
              borderRadius: 10,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 13 }}>
              Get Started
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/auth/signin")}
            style={{
              marginTop: 20,
              backgroundColor: Colors.WHITE,
              padding: 15,
              borderRadius: 10,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 13 }}>
              Already have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
