const membersRounder = (membersCount) => {
  if (membersCount < 1000) {
    return membersCount;
  }
  const numberOfDigits = `${membersCount}`.length - 1;
  const rounded = Math.round(membersCount / Math.pow(10, numberOfDigits));

  return `${rounded}K`;
};

export default membersRounder;
