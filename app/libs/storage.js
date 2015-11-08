export default {
  get: function (k) {
    try {
      return JSON.parse(localStorage.getItem(k));
    } catch (err) {
      return null;
    }
  },

  set: function (k, v) {
    localStorage.setItem(k, JSON.stringify(v));
  }
};
