import {ListsResponse} from "./response/ListsResponse";
import {ApiClient} from "./ApiClient";

class ListsRepository {
    private client = new ApiClient()

    getLists(list: string): Promise<ListsResponse> {
        return this.client.getLists(list)
            .then(response => response.json())
    }
}
