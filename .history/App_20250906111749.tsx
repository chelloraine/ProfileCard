import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Calculator from "./myCode/";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1212ff",
    justifyContent: "center",
    alignItems: "center",
  },
});
