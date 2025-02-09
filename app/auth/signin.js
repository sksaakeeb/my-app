import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Pressable,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constant/Colors";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig"; // Corrected import

const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignInUser = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((resp) => {
        const user = resp.user;
        console.log(user);
        // Navigate to Home screen with email and password
        router.replace({ pathname: "/(tabs)/home", params: { email, password } });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        ToastAndroid.show("Invalid Email or Password", ToastAndroid.LONG);
      });
  };

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        padding: 30,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("../../assets/images/banner2.jpg")}
        style={{
          width: 200,
          height: 200,
          marginTop: 15,
        }}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        Hey, Welcome Back
      </Text>

      <TextInput
        onChangeText={(value) => setEmail(value)} // Changed from onChange to onChangeText
        placeholder="Your Email"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(value) => setPassword(value)} // Changed from onChange to onChangeText
        placeholder="Your Password"
        secureTextEntry={true}
        style={styles.textInput}
      />

      <TouchableOpacity onPress={onSignInUser}>
        {!loading ? (
          <Text
            style={{
              backgroundColor: Colors.PRIMARY,
              color: Colors.WHITE,
              padding: 10,
              width: 300,
              textAlign: "center",
              borderRadius: 15,
              marginTop: 15,
            }}
          >
            Sign In
          </Text>
        ) : (
          <ActivityIndicator size="large" color="black" />
        )}
      </TouchableOpacity>

      <Pressable
        onPress={() => router.push("/auth/signup")}
        style={{ marginTop: 15 }}
      >
        <Text>Don't have an account? Sign Up </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    marginTop: 15,
    padding: 10,
  },
});

export default SignIn;
