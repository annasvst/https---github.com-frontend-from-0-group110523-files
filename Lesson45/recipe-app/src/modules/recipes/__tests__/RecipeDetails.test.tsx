import { RecipeDetails } from '../RecipeDetails';
import { fetchRecipeDetails } from '../RecipeDetails/data-fetching';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, useNavigate, useParams } from 'react-router-dom';
import { mockedRecipe } from '../../../test-utils/mocked-recipe';
import '@testing-library/jest-dom';

jest.mock('../RecipeDetails/data-fetching.tsx', function () {
  return { fetchRecipeDetails: jest.fn() };
});

jest.mock('react-router-dom', function () {
  return {
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
    useNavigate: jest.fn()
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

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
  });

  it('should render recipe data if recipe can be fetch from API', async function () {
    (useParams as jest.Mock).mockReturnValue({
      id: 'abc',
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

  it('should handle go back buttom click correctly', async function () {
    (useParams as jest.Mock).mockReturnValue({
      id: 'abc',
    });

    (fetchRecipeDetails as jest.Mock).mockReturnValue(mockedRecipe);

    // const handleGoBack = jest.fn();
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    await act(async () => {
      render(
        <BrowserRouter>
          <RecipeDetails />
        </BrowserRouter>,
      );
    });

    const goBackButton = screen.getByTestId('go-back-btn');
    expect(goBackButton).toBeInTheDocument();

    fireEvent.click(goBackButton);
    // expect(handleGoBack).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(-1);
  });

});
