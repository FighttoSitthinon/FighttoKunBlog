export class Post {
    id: string;
    name: string;
    description: string;
    short_description: string;
    category: string[];
    url: string;
    isActived: boolean;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
};

export class PostItem {
    id: string;
    name: string;
    short_description: string;
    category: string[];
    url: string;
    createdDate: Date;
};