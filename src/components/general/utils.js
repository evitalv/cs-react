export function mergeFields(product, custom) {
  let mergedArray;
  if (custom.length) {
    const smaller = product.filter(field => {
      for (let cf of custom) {
        if (field.name == cf.name) return false;
      }
      return true;
    });
    mergedArray = [...smaller, ...custom];
  } else {
    mergedArray = product;
  }

  mergedArray.sort((a, b) => a.number - b.number);
  return mergedArray;
}

export function mergeValidationSchemas(target, source, tConfig, sConfig) {
  const tProps = target.properties;
  const sProps = source.properties;
  const mergedProps = Object.assign(tProps, sProps);
  target.properties = mergedProps;
  if (source.hasOwnProperty("required")) {
    target.required = source.required;
  }

  const mergedMessages = Object.assign(
    tConfig.errMessages,
    sConfig.errMessages
  );
  return [target, tConfig];
}
