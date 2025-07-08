'use client'

import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { MenuItem } from '@/context/CartContext'

export const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...item, quantity: 1 },
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-800">${item.price.toFixed(2)}</span>
          <button
            onClick={addToCart}
            className="text-green-600 hover:text-green-800 transition-colors"
            aria-label={`Add ${item.name} to cart`}
          >
            <PlusCircleIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}