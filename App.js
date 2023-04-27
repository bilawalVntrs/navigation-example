import {useState, useEffect} from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/navigations/MainStack";
import AuthStack from "./src/navigations/AuthStack";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    // we can check if user is authenitcated or not and we can 
    // set state accordingly
  }, [])
  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
