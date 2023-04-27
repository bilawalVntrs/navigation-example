import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function SettingsScreen() {

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
      <Text>Settings Screen</Text>
      <Button
        onPress={() => navigation.navigate("NavBar")}
        title="Go Back to Tab bar"
      />
      <Button
        onPress={() => navigation.navigate("Profile")}
        title="Go to Profile"
      />
    </View>
  );
}
