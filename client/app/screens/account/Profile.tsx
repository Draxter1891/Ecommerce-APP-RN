import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { userData } from "@/data/UserData";
import InputBox from "@/components/form/InputBox";

const Profile = ({navigation}) => {
  //states
  const [profilePic, setProfilePic] = useState(userData?.profilePic);
  const [name, setName] = useState(userData?.name);
  const [address, setAddress] = useState(userData?.address);
  const [city, setCity] = useState(userData?.city);
  const [contact, setContact] = useState(userData?.contact);
  const [email, setEmail] = useState(userData?.email);
  const [password, setPassword] = useState(userData?.password);

  //update profile
  const handleUpdate = () =>{
    if (!email || !password || !name || !address || !city || !contact) return alert("Please provide all fields!");

    alert("Profile updated successfully")
    navigation.goBack("Account")
  }

  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imgContainer}>
            <Image source={{ uri: profilePic }} style={styles.img} />
            <Pressable onPress={() => alert("Profile Dialog Box")}>
              <Text style={{ color: "red" }}>Update your profile</Text>
            </Pressable>
          </View>
                <InputBox value={name} setValue={setName} placeholder={"enter your name"} autoComplete={"name"}/>
                <InputBox value={email} setValue={setEmail} placeholder={"enter your email"} autoComplete={"email"}/>
                <InputBox value={password} setValue={setPassword} placeholder={"enter your password"} autoComplete={"password"} secureTextEntry={true}/>
                <InputBox value={address} setValue={setAddress} placeholder={"enter your address"} autoComplete={"adress-line1"}/>
                <InputBox value={city} setValue={setCity} placeholder={"enter your city"} autoComplete={"country"}/>
                <InputBox value={contact} setValue={setContact} placeholder={"enter your contact no."} autoComplete={"tel"}/>
                <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
                    <Text style={styles.btnUpdateTxt}>Update Profile</Text>
                </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  btnUpdate:{
    backgroundColor:'#000',
    height:40,
    width:'80%',
    borderRadius:20,
    marginHorizontal:'10%',
    justifyContent:'center',
    marginTop:10
  },
  btnUpdateTxt:{
    color:'#fff',
    fontSize:15,
    textAlign:'center'
  }
});
