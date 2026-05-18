const categories = [
  "全部",
  "情侣互动",
  "搞笑礼物",
  "奇怪但有用",
  "适合拍视频",
  "可做自有品牌参考",
];

const products = [
  {
    id: "sync-mug",
    name: "心跳同步变色杯",
    category: "情侣互动",
    imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80",
    highlight: "两只杯子靠近后显现隐藏图案，适合做“异地也能碰杯”的剧情。",
    sourceName: "灵感搜索",
    sourceUrl: "https://www.google.com/search?q=couple+color+changing+mug+gift",
    tags: ["异地恋", "仪式感", "开箱"],
  },
  {
    id: "decision-dice",
    name: "今晚谁洗碗决策骰子",
    category: "搞笑礼物",
    imageUrl: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=900&q=80",
    highlight: "把家务、约会、惩罚都写进骰子，天然适合情侣日常短剧。",
    sourceName: "灵感搜索",
    sourceUrl: "https://www.google.com/search?q=funny+couple+decision+dice+gift",
    tags: ["家务梗", "整蛊", "低成本"],
  },
  {
    id: "tiny-projector",
    name: "床头迷你星空投影器",
    category: "奇怪但有用",
    imageUrl: "https://images.unsplash.com/photo-1532978379173-523e16f371f4?auto=format&fit=crop&w=900&q=80",
    highlight: "小体积但氛围感强，可拍“出租屋约会改造前后对比”。",
    sourceName: "灵感搜索",
    sourceUrl: "https://www.google.com/search?q=mini+star+projector+couple+room",
    tags: ["氛围感", "租房", "夜拍"],
  },
  {
    id: "double-hoodie",
    name: "双人连体懒人毯",
    category: "适合拍视频",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    highlight: "一件毯子两个人穿，走路、拿外卖、吵架和解都有画面冲突。",
    sourceName: "灵感搜索",
    sourceUrl: "https://www.google.com/search?q=two+person+wearable+blanket+couple",
    tags: ["反差感", "冬季", "剧情"],
  },
  {
    id: "couple-card-game",
    name: "情侣真心话任务卡",
    category: "情侣互动",
    imageUrl: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=900&q=80",
    highlight: "卡牌内容能持续扩展，既能做产品，也能做账号互动栏目。",
    sourceName: "灵感搜索",
    sourceUrl: "https://www.google.com/search?q=couple+conversation+card+game",
    tags: ["内容产品", "直播", "复购"],
  },
  {
    id: "matching-socks",
    name: "左右脚互补情侣袜",
    category: "可做自有品牌参考",
    imageUrl: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=80",
    highlight: "单只看很普通，凑在一起才完整，适合做系列化图案和节日礼盒。",
    sourceName: "灵感搜索",
    sourceUrl: "https://www.google.com/search?q=matching+couple+socks+funny+gift",
    tags: ["礼盒", "图案IP", "轻库存"],
  },
  {
    id: "phone-prison",
    name: "约会手机收纳监狱",
    category: "搞笑礼物",
    imageUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80",
    highlight: "把手机锁起来专心约会，冲突点明确，评论区容易站队。",
    sourceName: "灵感搜索",
    sourceUrl: "https://www.google.com/search?q=phone+jail+box+date+night+gift",
    tags: ["约会", "戒手机", "评论互动"],
  },
  {
    id: "split-apron",
    name: "情侣分工围裙套装",
    category: "奇怪但有用",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",
    highlight: "一个写主厨、一个写试吃员，做饭场景自带分工梗。",
    sourceName: "灵感搜索",
    sourceUrl: "https://www.google.com/search?q=funny+couple+apron+set",
    tags: ["厨房", "同居", "可定制"],
  },
  {
    id: "reaction-bell",
    name: "夸夸按钮 / 道歉按钮",
    category: "适合拍视频",
    imageUrl: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=900&q=80",
    highlight: "按一下播放夸夸或道歉语音，适合拍“男朋友求生欲测试”。",
    sourceName: "灵感搜索",
    sourceUrl: "https://www.google.com/search?q=custom+sound+button+funny+couple+gift",
    tags: ["求生欲", "声音梗", "爆款测试"],
  },
  {
    id: "brandable-date-kit",
    name: "随机约会任务盲盒",
    category: "可做自有品牌参考",
    imageUrl: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=80",
    highlight: "把低成本小物、任务卡和拍照道具组合成月度订阅盒。",
    sourceName: "灵感搜索",
    sourceUrl: "https://www.google.com/search?q=date+night+subscription+box+couples",
    tags: ["订阅制", "盲盒", "品牌化"],
  },
];

