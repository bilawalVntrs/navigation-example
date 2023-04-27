import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function WalletScreen() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
      <Text>WalletScreen</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Home"
      />
    </View>
  );
}
