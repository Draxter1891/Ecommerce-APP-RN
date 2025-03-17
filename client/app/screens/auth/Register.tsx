import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import InputBox from "@/components/form/InputBox";
import { SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { register } from "@/redux/features/auth/userAction";
import { useReduxStateHook } from "@/hooks/customHook";

const Register = ({ navigation }: any) => {
  const dispatch: any = useDispatch();

  //if in case this link doesn't work use @assets/image/register.jpg
  const loginImg =
    "https://img.freepik.com/free-vector/confirmed-concept-illustration_114360-496.jpg?ga=GA1.1.86762577.1738597410&semt=ais_hybrid";
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const [country, setCountry] = useState("");

  //login function
  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !phone)
      return alert("Please provide all fields!");
    const formData = {
      email,
      password,
      name,
      address,
      city,
      phone,
      answer,
      country: "India",
    };
    dispatch(register(formData));
    alert("Registered Successfully");
    navigation.navigate("Login");
  };

  const loading = useReduxStateHook(navigation, "Login");
  return (
    <ScrollView scrollEnabled={true} style={{ backgroundColor: "#fff" }}>
      <Image source={{ uri: loginImg }} style={styles.img} />
      <View style={styles.container}>
        <InputBox
          placeholder={"Enter Your Name"}
          autoComplete={"name"}
          value={name}
          setValue={setName}
        />

        <InputBox
          placeholder={"Enter Your Address"}
          autoComplete={"address-line1"}
          value={address}
          setValue={setAddress}
        />
        <InputBox
          placeholder={"Enter Your City"}
          autoComplete={"country"}
          value={city}
          setValue={setCity}
        />
        <InputBox
          placeholder={"Enter Your Country"}
          autoComplete={"country"}
          value={country}
          setValue={setCountry}
        />
        <InputBox
          placeholder={"Enter Your Contact Number"}
          autoComplete={"tell"}
          value={phone}
          setValue={setPhone}
        />
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
        <InputBox
          placeholder={"Enter Your Favourite Dish"}
          secureTextEntry={true}
          value={answer}
          setValue={setAnswer}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
            <Text style={styles.loginBtnTxt}>Register</Text>
          </TouchableOpacity>
          <Text>
            Already a User?{" "}
            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.loginTxt}
            >
              Login!
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    // alignItems:'center',
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#fff",
  },
  img: {
    position: "relative",
    top: "3%",
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
