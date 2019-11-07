import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AsyncStorage } from 'react-native';
import jwtDecode from 'jwt-decode';
import {
  Landing,
  SignUp,
  SignIn,
  Channels,
  Profile,
  Activity,
  ProfileSettings,
  ProfileCreate_One,
  ProfileCreate_Two,
  AuthLoading } from './screens';

const ProfileNav = createStackNavigator(
  {
  Profile: {screen: Profile},
  ProfileSettings: {screen: ProfileSettings},
  }
);

const AppStack = createBottomTabNavigator(
  {
  Channels: { screen: Channels },
  Activity: { screen: Activity },
  Profile: { screen: ProfileNav }
  }
);

const AuthStack = createStackNavigator(
  {
  Landing: {screen: Landing},
  SignUp: {screen: SignUp},
  SignIn: {screen: SignIn},
  }
);

const RootNavigator = createSwitchNavigator(
  {
    AuthLoading: {screen: AuthLoading},
    App: {screen: AppStack},
    Auth: {screen: AuthStack},
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const App = createAppContainer(RootNavigator);

export default App;
