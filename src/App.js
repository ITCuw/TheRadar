import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Landing, SignUp, SignIn, Home } from './screens'

const MainNavigator = createStackNavigator({
  Landing: {screen: Landing},
  SignUp: {screen: SignUp},
  SignIn: {screen: SignIn},
  Home: {screen: Home},
})

const App = createAppContainer(MainNavigator)

export default App;
