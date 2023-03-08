import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native"

function Stat({UserName,Position,WorkIn,Problem,Time,WorkOut}){
    return(
        <View style={styles.Container}>
            <Image source={{uri:'https://img.icons8.com/dusk/256/circled-user-male-skin-type-7.png'}} style={styles.Image}></Image>
            <Text style={styles.UserName}>{UserName}</Text>
            <Text>{Position}</Text>
            <View style={styles.WorkIn}>
                <Text style={{color:'white',fontSize:16,padding:10}}>จำนวนการเข้างาน</Text>
                <View style={styles.SubText}>
                    <Text style={{color:'white',fontSize:30,padding:15}}>{WorkIn}</Text>
                    <Text style={{color:'white',fontSize:16}}>ครั้ง</Text>
                </View>
            </View>
            <View style={styles.SubContainer}>
                <View style={styles.Problem}>
                    <Text style={{fontSize:16,padding:10}}>แจ้งปัญหา</Text>
                    <View style={styles.SubText2}>
                        <Text style={{color:'black',fontSize:30,padding:15}}>{Problem}</Text>
                        <Text style={{fontSize:16,paddingRight:15}}>ครั้ง</Text>
                    </View>
                </View>
                <View style={styles.Time}>
                <Text style={{fontSize:16,padding:10}}>ลงเวลาล่าช้า</Text>
                    <View style={styles.SubText2}>
                        <Text style={{color:'black',fontSize:30,padding:15}}>{Time}</Text>
                        <Text style={{fontSize:16,paddingRight:15}}>ครั้ง</Text>
                    </View>
                </View>
            </View>
            <View style={styles.WorkOut}>
                <Text style={{color:'white',fontSize:16,padding:10}}>จำนวนการออกงาน</Text>
                <View style={styles.SubText}>
                    <Text style={{color:'white',fontSize:30,padding:15}}>{WorkIn}</Text>
                    <Text style={{color:'white',fontSize:16}}>ครั้ง</Text>
                </View>
            </View>
        </View>
    )
}
Stat.defaultProps={
    UserName:"Chanasorn Siriwong",
    Position:"Care giver",
    WorkIn:'1,085',
    Problem:'>1000',
    Time:'>1000'
}

const styles = StyleSheet.create({
    Container:{
      flex:1,
      alignItems:'center',
      padding:30,
    //   backgroundColor:'green'
    },
    UserName:{
        fontSize:24,
        fontWeight:"500",
        color:'darkblue',
        padding:10
    },
    Image:{
        width:100,
        height:100,
    },
    WorkIn:{
        marginTop:30,
        display:'flex',
        backgroundColor:'blue',
        borderRadius:10,
        alignSelf: 'stretch',
        
    },
    WorkOut:{
        marginTop:10,
        display:'flex',
        backgroundColor:'blue',
        borderRadius:10,
        alignSelf: 'stretch',
    },
    SubText:{
        display:'flex',
        flexDirection:'row',
        alignSelf: 'stretch',
        alignItems:'center',
        justifyContent:'center',
    },
    SubText2:{
        display:'flex',
        flexDirection:'row',
        alignSelf: 'stretch',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        // padding:10,
        maxWidth:300,
        minWidth:160,
        flexWrap:'wrap'

        
    },
    SubContainer:{
        alignSelf: 'stretch',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'gray'
        flexWrap:'wrap'
        
    },
    Problem:{
        marginTop:10,
        display:'flex',
        borderRadius:10,
        alignSelf: 'stretch',
        backgroundColor:'#a6bacb',
        
    },
    Time:{
        marginTop:10,
        display:'flex',
        borderRadius:10,
        alignSelf: 'stretch',
        backgroundColor:'#a6bacb',
    }

  })
  
  export default Stat