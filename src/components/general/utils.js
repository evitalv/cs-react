function mergeFields(product, custom) {
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

  mergedArray.sort((a, b) => a.orderNumber - b.orderNumber);
  return mergedArray;
}
export {mergeFields};
