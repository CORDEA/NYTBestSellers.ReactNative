import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {MainList} from "./MainList";
import {MainPicker} from "./MainPicker";

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <MainPicker/>
            <MainList/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});
