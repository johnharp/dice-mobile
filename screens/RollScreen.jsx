import { Text, StatusBar, StyleSheet, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/Title";

function randomNumberBetween(min, max) {
    const n = Math.floor(Math.random() * (max - min)) + min;

    return n;
}

function rollOneDieCountTimes(sides, count) {
    const doRoll = () => randomNumberBetween(1, sides);
    const rolls = [...Array(count).keys()].map(doRoll);
    return rolls;
}

function makeDieLine(die) {
    return (
        <View key={"container-" + die.sides} style={styles.rollContainer}>
            <Text key={"D" + die.sides} style={styles.text}>
                D{die.sides}:
            </Text>
            <Text key={"DR" + die.sides} style={styles.text2}>
                {die.rolls.join(", ")}
            </Text>
        </View>
    );
}

function RollScreen({ dice, onRollAgain }) {
    const rolledDice = dice.map((d) => {
        const rolls = rollOneDieCountTimes(d.sides, d.count);
        return { count: d.count, sides: d.sides, rolls };
    });

    const sum = rolledDice.reduce((acc, d) => {
        const sum = d.rolls.reduce((acc, r) => (acc += r), 0);
        return acc + sum;
    }, 0);
    
    return (
        <>
            <StatusBar />
            <View style={styles.mainView}>
                <View>
                    <Title>Results</Title>
                    {rolledDice.filter((d) => d.count > 0).map(makeDieLine)}

                    <Title>Total</Title>
                    <View style={{marginLeft: 20}}>
                        <Text style={styles.text}>{sum}</Text>
                    </View>
                </View>

                <View style={{ alignItems: "center" }}>
                    <PrimaryButton onPress={onRollAgain}>Select Again</PrimaryButton>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-between",
    },

    rollContainer: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        marginHorizontal: 20
    },

    text: {
        fontSize: 50,
        color: "white",
    },

    text2: {
        fontSize: 50,
        color: Colors.color2
    }
});

export default RollScreen;
