export const LocalStorageKeys = {
  FONT_PREFERENCE: 'fontPreference',
}

export const getFontPreference = (): string | null => {
  return localStorage.getItem(LocalStorageKeys.FONT_PREFERENCE);
};

export const setFontPreference = (font: string): void => {
  localStorage.setItem(LocalStorageKeys.FONT_PREFERENCE, font);
};