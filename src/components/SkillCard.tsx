import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            activeOpacity={0.65}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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