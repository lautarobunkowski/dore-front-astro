export type Categories = {
    data: Categorie[];
    meta: Meta;
}

export type Categorie = {
    id:         number;
    documentId: string;
    nombre:     string;
    slug:       string;
    imagen:     Imagen;
    items:       Item[];
}

export type Imagen = {
    id:         number;
    documentId: string;
    url:        string;
}

export type Item = {
    id:          number;
    documentId:  string;
    nombre:      string;
    slug:        string;
    descripcion: null;
    precio:      number;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    locale:      null;
}


export type Meta = {
    pagination: Pagination;
}

export type Pagination = {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
