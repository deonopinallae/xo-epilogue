import { InformationLayout } from './InformationLayout'

export const Information = ({isDraw, isGameEnded, currentPlayer}) => {
	const status = isDraw ? 'Ничья'
	: !isDraw && isGameEnded ? `Победа: ${currentPlayer}`
	: !isDraw && !isGameEnded ? `Ходит: ${currentPlayer}`
	: 'Возникла ошибка'
	return <InformationLayout status={status} />
}
