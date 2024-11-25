import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CategoryList } from '../CategoryList';
import { ServiceType } from '@/type/serviceType';
import { getCategories } from '@/api/ServicesApi';
import { vi, Mock } from 'vitest';

const mockCategories: ServiceType[] = vi.hoisted(() => [
  { id: '1', name: 'Plumbing', color: 'blue', icon: 'bucket' },
  { id: '2', name: 'Electrical', color: 'yellow', icon: 'brush' },
]);

//Mock usedNavigate
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: vi.fn(),
}));

vi.mock('@/api/ServicesApi', () => ({
  getCategories: vi.fn().mockResolvedValue(mockCategories),
}));

describe('CategoryList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mock('@/api/ServicesApi', () => ({
      getCategories: vi.fn().mockResolvedValue(mockCategories),
    }));
  });

  it('renders without crashing', async () => {
    render(<CategoryList />);
    const categoryItems = await screen.findAllByRole('gridcell');
    expect(categoryItems).toHaveLength(mockCategories.length);
  });

  it('displays the correct category names', async () => {
    render(<CategoryList />);
    for (let category of mockCategories) {
      expect(await screen.findByText(category.name)).toBeInTheDocument();
    }
  });
});
