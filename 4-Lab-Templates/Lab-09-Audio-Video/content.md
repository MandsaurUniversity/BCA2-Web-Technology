# Dummy Content — Audio and Video in HTML

Use the following content and media sources to build your multimedia webpage.

---

## Page Title
Multimedia in Web Design — Audio and Video Demo

---

## Article Content

### Paragraph 1: Introduction to Multimedia
Multimedia refers to the integration of multiple forms of content — text, images, audio, video, and animations — into a single interactive presentation. In modern web development, multimedia elements play a crucial role in creating engaging and interactive websites. From educational platforms like NPTEL and Coursera to entertainment sites like YouTube and Spotify, multimedia is everywhere on the internet. As BCA students at Mandsaur University, understanding how to embed audio and video in web pages is an essential skill for building professional websites.

### Paragraph 2: HTML5 Media Elements
HTML5 introduced native support for multimedia through the `<audio>` and `<video>` elements, eliminating the need for third-party plugins like Adobe Flash Player. The `<audio>` element allows you to embed sound files directly into your webpage, while the `<video>` element enables you to embed video content. Both elements support the `controls` attribute, which displays play, pause, volume, and seek controls to the user. Additional attributes like `autoplay`, `loop`, and `muted` provide further control over media playback behaviour.

### Paragraph 3: Best Practices
When embedding multimedia content, it is important to follow best practices for a good user experience. Always include the `controls` attribute so users can play and pause the media. Avoid using `autoplay` without `muted`, as unexpected audio can be annoying and is often blocked by browsers. Provide fallback text inside `<audio>` and `<video>` tags for older browsers that don't support HTML5 media elements. For videos, use the `poster` attribute to display a thumbnail image before the user clicks play. Use appropriate file formats — MP3 for audio and MP4 for video — as they are widely supported across all modern browsers.

---

## Free Audio Sources

Use these free audio files for your lab:

### Audio File 1
- **URL:** `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`
- **Description:** SoundHelix Song 1 — a royalty-free electronic music track
- **Format:** MP3

### Audio File 2
- **URL:** `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3`
- **Description:** SoundHelix Song 2 — another royalty-free music track
- **Format:** MP3

### How to Use:
```html
<audio controls>
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

---

## Free Video Sources

Use these free video files for your lab:

### Video File 1 — Big Buck Bunny
- **URL:** `https://www.w3schools.com/html/mov_bbb.mp4`
- **Description:** A short clip from the animated film "Big Buck Bunny" — widely used for testing video elements
- **Format:** MP4

### Video File 2 — Sample Video
- **URL:** `https://www.w3schools.com/html/movie.mp4`
- **Description:** A sample video file provided by W3Schools
- **Format:** MP4

### How to Use:
```html
<video width="640" controls poster="https://placehold.co/640x360/2c3e50/ffffff?text=Click+Play">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support the video element.
</video>
```

---

## YouTube Embed (Using `<iframe>`)

Embed an educational YouTube video using an iframe:

### Suggested Videos:
- **HTML Tutorial for Beginners:** `https://www.youtube.com/embed/qz0aGYrrlhU`
- **How the Internet Works:** `https://www.youtube.com/embed/x3c1ih2NJEg`

### How to Use:
```html
<iframe width="560" height="315"
        src="https://www.youtube.com/embed/qz0aGYrrlhU"
        title="HTML Tutorial for Beginners"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
</iframe>
```

---

## Media Attributes Reference

| Attribute | Element | Description |
|-----------|---------|-------------|
| `controls` | audio, video | Displays playback controls (play, pause, volume) |
| `autoplay` | audio, video | Starts playing automatically when page loads |
| `loop` | audio, video | Repeats the media from the beginning when it ends |
| `muted` | audio, video | Mutes the audio output by default |
| `poster` | video only | Displays a thumbnail image before video plays |
| `width` | video only | Sets the width of the video player in pixels |
| `height` | video only | Sets the height of the video player in pixels |
| `src` | audio, video | URL of the media file |
| `type` | source | MIME type of the media file (e.g., `audio/mpeg`, `video/mp4`) |

---

## Notes for Students
- 🔇 **Autoplay with sound is blocked** by most modern browsers. If you use `autoplay`, also add `muted`.
- 📱 The `controls` attribute is essential — without it, users have no way to play or pause the media.
- 🖼️ Use `poster` on videos to show a preview image — it looks professional.
- 📝 Always include **fallback text** between the opening and closing tags for older browsers.
