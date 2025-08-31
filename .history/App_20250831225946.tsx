/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ProfileCard from "./ProfileCard";

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
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
  },
});
