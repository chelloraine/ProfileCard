import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ProfileCard from "./profileCard";

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
    backgroundColor: "#ff3a3aff", // dark Spotify vibe
    justifyContent: "center", // center vertically
    alignItems: "center",     // center horizontally
  },
});
