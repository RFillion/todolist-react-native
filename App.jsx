import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { s } from './App.style.js';

import { Header } from "./components/Header/Header.jsx";
import { CardTodo } from "./components/CardTodo/CardTodo.jsx";


const TODO_LIST = [
    { id: 1, title: 'Appeler le vétérinaire', isCompleted: true }
];

function Content() {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView edges={["top", "left", "right"]} style={s.app}>
            <View style={s.header}>
                <Header />
            </View>
            <View style={s.body}>
                <CardTodo todo={TODO_LIST[0]} />
            </View>
            <View style={[s.footer, { height: 75 + insets.bottom }]}></View>
        </SafeAreaView>
    );
}

export default function App() {
    return (
        <SafeAreaProvider>
            <Content />
        </SafeAreaProvider>
    );
}
