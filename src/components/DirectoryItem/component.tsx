import { useNavigate } from 'react-router-dom'

import { DirectoryCategory } from '../Directory/component'
import { DirectoryItemContainer, BackgroundImage, Body } from './styled'

type DirectoryItemProps = {
  category: DirectoryCategory
}

const DirectoryItem: React.FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage $imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
