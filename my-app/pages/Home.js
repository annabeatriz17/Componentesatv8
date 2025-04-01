import React from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import Header from "../componentes/Header.js";
import Card from "../componentes/Card.js";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.ScrollView}>
                <Card />
                <Card />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ece3f0",
        alignItems: "center",
        justifyContent: "center",
    },
    ScrollView: {
        flex: 1,
    },
});