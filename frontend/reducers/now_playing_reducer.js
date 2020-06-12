   import { RECEIVE_NOW_PLAYING } from '../actions/now_playing_actions';

  const nowPlayingReducer = (oldState=null, action) => {
     Object.freeze(oldState);

     switch (action.type) {
       case RECEIVE_NOW_PLAYING:
         return action.track
         break;
       default:
         return oldState;
     }
   }

   export default nowPlayingReducer;