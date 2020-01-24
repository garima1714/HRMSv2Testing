import { Navigation } from 'react-native-navigation';
import DashBoard from './DashBoard'

export function registerScreens(store, Provider) {
   const screens = {
      DashBoard
   }

   Object.keys(screens).map(key => {
      Navigation.registerComponentWithRedux(`${key}`, () => screens[key], Provider, store)
   })
}


