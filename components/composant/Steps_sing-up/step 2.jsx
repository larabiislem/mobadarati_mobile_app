import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput ,Image} from 'react-native';
import Title from '../title';
import check from '../../../assets/images/image 10 (2).png';

const SkillsSelectionScreen = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const skills = [
    { name: 'Cooking', color: '#D9D9D9' },
    { name: 'Delivery', color: '#D9D9D9' },
    { name: 'Waiter', color: '#D9D9D9' },
    { name: 'Wash Dishes', color: '#D9D9D9' },
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
          <Text style={[styles.optionText, selectedSkills.includes(skill.name) ? { color: 'white' } : { color: 'black' }]}>{skill.name}</Text>
          {selectedSkills.includes(skill.name) && <Image source={check} style={styles.check}/>}
        </TouchableOpacity>
      ))}

      <TextInput 
        style={styles.textInput} 
        placeholder="Anything to add ?" 
        placeholderTextColor="#666"
      />

      <TouchableOpacity style={styles.nextButton}>
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
    width: '80%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#B22222',
    borderColor: '#B22222',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  check: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  textInput: {
    width: '80%',
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
});

export default SkillsSelectionScreen;