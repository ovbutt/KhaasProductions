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
import UpdatePassword from "../containers/UpdatePassword";
import EditProfile from "../containers/EditProfile";
// import VerificationCode from "../containers/VerificationCode";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    UpdatePassword: UpdatePassword,
    EditProfile: EditProfile
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutUs,
    Contact: ContactUs,
    Profile: ProfileStack
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
    // Verification: VerificationCode
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
