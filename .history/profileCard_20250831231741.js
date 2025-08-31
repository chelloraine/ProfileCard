import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Profile Picture */}
        <Image
  source={require("./resources/profile.jpg")}
  style={styles.avatar}
    />
        {/* Info Section */}
        <View style={styles.info}>
          <Text style={styles.name}>Mechelle Monsale</Text>
          <Text style={styles.username}>@mechelle</Text>
          <Text style={styles.bio}>
            🎧 IT Student | Systems Engineer in the making | Cat + Music Lover
          </Text>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statsNumber}>25</Text>
              <Text style={styles.stats}>Playlists</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statsNumber}>350</Text>
              <Text style={styles.stats}>Followers</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statsNumber}>180</Text>
              <Text style={styles.stats}>Following</Text>
            </View>
          </View>

          {/* Spotify-style Button */}
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>
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