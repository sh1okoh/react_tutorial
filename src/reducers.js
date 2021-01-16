import { combineReducers } from "redux";
import { CLICK_SQUARE, JUMP_TO_PAST } from "./actions";
import { calculateWinner} from "util";

const initialState = {
    history: [{
        squares: Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0,
};

function game(state = initialState, action) {
    switch(action.type) {
      case CLICK_SQUARE:
        const history = state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = state.xIsNext ? 'X' : 'O';
        this.setState({
          history: history.concat([{
            squares: squares
          }]),
          xIsNext: !state.xIsNext,
          stepNumber: history.length,
        });
      case JUMP_TO_PAST:
        return {
          ...state,
          stepNumber: step,
          xIsNext: (step % 2) === 0,
        };

      default:
        return state;
    }
};

export const app = combineReducers({ game });