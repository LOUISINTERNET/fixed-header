import pkg from './package.json'
import _throttle from 'lodash/throttle'

const CONFIG = {
  activeClass: 'is-fixed',
  offset: 0,
  version: pkg.version,
  related: [],
}

const fixedHeader = (cls, config = {}) => {
  const header = document.querySelector(cls)
  const cnf = { ...CONFIG, ...config }

  if (header)
    window.addEventListener(
      'scroll',
      _throttle(() => {
        if (window.pageYOffset > cnf.offset) {
          header.classList.add(cnf.activeClass)
          cnf.related.map(
            ({ obj, activeClass = cnf.activeClass }) =>
              obj && document.querySelector(obj)?.classList.add(activeClass)
          )
        } else {
          header.classList.remove(cnf.activeClass)
          cnf.related.map(
            ({ obj, activeClass = cnf.activeClass }) =>
              obj && document.querySelector(obj)?.classList.remove(activeClass)
          )
        }
      }, 100),
      { passive: true }
    )
}

export default fixedHeader
