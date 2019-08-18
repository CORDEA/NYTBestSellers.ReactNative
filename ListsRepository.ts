import {ListsResponse} from "./response/ListsResponse";
import {ApiClient} from "./ApiClient";

export class ListsRepository {
    private static instance: ListsRepository;
    private client = ApiClient.getInstance();

    private constructor() {
    }

    static getInstance(): ListsRepository {
        if (!this.instance) {
            this.instance = new ListsRepository()
        }
        return this.instance
    }

    getLists(list: string): Promise<ListsResponse> {
        return this.client.getLists(list)
            .then(response => response.json())
    }
}
