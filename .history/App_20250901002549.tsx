import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ProfileCard from "./myCode/profileCard";

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
    backgroundColor: "#1e1212ff", // dark Spotify vibe
    justifyContent: "center", // center vertically
    alignItems: "center",     // center horizontally
  },
});
