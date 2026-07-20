export const getFormattedDate = (arg: string | Date) => {
    const date = typeof arg === "string" ? new Date(arg) : arg;
    return `${date.getDate()} / ${date.getMonth() + 1}`;
};

export const getFormattedFullDate = (arg: string | Date) => {
    const date = typeof arg === "string" ? new Date(arg) : arg;
    return `${format(date.getDate())} / ${format(
        date.getMonth() + 1
    )} / ${format(date.getFullYear())}`
}

export const getFormattedTime = (arg: string | Date) => {
    const date = typeof arg === "string" ? new Date(arg) : arg;
    return `${format(date.getHours())} : ${format(date.getMinutes())}`;
};

const format = (num: number) => num.toString().padStart(2, "0");