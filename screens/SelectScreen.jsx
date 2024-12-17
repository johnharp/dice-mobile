import { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import DieSelectionButton from "../components/DieSelectionButton";
import Colors from "../colors";

function SelectScreen() {
    const images = new Map();
    images[20] = require("../assets/images/D20.png");
    images[12] = require("../assets/images/D12.png");
    images[10] = require("../assets/images/D10.png");
    images[8] = require("../assets/images/D8.png");
    images[6] = require("../assets/images/D6.png");
    images[4] = require("../assets/images/D4.png");

    const [dice, setDice] = useState([
        { sides: 20, count: 0 },
        { sides: 12, count: 0 },
        { sides: 10, count: 0 },
        { sides: 8, count: 0 },
        { sides: 6, count: 0 },
        { sides: 4, count: 0 },
    ]);

    const handleDieIncrement = (sides) => {
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
                if (s == sides) c=0;

                newDice.push({ sides: s, count: c });
            }
            return newDice;
        });    
    }

    return (
        <>
            <View style={styles.mainView}>
                <View style={styles.container}>
                    {dice.map((d) => (
                        <DieSelectionButton
                            key={"D" + d.sides}
                            numSides={d.sides}
                            count={d.count}
                            img={images[d.sides]}
                            onPress={handleDieIncrement}
                            onClear={handleDieClear}
                        />
                    ))}
                    <TextInput
                        style={styles.numberInput}
                        maxLength={1}
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.color3,
        height: "100%",
        width: "100%",
    },

    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: 40,
        padding: 20,
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
