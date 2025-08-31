import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ProfileCard from "./profileCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#1DB954", "#121212"]} // Spotify green to dark
        style={styles.gradient}
      >
        <ProfileCard />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // dark Spotify vibe
    justifyContent: "center", // center vertically
    alignItems: "center",     // center horizontally
  },
   gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
