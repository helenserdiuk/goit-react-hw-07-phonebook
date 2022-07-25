import PropTypes from 'prop-types';
import style from './contactForm.module.css';
import { useState } from 'react';

function ContactForm({ onSubmit }) {
  const [state, setState] = useState({ name: '', phone: '' });
  const { name, phone } = state;

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ name: '', phone: '' });
  };

  return (
    <div className={style.formWrapper}>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label className={style.label}>
          Phone
          <input
            className={style.input}
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
        </label>
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
