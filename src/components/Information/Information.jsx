import { useState } from 'react'
import { InformationLayout } from './InformationLayout'

export const Information = ({ ...gameInfo }) => {
	return <InformationLayout {...gameInfo} />
}
