import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const Header = () => {
  const [searchTxt, setSearchTxt] = useState("");

  // function for search
  const handleSearch = ()=>{
    console.log(searchTxt);
    setSearchTxt('');
  }
  return (
    <View style={{ height: 90, backgroundColor: "lightgray" }}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          value={searchTxt}
          onChangeText={(txt) => setSearchTxt(txt)}
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Icon name="search" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  searchInput: {
    borderWidth: 0.3,
    width: "100%",
    position: "absolute",
    left: 15,
    height: 40,
    color: "#000",
    backgroundColor: "#fff",
    paddingLeft: 12,
    fontSize: 16,
    borderRadius: 5,
  },
  searchBtn: {
    position: "absolute",
    left: "95%",
  },
  icon: {
    color: "gray",
    fontSize: 18,
  },
});
