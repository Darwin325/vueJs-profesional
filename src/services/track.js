import platziMusicService from './platzi-music';

const tracksService = {};

tracksService.search = function (q) {
  const type = 'track';

    return platziMusicService.get('/search', {
      params : { q, type }
    })
      .then(res => res.data);
};

export default tracksService;
