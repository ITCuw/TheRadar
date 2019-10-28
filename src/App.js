import {createAppContainer, } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Landing, SignUp, SignIn, Home, Profile, Activity, ProfileSettings } from './screens';

const ProfileNav = createStackNavigator(
  {
  Profile: {screen: Profile},
  ProfileSettings: {screen: ProfileSettings},
  },
  { headerMode: 'none' },
);

const TabNav = createBottomTabNavigator(
  {
  Home: { screen: Home },
  Activity: { screen: Activity },
  Profile: { screen: ProfileNav }
  },
  { headerMode: 'none' },
);

const StackNav = createStackNavigator(
  {
  Landing: {screen: Landing},
  SignUp: {screen: SignUp},
  SignIn: {screen: SignIn},
  Home: {screen: TabNav}
  },
  { headerMode: 'none' },
);

const RootNavigator = createStackNavigator({
  StackNav: {screen: StackNav},
  TabNav: {screen: TabNav},
  ProfileSettings: {screen: ProfileSettings},
});


const App = createAppContainer(RootNavigator);

export default App;
