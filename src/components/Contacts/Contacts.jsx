import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

import style from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={style.contact_book}>
      <div>
        <ContactForm />
      </div>
      <div>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};


export default Contacts;
