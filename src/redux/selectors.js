import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.Advert.items;
export const selectIsLoading = state => state.Advert.isLoading;
export const selectError = state => state.Advert.error;
export const selectFilter = state => state.filters;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) =>
{
    return contacts.filter(({ make }) => make.toLowerCase().includes(filter.toLowerCase()));
});
export const selectVisibleContacts = (contacts) =>
{
    return contacts;
};
export const selectContactsCount = createSelector([selectContacts], contacts =>
{
    return contacts.reduce((acc, contact) =>
    {
        if (contact.completed)
        {
            acc.completed += 1;
        }
        else
        {
            acc.active += 1;
        }
        return acc;
    },
    { active: 0, completed: 0 });
});