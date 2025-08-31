import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ProfileCard from "./profileCard";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#1DB954', '#121212']} // Spotify green to dark
        style={styles.gradient}
      >
        <ProfileCard />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
