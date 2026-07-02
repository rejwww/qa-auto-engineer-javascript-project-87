// const stringify = (v) => {
//   if (v === null) return 'null';
//   if (typeof v === 'boolean') return String(v);
//   if (typeof v === 'number') return v;
//   return String(v);
// };

 const stylish = (comparisonResult) => {
  const result = [];
  result.push('{');

  for (const i of comparisonResult) {
    if (i.type === 'add') {
      result.push(` + ${i.key}: ${i.value}`);
    } else if (i.type === 'del') {
      result.push(` - ${i.key}: ${i.value}`);
    } else if (i.type === 'pass') {
      result.push(`   ${i.key}: ${i.value}`);
    }else if (i.type === 'update') {
      result.push(` - ${i.key}: ${i.oldValue}`);
      result.push(` + ${i.key}: ${i.newValue}`);
  }
}

  result.push('}');
  return result.join('\n');
}

export default stylish