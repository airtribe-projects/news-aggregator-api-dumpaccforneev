const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  getNews,
  markArticleRead,
  markArticleFavorite,
  getReadArticles,
  getFavoriteArticles,
} = require("../controllers/newsController");
const router = express.Router();

router.get("/", protect, getNews);
router.post("/:id/read", protect, markArticleRead);
router.post("/:id/favorite", protect, markArticleFavorite);
router.get("/read", protect, getReadArticles);
router.get("/favorites", protect, getFavoriteArticles);

module.exports = router;
