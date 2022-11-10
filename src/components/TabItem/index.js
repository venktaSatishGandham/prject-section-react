import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabButtonInApp, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTabButton = () => {
    onClickTabButtonInApp(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
