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

    private headers() {
        let headers = new Headers();
        headers.append("api-key", "");
        return headers
    }

    getLists(list: string): Promise<Response> {
        return fetch(ApiClient.GET_LISTS_PATH, {
            headers: this.headers()
        })
    }

    getListNames(): Promise<Response> {
        return fetch(ApiClient.GET_LIST_NAMES_PATH, {
            headers: this.headers()
        })
    }
}
