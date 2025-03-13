import { View , TextInput ,StyleSheet , Text} from "react-native";

export default function Input({name}) {

   let secure = false 
   if (name ==='Password') {secure =true}
    return(
        <View style={styles.input_container}>
            <TextInput  style={styles.text_input} placeholder={name} placeholderTextColor="#484D53"
             secureTextEntry={secure}
            />
        </View>
    );
    
}

const styles = StyleSheet.create({

    input_container:
    {
        alignItems:'center',
        marginBottom: 20
    },
   
    text_input:{
        height: 66,
        width:'90%',
        padding: 20,
        paddingBottom:30,
        backgroundColor:'#D9D9D9',
        borderRadius:20,
        fontSize:15,

    }
})
