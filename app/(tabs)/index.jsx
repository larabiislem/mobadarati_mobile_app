import { View , StyleSheet, Image} from "react-native";
import Sign_up from "@/Screens/Sing up";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from 'react-native';
import Main from "@/Screens/main";
//import Login_screen from "@/Screens/login";

 
/*
 <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login_screen} />
        <Stack.Screen name="Sign_up" component={Sign_up} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    

*/
//
//Mobadaraty – Figma et 2 pages de plus - Profil 1 – Microsoft_ Edge 15_03_2025 11_13_12 AM.png
 //const Stack = createStackNavigator();
export default function App() {
  return (
    
   <View style={styles.container}>
    <Main/>
  
    </View>
   
    
   
  );
}

const styles= StyleSheet.create(
  {
    container:{
      flex:1,
    }
  }
)