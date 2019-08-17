import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList data={[
                {key: "a", value: "b"},
            ]} renderItem={({item}) =>
                <View style={styles.item}>
                    <Text style={styles.title}>{item.key}</Text>
                    <Text style={styles.description}>{item.value}</Text>
                </View>
            }/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    item: {
        padding: 16,
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
    },
    description: {
        fontSize: 12,
    }
});
