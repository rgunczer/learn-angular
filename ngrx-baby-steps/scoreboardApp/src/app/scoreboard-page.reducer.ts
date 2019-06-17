import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from './scoreboard-page.actions';

export interface State {
  home: number;
  away: number;
}

export const initialState: State = {
  home: 0,
  away: 0
};

const scoreboardReducer = createReducer(
  initialState,
  on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
  on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 }))
);

export function reducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
