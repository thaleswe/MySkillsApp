import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState(""); //Quando declarado um useState, você obtém duas variáveis: a primeira possui um valor estático, definido logo após a declaração do useState. (Ex: useState('valorEstático')). A segunda variável será uma função que atualizará, dinamicamente, o valor da variável estática. (Ex: variable2("valueToUpdateVar1"))

  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState("");

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
      setMySkills(oldState => oldState.filter((skill) => {
        return skill.id !== id;
      }))
  }


  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreetings("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings("Good afternoon");
    } else {
      setGreetings("Good evening");
    }
  }, []); // O useEffect é uma função que recebe dois parâmetros: Uma função e um array de uma ou mais variáveis já declaradas. A função disparará sempre que houver um update no valor de uma das variáveis apresentadas no array. Se o array estiver vazio, a função é disparada no momento em que começar a renderização dos componentes.


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Wendel
      </Text>

      <Text style={styles.greetings}>
        {greetings}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={text => setNewSkill(text)} />

      <Button title="Add" onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}> {/* usa estilo do title + estilo proprio (no caso, o marginVertical) */}
        My Skills
      </Text>


      <FlatList
        showsVerticalScrollIndicator={false}
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item.name} removeSkill={() => handleRemoveSkill(item.id)} />
        )}
      />

    </View>
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
  },

  greetings: {
    color: "#fff"

  }
})