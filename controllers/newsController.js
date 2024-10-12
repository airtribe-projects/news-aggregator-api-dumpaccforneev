const axios = require("axios");
const cacheService = require("../cache/cacheService");

exports.getNews = async (req, res, next) => {
  try {
    const { categories, languages } = req.user.preferences;
    const cachedNews = cacheService.getFromCache(req.user._id);

    if (cachedNews) {
      return res.json(cachedNews);
    }

    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        category: categories.join(","),
        language: languages.join(","),
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    cacheService.saveToCache(req.user._id, response.data.articles);
    res.json(response.data.articles);
  } catch (error) {
    next(error);
  }
};

exports.markArticleRead = async (req, res, next) => {
  const { id } = req.params;

  try {
    req.user.readArticles.push(id);
    await req.user.save();
    res.json({ message: "Article marked as read" });
  } catch (error) {
    next(error);
  }
};

exports.markArticleFavorite = async (req, res, next) => {
  const { id } = req.params;

  try {
    req.user.favoriteArticles.push(id);
    await req.user.save();
    res.json({ message: "Article marked as favorite" });
  } catch (error) {
    next(error);
  }
};

exports.getReadArticles = async (req, res, next) => {
  try {
    res.json(req.user.readArticles);
  } catch (error) {
    next(error);
  }
};

exports.getFavoriteArticles = async (req, res, next) => {
  try {
    res.json(req.user.favoriteArticles);
  } catch (error) {
    next(error);
  }
};
