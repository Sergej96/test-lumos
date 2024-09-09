export const classnames = (
    ...classes: (string | Record<string, boolean>)[]
) => {
    return classes
        .map((c) => {
            if (typeof c === 'string') {
                return c;
            }
            return Object.entries(c)
                .filter(([, v]) => v)
                .map(([k]) => k)
                .join(' ');
        })
        .filter((c) => c)
        .join(' ');
};
