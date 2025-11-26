document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('#video-container .bg-video');
    let currentVideoIndex = 0;

    if (videos.length > 1) {
        videos.forEach((video, index) => {
            video.addEventListener('ended', () => {
                // Hide current video
                videos[currentVideoIndex].classList.remove('active');

                // Move to next video
                currentVideoIndex = (currentVideoIndex + 1) % videos.length;

                // Show and play next video
                const nextVideo = videos[currentVideoIndex];
                nextVideo.classList.add('active');
                nextVideo.play().catch(error => {
                    console.error("Error attempting to play video:", error);
                });
            });
        });

        // Start the first video
        const firstVideo = videos[currentVideoIndex];
        firstVideo.classList.add('active');
        firstVideo.play().catch(error => {
            console.error("Error attempting to play first video:", error);
        });
    }
});
