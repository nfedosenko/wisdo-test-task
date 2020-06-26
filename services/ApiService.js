const apiBasePath = process.env.apiBasePath;

export const getCommunities = () => {
  return fetch(`${apiBasePath}/feed`).then((res) => res.json());
};

export const getCategoryLifeChallenges = (lifeChallengeId) => {
  return fetch(
    `${apiBasePath}/life-challenge?ids[]=${lifeChallengeId}`
  ).then((res) => res.json());
};

export const joinCommunity = (data) => {
  return fetch(`http://dummy.restapiexample.com/api/v1/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
