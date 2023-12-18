import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  Alert
} from "react-native";


export function Home() {
  const [newSkill, setNewSkill] = useState(""); //Quando declarado um useState, você obtém duas variáveis: a primeira possui um valor estático, definido logo após a declaração do useState. (Ex: useState('valorEstático')). A segunda variável será aquela que atualizará, dinamicamente, o valor da variável estática. (Ex: variable2("valueToUpdateVar1"))

  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Wendel</Text>

        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill} />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddNewSkill}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { marginVertical: 50 }]}> {/* usa estilo do title + estilo proprio (no caso, o marginTop) */}
          My Skills
        </Text>

        {
          mySkills.map((skill, index) => (
          <TouchableOpacity 
          key={index} 
          style={styles.buttonSkill}
          activeOpacity={0.65}>
            <Text style={styles.textSkill}>
              {skill}
            </Text>
          </TouchableOpacity>
          ))
        }

      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
    overflow: "scroll"
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },

  input: {
    backgroundColor: "#1F1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 8
  },

  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold"
  },

  buttonSkill: {
    backgroundColor: "#1F1e25",
    padding: 15,
    borderRadius: 15,
    marginVertical: 5
  },

  textSkill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  }
})