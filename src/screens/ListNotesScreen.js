import React,{useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import NotesContext from '../Context/NotesContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListNotesScreen=(props)=>{
    const {state,dispatch}= useContext(NotesContext)
return(
    <View style={{ flex:1}}>
        <TouchableOpacity
        style={{backgroundColor:"pink",alignItems:"center",margin:10,marginVertical:15}}
        onPress={()=>{
            props.navigation.navigate("createnote")
        
        }}
         >
         <Text  style={{fontSize:25}}>Add Notes</Text>

        </TouchableOpacity>
        <FlatList
        data = {state}
        keyExtractor={item=>item.title}
        renderItem={({item})=>{
            return( 
                <TouchableOpacity
                onPress={()=>{props.navigation.navigate("shownotes",{id:item.id})}}
                >
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    marginHorizontal:10,
                    padding:15,
                    backgroundColor:"white",
                    elevation:4,
                    marginBottom:5,
                    
                    }}> 
                <Text style={{fontSize:22}}>{item.title}</Text>
               
                <TouchableOpacity 
                onPress={()=>{dispatch({type:"REMOVE",payload:item.id })
                    console.log(item.id)
                    }}
                >
                <Icon name="trash-o" size={30}
                   
                />
                </TouchableOpacity>
                </View>
                </TouchableOpacity>
            )


        }}
        />
    </View>

)


}
export default ListNotesScreen;