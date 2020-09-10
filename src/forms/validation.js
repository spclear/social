export const required = (message) => {
  return (value) => {
    return !value ? message : undefined;
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
export const isURL = (value) => {

  const urlPattern = new RegExp('^(https?:\\/\\/)?' + 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' + 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' + 
    '(\\#[-a-z\\d_]*)?$', 'i'); 
  
  if (value && !urlPattern.test(value)) {
    return 'Not a valid URL!'
  }
  
  return undefined;
}
