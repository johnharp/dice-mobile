import { useState } from "react";
import {
    Alert,
    Text,
    TextInput,
    View,
    StyleSheet,
    StatusBar,
    FlatList,
} from "react-native";
import DieSelectionButton from "../components/DieSelectionButton";
import RollButton from "../components/RollButton";
import ResetButton from "../components/ResetButton";
import Colors from "../constants/Colors";

const images = new Map();
images[20] = require("../assets/images/D20-sm.png");
images[12] = require("../assets/images/D12-sm.png");
images[10] = require("../assets/images/D10-sm.png");
images[8] = require("../assets/images/D8-sm.png");
images[6] = require("../assets/images/D6-sm.png");
images[4] = require("../assets/images/D4-sm.png");

function SelectScreen({ onDiceSelected }) {


    const [dice, setDice] = useState([
        { sides: 20, count: 0 },
        { sides: 12, count: 0 },
        { sides: 10, count: 0 },
        { sides: 8, count: 0 },
        { sides: 6, count: 0 },
        { sides: 4, count: 0 },
    ]);

    const anyDiceAreSelected = dice.find((d) => d.count > 0);
    const totalDiceSelected = dice.reduce((acc, d) => (acc += d.count), 0);

    const handleDieIncrement = (sides) => {
        if (totalDiceSelected >= 5) {
            Alert.alert("Max Dice", "Select up to 5 dice maximum.", [
                { text: "OK", style: "destructive" },
            ]);
            return;
        }

        setDice((currDice) => {
            const newDice = [];
            for (const die of currDice) {
                let s = die.sides;
                let c = die.count;
                if (s == sides) c++;

                newDice.push({ sides: s, count: c });
            }
            return newDice;
        });
    };

    const handleDieClear = (sides) => {
        setDice((currDice) => {
            const newDice = [];
            for (const die of currDice) {
                let s = die.sides;
                let c = die.count;
                if (s == sides) c = 0;

                newDice.push({ sides: s, count: c });
            }
            return newDice;
        });
    };

    const handleRoll = () => {
        if (totalDiceSelected > 10) {
            Alert.alert(
                "Too Many",
                "Choose betwen 1 and 10 total dice to roll.",
                [{ text: "OK", style: "destructive" }]
            );
        } else {
            onDiceSelected(dice);
        }
    };

    const handleClear = () => {
        setDice((currDice) => {
            const newDice = [];
            for (const die of currDice) {
                newDice.push({ sides: die.sides, count: 0 });
            }
            return newDice;
        });
    };

    return (
        <>
            <StatusBar />
            <View style={styles.mainView}>
                <View style={styles.diceContainer}>
                    <FlatList
                        data={dice}
                        renderItem={(d) => (
                            <DieSelectionButton
                                key={"D" + d.item.sides}
                                numSides={d.item.sides}
                                count={d.item.count}
                                img={images[d.item.sides]}
                                onPress={handleDieIncrement}
                                onClear={handleDieClear}
                            />
                        )}
                    ></FlatList>
                </View>
                <View style={styles.rollButtonContainer}>
                    {anyDiceAreSelected && <RollButton onPress={handleRoll} />}
                    {anyDiceAreSelected && (
                        <ResetButton onPress={handleClear} />
                    )}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "stretch",
    },

    diceContainer: {
        flexDirection: "column",
        padding: 20,
        flex: 9,
    },

    rollButtonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.color4,
        borderBottomWidth: 2,
        color: Colors.color4,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default SelectScreen;
