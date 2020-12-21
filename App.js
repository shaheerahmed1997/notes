
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React,{useReducer} from 'react';
import {
  StyleSheet,
} from 'react-native';
import ListNotesScreen from './src/screens/ListNotesScreen';
import NotesContext from './src/Context/NotesContext';
import {reducer as NotesReducer,initstate} from './src/reducer/NotesReducer';
import CreateNote from './src/screens/CreateNote';
import ShowNotes from './src/screens/ShowNotes';
import EditNote from './src/screens/EditNote';

const Stack  = createStackNavigator();

const App=()=> {
  const [state,dispatch]= useReducer(NotesReducer,initstate)
    return (
     
    <NotesContext.Provider value={{state,dispatch}}> 
    <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name="notes" component={ListNotesScreen} options={{headerTitle:"All Notes",headerTitleAlign:"center"}}/>
           <Stack.Screen name="createnote" component={CreateNote} options={{headerTitle:"Create Notes",headerTitleAlign:"center"}}/>
           <Stack.Screen name="shownotes" component={ShowNotes} options={{headerTitle:"Notes",headerTitleAlign:"center"}}/>
           <Stack.Screen name="editnote" component={EditNote} options={{headerTitle:"Edit Note",headerTitleAlign:"center"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </NotesContext.Provider>
    

  )
}

const styles = StyleSheet.create({
 
 
});

export default App;
