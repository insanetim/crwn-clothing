import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../CategoriesPreview'
import Category from '../Category'
import { fetchCategoriesStart } from 'src/store/categories/actions'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [dispatch])

  return (
    <Routes>
      <Route
        index
        element={<CategoriesPreview />}
      />
      <Route
        path=':category'
        element={<Category />}
      />
    </Routes>
  )
}

export default Shop
