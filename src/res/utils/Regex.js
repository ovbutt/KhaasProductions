export const Regex = {
  string: "/^[^\\/&]*$/",
  number: "^((+92)|(0092))-{0,1}d{3}-{0,1}d{7}$|^d{11}$|^d{4}-d{7}$",
  email: /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
};
