# openfeed 
Why look at the world through a hundred different apps when you can just hate one?

**openfeed** is the result of my total intolerance for modern RSS feeds. I was tired of browsing sites with missing features, bloated apps, and graphical interfaces that looked like they were designed by a committee of people who have never actually read an article. So, instead of compromising like a normal person, I spent hours writing one from scratch. Because my laziness is so deep it becomes productive.

## Core features (or "what others don't know how to do")

* **Native Social Laziness**: Natively supports **Reddit** and **YouTube** feeds. This is the core feature, because going directly to those sites is a suicide for productivity and mental health.
* **Intelligent Transformation**: Automatically converts YouTube and Reddit URLs into valid RSS feeds. It does the dirty work for you, as it should.
* **Multi-Device Synchronization for the Lazy**: I absolutely refuse to configure my feeds on 10 different devices every time I change rooms. openfeed is designed with a self-hosted approach for people who just want things to work, without initiation rituals every time you open a new browser.
* **Dual-Layout System**:
    * **Modern Layout**: A three-column interface (email-client style) for those who want to process information at lightning speed and get back to doing nothing.
    * **Legacy Layout**: A grid-based card view for when you want to delude yourself that looking at images is "reading".
* **Embedded Reader**: Read articles directly within the app without the cookie pop-ups that infest the modern web. Use the Iframe Reader if you really miss the original (often questionable) site design.
* **"Top Picks" Engine**: An engine that highlights critical content based on configurable buzzwords (e.g., *vulnerability*, *RCE*, *zero-day*). Essential for tech workers who need to pretend they're up-to-date on the latest catastrophes.
* **Zero Infrastructure**: Runs entirely client-side. It uses `localStorage` because databases are for people who have time to waste with backends.

## Configuration & Customization

openfeed is flexible, provided you know where to stick your hands in the `config.js` file.

### 1. Source Management
Define your default categories and news sources in the `rssFeeds` object. Support for custom images and favicons is built-in, because the eye wants its part, especially if the eye is mine.

### 2. Category Branding
Associate specific placeholder images with categories in `categoryPlaceholders`. This way, even the most boring article looks like premium content.

### 3. Smart Filtering
Update the `buzzwords` array to change which articles are flagged as "Top Picks".

## Getting started

1.  Clone the repository (if you really can't help it).
2.  Open `index.html` in any modern web browser. If you use Internet Explorer, we have more serious problems than feed management.
3.  Add your own feeds via the **Settings sidebar** -> **Add New Feed**.

## Disclaimer
All trademarks, logos, names, and images are the property of their respective owners. I just aggregate the chaos. Content is sourced from publicly available RSS feeds for informational purposes and to fuel my need for control.