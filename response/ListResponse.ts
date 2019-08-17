import {ListIsbnResponse} from "./ListIsbnResponse";
import {ListBookDetailResponse} from "./ListBookDetailResponse";
import {ListReviewResponse} from "./ListReviewResponse";

export interface ListResponse {
    list_name: string;
    display_name: string;
    bestsellers_date: string;
    published_date: string;
    rank: string;
    rank_last_week: number;
    weeks_on_list: number;
    asterisk: number;
    dagger: number;
    amazon_product_url: string;
    isbns: ListIsbnResponse[];
    book_details: ListBookDetailResponse[];
    reviews: ListReviewResponse[];
}
