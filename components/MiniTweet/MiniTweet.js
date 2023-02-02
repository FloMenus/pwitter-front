import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { UserContext } from "../contexts/User";

import styles from "./style";

const MiniTweet = (props) => {
  const { tweet } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{tweet.content}</Text>
      <Text style={styles.date}>{tweet.created_at.slice(0, 10)}</Text>
    </View>
  );
};

export default MiniTweet;
