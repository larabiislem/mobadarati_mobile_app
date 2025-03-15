import { View , StyleSheet} from "react-native";
import Sign_up from "@/Screens/Sing up";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from 'react-native';
import Home from "@/Screens/home";
import TopServices from "@/components/composant/TopService";
/*
 <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login_screen} />
        <Stack.Screen name="Sign_up" component={Sign_up} />
      </Stack.Navigator>
*/

 //const Stack = createStackNavigator();
export default function App() {
  return (
    
   <View style={styles.container}>
    <Home/>
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