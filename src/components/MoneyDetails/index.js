// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="middle-container">
      <div className="container1">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="image1"
            alt="balance"
          />
        </div>
        <div>
          <p className="paragraph1 pl-2">Your Balance</p>
          <p className="paragraph2" data-testid="balanceAmount">
            Rs {balanceAmount}{' '}
          </p>
        </div>
      </div>
      <div className="container2">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="image1"
            alt="income"
          />
        </div>
        <div>
          <p className="paragraph1">Your Income</p>
          <p className="paragraph2" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="container3">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="image1"
            alt="expenses"
          />
        </div>
        <div>
          <p className="paragraph1">Your Expenses</p>
          <p className="paragraph2" data-testid="expensesAmount">
            Rs {expensesAmount}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
