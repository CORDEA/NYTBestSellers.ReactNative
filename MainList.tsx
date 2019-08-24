import React from 'react';
import {FlatList} from 'react-native';
import {MainListItem} from "./MainListItem";
import {ListsRepository} from "./ListsRepository";
import {MainListItemModel} from "./MainListItemModel";

interface Props {
    value: string;
}

export class MainList extends React.PureComponent<Props> {
    state: { data: MainListItemModel[] } = {data: []};

    private refresh() {
        if (!this.props.value) {
            return
        }
        ListsRepository.getInstance()
            .getLists(this.props.value)
            .then(response => MainListItemModel.from(response))
            .then(models => {
                this.setState(state => {
                    return {data: models}
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        this.refresh();
        return (
            <FlatList
                data={this.state.data}
                extraData={this.state}
                keyExtractor={(item, index) => item.position.toString()}
                renderItem={({item}) =>
                    <MainListItem
                        title={item.title}
                        description={item.description}
                    />
                }/>
        )
    }
}
