import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      {/* Banner */}
      <View style={styles.banner} />

      {/* Profile Image */}
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=32" }}
        style={styles.avatar}
      />

      {/* User Info */}
      <View style={styles.info}>
        <Text style={styles.name}>Damon Monsale</Text>
        <Text style={styles.handle}>@damon</Text>
        <Text style={styles.bio}>
          🚀 Building apps & learning React Native. Coffee + Code = ❤️
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.stat}>
          <Text style={styles.bold}>120</Text> Following
        </Text>
        <Text style={styles.stat}>
          <Text style={styles.bold}>450</Text> Followers
        </Text>
      </View>

      {/* Follow Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingBottom: 20,
    margin: 20,
    elevation: 4, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  banner: {
    height: 100,
    backgroundColor: "#1DA1F2", // Twitter blue
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
    marginTop: -40,
    marginLeft: 20,
  },
  info: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  handle: {
    color: "gray",
    marginBottom: 6,
  },
  bio: {
    fontSize: 14,
    lineHeight: 18,
  },
  stats: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  stat: {
    fontSize: 14,
    color: "gray",
  },
  bold: {
    fontWeight: "bold",
    color: "#000",
  },
  button: {
    marginTop: 15,
    alignSelf: "flex-start",
    backgroundColor: "#1DA1F2",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
