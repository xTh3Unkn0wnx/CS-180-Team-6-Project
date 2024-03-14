export interface MealDocument {
    _id: string;
    user: string;
    mealName: string;
    description: string;
    calories: number;
    date: Date;
    type: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Meal';
    urlImage: string;
  }
  