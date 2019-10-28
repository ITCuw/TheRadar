import {createAppContainer, } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Landing, SignUp, SignIn, Home, Profile } from './screens';

const TabNav = createBottomTabNavigator(
  {
  Home: { screen: Home },
  Profile: { screen: Profile }
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
});


const App = createAppContainer(RootNavigator);

export default App;
