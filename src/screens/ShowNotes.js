import React,{useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import NotesContext from '../Context/NotesContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShowNotes=({route,navigation})=>{
    const {id} = route.params
    const {state,dispatch}= useContext(NotesContext)
const note = state.find(record=>{ return record.id === id})
    return(

            <View style={{flex:1,marginTop:10}}>
            <TouchableOpacity
        style={{backgroundColor:"pink",alignItems:"center",marginHorizontal:80,borderRadius:5,width:200,margin:10,}}
        onPress={()=>{
          
           navigation.navigate("editnote",{id})
        }}
         >
         <Text  style={{fontSize:25}}>Edit Notes
         <Icon name="pencil" size={30}/>

         </Text>
         

        </TouchableOpacity>

                <Text style={styles.textstyle}>
                {note.title}
                </Text>
                <Text style={styles.textstyle}>
                    {note.content}
                </Text>
            </View>

    )




}

const styles = StyleSheet.create({

    textstyle:{
        fontSize:22,
        textAlign:"center"
    },



})

export default ShowNotes;