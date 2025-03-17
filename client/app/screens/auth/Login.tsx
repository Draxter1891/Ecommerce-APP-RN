import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputBox from "@/components/form/InputBox";
//redux hooks
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/features/auth/userAction";
import { useReduxStateHook } from "@/hooks/customHook";
// NOTE: useDispatch is used to send request and useSelector is used to access global state and use its data in any component

const Login = ({ navigation }: any) => {
  //if in case this link doesn't work use @assets/image/login.jpg
  const loginImg =
    "https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //hooks
  const dispatch = useDispatch();

  const loading = useReduxStateHook(navigation, "Home");
  //login function
  const handleLogin = () => {
    if (!email || !password) return alert("Please enter email or password!");

    dispatch(login(email, password));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImg }} style={styles.img} />
      {loading && <Text>loading...</Text>}
      <InputBox
        placeholder={"Enter Your Email"}
        autoComplete={"email"}
        value={email}
        setValue={setEmail}
      />
      <InputBox
        placeholder={"Enter Your Password"}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnTxt}>Login</Text>
        </TouchableOpacity>
        <Text>
          Not a User?{" "}
          <Text
            onPress={() => navigation.navigate("Register")}
            style={styles.loginTxt}
          >
            Register!
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // alignItems:'center',
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#fff",
  },
  img: {
    position: "absolute",
    top: 0,
    marginVertical: 20,
    height: "40%",
    width: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginBtnTxt: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 500,
    fontSize: 15,
  },
  loginTxt: {
    color: "blue",
    fontWeight: "bold",
  },
});
