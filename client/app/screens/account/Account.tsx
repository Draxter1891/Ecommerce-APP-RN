import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Layout from "@/components/Layout/Layout";
import { userData } from "@/data/UserData";
import Icon from "react-native-vector-icons/AntDesign";

const Account = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image
          source={{ uri: userData?.profilePic }}
          style={styles.profilePic}
        />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.name}>
            Hi <Text style={{ color: "green" }}>{userData?.name} </Text> 👋
          </Text>
          <Text>email: {userData?.email}</Text>
          <Text>Mobile no.: {userData?.contact}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Account Settings</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Profile", { id: userData?._id });
            }}
          >
            <Icon name="edit" style={styles.icon} />
            <Text style={styles.btnTxt}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("MyOrder")}
          >
            <Icon name="bars" style={styles.icon} />
            <Text style={styles.btnTxt}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Notification")}
          >
            <Icon name="bells" style={styles.icon} />
            <Text style={styles.btnTxt}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Icon name="API" style={styles.icon} />
            <Text style={styles.btnTxt}>Admin Panel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  profilePic: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    marginTop: 20,
    fontSize: 18,
  },
  btnContainer: {
    padding: 12,
    backgroundColor: "#fff",
    margin: 10,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
  },
  btnTxt: {
    fontSize: 15,
    marginRight: 10,
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
  },
});
