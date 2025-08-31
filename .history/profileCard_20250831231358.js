import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Profile Picture */}
        <Image
  source={require("./assets/profile.jpg")}
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
  container: {
    flex: 1,
    backgroundColor: "#121212", // Spotify dark background
    justifyContent: "center",   // centers vertically
    alignItems: "center",       // centers horizontally
  },
  card: {
    width: "90%",
    backgroundColor: "#181818", // Spotify card dark
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
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
    color: "#b3b3b3",
    marginBottom: 12,
  },
  bio: {
    fontSize: 15,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  statsNumber: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#1DB954",
  },
  stats: {
    fontSize: 14,
    color: "#b3b3b3",
  },
  followButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  followText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
