import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>Profile Screen</Text>
      <Button
        onPress={() => navigation.navigate("NavBar")}
        title="Go Back to Tab bar"
      />
      <Button
        onPress={() => navigation.navigate("Settings")}
        title="Go to Settings"
      />
    </View>
  );
}
