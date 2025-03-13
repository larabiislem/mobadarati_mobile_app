import { View , StyleSheet} from "react-native";
import Sign_up from "@/Screens/Sing up";
import { createStackNavigator } from "@react-navigation/stack";
import Login_screen from "@/Screens/login";


 const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login_screen} />
        <Stack.Screen name="Sign_up" component={Sign_up} />
      </Stack.Navigator>
       
      

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