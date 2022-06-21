const HOST = window.location.hostname;
const API_DOMAIN = `${HOST}:8080`;
const API_URL = `http://${API_DOMAIN}/api`;

const USERS = `${API_URL}/users`;
const LOGIN = `${API_URL}/logins`;

const TOURNAMENTS = `${API_URL}/tournaments`;
const MYSELF_TOURNAMENTS = `${API_URL}/users/myself/tournaments`;
const TOURNAMENTS_USER_INSCRIPTION = `${TOURNAMENTS}/{tournamentId}/inscriptions`;
const PUBLIC_TOURNAMENTS = `${TOURNAMENTS}/public`;
const PUBLIC_TOURNAMENTS_MYSELF_INSCRIPTION = `${PUBLIC_TOURNAMENTS}/{tournamentId}/inscriptions/myself`;

const USER_MYSELF = `${API_URL}/users/myself`
const USER_GUESS = `${USER_MYSELF}/matches/today`
const INSCRIPTIONS = `${USER_MYSELF}/inscriptions/tournaments`;
const POSITIONS = `${USER_MYSELF}/inscriptions/tournaments/positions`;

const DICTIONARIES = `${API_URL}/dictionaries`;
const ENGLISH_DICTIONARY = `${DICTIONARIES}/ENGLISH/words/{word}`;
const SPANISH_DICTIONARY = `${DICTIONARIES}/SPANISH/words/{word}`;

const HELPER = `${API_URL}/games/{language}/helps`;

export const UrlConstants = Object.freeze({
    USERS:USERS,
    LOGIN: LOGIN,

    TOURNAMENTS: TOURNAMENTS,
    MYSELF_TOURNAMENTS: MYSELF_TOURNAMENTS,
    TOURNAMENTS_USER_INSCRIPTION: TOURNAMENTS_USER_INSCRIPTION,
    PUBLIC_TOURNAMENTS: PUBLIC_TOURNAMENTS,
    PUBLIC_TOURNAMENTS_MYSELF_INSCRIPTION: PUBLIC_TOURNAMENTS_MYSELF_INSCRIPTION,

    USER_GUESS: USER_GUESS,
    INSCRIPTIONS: INSCRIPTIONS,
    POSITIONS: POSITIONS,

    DICTIONARIES: DICTIONARIES,
    ENGLISH_DICTIONARY: ENGLISH_DICTIONARY,
    SPANISH_DICTIONARY: SPANISH_DICTIONARY,

    HELPER: HELPER,
});
