export interface Database {
  public: {
    Tables: {
      meals: {
        Row: {
          id: string;
          meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
          meal_name: string;
          ingredients: string[];
          cooking_instructions: string;
          estimated_macros: {
            kcal: number;
            protein_g: number;
            carb_g: number;
            fat_g: number;
          };
          diet_tags: string[];
          image_url?: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['meals']['Row'], 'id' | 'created_at'>;
      };
    };
  };
}