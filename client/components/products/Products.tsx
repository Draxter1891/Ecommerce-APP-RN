import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://ecommerce-app-rn.onrender.com/api/v1/product/get-all");

      if (response.data.success) {
        setProducts(response.data.products);
        console.log("✅ Products state updated:", response.data.products);
      }
    } catch (error) {
      console.error("❌ Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={[...products]}
          keyExtractor={(item) => item._id}
          numColumns={2} // Adjust for grid layout
          renderItem={({ item }) => <ProductsCard p={item} />}
          extraData={products}
        />
      )}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});
