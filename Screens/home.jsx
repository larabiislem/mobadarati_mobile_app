import { View , StyleSheet } from "react-native";
import TopServices from "@/components/composant/TopService";
import VolunteerCard from "@/components/composant/assosiation_offer";
import { ScrollView } from "react-native";



const HomeScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.topService}>
            <TopServices />
        </View>
      <View>
        <ScrollView horizontal={true}>
        <VolunteerCard />
        <VolunteerCard />
        <VolunteerCard />
            
        </ScrollView>
      

      </View>
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topService:{
    marginBottom:50
  }
});

export default HomeScreen;
