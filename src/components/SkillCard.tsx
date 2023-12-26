import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            activeOpacity={0.5}
            {...rest}>
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
        marginVertical: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    textSkill: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    }
})