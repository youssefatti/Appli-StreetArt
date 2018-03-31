import { StackNavigator } from "react-navigation";
import LoginScreen from "./src/screens/Login/LoginScreen";
import Home from "./src/screens/Home/Home";

const App = StackNavigator({
  LogIn: {
    screen: LoginScreen
  },
  Home: {
    screen: Home
  }
});
console.ignoredYellowBox = ["Warning: componentWill"];
export default App;
