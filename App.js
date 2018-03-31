import { StackNavigator } from "react-navigation";
import LoginScreen from "./src/screens/Login/LoginScreen";
import Home from "./src/screens/Home/Home";
import Picture from "./src/screens/Picture/Picture";

const App = StackNavigator({
  LogIn: {
    screen: LoginScreen
  },
  Home: {
    screen: Home
  },
  Picture: {
    screen: Picture
  }
});
console.ignoredYellowBox = ["Warning: componentWill"];
export default App;
