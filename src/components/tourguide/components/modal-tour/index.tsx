import React, { useContext, useEffect, useState } from 'react'
import SessionContext from '../../../../api/session/context'
import { Button, colors, Modal, Typography } from '@cencosud-ds/bigbang'
import './index.css'
import t from '../../../../utils/translate'
import { IModalTourProps } from '../../interfaces/modal'
import ModalIcon from '../vectors/modal-icon'
import ExitButton from '../exitButton'
import { trackGTMEventActionTourGuide } from '../../../../utils/analytics'

const ModalTour: React.FC<IModalTourProps> = props => {
  const {
    auth: { sellerName },
    setStatusCompleteTourGuide,
  } = useContext(SessionContext)
  const { start: startTour, tour, setEnableTourGuide, openModal, onFinish, canSkip, sizeTour, lengthTour } = props

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(openModal)
  }, [openModal])

  const getTitleModal = () => {
    let title = ''
    if (startTour) {
      if (canSkip) {
        title = t('tourGuideTitleRestart')
      } else {
        title = t('tourGuideTitleStart')
      }
    } else {
      title = t('tourGuideTitleEnd')
    }
    return title
  }

  const getDescription = () => {
    let descriptionText = ''
    if (startTour) {
      if (canSkip) {
        descriptionText = t('tourGuideDescriptionRestart')
      } else {
        descriptionText = t('tourGuideDescriptionStart')
      }
    } else {
      if (canSkip) {
        descriptionText = t('tourGuideComplementEndRestart')
      } else {
        descriptionText = t('tourGuideDescriptionEnd')
      }
    }
    return descriptionText
  }

  const getDescriptionComplement = () => {
    return !canSkip ? t('tourGuideComplementEnd') : ''
  }

  const getTextButton = () => {
    let textButton = ''
    if (startTour) {
      textButton = t('tourGuideButtonRestart')
    } else {
      textButton = t('tourGuideButtonEnd')
    }
    return textButton
  }

  const closeModal = (watchLater: boolean) => {
    if (startTour) {
      if (watchLater) {
        trackGTMEventActionTourGuide({
          action: 'Step 1: Clic en botón tal vez más tarde guia de uso',
          category: 'Interacciones Tour Guide',
          tag: sellerName,
          tourGuide: canSkip ? 'Revisualizar' : 'Ingresa por primera vez',
        })
      } else {
        trackGTMEventActionTourGuide({
          action: 'Step 1: Clic en botón cerrar modal empezar recorrido',
          category: 'Interacciones Tour Guide',
          tag: sellerName,
          tourGuide: canSkip ? 'Revisualizar' : 'Ingresa por primera vez',
        })
      }
    } else {
      trackGTMEventActionTourGuide({
        action: `Step ${sizeTour + 1}: Clic en botón cerrar modal completaste el recorrido`,
        category: 'Interacciones Tour Guide',
        tag: sellerName,
        tourGuide: canSkip ? 'Revisualizar' : 'Ingresa por primera vez',
      })
    }
    localStorage.setItem('firstTimeTour', '1')

    window.location.reload()
    setOpen(false)
    setStatusCompleteTourGuide(true)
  }

  return (
    <Modal
      open={open}
      children={
        <div className="content-modal">
          {canSkip && startTour ? (
            <ExitButton
              onFinish={() => {
                closeModal(false)
              }}
            />
          ) : null}
          {!startTour ? (
            <ExitButton
              onFinish={() => {
                closeModal(false)
                if (onFinish) {
                  onFinish()
                }
                window.location.reload()
              }}
            />
          ) : null}
          {!startTour ? <ModalIcon /> : null}
          <Typography typeElement="subtitle2" weight="bold" color={colors.primary[500]} children={getTitleModal()} />
          <div className="context-text">
            <br />
            <Typography typeElement="body2" weight="regular" color={colors.neutral[500]} children={getDescription()} />
            <br />
            {startTour ? null : (
              <>
                <Typography
                  typeElement="body2"
                  weight="regular"
                  color={colors.neutral[500]}
                  children={getDescriptionComplement()}
                />
                <br />
              </>
            )}
          </div>

          <div className="content-buttons">
            <Button
              className="button-modal"
              onClick={() => {
                setOpen(false)
                setEnableTourGuide(false)

                if (startTour) {
                  trackGTMEventActionTourGuide({
                    action: 'Step 1: Clic en botón empezar recorrido',
                    category: 'Interacciones Tour Guide',
                    tag: sellerName,
                    tourGuide: canSkip ? 'Revisualizar' : 'Ingresa por primera vez',
                  })

                  localStorage.setItem('firstTimeTour', '1')
                  tour.start()
                } else {
                  trackGTMEventActionTourGuide({
                    action: `'Step ${lengthTour + 1}: Clic en botón entendido - modal completaste el recorrido`,
                    category: 'Interacciones Tour Guide',
                    tag: sellerName,
                    tourGuide: canSkip ? 'Revisualizar' : 'Ingresa por primera vez',
                  })
                  if (onFinish) {
                    onFinish()
                  }
                  window.location.reload()
                }
              }}>
              {getTextButton()}
            </Button>
            {canSkip && startTour ? (
              <Button
                darkMode={true}
                className="button-modal"
                onClick={() => {
                  closeModal(true)
                }}>
                {t('tourGuideButtonLater')}
              </Button>
            ) : null}
          </div>
        </div>
      }
      persistent={true}
      with-blur={false}
      id="modal-example"
      onClose={() => setOpen(false)}
    />
  )
}

export default ModalTour
