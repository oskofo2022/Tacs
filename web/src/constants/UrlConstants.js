const API_DOMAIN = 'localhost:8080';
const API_URL = `http://${API_DOMAIN}/api`;

const LOGIN = `${API_URL}/logins`;

const TOURNAMENTS = `${API_URL}/tournaments`;
const MYSELF_TOURNAMENTS = `${API_URL}/users/myself/tournaments`;
const TOURNAMENTS_USER_INSCRIPTION = `${TOURNAMENTS}/{tournamentId}/inscriptions`;
const PUBLIC_TOURNAMENTS = `${TOURNAMENTS}/public`;
const PUBLIC_TOURNAMENTS_MYSELF_INSCRIPTION = `${PUBLIC_TOURNAMENTS}/{tournamentId}/inscriptions/myself`;

const INSCRIPTIONS = `${API_URL}/users/myself/inscriptions/tournaments`;
const POSITIONS = `${API_URL}/users/myself/inscriptions/tournaments/positions`;

const DICTIONARIES = `${API_URL}/dictionaries`;
const ENGLISH_DICTIONARY = `${DICTIONARIES}/ENGLISH/words/{word}`;
const SPANISH_DICTIONARY = `${DICTIONARIES}/SPANISH/words/{word}`;

export const UrlConstants = Object.freeze({
    API_DOMAIN: API_DOMAIN,
    API_URL: API_URL,
    LOGIN: LOGIN,
    TOURNAMENTS: TOURNAMENTS,
    MYSELF_TOURNAMENTS: MYSELF_TOURNAMENTS,
    TOURNAMENTS_USER_INSCRIPTION: TOURNAMENTS_USER_INSCRIPTION,
    PUBLIC_TOURNAMENTS: PUBLIC_TOURNAMENTS,
    PUBLIC_TOURNAMENTS_MYSELF_INSCRIPTION: PUBLIC_TOURNAMENTS_MYSELF_INSCRIPTION,
    INSCRIPTIONS: INSCRIPTIONS,
    POSITIONS: POSITIONS,
    DICTIONARIES: DICTIONARIES,
    ENGLISH_DICTIONARY: ENGLISH_DICTIONARY,
    SPANISH_DICTIONARY: SPANISH_DICTIONARY,
});
