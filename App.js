import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, SafeAreaView } from "react-native";
import SelectScreen from "./screens/SelectScreen";
import RollScreen from "./screens/RollScreen";
import Colors from "./colors";

export default function App() {
    const [dice, setDice] = useState();
    const diceSelectedHandler = function (d) {
        console.log("called diceSelectedHandler: '" + d + "'");
        setDice(d);
    };

    const screen = dice ? (
        <RollScreen dice={dice} />
    ) : (
        <SelectScreen onDiceSelected={diceSelectedHandler} />
    );

    return (
        <LinearGradient
            colors={[Colors.color3, Colors.color2]}
            style={styles.rootScreen}
        >
            <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
});
