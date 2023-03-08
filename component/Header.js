import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native"

function HeaderBar({Name}){

    return(
       <View style={styles.Navbarheader}>
            <View style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity style={{paddingLeft:20}}>
                <Image source={{uri:'https://img.icons8.com/ios/256/long-arrow-left.png'}} style={styles.Image}></Image>
              </TouchableOpacity>
              <Text style={styles.TextNavber}>{Name}</Text>
              <Text>             </Text>
            </View>
       </View>
    )
}
HeaderBar.defaultProps ={
    Name:'Error'
}

const styles = StyleSheet.create({
    Navbarheader:{
        display:"flex",
        justifyContent:"center",
        height:70,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,
        
    },
    TextNavber:{
        fontSize:24,
        color:'black'
    },
    Image:{
      width:30,
      height:30, 
    },
  })
  
export default HeaderBar;