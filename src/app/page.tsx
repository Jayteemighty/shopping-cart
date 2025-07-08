// src/app/page.tsx
import { MenuItemCard } from '@/components/MenuItemCard'
import { CartIcon } from '@/components/CartIcon'

const menuItems = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and basil',
    price: 12.99,
    image: '/pizza.jpg',
    category: 'Pizza',
  },
  {
    id: '2',
    name: 'Chicken Burger',
    description: 'Juicy chicken patty with lettuce and special sauce',
    price: 8.99,
    image: '/burger.jpg',
    category: 'Burgers',
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with Caesar dressing and croutons',
    price: 7.99,
    image: '/salad.jpg',
    category: 'Salads',
  },
  {
    id: '4',
    name: 'Chocolate Brownie',
    description: 'Warm chocolate brownie with vanilla ice cream',
    price: 5.99,
    image: '/brownie.jpg',
    category: 'Desserts',
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Food Delivery</h1>
        <CartIcon />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}