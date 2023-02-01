import { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { UserContext } from "../contexts/User";

import styles from "./style";

const MainNav = () => {
  const user = useContext(UserContext);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  if (!user?.user?.app_metadata) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Link to="/home">
        <Text>Home</Text>
      </Link>
      <Link to="/profil">
        <Text>Profil</Text>
      </Link>
    </View>
  );
};

export default MainNav;
