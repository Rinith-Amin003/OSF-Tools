export const appStore = state => state.appRepository;
export const credentials = state => appStore(state).credentials
export const getAppUrl = state => credentials(state)?.appUrl;
export const getAppKey = state => credentials(state)?.appKey;
export const getAccessToken = state => credentials(state)?.accessToken;