const state = {
  category: "全部",
  keyword: "",
  favoritesOnly: false,
  favorites: loadJson("coupleIdeas:favorites", []),
  notes: loadJson("coupleIdeas:notes", {}),
};

const productGrid = document.querySelector("#productGrid");
const emptyState = document.querySelector("#emptyState");
const resultText = document.querySelector("#resultText");
const totalCount = document.querySelector("#totalCount");
const favoriteCount = document.querySelector("#favoriteCount");
const categoryFilters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const favoritesOnlyBtn = document.querySelector("#favoritesOnlyBtn");
const template = document.querySelector("#productCardTemplate");

totalCount.textContent = products.length.toString();
renderCategoryFilters();
renderProducts();

searchInput.addEventListener("input", (event) => {
  state.keyword = event.target.value.trim().toLowerCase();
  renderProducts();
});

favoritesOnlyBtn.addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  favoritesOnlyBtn.setAttribute("aria-pressed", String(state.favoritesOnly));
  favoritesOnlyBtn.textContent = state.favoritesOnly ? "查看全部" : "只看收藏";
  renderProducts();
});

function renderCategoryFilters() {
  categoryFilters.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.textContent = category;
    button.setAttribute("aria-pressed", String(category === state.category));
    if (category === state.category) button.classList.add("is-active");
    button.addEventListener("click", () => {
      state.category = category;
      renderCategoryFilters();
      renderProducts();
    });
    categoryFilters.append(button);
  });
}

function renderProducts() {
  const filtered = products.filter((product) => {
    const matchesCategory = state.category === "全部" || product.category === state.category;
    const searchable = [product.name, product.category, product.highlight, product.sourceName, ...product.tags]
      .join(" ")
      .toLowerCase();
    const matchesKeyword = !state.keyword || searchable.includes(state.keyword);
    const matchesFavorite = !state.favoritesOnly || state.favorites.includes(product.id);
    return matchesCategory && matchesKeyword && matchesFavorite;
  });

  productGrid.innerHTML = "";
  filtered.forEach((product) => productGrid.append(createProductCard(product)));
  emptyState.hidden = filtered.length > 0;
  resultText.textContent = `显示 ${filtered.length} / ${products.length} 个灵感`;
  favoriteCount.textContent = state.favorites.length.toString();
}

function createProductCard(product) {
  const card = template.content.firstElementChild.cloneNode(true);
  const image = card.querySelector("img");
  const favoriteBtn = card.querySelector(".favorite-btn");
  const categoryBadge = card.querySelector(".category-badge");
  const sourceLink = card.querySelector(".source-link");
  const title = card.querySelector("h3");
  const highlight = card.querySelector(".highlight");
  const tags = card.querySelector(".tags");
  const textarea = card.querySelector("textarea");

  image.src = product.imageUrl;
  image.alt = product.name;
  categoryBadge.textContent = product.category;
  sourceLink.href = product.sourceUrl;
  sourceLink.textContent = `${product.sourceName} ↗`;
  title.textContent = product.name;
  highlight.textContent = product.highlight;
  textarea.value = state.notes[product.id] || "";
  textarea.addEventListener("input", (event) => {
    state.notes[product.id] = event.target.value;
    saveJson("coupleIdeas:notes", state.notes);
  });

  product.tags.forEach((tag) => {
    const tagNode = document.createElement("span");
    tagNode.textContent = `#${tag}`;
    tags.append(tagNode);
  });

  updateFavoriteButton(favoriteBtn, product.id);
  favoriteBtn.addEventListener("click", () => {
    toggleFavorite(product.id);
    updateFavoriteButton(favoriteBtn, product.id);
    renderProducts();
  });

  return card;
}

function toggleFavorite(productId) {
  if (state.favorites.includes(productId)) {
    state.favorites = state.favorites.filter((id) => id !== productId);
  } else {
    state.favorites = [...state.favorites, productId];
  }
  saveJson("coupleIdeas:favorites", state.favorites);
}

function updateFavoriteButton(button, productId) {
  const isFavorite = state.favorites.includes(productId);
  button.classList.toggle("is-favorite", isFavorite);
  button.textContent = isFavorite ? "♥" : "♡";
  button.setAttribute("aria-label", isFavorite ? "取消收藏产品" : "收藏产品");
}

function loadJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
