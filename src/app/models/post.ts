export class Post {
    id: string;
    name: string;
    cover: string;
    description: string;
    short_description: string;
    categories: string[];
    url: string;
    isActived: boolean;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
};

export class PostItem {
    constructor(id: string, name: string, cover: string, short_description: string, categories: string[], url: string, createdDate: Date) {
        this.id = id;
        this.name = name;
        this.cover = cover;
        this.short_description = short_description;
        this.categories = categories;
        this.url = url;
        this.createdDate = createdDate;
    }
    id: string;
    name: string;
    cover: string;
    short_description: string;
    categories: string[];
    url: string;
    createdDate: Date;
};




