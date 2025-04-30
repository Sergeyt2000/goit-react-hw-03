import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactBox} key={id}>
          <div className={css.contact}>
            <p>{name}</p>
            <p>{number}</p>
          </div>
          <button className={css.delbtn} type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
