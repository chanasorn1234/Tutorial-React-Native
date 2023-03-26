/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from "react"
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native"

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen"
import Equipment from './component/equipment'
import HeaderBar from './component/Header'
import Stat from './component/Stat'
import Article from './component/Article'


function App() {
  const [NumAmount,SetNumAmount] = useState(0)
  const [Save,SetSave] = useState(false)
  const [NamePage,SetNamePage] = useState([
    {page:'บทความ'},
    {page:'คืนอุปกรณ์'},
    {page:'สื่อความรู้'},
    {page:'สถิติ'},
  ])
  const AddAmount = (NumAmount) =>{
    SetNumAmount(PrevAmount =>{ 
      NumAmount = PrevAmount+1
      return NumAmount
    })
  }
  const DeleteAmount = (NumAmount) =>{
    SetNumAmount(PrevAmount =>{
      if(NumAmount >= 1){
        NumAmount = PrevAmount-1
      }
      else{
        NumAmount = 0
      }
      return NumAmount
    })
  }
  const SaveEquipment = (Save) =>{
    SetSave(PrevState =>{
      if(PrevState == false){
        Save = true
        Alert.alert('บันทึกข้อมูลเสร็จสิ้น');
      }
      return Save
    })
  }

  return(
    <View style={styles.Container}>
      <HeaderBar Name={'สถิติ'}/>
      {/* <Equipment NumAmount={NumAmount} AddAmount={AddAmount} DeleteAmount={DeleteAmount} SaveEquipment={SaveEquipment}/> */}
      {/* <Stat Time={'>9997'}></Stat> */}
      <Article/>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
  }
})

export default App
