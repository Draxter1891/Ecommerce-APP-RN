import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { CartData } from "@/data/CartData";
import PriceTable from "@/components/cart/PriceTable";
import Layout from "@/components/Layout/Layout";
import CartItem from "@/components/cart/CartItem";

const Cart = ({ navigation }:any) => {
  const [cartItems, setCartItems] = useState(CartData);

  return (
    <Layout>
      <View>
        <Text
          style={cartItems?.length > 0 ? styles.heading : styles.headingNoItem}
        >
          {cartItems?.length > 0
            ? `You Have ${cartItems?.length} Item(s) in Cart`
            : "Oops Your Cart Is Empty"}
        </Text>
        {cartItems?.length > 0 && (
          <>
            <ScrollView>
              {cartItems?.map((item) => (
                <CartItem item={item} key={item._id} />
              ))}
            </ScrollView>
            <View>
              <PriceTable price={999} title={"Price"} />
              <PriceTable price={1} title={"Tax"} />
              <PriceTable price={1} title={"Shipping"} />
              <View style={styles.grandTotal}>
                <PriceTable price={1} title={"Grand Total"} />
              </View>
              <TouchableOpacity style={styles.btnCheckout} onPress={()=>navigation.navigate('Checkout')}>
                <Text style={styles.btnText}>CHECKOUT</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </Layout>
  );
};

export default Cart;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    textAlign: "center",
    color: "green",
    marginTop: 10,
  },
  headingNoItem: {
    fontSize: 18,
    textAlign: "center",
    color: "red",
    marginTop: 10,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#fff",

    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btnCheckout: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#000",
    width: "90%",
    marginHorizontal: '5%',
    borderRadius: 7,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});

// Note: '?.' is used for logical AND condition
// Note: we use <></> fragments to avoid clash between two block level elements
