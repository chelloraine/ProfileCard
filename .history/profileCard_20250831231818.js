import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      {/* Square profile image (like Spotify album cover) */}
      <Image
        source={require("./assets/profile.jpg")} // Replace with your image path
        style={styles.squareImage}
      />

      {/* Profile Info */}
      <View style={styles.info}>
        <Text style={styles.name}>Mechelle Monsale</Text>
        <Text style={styles.username}>@monsale</Text>
        <Text style={styles.bio}>
          Building tech projects | IT Student | Coffee & Code ☕
        </Text>
      </View>

      {/* Follow Button */}
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#121212", // dark Spotify theme
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    width: 320,
  },
  squareImage: {
    width: 250,
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  info: {
    alignItems: "center",
    marginBottom: 20,
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
  followButton: {
    backgroundColor: "#1DB954", // Spotify green
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  followText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
