import { render } from '@testing-library/react';
import ProductsModule from './ProductsModule';
import { describe, test, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { CardContents } from './ProductsModule.types';


vi.mock('@/data/cards.json', () => ({
  default: [
    {
      "backgroundMedia": { "src": "mock-image.jpg" },
      "title": "Mock Title",
      "Content": "Mock content here",
      "action": { "data": { "text": "Mock Action" } },
      "type": "MOCK_TYPE",
    },
  ] as CardContents,
}));

describe('ProductsModule', () => {
  test('renders Swiper with cards', async () => {
    render(<ProductsModule />);
  });
});