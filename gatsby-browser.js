/* eslint-disable no-alert */
import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapRootElement = wrap
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`Cette application a été mise à jour. recharger pour afficher la dernière version?`)

  if (answer === true) {
    window.location.reload()
  }
}
