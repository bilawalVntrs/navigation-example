import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Wallet")}
        title="Go to Wallet"
      />
      <Button
        onPress={() => navigation.navigate("ProfileStack")}
        title="ProfileStack"
      />
    </View>
  );
}
