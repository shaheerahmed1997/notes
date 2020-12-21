import React,{useContext, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import NotesContext from '../Context/NotesContext';


const CreateNote=(props)=>{
    const [title,settitle] = useState("");
    const [description,setdescription] = useState("");
    const {state,dispatch}= useContext(NotesContext)

    return(
        <View style={{flex:1,margin:3}}>
            <Text style={{fontSize:22}}>Title</Text>
            <TextInput
            value={title}
            onChangeText={(text)=>{settitle(text)}}
            style={styles.textinputstyle}

            />
            <Text style={{fontSize:22}}>Enter Description</Text>
            <TextInput
            value={description}
            onChangeText={(text)=>{setdescription(text)}}
            style={styles.textinputstyle}
            multiline={true}
            numberOfLines={7}
            />
            <TouchableOpacity
        style={{backgroundColor:"pink",alignItems:"center",marginHorizontal:80,borderRadius:5,width:200,margin:10,}}
        onPress={()=>{
            dispatch({type:"ADD",payload:{title,description}})
            props.navigation.goBack()
        }}
         >
         <Text  style={{fontSize:25}}>Submit</Text>

        </TouchableOpacity>

        </View>
    )



}
const styles = StyleSheet.create({

    textinputstyle:{
        fontSize:20,
        borderWidth:1,
        borderColor:"black",
        marginVertical:8,
        marginHorizontal:8,
    

    }








})

export default CreateNote;