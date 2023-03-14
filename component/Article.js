import React,{useState} from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
  TextInput
} from "react-native"
function Article(){
    return(
        <View style={styles.SubContainer}>
            <View style={styles.SearchBar}>
                <TextInput style={styles.Input}/>
                <TouchableOpacity>
                    <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/8915/8915520.png'}} style={styles.Image}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}
// Article.defaultProps={
//     Name:'ชื่อ',
//     Amount:'อุปกรณ์ที่ยืม',
//     NumAmount:0,
//     Imagetext:'เพิ่มรูปภาพ',
//     Date:'วันที่คืน'

// }
const styles = StyleSheet.create({
   SearchBar:{
        backgroundColor:"#f2f2f2",
        width:250,
        height:30,
        borderRadius:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        
   },
   SubContainer:{
        // backgroundColor:"blue",
        flex:0.1,
        alignItems:"center",
        justifyContent:"center"

   },
   Image:{
        width:25,
        height:25,
        margin:3,
    },
    Input: {
        height: 20,
        margin: 5,
        // borderWidth: 1,
        padding: 1,
        fontSize:16,
        maxWidth:200
        
      },
  })
  
export default Article;