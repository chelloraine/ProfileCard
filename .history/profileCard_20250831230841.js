import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Cover Photo */}
        <Image
          source={{ uri: "https://placekitten.com/600/200" }}
          style={styles.cover}
        />

        {/* Profile Picture */}
        <Image
          source={{ uri: "https://placekitten.com/200/200" }}
          style={styles.avatar}
        />

        {/* Info Section */}
        <View style={styles.info}>
          <Text style={styles.name}>Mechelle Monsale</Text>
          <Text style={styles.username}>@mechelle</Text>
          <Text style={styles.bio}>
            💜 IT Student | Future Systems Engineer | Cat lover 🐱
          </Text>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statsNumber}>120</Text>
              <Text style={styles.stats}>Following</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statsNumber}>250</Text>
              <Text style={styles.stats}>Followers</Text>
            </View>
          </View>

          {/* Follow Button */}
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followText}>Connect</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3e8ff", // light purple background
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },
  cover: {
    width: "100%",
    height: 120,
    backgroundColor: "#a855f7", // purple fallback if no image
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: "#fff",
    position: "absolute",
    top: 70,
    left: "50%",
    marginLeft: -55, // center avatar
  },
  info: {
    marginTop: 70,
    padding: 16,
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4c1d95", // deep purple
  },
  username: {
    fontSize: 16,
    color: "#7c3aed",
    marginBottom: 10,
  },
  bio: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 16,
  },
  statBox: {
    alignItems: "center",
  },
  statsNumber: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#4c1d95",
  },
  stats: {
    fontSize: 14,
    color: "gray",
  },
  followButton: {
    backgroundColor: "#9333ea", // purple button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  followText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
