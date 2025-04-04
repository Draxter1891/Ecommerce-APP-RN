import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "@/components/Layout/Layout";

const Notification = () => {
  return (
    <Layout>
      <View style={{justifyContent:'center',alignItems:'center',height:'100%'}}>
        <Text>Oops! You don't have any notifications yet.</Text>
      </View>
    </Layout>
  );
};

export default Notification;

const styles = StyleSheet.create({});
