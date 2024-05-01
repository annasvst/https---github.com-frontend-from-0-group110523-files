import { RecipeDetails } from '../RecipeDetails';
import { fetchRecipeDetails } from '../RecipeDetails/data-fetching';
import { act, render, screen } from '@testing-library/react';
import { BrowserRouter, useParams } from 'react-router-dom';
import { mockedRecipe } from '../../../test-utils/mocked-recipe';
import '@testing-library/jest-dom';

jest.mock('../RecipeDetails/data-fetching.tsx', function () {
  return { fetchRecipeDetails: jest.fn() };
});

jest.mock('react-router-dom', function () {
  return {
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
  };
});

describe('<RecipeDetails /> component', function () {
  it('should render the loading text', function () {
    (useParams as jest.Mock).mockReturnValue({
      id: 'test-id',
    });

    (fetchRecipeDetails as jest.Mock).mockReturnValue(null);

    render(
      <BrowserRouter>
        <RecipeDetails />
      </BrowserRouter>,
    );
    const recipeTitle = screen.queryByTestId('meal-title');
    expect(recipeTitle).not.toBeInTheDocument();

    expect(screen.queryByTestId('loading-indicator')).toBeInTheDocument();
  });

  it('should render recipe data if recipe can be fetch from API', async function () {
    (useParams as jest.Mock).mockReturnValue({
      id: mockedRecipe.idMeal,
    });

    (fetchRecipeDetails as jest.Mock).mockReturnValue(mockedRecipe);

    await act(async () => {
      render(
        <BrowserRouter>
          <RecipeDetails />
        </BrowserRouter>,
      );
    });
    const recipeTitle = screen.getByTestId('meal-title');
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle).toHaveTextContent(mockedRecipe.strMeal);

    expect(screen.queryByTestId('loading-indicator')).not.toBeInTheDocument();
  });
});
