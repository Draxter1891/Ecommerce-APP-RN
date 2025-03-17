import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import Category from "@/components/category/Category";
import Banner from "@/components/banner/Banner";
import Products from "@/components/products/Products";
import Header from "@/components/Layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "@/redux/features/auth/userAction";

const Home = () => {
  const { isAuth } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch<any>(getUserData());
  }, [dispatch]);
  return (
    <Layout>
      <Header />
      <Category />
      <Banner />
      <Products />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
