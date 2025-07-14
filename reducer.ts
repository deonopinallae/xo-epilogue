export const initialState: stateTypes = {
	currentPlayer: 'X',
	field: ['', '', '', '', '', '', '', '', ''],
	isGameEnded: false,
	isDraw: false,
}
export const appReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case 'SET_CURRENT_PLAYER': {
			return { ...state, currentPlayer: payload }
		}
		case 'SET_FIELD': {
			return { ...state, field: payload }
		}
		case 'SET_IS_GAME_ENDED': {
			return { ...state, isGameEnded: payload }
		}
		case 'SET_IS_DRAW': {
			return { ...state, isDraw: payload }
		}
		case 'START_AGAIN': {
			return initialState
		}
		default:
			return state
	}
}

interface stateTypes {
	currentPlayer: string
	field: Array<string>
	isGameEnded: boolean
	isDraw: boolean
}
