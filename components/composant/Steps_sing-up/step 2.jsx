import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput ,Image} from 'react-native';
import Title from '../title';
import check from '../../../assets/images/image 10 (2).png';
import Cooking from '../../../assets/images/image 22.png';
import Delivery from '../../../assets/images/image 23.png';
import Waiter from '../../../assets/images/image 24.png';
import Wash_Dishes from '../../../assets/images/image 25.png';
import { KeyboardAvoidingView } from 'react-native';

const SkillsSelectionScreen = ( {nav, selectedSkills,setSelectedSkills}) => {
  
  const skills = [
    { name: 'Cooking', color: '#D9D9D9' , img : Cooking},
    { name: 'Delivery', color: '#D9D9D9' ,img : Delivery },
    { name: 'Waiter', color: '#D9D9D9', img : Waiter },
    { name: 'Wash Dishes', color: '#D9D9D9', img : Wash_Dishes },
  ];

  const toggleSkill = (skillName) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skillName)
        ? prevSkills.filter((s) => s !== skillName)
        : [...prevSkills, skillName]
    );
  };

  return (
    <View style={styles.container}>
        
      < Title >Your skills</Title>
      <Text style={styles.subtitle}>Select your skills</Text>

      {skills.map((skill) => (
        <TouchableOpacity 
          key={skill.name}
          style={[styles.option, selectedSkills.includes(skill.name) ? styles.selected : { backgroundColor: skill.color }]}
          onPress={() => toggleSkill(skill.name)}
        >
            <View style={styles.inner_container}>
            <Image source={skill.img}/>
          <Text style={[styles.optionText, selectedSkills.includes(skill.name) ? { color: 'white' } : { color: 'black' }]}>{skill.name}</Text>
          {selectedSkills.includes(skill.name) && <Image source={check} style={styles.check}/>}

            </View>
       
        </TouchableOpacity>
      ))}
    <KeyboardAvoidingView>
      <TextInput 
        style={styles.textInput} 
        placeholder="Anything to add ?" 
        placeholderTextColor="#666"
      />
      </KeyboardAvoidingView>
    
    <TouchableOpacity style={styles.nextButton} onPress={() => nav.navigate('Step3')}>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color :'#7D838B',
    marginTop:-70
  },
  option: {
    width: 350,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    
  },
  selected: {
    backgroundColor: '#B22222',
    borderColor: '#B22222',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:20
  },
  check: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  textInput: {
    width: 350,
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
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
  inner_container:
  {
    flexDirection:'row',
    alignItems:'center',
    

  }
});

export default SkillsSelectionScreen;