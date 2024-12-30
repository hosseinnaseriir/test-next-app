import { render, screen } from '@testing-library/react';
import { Card } from './Card'; // Adjust import path
import { describe, expect, test, vitest } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Card', () => {
  const mockProps = {
    img: 'test-image.jpg',
    badgecontent: 'NEW',
    header: 'Test Header',
    subheader: 'Test Subheader',
    description: 'Test Description',
    buttontext: 'Click Me',
    buttonAction: vitest.fn(),
  };

  test('renders Card with all provided elements', () => {
    render(<Card {...mockProps} />);

    expect(screen.getByText('NEW')).toBeInTheDocument(); // Badge
    expect(screen.getByText('Test Header')).toBeInTheDocument(); // Heading
    expect(screen.getByText('Test Subheader')).toBeInTheDocument(); // Subheading
    expect(screen.getByText('Test Description')).toBeInTheDocument(); // Description
    expect(screen.getByText('Click Me')).toBeInTheDocument(); // Button
  });

  test('button action is called on click', () => {
    render(<Card {...mockProps} />);
    screen.getByText('Click Me').click();
    expect(mockProps.buttonAction).toHaveBeenCalled();
  });
});