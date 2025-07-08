'use client'

import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export const CartIcon = () => {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)

  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  )
}