import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RecipeList } from '../RecipeList';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mockedStore } from '../../../test-utils/mocked-redux-store';
import { mockedRecipe } from '../../../test-utils/mocked-recipe';

describe('<RecipeList />', function () {
  it('should render correctly', async function () {
    render(
      <BrowserRouter>
        <Provider store={mockedStore([mockedRecipe])}>
          <RecipeList />
        </Provider>
      </BrowserRouter>,
    );

    const recipeCard = screen.getByTestId('recipe-card');
    expect(recipeCard).toBeInTheDocument();
  });
});
