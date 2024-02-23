import { Component } from 'react';
import styles from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = evt => {
    this.setState({ query: evt.target.value });
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    this.props.onSubmitForm(this.state.query);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.header}>
        <form className={styles.form} onSubmit={this.handleSubmitForm}>
          <label className={styles.label}>
            Car brand
            <select className={styles.brandSelect} name="brand" >
            <option value="">Enter the text</option>
            </select>
          </label>
          <label className={styles.label}>
            Price/1hour<select  className={styles.priceSelect} name="price">
            <option value="">To $</option>
            </select>
          </label>
          <label className={styles.label}>
            Car mileage/km
            <div className={styles.inputContainer}>
            <input className={styles.fromInput} type="number" autoComplete="off" placeholder="From" />
            <input className={styles.toInput}  type="number" autoComplete="off" placeholder="To" />
            </div>
          </label>
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </header>
    );
  }
}
