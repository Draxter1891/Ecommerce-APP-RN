import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProductsData } from "@/data/ProductsData";
import Layout from "@/components/Layout/Layout";

type RootStackParamList = {
  ProductDetails: { _id: number };
};
type ProductDetailsRouteProp = RouteProp<RootStackParamList, "ProductDetails">;

interface ProductDetailsProp {
  route: ProductDetailsRouteProp;
}
const ProductDetails: FC<ProductDetailsProp> = ({ route }) => {
  const [pDetails, setPDetails] = useState<any>({});
  const [qty, setQty] = useState(1);
  // console.log(route);

  const { params } = route;
  //get product details
  useEffect(() => {
    //find product details
    const getProduct = ProductsData.find((p) => {
      return p?._id === params?._id;
    });
    setPDetails(getProduct);
  }, [params?._id]);
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
    <Layout>
      <View style={styles.imageContainer}>
        <Image source={{ uri: pDetails?.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{pDetails?.name}</Text>
        <Text style={styles.title}>Price: ₹{pDetails?.price}</Text>
        <Text style={styles.desc}>{pDetails?.desc}</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={pDetails?.qty <= 0 ? styles.cartBtnDisabled : styles.cartBtn}
            onPress={() => {
              alert(`${qty} item(s) added to cart.`);
            }}
            disabled={pDetails?.qty <= 0}
          >
            <Text
              style={
                pDetails?.qty <= 0
                  ? styles.cartBtnTxtDisabled
                  : styles.cartBtnTxt
              }
            >
              {pDetails?.qty > 0 ? "ADD TO CART" : "OUT OF STOCK"}
            </Text>
          </TouchableOpacity>
          {pDetails?.qty > 0 ? (
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.qtyBtn} onPress={handleReduceQty}>
                <Text style={styles.qtyBtnTxt}>-</Text>
              </TouchableOpacity>

              <Text style={styles.qtyBtnTxt}>{qty}</Text>

              <TouchableOpacity style={styles.qtyBtn} onPress={handleAddQty}>
                <Text style={styles.qtyBtnTxt}>+</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    </Layout>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 18,
    padding: 20,
    height: 250,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "130%",
    width: "58%",
  },
  title: {
    fontSize: 18,
    textAlign: "left",
  },
  content: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  desc: {
    fontSize: 13,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cartBtn: {
    width: 150,
    backgroundColor: "#000",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  cartBtnDisabled: {
    width: 150,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "lightgray",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  cartBtnTxt: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  cartBtnTxtDisabled: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
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
