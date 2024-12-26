import { Text, StatusBar, StyleSheet, View } from "react-native";
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
    const rolls = rollOneDieCountTimes(die.sides, die.count);

    return (
        <View key={"container-" + die.sides} style={styles.rollContainer}>
            <Text key={"D" + die.sides} style={styles.text}>
                D{die.sides}:
            </Text>
            <Text key={"DR" + die.sides} style={styles.text2}>
                {rolls.join(", ")}
            </Text>
        </View>
    );
}

function RollScreen({ dice }) {
    return (
        <>
            <StatusBar />
            <View style={styles.mainView}>
                <Title>Results</Title>
                {dice.filter((d) => d.count > 0).map(makeDieLine)}

                <Title>Total</Title>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "stretch",
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
