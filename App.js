import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartoonScreen from "./src/screens/cartoon";
import HomeScreen from "./src/screens/home";
import SplashScreen from "./src/screens/splash";
const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="CartoonScreen"
          component={CartoonScreen}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
