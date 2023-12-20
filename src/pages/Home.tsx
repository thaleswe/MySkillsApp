import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
  FlatList
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";


export function Home() {
  const [newSkill, setNewSkill] = useState(""); //Quando declarado um useState, você obtém duas variáveis: a primeira possui um valor estático, definido logo após a declaração do useState. (Ex: useState('valorEstático')). A segunda variável será uma função que atualizará, dinamicamente, o valor da variável estática. (Ex: variable2("valueToUpdateVar1"))

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

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}> {/* usa estilo do title + estilo proprio (no caso, o marginVertical) */}
          My Skills
        </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={mySkills}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <SkillCard skill={item} />
          )}
        />


        {/* {
            mySkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))
          } */}


      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70
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
  }
})