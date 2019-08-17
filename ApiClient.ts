export class ApiClient {
    private static readonly BASE_URL = "https://api.nytimes.com/"
    private static readonly BASE_PATH = "svc/books/v3"
    private static readonly GET_LISTS_PATH = ApiClient.BASE_URL + ApiClient.BASE_PATH + "/lists.json"
    private static readonly GET_LIST_NAMES_PATH = ApiClient.BASE_URL + ApiClient.BASE_PATH + "/lists/names.json"

    getLists(list: string): Promise<Response> {
        return fetch(ApiClient.GET_LISTS_PATH)
    }
}
