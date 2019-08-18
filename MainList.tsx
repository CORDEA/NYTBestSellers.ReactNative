import React from 'react';
import {FlatList} from 'react-native';
import {MainListItem} from "./MainListItem";

export class MainList extends React.PureComponent {

    render() {
        return (
            <FlatList
                data={[
                    {key: "a", value: "b"},
                ]}
                renderItem={({item}) =>
                    <MainListItem
                        title={item.key}
                        description={item.value}
                    />
                }/>
        )
    }
}
