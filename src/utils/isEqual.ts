/**
 * Плоский объект
 */
type PlainObject<T = unknown> = {
    [k in string]: T;
};

/**
 * Является ли объект плоским
 */
function isPlainObject(value: unknown): value is PlainObject {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Является ли объект массивом
 */
function isArray(value: unknown): value is [] {
    return Array.isArray(value);
}

/**
 * Является ли объект массивом или плоским объектом
 */
function isArrayOrObject(value: unknown): value is [] | PlainObject {
    return isPlainObject(value) || isArray(value);
}

/**
 * Равны ли объекты
 */
function isEqual(lhs: PlainObject, rhs: PlainObject) {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }

    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value as PlainObject, rightValue as PlainObject)) {
                continue;
            }
            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
}

export default isEqual
