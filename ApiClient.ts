import {API_KEY} from '@env';

export class ApiClient {
    private static readonly BASE_URL = "https://api.nytimes.com/";
    private static readonly BASE_PATH = "svc/books/v3";
    private static readonly GET_LISTS_PATH = ApiClient.BASE_URL + ApiClient.BASE_PATH + "/lists.json";
    private static readonly GET_LIST_NAMES_PATH = ApiClient.BASE_URL + ApiClient.BASE_PATH + "/lists/names.json";

    private static instance: ApiClient;

    private constructor() {
    }

    static getInstance(): ApiClient {
        if (!this.instance) {
            this.instance = new ApiClient()
        }
        return this.instance
    }

    private buildUrl(path: string, query: Map<string, string>): string {
        let url = path + "?api-key=" + API_KEY;
        query.forEach((value, key) => {
            url += "&" + key + "=" + value
        });
        return url;
    }

    getLists(list: string): Promise<Response> {
        let query = new Map();
        query.set("list", list);
        return fetch(this.buildUrl(ApiClient.GET_LISTS_PATH, query))
    }

    getListNames(): Promise<Response> {
        return fetch(this.buildUrl(ApiClient.GET_LIST_NAMES_PATH, new Map<string, string>()))
    }
}
