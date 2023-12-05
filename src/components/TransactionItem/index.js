// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="tran-text">{title}</p>
      <p className="tran-text">Rs {amount}</p>
      <p className="tran-text">{type}</p>
      <div className="delete-container">
        <button
          className="del-button"
          type="button"
          onClick={onDeleteTransaction}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            alt="delete"
            className="del-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
