import { Text, TextInput, View, StyleSheet } from "react-native";
import DieSelectionButton from "../components/DieSelectionButton";
import Colors from "../colors";

function SelectScreen() {
    const imageD20 = require('../assets/images/D20.png');
    const imageD12 = require('../assets/images/D12.png');
    const imageD10 = require('../assets/images/D10.png');
    const imageD8 = require('../assets/images/D8.png');
    const imageD6 = require('../assets/images/D6.png');
    const imageD4 = require('../assets/images/D4.png');

    return (
        <>
        <View style={styles.mainView}>
            <View style={styles.container}>
                <TextInput />
                <DieSelectionButton numSides={20} count={3} img={imageD20} />
                <DieSelectionButton numSides={12} count={2} img={imageD12} />
                <DieSelectionButton numSides={10} count={0} img={imageD10} />
                <DieSelectionButton numSides={8} count={0} img={imageD8} />
                <DieSelectionButton numSides={6} count={1} img={imageD6}/>
                <DieSelectionButton numSides={4} count={5} img={imageD4} />
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
