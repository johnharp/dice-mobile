import { Text, TextInput, View, StyleSheet } from "react-native";
import DieSelectionButton from "../components/DieSelectionButton";
import Colors from "../colors";

function SelectScreen() {
    return (
        <>
        <View style={styles.mainView}>
            <View style={styles.container}>
                <TextInput />
                <Text>Blah Blah</Text>
                <DieSelectionButton numSides={20} count={3} />
                <DieSelectionButton numSides={12} count={2} />
                <DieSelectionButton numSides={10} count={0} />
                <DieSelectionButton numSides={6} count={1} />
                <DieSelectionButton numSides={4} count={5} />
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.color3,
        height: "100%",
        width: "100%"
    },

    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: 40,
        padding: 20
    }
});

export default SelectScreen;
