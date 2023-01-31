import React from "react";
import { Text, View } from "react-native";
import styles from "./style";
import { Link } from "react-router-native";

const MainNav = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="profil">
        <Text>Profil</Text>
      </Link>
    </View>
  );
};

export default MainNav;
