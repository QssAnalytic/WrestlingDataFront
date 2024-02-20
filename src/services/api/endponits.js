const fightInfosEndpoints = {
  base: "/fight-infos",
  byId: (id) => `/fight-infos/${id}`,
  statitics: `/statistics/`,
  changeState: (fight_info_id) => `/fight-infos/state/${fight_info_id}/`,
  addNewFigth: `/fight-infos/`,
  updateFight: (fight_info_id) => `/fight-infos/${fight_info_id}`,
  search: (params) => {
    return `/fight-infos/?${Object.entries(params)
      .map(([key, value]) => (value ? `&${key}=${value}` : null))
      .join("")}`;
  },
  create: "/fight-infos/",
};

const formEndpoints = {
  actions: "/actions/",
  techniques: "/techniques/",
};

const filtersEndpoints = {
  dates: `/filters/dates/`,
  tournaments: (date) => `/filters/tournaments/${date}/`,
  style: (tournamentId) => `/filters/style/${tournamentId}/`,
  weights: (tournamentId, wrestlingType) => `/filters/weights/${tournamentId}/${wrestlingType}/`,
  stages: (weight) => `/filters/stages/${weight}/`,
};

const createNewMatchEnpoints = {
  countries: `/filters/countries/`,
  fighters: (country_name) => `/filters/fighters/${country_name}/`,
  years: (wrestler_id) => `/filters/years/${wrestler_id}/`,
};

const statisticsEndpoints = {
  base: "/statistics/",
  byId: (statistic_id) => `/statistics/${statistic_id}/`,
};
export { filtersEndpoints, fightInfosEndpoints, createNewMatchEnpoints, formEndpoints, statisticsEndpoints };
