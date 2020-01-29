/**
 * @format
 */
import { Navigation } from "react-native-navigation";
// import {AppRegistry} from 'react-native';
 import App from './App';
 import {registerScreens} from "./app/screens";
 import { Provider } from 'react-redux';
import configureStore from './app/configureStore';
const store = configureStore();
registerScreens(store, Provider);
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: true,
      drawBehind: true
      },
      layout: {
      orientation: ["portrait"]
      },
      animations: {
      push: {
      content: {
      x: {
      from: 2000,
      to: 0,
      duration: 700,
      }
      }
      },
      pop: {
      content: {
      x: {
      from: 0,
      to: 2000,
      duration: 1000,
      },
      }
      }
      }
    });
    // Navigation.setDefaultOptions({
    //   animations: {
    //     setRoot: {
    //       enabled: 'true' | 'false', // Optional, used to enable/disable the animation
    //       alpha: {
    //         from: 0,
    //         to: 1,
    //         duration: 400,
    //         startDelay: 100,
    //         interpolation: 'accelerate'
    //       }
    //     }
    //   }
    // });
      Navigation.setRoot({
    root: {
      stack: {
        children :[{
          component: {
            name: "DashBoard"
          }
        }]
      }
    }
  });
});
