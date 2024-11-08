<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Image Gallery</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="container">
    <h1>Simple Image Gallery</h1>

    <!-- Search and Filter -->
    <div class="search-filter">
        <input type="text" id="searchInput" placeholder="Search images...">
        <select id="categoryFilter">
            <option value="all">All</option>
            <option value="nature">Nature</option>
            <option value="animals">Animals</option>
            <option value="technology">Technology</option>
        </select>
    </div>

    <!-- Image Gallery -->
    <div id="gallery" class="gallery">
        <!-- Images will be populated here by JavaScript -->
    </div>
</div>

<!-- Lightbox for Enlarged Image View -->
<div id="lightbox" class="lightbox">
    <span id="lightboxClose" class="lightbox-close">&times;</span>
    <img id="lightboxImage" class="lightbox-image" src="" alt="Enlarged Image">
    <p id="lightboxCaption" class="lightbox-caption"></p>
</div>


<script src="script.js"></script>
</body>
</html>
