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
            🌸 IT Student | Future Systems Engineer | Cat lover 🐱
          </Text>

          {/* Stats */}
          <View style={styles.statsRow}>
            <Text style={styles.stats}>
              <Text style={styles.statsNumber}>120</Text> Following
            </Text>
            <Text style={styles.stats}>
              <Text style={styles.statsNumber}>250</Text> Followers
            </Text>
          </View>

          {/* Follow Button */}
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
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
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
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    position: "absolute",
    top: 70,
    left: 20,
  },
  info: {
    marginTop: 50,
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  username: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
  },
  bio: {
    fontSize: 15,
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 16,
  },
  stats: {
    fontSize: 14,
    color: "gray",
  },
  statsNumber: {
    fontWeight: "bold",
    color: "#000",
  },
  followButton: {
    backgroundColor: "#1DA1F2",
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  followText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
