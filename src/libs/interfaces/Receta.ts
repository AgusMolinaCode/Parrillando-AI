export interface Receta {
    id: number;
    title: string;
    category: string;
    description: string;
    photo: string[];
    authorId: number;
    likesCount: number;
  }