export function debounce<Func extends unknown[]>(func: (...args: Func) => void, delay: number) {
    let timeoutTimer: ReturnType<typeof setTimeout>;
    
    return (...args: Func) => {
        clearTimeout(timeoutTimer);

        timeoutTimer= setTimeout(() => {
            func(...args);
        }, delay);
    };
};