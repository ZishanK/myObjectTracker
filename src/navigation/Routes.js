import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import * as Screens from '../screens'
const AppStack = createStackNavigator(
  {
    _dashboard: Screens.Dashboard,
    _object: Screens.Object1,
    _user: Screens.User
  },
  {
    initialRouteName: '_dashboard'
  }
)
const switchNavigator = createSwitchNavigator(
  {
    _splash: Screens.Splash,
    App: AppStack,
  },
  {
    initialRouteName: '_splash'
  })
export default createAppContainer(switchNavigator);

