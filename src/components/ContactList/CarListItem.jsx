import { useContacts } from "hooks";
import { ContactListItem } from "components/ContactList/CarList";
import Css from "./CarList.module.css";

export const ContactList = () =>
{
    const contacts = useContacts();

    return (
        <div className={Css.contact}>
            <ul className={Css.contact__list}>
                {contacts.map(contact =>
                {
                    return (
                        <li className={Css.contact__item} key={contact.id}>
                            <ContactListItem model={contact}/>
                        </li>
                    )
                })}
            </ul>
        </div>        
    );
};