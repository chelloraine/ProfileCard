import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileCard() {
  const [following, setFollowing] = useState(false);

  const toggleFollow = () => setFollowing(!following);

  return (
    <View style={styles.card}>
      {/* Square profile image */}
      <Image
        source={require("./resources/profile.jpg")} // Change to your image path
        style={styles.squareImage}
      />

      {/* Profile Info */}
      <View style={styles.info}>
        <Text style={styles.name}>Adrianna Lori Monsale</Text>
        <Text style={styles.username}>@monsale</Text>
        <Text style={styles.bio}>
          Building tech projects | IT Student | Coffee & Code ☕
        </Text>
        <Text style={styles.course}> System Engineering </Text>
      </View>

      {/* Followers / Following */}
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>1.2K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>200</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Follow Button */}
      <TouchableOpacity
        style={[styles.followButton, following && styles.followingButton]}
        onPress={toggleFollow}
      >
        <Text style={styles.followText}>
          {following ? "Following" : "Follow"}
        </Text>
      </TouchableOpacity>

      {/* Music Player Placeholder */}
      <View style={styles.musicPlayer}>
        <Text style={styles.songTitle}>Now Playing:</Text>
        <Text style={styles.songName}>“Coding Vibes”</Text>
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
    width: 340,
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
    marginBottom: 8,
  },
  bio: {
    fontSize: 15,
    color: "#ccc",
    textAlign: "center",
    paddingHorizontal: 15,
    marginBottom: 6,
  },
  course: {
    fontSize: 14,
    color: "#9b59b6",
    textAlign: "center",
    marginTop: 2,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 20,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    fontSize: 13,
    color: "#aaa",
  },
  followButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  followingButton: {
    backgroundColor: "#555",
  },
  followText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  musicPlayer: {
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
  },
  songTitle: {
    color: "#aaa",
    fontSize: 12,
    marginBottom: 3,
  },
  songName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
