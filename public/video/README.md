# Hero video

Drop your walkthrough video here as:

    hero-walkthrough.mp4

Recommended:

- 1920×1080 (or 1280×720)
- 15–25 seconds, designed to loop seamlessly
- Muted (audio is stripped on playback anyway)
- Under ~8 MB (use HandBrake or `ffmpeg -i in.mp4 -vcodec libx264 -crf 26 -preset slow -an -movflags +faststart hero-walkthrough.mp4`)

Optional: a still frame as `hero-poster.jpg` for instant render before the video loads.
