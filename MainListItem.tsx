import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
    title: string;
    description: string;
}

export class MainListItem extends React.PureComponent<Props> {

    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
