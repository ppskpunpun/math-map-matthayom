export const API_BASE_URL = (import.meta.env.DEV)
  ? 'http://localhost:5050'
  : 'https://math-map-matthayom.onrender.com'; // for testing
export const SIGNUP_URL = `${API_BASE_URL}/auth/signup`;
export const LOGIN_URL = `${API_BASE_URL}/auth/login`;
export const LOGOUT_URL = `${API_BASE_URL}/auth/logout`;
export const VERIFY_URL = `${API_BASE_URL}/auth/verify`;
export const PROFILE_URL = `${API_BASE_URL}/auth/profile`;
export const PRACTICE_QUESTION_ROOT = `${API_BASE_URL}/practiceQuestion`;
export const CREATE_PRACTICE_QUESTION_URL = `${API_BASE_URL}/practiceQuestion/create`;
export const GET_ALL_PRACTICE_QUESTION_URL = `${API_BASE_URL}/practiceQuestion/all`;
export const SUBMIT_PRACTICE_QUESTION_URL = `${API_BASE_URL}/practiceQuestion/submit`;
export const GET_ALL_SUBMIT_PRACTICE_QUESTION_URL = `${API_BASE_URL}/practiceQuestion/get-all-submit`;
export const GET_BEST_SUBMIT_PRACTICE_QUESTION_URL = `${API_BASE_URL}/practiceQuestion/get-best-submit`;
export const GET_TOP_USERS = `${API_BASE_URL}/practiceQuestion/top-users`;
export const DELETE_PRACTICE_QUESTION_URL = `${API_BASE_URL}/practiceQuestion/delete`;
