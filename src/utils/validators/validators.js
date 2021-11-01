export const required = (value) => (value ? undefined : 'Required');

const maxLength = (max) => (value) => {
  return value && value.length > max ? `Must be ${max} characters or less` : undefined
};

export const maxLength5 = maxLength(5);
export const maxLength15 = maxLength(15);


