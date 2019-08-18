import React from 'react';
import {FlatList} from 'react-native';
import {MainListItem} from "./MainListItem";
import {ListsRepository} from "./ListsRepository";
import {MainListItemModel} from "./MainListItemModel";

export class MainList extends React.PureComponent {
    state: { data: MainListItemModel[] } = {data: []};

    componentDidMount(): void {
        ListsRepository.getInstance()
            .getLists("")
            .then(response => MainListItemModel.from(response))
            .then(models => {
                this.setState(state => {
                    return {data: models}
                })
            })
            .catch(error => console.log(error))
    }

    render() {
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
