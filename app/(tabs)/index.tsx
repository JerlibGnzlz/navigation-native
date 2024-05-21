import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inicio } from "../views/Inicio";
import { Nosotros } from "../views/Nosotros";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Inicio" component={Inicio} />

          <Stack.Screen name="Nosotros" component={Nosotros} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
