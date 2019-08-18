import React from 'react';
import {Picker} from 'react-native';
import {ListNamesRepository} from "./ListNamesRepository";

export class MainPicker extends React.PureComponent {
    state: { data: string[] } = {data: []};

    componentDidMount(): void {
        ListNamesRepository.getInstance()
            .getListNames()
            .then(response => response.results.map(result => result.list_name_encoded))
            .then(names => {
                this.setState(state => {
                    return {data: names}
                })
            })
    }

    render() {
        let items = this.state.data.map(item => <Picker.Item label={item} value={item}/>);
        return (
            <Picker>{items}</Picker>
        )
    }
}
