import { createContent } from "./appContent.js";
import { createHeader } from "./appHeader.js";

export const directionOfwWind = (degree) => {
    if (degree>337.5) { return 'northern' };
    if (degree>292.5) { return 'north-west' };
    if (degree>247.5) { return 'northwest' };
    if (degree>202.5) { return 'south west' };
    if (degree>157.5) { return 'southern' };
    if (degree>122.5) { return 'sout-east' };
    if (degree>67.5) { return 'eastern' };
    if (degree>22.5) { return 'north east' }
    return 'northern';
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const cToF = (celsius) => {
    return celsius * 9 / 5 + 32;
}

export const fToC = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

export const resetWeatherContent = (city, weather) => {
    localStorage.setItem('city', JSON.stringify(city));
    document.body.innerHTML = '';
    const header = createHeader(city);
    const content = createContent(weather);
    document.body.append(header, content);
}