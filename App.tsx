import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {MainList} from "./MainList";

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <MainList/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});
