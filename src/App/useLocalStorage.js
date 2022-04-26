import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [isStorageSynchronized, setIsStorageSynchronized] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
                setIsStorageSynchronized(true);
            } catch (error) {
                setError(error);
            }
        }, 3000);
    }, [isStorageSynchronized]);

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    const synchronizedStorage = () => {
        setLoading(true);
        setIsStorageSynchronized(false);
    };

    return {
        item,
        saveItem,
        loading,
        error,
        synchronizedStorage,
    };
}

export { useLocalStorage };