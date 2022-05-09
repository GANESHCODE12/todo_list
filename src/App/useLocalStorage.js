import React from "react";

function useLocalStorage(itemName, initialValue) {
    //Usando React.reducer
    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
    const {
        error,
        loading,
        isStorageSynchronized,
        item,
    } = state;

    //ACTION CREATORS
    const onError = (error) => dispatch({ 
        type: actionTypes.error, 
        payload: error 
    });
    const onSuccess = (item) => dispatch({ 
        type: actionTypes.success, 
        payload: item 
    });
    const onSave = (item) => dispatch({ 
        type: actionTypes.save, 
        payload: item 
    });
    const onSincronize = () => dispatch({ 
        type: actionTypes.sincronize, 
    });
    

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

                onSuccess(parsedItem);

            } catch (error) {
                dispatch({ type: actionTypes.error, payload: error });
                onError(error);
            }
        }, 3000);
    }, [isStorageSynchronized]);

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            onSave(newItem)
        } catch (error) {
            onError(error);
        }
    };

    const synchronizedStorage = () => {
        onSincronize();
    };

    return {
        item,
        saveItem,
        loading,
        error,
        synchronizedStorage,
    };
}

const initialState = ({ initialValue }) => ({
    error: false,
    loading: true,
    isStorageSynchronized: true,
    item: initialValue,
});

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) =>({
    [actionTypes.error]: {
        ...state,
        error: true,
    },
    [actionTypes.success]: {
        ...state,
        error: false,
        loading: false,
        isStorageSynchronized: true,
        item: payload,
    },
    [actionTypes.save]: {
        ...state,
        item: payload,
    },
    [actionTypes.sincronize]: {
        ...state,
        isStorageSynchronized: false,
        loading: true,
    },
});

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };