import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SelectScreen from "./screens/SelectScreen";

export default function App() {
    return (
        <View>
            <SelectScreen />
        </View>
    );
}

const styles = StyleSheet.create({
});
