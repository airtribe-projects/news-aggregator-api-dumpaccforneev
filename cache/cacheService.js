const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 600 });

exports.saveToCache = (userId, data) => {
  cache.set(userId, data);
};

exports.getFromCache = (userId) => {
  return cache.get(userId);
};
