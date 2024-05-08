import { RecipeList2 } from '../RecipeList-2';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('<RecipeList2>', function () {
  it('shoult render component correctly', () => {
    render(
      <RecipeList2 />
    );

    const list = screen.getByTestId('recipe-list');
    expect(list).toHaveTextContent('Recipe list');
  });
});