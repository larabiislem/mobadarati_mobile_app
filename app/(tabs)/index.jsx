import { View , StyleSheet} from "react-native";
import Sign_up from "@/Screens/Sing up";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from 'react-native';
import Main from "@/Screens/main";
import TopServices from "@/components/composant/TopService";
import Home from "@/Screens/home";
import DonationCard from "@/components/Donation_offer";
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
   <DonationCard/>
    
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