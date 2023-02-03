import './index.css'

const BannerCardItem = props => {
  const {userDetails} = props
  const {headerText, description, className} = userDetails
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button class="more-btn" type="button">
          {' '}
          show more
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
