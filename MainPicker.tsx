import React from 'react';
import {Picker} from 'react-native';
import {ListNamesRepository} from "./ListNamesRepository";

interface Props {
    onValueChange: (value: string) => void;
}

export class MainPicker extends React.PureComponent<Props> {
    state: { data: string[], selectedData: string } = {data: [], selectedData: null};

    componentDidMount(): void {
        ListNamesRepository.getInstance()
            .getListNames()
            .then(response => response.results.map(result => result.list_name_encoded))
            .then(names => {
                this.setState(state => {
                    return {data: names, selectedData: names[0]}
                })
            })
    }

    render() {
        let items = this.state.data.map(item => <Picker.Item key={item} label={item} value={item}/>);
        return (
            <Picker
                selectedValue={this.state.selectedData}
                onValueChange={(value, position) => {
                    this.props.onValueChange(value);
                    this.setState({selectedData: value})
                }}
            >{items}</Picker>
        )
    }
}
