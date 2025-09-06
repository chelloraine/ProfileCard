import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../assets/ProfileCardStyles";

export default function ProfileCard() {
  const [following, setFollowing] = useState(false);

  const toggleFollow = () => setFollowing(!following);

  return (
    <View style={styles.card}>
      <Image source={require("../assets/profile.jpg")} style={styles.squareImage} />

      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>Mechelle Loraine N. Monsale</Text>
          <Image source={require("../assets/verified.png")} style={styles.verified} />
        </View>
        <Text style={styles.username}>@chelloraine</Text>
        <Text style={styles.bio}>Fall seven times, stand up eight.</Text>
        <Text style={styles.course}>System Engineering</Text>
      </View>

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
