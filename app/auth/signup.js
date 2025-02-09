import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constant/Colors";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const SignUp = () => {
  const router = useRouter();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const CreateNewAccount = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (resp) => {
        const user = resp.user; // Accessing the user from the response
        console.log(user);
        await saveUser(user); // Pass the user object to saveUser
        setLoading(false);
        ToastAndroid.show(
          "Account Created Successfully. Please Log In.",
          ToastAndroid.LONG
        );
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
        ToastAndroid.show(error.message, ToastAndroid.TOP);
      });
  };

  const saveUser = async (user) => {
    // Accept user as a parameter
    await setDoc(doc(db, "users", email), {
      name: name,
      email: email,
      member: false,
      uid: user?.uid, // Now user is defined within this scope
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
        Hey, Let's Create Account
      </Text>

      <TextInput
        onChangeText={(value) => setName(value)}
        placeholder="Your Name"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(value) => setEmail(value)}
        placeholder="Your Email"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(value) => setPassword(value)}
        placeholder="Your Password"
        secureTextEntry={true}
        style={styles.textInput}
      />

      <TouchableOpacity onPress={CreateNewAccount}>
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
            Create Account
          </Text>
        ) : (
          <ActivityIndicator size="large" color={"black"} />
        )}
      </TouchableOpacity>

      <Pressable
        onPress={() => router.push("/auth/signin")}
        style={{ marginTop: 15 }}
      >
        <Text>Already have an account? Sign In</Text>
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

export default SignUp;
