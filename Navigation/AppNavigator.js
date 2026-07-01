import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import PlantsScreen from "../screens/PlantsScreen";
import AddPlantScreen from "../screens/AddPlantScreen";
import CareScreen from "../screens/CareScreen";
import ReminderScreen from "../screens/ReminderScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Plants" component={PlantsScreen} />
      <Stack.Screen name="AddPlant" component={AddPlantScreen} />
      <Stack.Screen name="Care" component={CareScreen} />
      <Stack.Screen name="Reminders" component={ReminderScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}