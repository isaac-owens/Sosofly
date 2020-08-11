export const SET_OPTION = "SET_OPTION"

export const setOption = (id, key, value)  => {
  return {
    type: SET_OPTION,
    id, // String Id of jPlaylist to apply option to
    key, // Name of option you want to set
    value, // Value to set the option to
  };
};

