import React from 'react';
import {Picker} from 'react-native';

export class MainPicker extends React.PureComponent {

    render() {
        return (
            <Picker>
                <Picker.Item label="label" value="label"/>
            </Picker>
        )
    }
}
