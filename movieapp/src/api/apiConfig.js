const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c9ff3b025b83bcb3948d8bf7bb63915b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;