const plain = (comparisonResult) => {
  const result = [];

  for (const i of comparisonResult) {
    if (i.type === 'add') {
      result.push(`Property '${i.key}' was added with value: ${i.value}`);
    } else if (i.type === 'del') {
      result.push(`Property '${i.key}' was removed`);
    } else if (i.type === 'pass') {
      continue;
    } else if (i.type === 'update') {
      result.push(
        `Property '${i.key}' was updated. From ${i.oldValue} to ${i.newValue}`
      );
    }
  }

  return result.join('\n');
}

export default plain