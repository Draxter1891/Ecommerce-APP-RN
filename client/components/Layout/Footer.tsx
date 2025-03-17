import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useReduxStateHook } from "@/hooks/customHook";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/auth/userAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const loading = useReduxStateHook(navigation, "Login");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon
          name="home"
          style={[styles.icon, route.name === "Home" && styles.active]}
        />
        <Text style={[styles.iconText, route.name === "Home" && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("Notification")}
      >
        <Icon
          name="bells"
          style={[styles.icon, route.name === "Notification" && styles.active]}
        />
        <Text
          style={[
            styles.iconText,
            route.name === "Notification" && styles.active,
          ]}
        >
          Notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("Account")}
      >
        <Icon
          name="user"
          style={[styles.icon, route.name === "Account" && styles.active]}
        />
        <Text
          style={[styles.iconText, route.name === "Account" && styles.active]}
        >
          Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("Cart")}
      >
        <Icon
          name="shoppingcart"
          style={[styles.icon, route.name === "Cart" && styles.active]}
        />
        <Text style={[styles.iconText, route.name === "Cart" && styles.active]}>
          Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={async () => {
          dispatch(logout());
          await AsyncStorage.removeItem("@auth");
        }}
      >
        <Icon name="logout" style={styles.icon} />
        <Text style={styles.iconText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 25,
    color: "#000",
  },
  iconText: {
    color: "#000",
    fontSize: 12,
  },
  active: {
    color: "blue",
    fontWeight: "bold",
  },
});
export default Footer;

//Note: To add more than one statements in onpress you must use {statement1, statement2}
