import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    optionId: transactionTypeOptions[0].optionId,
    titleInput: '',
    amountInput: '',
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({transactionsList: updatedList})
  }

  onSubmitBtn = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state
    const result = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = result

    const newTrasaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTrasaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onClickTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onClickAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  getExpenses = () => {
    const {transactionsList} = this.state

    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state

    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state

    let incomeAmount = 0
    let balanceAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {optionId, titleInput, amountInput, transactionsList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="paragraph">
            Welcome back to your{' '}
            <span className="span-item">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="bottom-container">
          <div className="container4">
            <form className="form-item" onSubmit={this.onSubmitBtn}>
              <h1 className="heading3">Add Transaction</h1>
              <label htmlFor="title" className="title">
                TITLE
              </label>
              <input
                type="text"
                className="text"
                id="title"
                placeholder="TITLE"
                value={titleInput}
                onChange={this.onClickTitle}
              />
              <label htmlFor="amount" className="title">
                AMOUNT
              </label>
              <input
                type="amount"
                className="text"
                id="amonut"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onClickAmount}
              />
              <label htmlFor="select" className="title">
                TYPE
              </label>
              <select
                id="select"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.id} value={eachOption.optionId}>
                    {' '}
                    {eachOption.displayText}{' '}
                  </option>
                ))}
              </select>
              <button type="submit" className="button1">
                Add
              </button>
            </form>
          </div>
          <div className="container5">
            <h1 className="heading3">History</h1>
            <div className="container111">
              <ul className="table">
                <li className="table-headers">
                  <p className="paragraph11">Title</p>
                  <p className="paragraph11">Amount</p>
                  <p className="paragraph11">Type</p>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
