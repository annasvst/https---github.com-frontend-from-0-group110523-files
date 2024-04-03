import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from '../index';

test('<Counter /> should render correctly', function () {
  render(<Counter />);

  const countLabel = screen.getByTestId('count-label');
  const countValue = screen.getByTestId('count-value');
  // If element should(is) not be on the screen, use query....
  //screen.queryAllByTestId(id)

  expect(countValue).toBeInTheDocument();
  expect(countLabel).toBeInTheDocument();

  expect(screen.getByTestId('increment-button')).toBeInTheDocument();
  expect(screen.getByTestId('decrement-button')).toBeInTheDocument();

  expect(countValue).toHaveTextContent('0');
});

describe('<Counter />', function () {
  it('should increment count correctly', function () {
    render(<Counter />);

    const incrementButton = screen.getByTestId('increment-button');
  
    expect(incrementButton).toBeInTheDocument();
    fireEvent.click(incrementButton);
    //fireEvent(screen.getByTestId('increment-button'))
  });

  it('should decrement count correctly', function () {
    render(<Counter />);

    const decrementButton = screen.getByTestId('decrement-button');
  
    expect(decrementButton).toBeInTheDocument();
    fireEvent.click(decrementButton);
    //fireEvent(screen.getByTestId('increment-button'))
  });
});