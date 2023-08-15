// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const tabBtnClassName = isActive ? 'tab-btn active' : 'tab-btn'

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button className={tabBtnClassName} onClick={onClickTab} type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
