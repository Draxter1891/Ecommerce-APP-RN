import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Layout from "@/components/Layout/Layout";
import Icon from "react-native-vector-icons/AntDesign";

const Dashboard = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>Dashboard</Text>
        <View style={styles.btnContainer}>

          <TouchableOpacity style={styles.btn}>
            <Icon name="inbox" style={styles.icon} />
            <Text style={styles.btnTxt}>Manage Product</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Icon name="database" style={styles.icon} />
            <Text style={styles.btnTxt}>Manage Categories</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Icon name="bars" style={styles.icon} />
            <Text style={styles.btnTxt}>Manage Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Icon name="addusergroup" style={styles.icon} />
            <Text style={styles.btnTxt}>Manage Users</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Icon name="info" style={styles.icon} />
            <Text style={styles.btnTxt}>About App</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Layout>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  heading: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontSize: 18,
    margin: 10,
    borderRadius: 10,
    fontWeight: "bold",
  },
  btnContainer: {
    margin: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 6,
    marginTop:10
  },
  icon: {
    fontSize: 20,
    marginRight: 20,
    marginLeft: 10,
  },
  btnTxt: {
    fontSize: 16,
  },
});
