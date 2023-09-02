import { FC } from 'react';

type ScreenProps = {
    screen: string
}

const Screen: FC<ScreenProps> = ({ screen }) => {
    return <div>{screen}</div>
}

export default Screen;