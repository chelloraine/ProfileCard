import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      {/* Square image like Spotify cover */}
      <Image
        source={require("./assets/profile.jpg")} // 👈 replace with your own image
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
    backgroundColor: "#121212", // Spotify dark theme
    borderRadius: 16,
    padding: 20,
    margin: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  squareImage: {
    width: 180,   // make it big like album cover
    height: 180,  // square (equal width & height)
    borderRadius: 8, // slight rounding like Spotify
    marginBottom: 15,
  },
  info: {
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  username: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
