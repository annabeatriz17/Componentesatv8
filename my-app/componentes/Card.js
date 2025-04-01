import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card() {
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>SORVETES CREMOSOS</Text>
            <Text style={styles.cardDescription}>CHOCOLATE BELGA</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f8c0c8",
        width: "20rem",
        height: "20%",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

    },
    cardText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    cardDescription: {
        color: "white",
        fontSize: 15,
    },
});