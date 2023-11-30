import '@picocss/pico'
import { FC, useState } from 'react'
import { AppProps } from './interfaces'
import { AppContainer } from './app.styled'
import TourGuide from '../tourguide'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  const [enableTourGuide, setEnableTourGuide] = useState(false)
  const getTourSteps = (): void => {}

  const onFinishTourGuide = (): void => {}

  return (
    <AppContainer data-testid={dataTestId}>
      {/* <TourGuide
        enableTourGuide={enableTourGuide}
        steps={getTourSteps()}
        canSkip={true}
        onFinish={() => onFinishTourGuide()}
        setEnableTourGuide={setEnableTourGuide}> */}
        <div>text 1</div>
        <div>text 2</div>
        <div>text 3</div>
        <div>text 4</div>
        <div>text 5</div>
        <div>text 6</div>
        <div>text 7</div>
        <div>text 8</div>
        <div>text 9</div>
        <div>text 10</div>
        <div>text 11</div>
        <div>text 12</div>
      {/* </TourGuide> */}
    </AppContainer>
  )
}

export default App
