export const getFormattedDate = (arg: string) => {
    const date = new Date(arg);
    return `${date.getDate()} / ${date.getMonth() + 1}`;
};

export const getFormattedTime = (arg: string) => {
    const date = new Date(arg);
    return `${date.getHours()} : ${date.getMinutes()}`;
};
