import { useContacts } from "hooks";
import { CarListItem } from "components/CarList/CarList";
import Css from "./CarList.module.css";

export const CarList = () =>
{
    const contacts = useContacts();

    return (
        <div className={Css.contact}>
            <ul className={Css.contact__list}>
                {contacts.map(contact =>
                {
                    return (
                        <li className={Css.contact__item} key={contact.id}>
                            <CarListItem model={contact}/>
                        </li>
                    )
                })}
            </ul>
        </div>        
    );
};