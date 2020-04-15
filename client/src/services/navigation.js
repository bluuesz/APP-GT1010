import { CommonActions } from '@react-navigation/native';

export function Navigate(navigation, routeName, params) {
  if (!routeName) {
    throw new Error('Routes not found');
  }

  navigation.dispatch(CommonActions.navigate(routeName, params));
}

export function Back(navigation) {
  navigation.dispatch(CommonActions.goBack());
}
