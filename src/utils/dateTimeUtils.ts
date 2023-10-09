/**
 * Преобразовать значение в дату
 */
const convertToDate = (date: Date | string) => {
    let _date: Date = new Date();
    if(typeof date === 'string') {
        _date = new Date(date);
    } else {
        _date = date;
    }
    return _date;
}

/**
 * Является ли дата сегодняшним днем
 */
export const isToday = (date: Date | string) => {
    const today = new Date(); 
    const _date = convertToDate(date);
    return _date.getDate() === today.getDate() 
        && _date.getMonth() === today.getMonth()
        && _date.getFullYear() === today.getFullYear();
}

/**
 * Получить форматированное строковое знчение даты
 */
export const getDate = (date: Date | string) => {
    const _date = convertToDate(date);
    const day = _date.getDate().toString().padStart(2, '0');
    const month = (_date.getMonth()+1).toString().padStart(2, '0');
    return `${day}.${month}.${_date.getFullYear()}`;
}

/**
 * Получить форматированное строковое знчение времени
 */
export const getTime = (date: Date | string, withSeconds = false) => {
    const _date = convertToDate(date);
    const hours = _date.getHours().toString().padStart(2, '0');
    const minutes = _date.getMinutes().toString().padStart(2, '0');
    const seconds = _date.getSeconds().toString().padStart(2, '0');
    return withSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
}
