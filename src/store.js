import Vue from 'vue';
import Vuex from 'vuex';
import TrackSercvice from '@/services/track.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    track: {},
  },

  mutations: {
    setTrack(state, track) {
      state.track = track;
    },
  },

  actions: {
    getTrackById(context, payload) {
      return TrackSercvice.getById(payload.id)
        .then(res =>{
          context.commit('setTrack', res);
          return res;
        });
    }
  },

  getters: {
    trackTitle(state) {
      if (!state.track.name){return ''}
      return `${state.track.name} - ${state.track.artists[0].name}`;
    }
  }

});

export default store;
