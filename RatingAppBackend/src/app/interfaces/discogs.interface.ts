export interface Album {
    pagination: Pagination;
    results:    Result[];
}

export interface Pagination {
    page:     number;
    pages:    number;
    per_page: number;
    items:    number;
    urls:     Urls;
}

export interface Urls {
    last: string;
    next: string;
}

export interface Result {
    country:      string;
    year:         string;
    format:       string[];
    label:        string[];
    type:         string;
    genre:        string[];
    style:        string[];
    id:           number;
    barcode:      string[];
    master_id:    number;
    master_url:   string;
    uri:          string;
    catno:        string;
    title:        string;
    thumb:        string;
    cover_image:  string;
    resource_url: string;
    community:    Community;
}

export interface Community {
    want: number;
    have: number;
}
