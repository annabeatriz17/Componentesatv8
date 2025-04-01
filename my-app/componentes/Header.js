import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Sorveteria</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#d3bbdd",
        display: "flex",
        width: "360px",
        height: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
});