const aggregateCategoriesData = (data) => {
  const aggregatedData = {};
  Object.keys(data).forEach(function (key) {
    aggregatedData[key] = data[key].value;
  });

  return aggregatedData;
};

export default aggregateCategoriesData;
