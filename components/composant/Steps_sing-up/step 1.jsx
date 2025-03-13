import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Image } from 'react-native';
import Title from '../title';
import Volunteer from  '../../../assets/images/image 9.png';
import Assosiation from '../../../assets/images/image 10.png';
import check from '../../../assets/images/image 10 (2).png';

const AccountSelectionScreen = ({nav}) => {
  const [selected, setSelected] = useState('volunteer1');

  return (
    <View style={styles.container}>
      <Title>Create an account</Title>
      <Text style={styles.subtitle}>Which type of account would you like?</Text>

      <TouchableOpacity 
        style={[styles.option, selected === 'volunteer1' ? styles.selected : null]} 
        onPress={() => setSelected('volunteer1')}
      >
       <Image source={Volunteer} />
       <View style={styles.text_container}>
       <Text style={styles.optionText}>Volunteer</Text>
        <Text style={styles.optionSubText}>I'm looking to volunteer</Text>
       

       </View>
       {selected === 'volunteer1' && <Image source={check} style={styles.check}/>}
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.option, selected === 'volunteer2' ? styles.selected : null]} 
        onPress={() => setSelected('volunteer2')}
      >
        <Image source={Assosiation} />
        <View style={styles.text_container}>
        <Text style={styles.optionText}>Assosiation</Text>
        <Text style={styles.optionSubText}>I'm looking to volunteer</Text>
        </View>
        {selected === 'volunteer2' && <Image source={check} style={styles.check}/>}
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton} onPress={() => nav.navigate('Step2')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  subtitle: {
    marginTop:-60,
    fontSize: 20,
    marginBottom: 20,
    color:"#7D838B"
  },
  option: {
    width: '80%',
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection:'row',
    borderColor: '#000',
    paddingRight:50
  },
  selected: {
    backgroundColor: '#962728',
    borderColor: '#962728',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionSubText: {
    fontSize: 14,
    color:"#7D838B"
  },
  check: {
    
    position: 'absolute',
    right: 10,
    top: 30,
    
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text_container:{
    flexDirection:'column',
    marginLeft: 10
  }
});

export default AccountSelectionScreen;
