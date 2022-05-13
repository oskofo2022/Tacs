import {QueryParams} from "../httpUtils/QueryParams";
import {RequestBuilder} from "../httpUtils/RequestBuilder";
import {UrlConstants} from "../constants/UrlConstants";
import {TournamentsResponse} from "../response/TournamentsResponse";

export class TournamentsRequest {
    getURL = UrlConstants.PUBLIC_TOURNAMENTS;
    request;

    buildRequest = (params) => {
        let rb = RequestBuilder.get(this.getURL);
        this.request = rb.setQueryParams(params)
            .build();
    }

    constructor(params: QueryParams) {
        this.buildRequest(params);
    }

    static from(params: QueryParams) {
        return new TournamentsRequest(params);
    }

    async fetch(){
        return await this.request.fetch();
    }

    async fetchAsJSON(){
        const response = await this.fetch();
        return await response.json();
    }

    async fetchAsPaged(){
        const response = await this.fetchAsJSON();
        return new TournamentsResponse(response);
    }

}