export const required = (value) => (value ? undefined : 'Required');

export const maxLength = (max) => (value) => (value && value.length > max ? console.log('maxLenghtMin') : undefined);
// export const maxLength15 = maxLength(15);

