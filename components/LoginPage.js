//install npm i @rneui/themed FOR ICONS

import {
    TouchableOpacity,
    View,
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    Alert,
  } from "react-native";
  import { Icon } from "@rneui/themed";

  import { useState } from "react";
  import { initializeApp } from "firebase/app";
  import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  
  // TODO: Replace the following with your app's Firebase project configuration
  // See: https://firebase.google.com/docs/web/learn-more#config-object
  const firebaseConfig = {
    apiKey: "AIzaSyCMXDmfao6hHiS3Z8b-N-9G_xK_twucCXY",
    authDomain: "i-mhere-c74d4.firebaseapp.com",
    projectId: "i-mhere-c74d4",
    storageBucket: "i-mhere-c74d4.appspot.com",
    messagingSenderId: "330093125684",
    appId: "1:330093125684:web:a2c40e7ee6757193566a61",
    measurementId: "G-0C60659EMJ",
  };
  
  const bg_color = "#ecf39e";
  const color1 = "#90a955";
  const color2 = "#4f772d";
  const color3 = "#31572c";
  const color4 = "#132a13";
  
  export function LoginPage({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
  
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
  
    const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("signed in");
          const user = userCredential.user;
          console.log(user);
          navigation.navigate("Courses");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(error.message);
        });
    };
  
    return (
      <View style={styles.scrollViewContainer}>
        <Icon
          name="arrow-back"
          reverse
          color={color4}
          onPress={() => navigation.navigate("StartPage")}
        />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <View>
            <View style={styles.textBoxContainer}>
              <Text style={{ fontSize: 24, color: color2 }}>Email:</Text>
              <TextInput
                style={styles.textBox}
                onChangeText={(text) => setEmail(text)}
                placeholder="Your Email"
              />
            </View>
  
           
  
            <View style={styles.textBoxContainer}>
              <Text style={{ fontSize: 24, color: color2 }}>Password:</Text>
              <TextInput
                style={styles.textBox}
                onChangeText={(text) => setPassword(text)}
                placeholder="Your Password"
              />
            </View>
          </View>
        </ScrollView>
        
        <View
          style={{
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity style={styles.pageButtons} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    scrollViewContainer: {
      flex: 1,
      backgroundColor: bg_color,
      padding: 15,
    },
    textBoxContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  
    textBox: {
      height: 50,
      width: "85%",
      textAlign: "center",
      justifyContent: "center",
      fontSize: 15,
      borderWidth: 2,
      backgroundColor: "#fff",
      borderRadius: 25,
    },
    pageButtons: {
      height: 90,
      width: "60%",
      borderRadius: 25,
      backgroundColor: color4,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 36,
      fontWeight: "bold",
      color: "#fff",
    },
  });