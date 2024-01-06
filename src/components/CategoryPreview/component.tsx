import { Link } from 'react-router-dom'

import ProductCard from '../ProductCard'
import { CategoryItem } from 'src/store/categories/types'
import { CategoryPreviewContainer, Title, Preview } from './styled'

type CategoryPreviewProps = {
  title: string
  products: CategoryItem[]
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({
  title,
  products,
}) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link to={title}>{title.toUpperCase()}</Link>
      </Title>
      <Preview>
        {products.slice(0, 4).map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
