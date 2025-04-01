import React from "react";
import { StyleSheet } from "react-native";
import Header from "../componentes/Header";
import Card from "../componentes/Card";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { ScrollView } from "react-native-gesture-handler";

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
        backgroundColor: "#eed6d3",
        alignItems: "center",
        justifyContent: "center",
    },
    ScrollView: {
        flex: 1,
    },
});