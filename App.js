import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";

import { UserContextProvider } from "./components/contexts/User";

import MainNav from "./components/MainNav/MainNav";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Signup from "./components/SignUp/SignUp";
import styles from "./styles/mainStyle";

export default function App() {
  return (
    <View style={styles.main}>
      <NativeRouter>
        <UserContextProvider>
          <SafeAreaView style={styles.safeAreaView} />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profil" element={<Text>Profil</Text>} />
          </Routes>
          <MainNav />
        </UserContextProvider>
      </NativeRouter>
    </View>
  );
}
