import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginBottom: 20,
    alignSelf: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30%",
  },
  input: {
    borderColor: "#8D86C9",
    borderWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    width: "80%",
  },
  btn: {
    backgroundColor: "#8D86C9",
    width: "80%",
  },
  signUpSection: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
