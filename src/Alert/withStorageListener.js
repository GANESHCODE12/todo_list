import React from "react";

export default function withStorageListener(WrappedComponent) {
    return function AlertWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        React.useEffect(() => {
            function onChangeStorage(storage) {
                if (storage.key === "TODOS_V1") {
                    setStorageChange(true);
                }
            }
            window.addEventListener("storage", onChangeStorage);

            return () => window.removeEventListener("storage", onChangeStorage);
        }, []);

        const toggle = () => {
            setStorageChange(false);
            props.synchronizedStorage();
        };

        return <WrappedComponent show={storageChange} toggle={toggle} />;
    };
}

export { withStorageListener };