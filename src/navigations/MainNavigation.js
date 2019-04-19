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
import HomeScreen from "../containers/HomeScreen";
import AboutUs from "../containers/AboutUs";
import ContactUs from "../containers/ContactUs";
import ProfileScreen from "../containers/ProfileScreen";

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutUs,
    Contact: ContactUs,
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AuthStack = createStackNavigator(
  {
    LandingScreen: LandingScreen,
    Login: LoginScreen,
    Signup: SignupScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const MainSwitchNavigator = createSwitchNavigator({
  SplashScreen: SplashScreen,
  Auth: AuthStack,
  Main: MainStack
});

export default (AppNavigator = createAppContainer(MainSwitchNavigator));
