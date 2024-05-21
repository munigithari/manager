// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-items">
      <p className="title">{title}</p>
      <p className="title">Rs {amount}</p>
      <p className="title">{type}</p>
      <div className="delete-container">
        <button
          type="button"
          className="button1"
          data-testid="delete"
          onClick={onDeleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="image1"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
