import './index.css'

const ThumbnailItem = props => {
  const {eachImage, onSelectThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage

  const onClickThumbnail = () => {
    onSelectThumbnail(id)
  }
  const inActiveThumbnail = isActive ? '' : 'inactive-thumbnail'

  return (
    <li className={`thumbnail-card ${inActiveThumbnail}`}>
      <button className="button" onClick={onClickThumbnail} type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
