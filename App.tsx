import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./state";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@use-expo/font";
import styles from "./style/styles";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import {
  apiKey,
  authDomain,
  appId,
  measurementId,
  messagingSenderId,
  projectId,
  storageBucket,
} from "@env";
import { initializeApp } from "firebase/app";
import Home from "./components/Home";
import { ActionTypes } from "./state/actionTypes";
import { globalState } from "./state/reducer/userReducer";
import { useSelector, useDispatch } from "react-redux";
import { Action } from "./state/actions";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import { Dispatch } from "redux";
const firebaseConfig = {
  apiKey,

  authDomain,

  projectId,

  storageBucket,

  messagingSenderId,

  appId,

  measurementId,
};
export const app = initializeApp(firebaseConfig);

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
  Home: { Id: string };
};

export type rootStackNavProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
};

const customFonts = {
  Montserrat: require("./assets/fonts/Montserrat.ttf"),
  Roboto: require("./assets/fonts/Roboto.ttf"),
};

const Stack = createStackNavigator<RootStackParamList>();
function App() {
  const dispatch: Dispatch<Action> = useDispatch();

  const init = useSelector((state: globalState) => state);
  let auth = getAuth(app);

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: {
          id: user?.uid!,
          email: user?.email!,
        },
      });
    });
  }, []);
  const { state } = init;
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return (
      <View style={styles.container}>
        <Text>Fonts could not be loaded</Text>
      </View>
    );
  }
  function initialPage() {
    return state.user.email ? (
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator initialRouteName={"Landing"}>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <SafeAreaProvider>
          {initialPage()}
          {/* <Stack.Navigator initialRouteName={"Landing"}>
       <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
       <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
       <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
       <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        </Stack.Navigator> */}
        </SafeAreaProvider>
      </View>
    </NavigationContainer>
  );
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
