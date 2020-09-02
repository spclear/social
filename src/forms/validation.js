export const required = (fieldName) => {
  return (value) => {
    return !value ? `Enter your ${fieldName}!` : undefined;
  }
} 

export const maxLength = (maxLength) => {
  return (value) => {
    if (value && value.length > maxLength) {
      return `Max length is ${maxLength} symbols!`;
    }

    return undefined;
  }
}
export const minLength = (minLength) => {
  return (value) => {
    if (value && value.length > 0 && value.length < minLength) {
      return `Min length is ${minLength} symbols!`;
    }

    return undefined;
  }
}
export const emailContains = (value) => {
  if (!value.includes("@")) {
    return `Email must include '@' symbol!`;
  }

  return undefined;
}