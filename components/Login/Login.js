import React from "react";
import { useNavigate } from "react-router-native";
import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, View, TextInput, Button } from "react-native";

import styles from "./style";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${formState.email} ${formState.password}`);
  };

  return (
    <View>
      <Text style={styles.title}>Login</Text>
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
      <Button title="Login" color={"#8D86C9"} onPress={handleSubmit} />
      <View style={styles.signUpSection}>
        <Text>Don't have an account?</Text>
        <Button
          title="Sign Up"
          color={"#8D86C9"}
          onPress={() => navigate("/signup")}
        />
      </View>
    </View>
  );
};

export default Login;
