import React,{useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import NotesContext from '../Context/NotesContext';


const EditNote=({route,navigation})=>{
    const {id} = route.params
    const {state,dispatch}= useContext(NotesContext) 
    const note = state.find(record=>{ return record.id === id})
    const [title,settitle] = useState(note.title);
    const [description,setdescription] = useState(note.content);
    

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
            dispatch({type:"UPDATE",payload:{id,title,description}})
            navigation.navigate("notes")
        }}
         >
         <Text  style={{fontSize:25}}>Save Edit</Text>

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

export default EditNote;