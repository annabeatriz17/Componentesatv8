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
        backgroundColor: "#a49393",
        width: "100%",
        height: 200,
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
});