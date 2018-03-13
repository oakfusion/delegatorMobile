export function formatDateTime (value) {
    const formattedDate = value.replace(' ', 'T');
    return formattedDate; 
}

export function formatDate (value) {
    const formattedDate = value.split(' ')[0];
    return formattedDate; 
}