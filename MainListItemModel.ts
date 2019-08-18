import {ListsResponse} from "./response/ListsResponse";

export class MainListItemModel {
    title: string;
    description: string;
    position: number;

    constructor(title: string, description: string, position: number) {
        this.title = title;
        this.description = description;
        this.position = position;
    }

    static from(response: ListsResponse): MainListItemModel[] {
        return response
            .results
            .map(response => response.book_details[0])
            .filter(response => response != null)
            .map((response, index) => new MainListItemModel(response.title, response.description, index))
    }
}
