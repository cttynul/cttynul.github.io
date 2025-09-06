# FoMN 

FoMN is an RSS feed reader dedicated to the world of cyber security. It aggregates and displays news, articles, and CVE alerts from various sources in a single, clean, and modern interface. 

## Features

* **RSS Feed Aggregation**: Collects articles from various industry sources.
* **"Top Picks"**: Highlights the most relevant articles based on specific keywords like "vulnerability," "RCE," and "zero-day."
* **Category Navigation**: Browse articles by category (e.g., CVEs, News, Community).
* **Real-time Search**: Filters articles in real time as you type.
* **Modal Article Reader**: Open articles in a convenient pop-up for distraction-free reading.
* **Localization**: Supports English and Italian languages.

## Feed and Image Configuration

FoMN is designed to be easily customizable. All configuration for RSS feeds and ``` images is located in the **`config.js`** file.

### 1. RSS Feeds

The `rssFeeds` object defines the categories and news sources. You can add, remove, or modify feeds at any time.

```javascript
// config.js

export const rssFeeds = {
    cve: [{
        name: 'NIST',
        url: 'https://nvd.nist.gov/feeds/xml/cve/misc/nvd-rss.xml'
    }],
    news: [{
        name: 'The Hacker News',
        url: 'https://feeds.feedburner.com/TheHackersNews?format=xml'
    }, {
        name: 'Krebs on Security',
        url: 'https://krebsonsecurity.com/feed/'
    }],
    // Add new categories or feeds here
};
```
* The object's key (e.g., `cve`, `news`) defines the sidebar category.
* Each category contains an array of objects, where each object represents a single feed with a `name` (the name that appears in the sidebar) and a `url`.

### 2. Placeholder Images

The `category` object allows you to associate a placeholder image with a specific category, in case an article doesn't have an image.

```javascript
// config.js

export const categoryPlaceholders = {
    'cve': './nvd.png',
    'community': './reddit.png',
    'default': './noimage.png'
};
```
* Each key corresponds to a category defined in `rssFeeds`.
* The value is the image path.
* The `'default'` key is mandatory and is used if a category doesn't have a specific ``` image.

### 3. "Top Picks" Keywords

The `buzzwords` constant contains the keywords used to identify and highlight the most important articles.

```javascript
// config.js

export const buzzwords = ['critical', 'rce', 'vulnerability', 'exploit', 'zero-day', 'patch now'];
```

## Disclaimer
All trademarks, logos, names, and images are the property of their respective owners. The content on this website is provided for informational purposes only and is not intended to infringe upon any copyrights.