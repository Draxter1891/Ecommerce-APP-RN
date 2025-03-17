import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Layout from "@/components/Layout/Layout";

const Checkout = ({ navigation }:any) => {
  const handleCOD = () => {
    alert("Your Order has been placed successfully");
  };
  const handleOnln = () => {
    navigation.navigate("Payment");
    alert("You are being redirected to payment screen");
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>Payment Options</Text>
        <Text style={styles.price}>Total Amount: ₹101</Text>
        <View style={styles.PaymentCard}>
          <Text style={styles.PaymentHeading}>Select your Payment mode</Text>
          <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
            <Text style={styles.PaymentBtnTxt}>Cash On Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentBtn} onPress={handleOnln}>
            <Text style={styles.PaymentBtnTxt}>
              Online (CREDIT | DEBIT CARD)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    color: "gray",
  },
  PaymentCard: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    padding: 30,
    marginVertical: 10,
  },
  PaymentHeading: {
    color: "gray",
    marginBottom: 10,
  },
  paymentBtn: {
    backgroundColor: "#000",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: 10,
  },
  PaymentBtnTxt: {
    color: "#fff",
    textAlign: "center",
  },
});
