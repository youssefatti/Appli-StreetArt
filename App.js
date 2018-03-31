import { StackNavigator } from "react-navigation";
import LoginScreen from "./src/screens/Login/LoginScreen";

const App = StackNavigator({
  LogIn: {
    screen: LoginScreen
  }
});
console.ignoredYellowBox = ["Warning: componentWill"];
export default App;
