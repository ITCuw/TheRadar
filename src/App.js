import {createAppContainer, } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  Landing,
  SignUp,
  SignIn,
  Channels,
  Profile,
  Activity,
  ProfileSettings,
  ProfileCreate_One,
  ProfileCreate_Two } from './screens';

const ProfileNav = createStackNavigator(
  {
  Profile: {screen: Profile},
  ProfileSettings: {screen: ProfileSettings},
  },
  { headerMode: 'none' },
);

const TabNav = createBottomTabNavigator(
  {
  Channels: { screen: Channels },
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
  ProfileCreate_One: {screen: ProfileCreate_One},
  ProfileCreate_Two: {screen: ProfileCreate_Two},
  Channels: {screen: TabNav}
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
