import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./Navigation/AppNavigator";

export default function HomeScreen({ navigation }) {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}