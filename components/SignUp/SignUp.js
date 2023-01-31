import { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { useNavigate } from "react-router-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./style";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const request = await fetch(
        "https://rkkuwoasxkwmptcgrdsz.supabase.co/auth/v1/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJra3V3b2FzeGt3bXB0Y2dyZHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYxOTYsImV4cCI6MTk5MDY1MjE5Nn0.odyCgtCOIFeSJyVicww9IX6C2d6ApMbgoIlxVaJOSXA",
          },
          body: JSON.stringify(formState),
        }
      );
      const response = await request.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setFormState({ ...formState, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) =>
            setFormState({ ...formState, password: text })
          }
        />
      </View>
      <Button title="Sign up" color={"#8D86C9"} onPress={handleSubmit} />
      <View style={styles.signUpSection}></View>
    </View>
  );
};

export default SignUp;
