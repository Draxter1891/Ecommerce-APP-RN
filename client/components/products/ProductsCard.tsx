import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductsCard = ({ p }) => {
  const navigation = useNavigation();

  // Navigate to product details screen
  const handleMoreDetails = (id) => {
    navigation.navigate("ProductDetails", { _id: id });
  };

  // Placeholder function for adding to cart
  const handleAddToCart = () => {
    alert("Added to cart!");
  };
  console.log("🖼️ Product Card Data:", p);
  const imageUrl = p?.images?.length > 0 ? p.images[0].url : null;
  console.log("🖼️ Image URL:", imageUrl);

  return (
    <View style={styles.card}>
      {/* Ensure `images` exists before accessing `length` */}
      {p.images && p.images.length > 0 && p.images[0]?.url ? (
        <Image source={{ uri: p.images[0]?.url }} style={styles.cardImage} />
      ) : (
        <Image source={require("../../assets/images/placeholder.png")} style={styles.cardImage} />
      )}

      <Text style={styles.cardTitle}>{p.name}</Text>
      <Text style={styles.cardDesc}>{p.description.substring(0, 25)}...more</Text>
      
      <View style={styles.BtnContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => handleMoreDetails(p._id)}>
          <Text style={styles.btnText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartBtn} onPress={handleAddToCart}>
          <Text style={styles.btnText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>

   
  );
};

export default ProductsCard;

const styles = StyleSheet.create({
  card: {
    flex:1,
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "45%",
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  cardImage: {
    height: 210,
    width: "100%",
    marginBottom: 10,
    resizeMode: "contain",
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 13,
    textAlign: "left",
  },
  BtnContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#000",
    height: 20,
    width: 80,
    borderRadius: 5,
    justifyContent: "center",
  },
  cartBtn: {
    backgroundColor: "orange",
    height: 20,
    width: 80,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
  },
});
