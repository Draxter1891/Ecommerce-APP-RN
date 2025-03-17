import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { categoriesData, CategoryProp } from '@/data/CategoriesData'
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';



const Category = () => {
    const navigation = useNavigation()
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
      {categoriesData?.map((item:CategoryProp)=>(
        <View key={item._id} >
            <TouchableOpacity style={styles.catContainer}
                onPress={()=>navigation.navigate(item.path)}
            >
                <Icon name={item.icon}  style={styles.catIcon}/>
                <Text style={styles.catTitle}>{item.name}</Text>
            </TouchableOpacity>
        </View>
      ))}
    </View>
    </ScrollView>
  )
}

export default Category

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff'
        , padding: 5,
        flexDirection: 'row'
    },
    catContainer: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    catIcon: {
        fontSize: 25,
        verticalAlign: 'top'
    },
    catTitle: {
        fontSize: 12
    }
})