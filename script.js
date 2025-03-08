document.addEventListener("DOMContentLoaded", function() {
    const videoList = document.getElementById("video-list");
    const searchInput = document.getElementById("search-input");
    const uploadButton = document.getElementById("upload-button");
    
    let videos = [
        { title: "EARTH 4K - Relaxation Film - Peaceful Relaxing Music - Nature 4k Video UltraHD - OUR PLANET", url: "https://youtu.be/KJwYBJMSbPI?si=Okx96yGqh1TokJHw" },
        { title: "I Tried Shark Tank Products !", url: "https://youtu.be/hhbaKxU0D-U?si=jZJw7DGZsisDHm8X" },
        { title: "You Play This Game With Your Voice ⭐⭐", url: "https://youtu.be/ueWPNOsBO44?si=juaBpPelrzGazQuM" }
    ];
    
    function displayVideos(filteredVideos) {
        videoList.innerHTML = "";
        filteredVideos.forEach(video => {
            const videoItem = document.createElement("div");
            videoItem.classList.add("bg-white", "p-2", "rounded", "shadow");
            videoItem.innerHTML = `
                <video src="${video.url}" controls class="w-full rounded"></video>
                <p class="mt-2 font-semibold">${video.title}</p>
            `;
            videoList.appendChild(videoItem);
        });
    }
    
    setTimeout(() => {
        displayVideos(videos);
    }, 2000); // Simulating load time

    // Search functionality
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchTerm));
        displayVideos(filteredVideos);
    });

    // Upload functionality (simple prompt for now)
    uploadButton.addEventListener("click", () => {
        const videoTitle = prompt("Enter video title:");
        const videoUrl = prompt("Enter video URL:");
        if (videoTitle && videoUrl) {
            videos.push({ title: videoTitle, url: videoUrl });
            displayVideos(videos);
        }
    });
});
