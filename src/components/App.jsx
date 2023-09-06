import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";
import { Layout } from "components/Layout/Layout";
import { CarList } from "components/CarList/CarListItem";
import Css from "./App.module.css";

export let name_text = '';

export const App = () =>
{
    const dispatch = useDispatch();
  
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() =>
    {
        dispatch(fetchContacts());
  
    }, [dispatch]);

    return (
        <Layout>
            {isLoading && !error && <b className={Css.text_error}>Request in progress...</b>}
            <CarList/>
        </Layout>
    );
};