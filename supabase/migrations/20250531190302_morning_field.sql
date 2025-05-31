create table meals (
  id uuid default gen_random_uuid() primary key,
  meal_type text not null check (meal_type in ('breakfast', 'lunch', 'dinner', 'snack')),
  meal_name text not null,
  ingredients text[] not null,
  cooking_instructions text not null,
  estimated_macros jsonb not null,
  diet_tags text[] not null,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes for better query performance
create index meals_meal_type_idx on meals (meal_type);
create index meals_diet_tags_idx on meals using gin (diet_tags);
create index meals_meal_name_idx on meals (meal_name);