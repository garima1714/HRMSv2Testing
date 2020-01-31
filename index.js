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
  // Navigation.setDefaultOptions({
  //   topBar: {
  //     visible: true,
  //     drawBehind: true
  //     },
  //     layout: {
  //     orientation: ["portrait"],
  //     drawBehind: false
  //     },
  //     animations: {
  //     push: {
  //       waitForRender: true,
  //     // drawBehind: true,
  //     content: {
  //     x: {
  //     from: 100,
  //     to: 0,
  //     duration: 200,
  //     }
  //     }
  //     },
  //     pop: {
  //     enabled: 'true',
  //     interpolation: 'decelerate',
  //     drawBehind: true,
  //     content: {
  //         x: {
  //             background:{
  //             color:"translucent"
  //             },
  //         from: 0,
  //         to: 700,
  //         duration: 300,
  //         },
  //     },
  //     }
  //     }
  //   });
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
