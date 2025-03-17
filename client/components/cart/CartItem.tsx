import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CartItem = ({ item }) => {
  // console.log(item);

  const [qty, setQty] = useState(1);
  //handle function for + -
  const handleAddQty = () => {
    if (qty === 10) return alert("You can't add more than 10 quantity");
    setQty((prev) => prev + 1);
  };

  const handleReduceQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: item?.imageUrl }} style={styles.itemImg} />
      <View>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.name}>₹{item?.price}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.qtyBtn} onPress={handleReduceQty}>
          <Text style={styles.qtyBtnTxt}>-</Text>
        </TouchableOpacity>

        <Text style={styles.qtyBtnTxt}>{qty}</Text>

        <TouchableOpacity style={styles.qtyBtn} onPress={handleAddQty}>
          <Text style={styles.qtyBtnTxt}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  itemImg: {
    height: 100,
    width: 80,
    resizeMode: "contain",
  },
  name: {
    fontSize: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  qtyBtn: {
    backgroundColor: "lightgray",
    width: 30,
    alignItems: "center",
    marginHorizontal: 10,
  },
  qtyBtnTxt: {
    fontSize: 15,
  },
});
