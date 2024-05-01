export async function fetchRecipeDetails(id: string) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const data = await res.json();
  return data?.meals[0] ? data?.meals[0] : null;
}
