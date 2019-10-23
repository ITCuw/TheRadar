import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Landing, SignUp } from './screens'

const MainNavigator = createStackNavigator({
  Landing: {screen: Landing},
  SignIn: {screen: SignUp},
})

const App = createAppContainer(MainNavigator)

export default App;
