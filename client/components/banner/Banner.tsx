import { BannerData } from "@/data/BannerData";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
} from "react-native";

import Carousel, {PaginationLight} from "react-native-x-carousel";

// NOTE: destructuring value of width from windows (it gives us height and width of the window)
const { width } = Dimensions.get("window");

const Banner = () => {


  const renderItem = (data:any) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <Pressable onPress={()=>{
        console.log(data._id)
      }}>
        <View style={styles.cardWrapper}>
          <Image style={styles.card} source={{ uri: data.coverImageUri }} />
          <View
            style={[
              styles.cornerLabel,
              { backgroundColor: data.cornerLabelColor },
            ]}
          >
            <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={Carousel.PaginationLight}
        renderItem={renderItem}
        data={BannerData}
        loop
        autoplay
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  card: {
    width: width * 0.95,
    height: width * 0.4,
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
});
