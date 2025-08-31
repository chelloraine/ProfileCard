import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileCard() {
  const [following, setFollowing] = useState(false);

  const toggleFollow = () => setFollowing(!following);

  return (
    <View style={styles.card}>
      {/* Square profile image */}
      <Image source={require("./assets/profile.jpg")} style={styles.squareImage} />

      {/* Profile Info */}
      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>
            Mechelle Loraine N. Monsale
          </Text>
          <Image source={require("./assets/verified.png")} style={styles.verified} />
        </View>
        <Text style={styles.username}>@chelloraine</Text>
        <Text style={styles.bio}>
          Fall seven times, stand up eight.
        </Text>
        <Text style={styles.course}>System Engineering</Text>
      </View>

      {/* Followers / Following */}
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>1.8K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>856</Text>
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
    alignSelf: "center",
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
    width: "100%",
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  name: { fontSize: 26, fontWeight: "bold", color: "#fff", textAlign: "center" },
  verified: { width: 20, height: 20, marginLeft: 6 },
  username: { fontSize: 18, color: "#aaa", marginBottom: 8 },
  bio: { fontSize: 15, color: "#ccc", textAlign: "center", paddingHorizontal: 15, marginBottom: 6 },
  course: { fontSize: 14, color: "#9b59b6", textAlign: "center", marginTop: 2 },
  stats: { flexDirection: "row", justifyContent: "space-between", width: "70%", marginBottom: 20 },
  stat: { alignItems: "center" },
  statNumber: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  statLabel: { fontSize: 13, color: "#aaa" },
  followButton: { backgroundColor: "#1DB954", paddingVertical: 12, paddingHorizontal: 50, borderRadius: 25, marginBottom: 20 },
  followingButton: { backgroundColor: "#555" },
  followText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
