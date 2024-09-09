import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
        <Text style={styles.title}>GROW</Text>
        <Text style={styles.title}>YOUR BUSINESS</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          width: 302,
          height: 36,
        }}
      >
        <Text style={styles.subTitle}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00CCF9",
  },
  circleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 15,
    borderColor: "black",
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "black",
    marginBottom: 10,
    textAlign: "center",
    lineHeight: 29.3,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "black",
    marginBottom: 10,
    textAlign: "center",
    lineHeight: 17.58,
  },
  btn: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    width: 119,
    height: 48,
  },
  btnText: {
    fontWeight: "700",
  },
});

export default HomeScreen;
