import css from './ContactList.module.css';
import { RiContactsFill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";

export default function ContactList({ contacts, onDeleteContact }) {

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactBox} key={id}>
          <div className={css.contact}>
            <div className={css.contactInfo}>
              <RiContactsFill />
              <p className={css.name}>{name}</p>
            </div>
            <div className={css.contactInfo}>
              <MdPhone />
              <p>{number}</p>
            </div>
          </div>
          <button
            className={css.delbtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
