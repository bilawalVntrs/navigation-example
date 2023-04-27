import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName={"SignIn"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
      />
    </Stack.Navigator>
  );
}
