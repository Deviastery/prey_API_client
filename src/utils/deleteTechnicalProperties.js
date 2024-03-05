export default function deleteTechnicalProperties(obj) {
    for (const prop in obj) {
        if ((prop === 'id') || (prop === '_id')) {
            delete obj[prop]; 
        } else if (typeof obj[prop] === 'object') {
            deleteTechnicalProperties(obj[prop]);
        }
    }
    return obj;
}
