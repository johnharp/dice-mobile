import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import SelectScreen from "./screens/SelectScreen";
import Colors from "./colors";

export default function App() {
    return (
        <LinearGradient colors={[Colors.color3, Colors.color2]} style={styles.rootScreen}>
            <SelectScreen />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    }
});
