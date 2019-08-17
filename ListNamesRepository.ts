import {ApiClient} from "./ApiClient";
import {ListNamesResponse} from "./response/ListNamesResponse";

class ListNamesRepository {
    private client = new ApiClient();

    getListNames(): Promise<ListNamesResponse> {
        return this.client.getListNames()
            .then(response => response.json())
    }
}
