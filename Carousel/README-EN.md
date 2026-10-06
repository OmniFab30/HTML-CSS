# 🎠 HTML & CSS Carousel

A **carousel built entirely with HTML and CSS**, without JavaScript.

The carousel uses modern CSS features to handle horizontal navigation, element alignment, and navigation indicators.

### ⚙️ How It Works

* The cards are arranged horizontally using `display: flex`.
* The container uses `overflow-x: auto` to enable horizontal scrolling.
* `scroll-snap-type: x mandatory` automatically snaps the carousel to each card.
* Each `.card` uses `scroll-snap-align: start` to ensure proper card alignment.
* **Previous / next** navigation buttons are generated directly using the CSS `::scroll-button()` pseudo-elements.
* Navigation indicators are generated with `::scroll-marker()` and grouped using `::scroll-marker-group`.
* `:target-current` highlights the indicator corresponding to the currently displayed card.
* `scroll-behavior: smooth` provides smooth scrolling during navigation.
* The native scrollbar is hidden for a cleaner interface.

### 📱 Responsive Design

A media query adjusts the position of the navigation buttons on screens smaller than **500px**, keeping the carousel usable on mobile devices.

### 🧩 Technologies Used

* HTML5
* CSS3
* CSS Scroll Snap
* CSS Scroll Buttons
* CSS Scroll Markers
* Flexbox
* Media Queries

> **No JavaScript is used.** The entire carousel navigation is handled using modern native CSS features.
