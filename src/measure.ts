export function measure(callback: Function): number {
    const start = new Date().getTime();

    callback();

    const end = new Date().getTime();

    return end - start;
}