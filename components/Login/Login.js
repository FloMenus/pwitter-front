import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-native";
import { Text, View, TextInput, Button } from "react-native";
import { AsyncStorage } from "react-native";
import { API_KEY, API_URL } from "@env";
import { supabase } from "../api/supabase.js";

import { UserContext } from "../contexts/User";

import styles from "./style";

const Login = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const [userToken, setUserToken] = useState(null);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    checkTokenAndRedirect();
    // AsyncStorage.clear();
  }, []);

  const storeTokenInLocalStorage = async (token) => {
    try {
      await AsyncStorage.setItem("access_token", token);
    } catch (error) {
      console.log("setStore Error =>", error);
    }
  };

  const checkTokenAndRedirect = async () => {
    const token = await AsyncStorage.getItem("access_token");
    if (token) {
      setUserToken(token);
      navigate("/Home");
    }
  };

  const handleSubmit = async (e) => {
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: formState.email,
        password: formState.password,
      });
      if (data?.session?.access_token) {
        !userToken && storeTokenInLocalStorage(data?.session?.access_token);
        context.setUser(data?.user);
        navigate("/Home");
      }
    } catch (error) {
      console.log(error);
    }
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
