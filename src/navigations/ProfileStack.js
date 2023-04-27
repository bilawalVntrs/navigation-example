import React from "react";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import ProfileScreen from "../screens/profile-stack-screens/ProfileScreen";
import SettingsScreen from "../screens/profile-stack-screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName={"SignIn"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}
