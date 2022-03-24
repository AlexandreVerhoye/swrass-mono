/**
 * Get item's ID from SWAPI URL (not an unique ID as it is linked to a dataType)
 * @param url Item URL on SWAPI database
 * @returns
 */
export const swapiUrlDeconstructor = (url: string): any => {
  const res = url.slice(0, -1).split('/').pop();
  return res;
};
