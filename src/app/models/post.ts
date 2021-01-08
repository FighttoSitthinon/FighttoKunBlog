export class Post {
    id: string;
    name: string;
    cover: string;
    description: string;
    short_description: string;
    categories: string[];
    url: string;
    is_actived: boolean;
    created_by: string;
    created_date: Date;
    updated_by: string;
    updated_date: Date;
};

export class PostItem {
    constructor(id: string, name: string, cover: string, short_description: string, categories: string[], url: string, created_date: Date) {
        this.id = id;
        this.name = name;
        this.cover = cover;
        this.short_description = short_description;
        this.categories = categories;
        this.url = url;
        this.created_date = created_date;
    }
    id: string;
    name: string;
    cover: string;
    short_description: string;
    categories: string[];
    url: string;
    created_date: Date;
};




