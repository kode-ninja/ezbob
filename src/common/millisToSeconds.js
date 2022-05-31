export const millisToSeconds = (millis, decimals = 2) => {
    return (millis / 1000).toFixed(decimals);
}