export interface RecetaId {
  id: number;
  title: string;
  category: string;
  description: string;
  photo: string[];
  authorId: number;
  likesCount: number;
  ingredients: Ingredient[];
  steps: Step[];
}

export interface Ingredient {
  id: number;
  name: string;
  quantity: string;
  recipeId: number;
}

export interface Step {
  id: number;
  description: string;
  recipeId: number;
}