const fightInfosEndpoints = {
  base: "/fight-infos",
  byId: (id) => `/fight-infos/${id}`,
  status: (status,id) => `/fight-infos/status/?status=${status}&fight_info_id=${id}`,
  addNewFigth : `/fight-infos/`,
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

const createNewMatchEnpoints = {
  countries : `/filters/countries/`,
  fighters : (country_name)=> `/filters/fighters/${country_name}`,
  years : (wrestler_id)=> `/filters/years/${wrestler_id}`,
}

export { filtersEndpoints, fightInfosEndpoints, createNewMatchEnpoints };
