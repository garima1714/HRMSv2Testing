import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Auth',
      children: [
        {
          component: {
            name: 'LoginScreen'
          }
        }
      ],
    }
  }
});

export const goToDashboard = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'DashboardScreen'
          }
        }
      ],
    }
  }
});

export const goToHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Home',
      children: [
        {
          component: {
            name: 'TopBar' // Make a component to show on home screen
          },
          component: {
            name: 'Display' // Make a component to show on home screen
          },
          component: {
            name: 'BottomBar' // Make a component to show on home screen
          }
        }
      ],
    }
  }
})

export const goToRequest = () => Navigation.setRoot({
    root: {
      stack: {
        id: 'Request',
        children: [
          {
            component: {
              name: 'Leave' // Make a component to show on screen
            },
            component: {
              name: 'TimeSheet' // Make a component to show on screen
            }
          }
        ],
      }
    }
  })

  export const goToApproval = () => Navigation.setRoot({
    root: {
      stack: {
        id: 'Approval',
        children: [
          {
            component: {
              name: 'Leave' // Make a component to show on screen
            },
            component: {
              name: 'TimeSheet' // Make a component to show on screen
            }
          }
        ],
      }
    }
  })

export async function gotoScreen(currentComponentID, toComponent) {
  await Navigation.push(currentComponentID, toComponent);
}

export async function goToPreviousScreen(currentComponentID) {
  await Navigation.pop(currentComponentID)
}

export async function popToRoot(currentComponentID) {
  await Navigation.popToRoot(currentComponentID)
}

export async function popTo(componentId) {
  await Navigation.popTo(componentId)
}