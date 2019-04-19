import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import SplashScreen from "./../containers/SplashScreen";
import LandingScreen from "../containers/LandingScreen";
import LoginScreen from "../containers/LoginScreen";
import SignupScreen from "../containers/SignupScreen";

const AuthStack = createStackNavigator({
  //LandingScreen: LandingScreen,
  //Login: LoginScreen,
  Signup: SignupScreen
}, {
  defaultNavigationOptions: {
    header: null
  }
});

const MainSwitchNavigator = createSwitchNavigator({
  //SplashScreen: SplashScreen,
  //LandingScreen: LandingScreen,
  Auth: AuthStack
});

export default (AppNavigator = createAppContainer(MainSwitchNavigator));