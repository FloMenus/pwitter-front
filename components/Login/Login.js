import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-native";
import { Text, View, TextInput, Button } from "react-native";
import { AsyncStorage } from "react-native";
import { API_KEY, API_URL } from "@env";

import { decode } from "react-native-pure-jwt";
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
      const request = await fetch(
        `${API_URL}/auth/v1/token?grant_type=password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: API_KEY,
          },
          body: JSON.stringify(formState),
        }
      );
      const response = await request.json();
      console.log(response);

      if (response?.access_token) {
        !userToken && storeTokenInLocalStorage(response?.access_token);
        console.log("response user", response.user);
        context.setUser(response?.user);
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
        {/* TO DELETE */}
      </View>
    </View>
  );
};

export default Login;
