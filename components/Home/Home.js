import { useState, useEffect } from "react";
import { Text, TextInput, View, Button, FlatList } from "react-native";
import { useNavigate } from "react-router-native";
import { API_KEY, API_URL } from "@env";
import { supabase } from "../api/supabase";

import MiniTweet from "../MiniTweet/MiniTweet";

import styles from "./style";

const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchAllTweets();
  }, []);

  const fetchAllTweets = async () => {
    let { data: tweet, error } = await supabase
      .from("tweet")
      // get all tweets, with user data
      .select(`*`)
      // sort by created_at
      .order("created_at", { ascending: false });

    console.log("tweet", tweet);
    setTweets(tweet);
  };

  const handlePostTweet = async () => {
    const { data, error } = await supabase
      .from("tweet")
      .insert([{ content: "Hello les twittos" }]);
  };

  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Post a tweet"
        style={styles.postBtn}
        onPress={() => handlePostTweet()}
      />
      <FlatList
        data={tweets}
        renderItem={({ item }) => <MiniTweet tweet={item} />}
      />
    </View>
  );
};

export default Home;
