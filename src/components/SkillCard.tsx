import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface SkillCardProps {
    skill: string;
    removeSkill: () => void;
}

export function SkillCard({ skill, removeSkill }: SkillCardProps) {
    return (
        <View style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>

            <TouchableOpacity onPress={removeSkill}>
                <Text style={styles.buttonRemoveSkill}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: "#1F1e25",
        padding: 15,
        borderRadius: 15,
        marginVertical: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    textSkill: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        width: "80%"
    },

    buttonRemoveSkill: {
        padding: 12,
        borderRadius: 5,
        color: "#a50b0b",
        backgroundColor: "#262935",
        fontWeight: "bold",
        fontSize: 21,
        textAlign: "center"
    }
})