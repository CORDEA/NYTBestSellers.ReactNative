import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {MainPicker} from "./MainPicker";
import {MainList} from "./MainList";

export class MainComponent extends React.PureComponent {
    state: { data: string } = {data: null};

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <MainPicker onValueChange={value => {
                    this.setState(state => {
                        return {data: value}
                    })
                }}/>
                <MainList value={this.state.data}/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});
