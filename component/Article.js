import React,{useState} from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView
} from "react-native"
import SearchBar from './SearchBar'

function Article(){
    const names = [
        {
            index:"1",
            name:"แนวทางดูแลผู้สูงอายุ"
        },
        {
            index:"2",
            name:"Chanasorn"
        },
        {
            index:"3",
            name:"Chanasorn"
        },
        {
            index:"4",
            name:"Chanasorn"
        },
        {
            index:"5",
            name:"Chanasorn"
        },
        {
            index:"6",
            name:"Chanasorn"
        },
        {
            index:"7",
            name:"Chanasorn"
        },
        {
            index:"8",
            name:"Chanasorn"
        },
        {
            index:"9",
            name:"Chanasorn"
        },
    ];

    return(
        <ScrollView style={{flex:1}}>
        <View style={styles.SubContainer}>
            <SearchBar/>
            <View style={{margin:40,marginBottom:-30,padding:10}}><Text style={{fontSize:22,fontWeight:"bold",color:"black"}}>บทความให้ความรู้</Text></View>
            <FlatList
            style={styles.listStyle}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={names}
                renderItem={({item}) =>{
                    return <View style={styles.ComponentStyle}>
                            <Image source={{uri:'https://img.freepik.com/free-photo/system-developers-analyzing-code-wall-screen-tv-looking-errors-while-team-coders-collaborate-artificial-intelligence-project-programmers-working-together-machine-learning-software_482257-41819.jpg?w=1480&t=st=1679840277~exp=1679840877~hmac=8ece2bf6ce7a8788fb07e6ed80edd106874a4574f1e0ca63a0b34397bc1a7c5d'}} style={styles.Image}></Image>
                            <Text style={styles.TextStyle}>{item.name}</Text>
                            <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <TouchableOpacity>
                                    <Text style={styles.ButtonStyle}>ดูรายละเอียด</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                }}
            />

            <FlatList
                style={styles.listStyle2}
                // horizontal
                data={names}
                renderItem={({item}) =>{
                    return <View style={styles.ComponentStyle2}>
                    <Image source={{uri:'https://img.freepik.com/free-photo/system-developers-analyzing-code-wall-screen-tv-looking-errors-while-team-coders-collaborate-artificial-intelligence-project-programmers-working-together-machine-learning-software_482257-41819.jpg?w=1480&t=st=1679840277~exp=1679840877~hmac=8ece2bf6ce7a8788fb07e6ed80edd106874a4574f1e0ca63a0b34397bc1a7c5d'}} style={styles.Image2}></Image>
                    <Text style={styles.TextStyle}>{item.name}</Text>
                    <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={styles.ButtonStyle}>ดูรายละเอียด</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                        
                                      
                }}
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
   SubContainer:{
        justifyContent:"center",
        marginTop:50
   },
   Image:{
        // width:'100%',
        // height:100,
        width:null,
        height:null,
        flex:1,
        resizeMode: 'cover',
        margin:3,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    Image2:{
        width:200,
        height:100,
        margin:3,
        borderRadius:10
    },
    listStyle: {
        margin: 10,
        padding: 10,  
      },
    listStyle2: {
        margin: 5,
        padding: 5,  
    },
    ComponentStyle: {
        // padding: 20,
        // backgroundColor: "blue",
        margin: 20,
        // color: "white",
        width:200,
        height:300,
        // alignItems:"center",
        borderColor:"gray",
        borderWidth: 1,
        borderRadius:15
    },
    TextStyle:{
        fontSize:16,
        color:"black",
        fontWeight:"bold",
        textAlign:"center"
    
    },
    ButtonStyle:{
        fontSize:12,
        color:"white",
        fontWeight:"bold",
        backgroundColor:"blue",
        padding:10,
        width:130,
        textAlign:"center"
        
    },
    ComponentStyle2:{
        // padding: 20,
        
        // color: "white",
        // backgroundColor:"gray",
        width:"100%",
        height:170,
        // alignItems:"center",
        flexDirection:"row"
        
    }
  })
  
export default Article;