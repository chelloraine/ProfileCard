import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      {/* Bigger square image like Spotify album */}
      <Image
        source={require("./assets/profile.jpg")} // replace with your image
        style={styles.squareImage}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Mechelle Monsale</Text>
        <Text style={styles.username}>@monsale</Text>
        <Text style={styles.bio}>
          Building tech projects | IT Student | Coffee & Code ☕
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#121212",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  squareImage: {
    width: 250,   // 🔥 bigger image
    height: 250,  // keep square
    borderRadius: 12,
    marginBottom: 20,
  },
  info: {
    alignItems: "center",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  username: {
    fontSize: 18,
    color: "#aaa",
    marginBottom: 12,
  },
  bio: {
    fontSize: 15,
    color: "#ccc",
    textAlign: "center",
    paddingHorizontal: 15,
  },
});
