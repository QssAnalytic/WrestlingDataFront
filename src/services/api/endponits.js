const fightInfosEndpoints = {
  base: "/fight-infos",
  byId: (id) => `/fight-infos/${id}`,
  status: (id) => `/fight-infos/status/${id}`,
  check: (id) => `/fight-infos/check/${id}`,
  search: (params) => {
    return `/fight-infos/?${Object.entries(params)
      .map(([key, value]) => (value ? `&${key}=${value}` : null))
      .join("")}`;
  },
  create: "/fight-infos/",
};

const filtersEndpoints = {
  dates: `/filters/dates/`,
  tournaments: (date) => `/filters/tournaments/${date}/`,
  style: (tournamentId) => `/filters/style/${tournamentId}/`,
  weights: (tournamentId, wrestlingType) =>
    `/filters/weights/${tournamentId}/${wrestlingType}/`,
  stages: (weight) => `/filters/stages/${weight}/`,
};

export { filtersEndpoints, fightInfosEndpoints };
