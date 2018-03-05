export function formatDateTime (value) {
    const date = new Date(value);
    const ISOdate = date.toISOString().split(':').slice(0, 2).join(":");
    return ISOdate; 
}

export function formatDate (value) {
    const date = new Date(value);
    const ISOdate = date.toISOString().split('T')[0];
    return ISOdate; 
}