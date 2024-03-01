export interface ExerciseDocument {
    _id: string;
    user: string;
    exerciseName: string;
    description: string;
    duration: number;
    date: Date;
    intensity: number;
    muscleGroups: string;
  }