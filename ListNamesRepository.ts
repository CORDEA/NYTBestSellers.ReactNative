import {ApiClient} from "./ApiClient";
import {ListNamesResponse} from "./response/ListNamesResponse";

class ListNamesRepository {
    private static instance: ListNamesRepository;
    private client = ApiClient.getInstance();

    private constructor() {
    }

    static getInstance(): ListNamesRepository {
        if (!this.instance) {
            this.instance = new ListNamesRepository()
        }
        return this.instance
    }

    getListNames(): Promise<ListNamesResponse> {
        return this.client.getListNames()
            .then(response => response.json())
    }
}
