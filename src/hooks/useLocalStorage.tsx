import { useState, useEffect } from 'react';

export function useLocalStorage(key: string, initialValue: any) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.log(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}
