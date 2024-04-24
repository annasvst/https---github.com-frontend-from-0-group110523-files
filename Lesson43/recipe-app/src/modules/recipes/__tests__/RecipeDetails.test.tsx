import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, useParams } from "react-router-dom";
import { RecipeDetails, fetchRecipeDetails } from "../RecipeDetails";
import { mockedRecipe } from "../../../test-utils/mocked-recipe";

jest.mock('../RecipeDetails', function () {
	return { fetchRecipeDetails: jest.fn()};
});

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useParams: jest.fn(),
// }));

describe('<RecipeDetails />', function () {
  // Test that no recipe found is diplayed when no data is fetched

  // Test that recipe data is displated if the recipe data is fetched correctly
  it('should render correctly', function () {
    render(
      <BrowserRouter>
          <RecipeDetails />
      </BrowserRouter>
    );

    expect(screen.getByTestId('meal-not-found')).toBeInTheDocument();
  });

  it('should display recipe data when fetched successfully', function () {
    (fetchRecipeDetails as jest.Mock ).mockReturnValue(mockedRecipe);
    // (useParams as jest.Mock).mockReturnValue({id: "52893" });

    render(
      <MemoryRouter initialEntries={["/recipes/52893"]}>
        <RecipeDetails />
      </MemoryRouter>
    );

    expect(fetchRecipeDetails).toHaveBeenCalledTimes(1);
  });
});