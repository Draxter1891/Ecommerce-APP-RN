import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./app/screens/Home";
import About from "./app/screens/About";
import ProductDetails from "./app/screens/ProductDetails";
import Cart from "./app/screens/Cart";
import Checkout from "./app/screens/Checkout";
import Payment from "./app/screens/Payment";
import Login from "./app/screens/auth/Login";
import Register from "./app/screens/auth/Register";
import Account from "./app/screens/account/Account";
import Notification from "./app/screens/account/Notification";
import Profile from "./app/screens/account/Profile";
import MyOrder from "./app/screens/account/MyOrder";
import Dashboard from "./app/screens/admin/Dashboard";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//routes
const Stack = createNativeStackNavigator();

export default function Main() {
  const [isAuth, setIsAuth] = useState(null);

  //get user
  useEffect(() => {
    const getUserLocalData = async () => {
      let data: any = await AsyncStorage.getItem("@auth");
      setIsAuth(data);
      // let loginData = JSON.parse(data)
      console.log("user login data ==> ", data);
    };
    getUserLocalData();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Mobile" component={About} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MyOrder" component={MyOrder} />
        <Stack.Screen name="Dashboard" component={Dashboard} />

        {!isAuth && (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
