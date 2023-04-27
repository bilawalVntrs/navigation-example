import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import NavBar from "./NavBar";
import ProfileStack from "./ProfileStack";

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={"NavBar"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="NavBar" component={NavBar} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} options={{
        presentation: 'modal'
      }}/>
    </Stack.Navigator>
  );
}
