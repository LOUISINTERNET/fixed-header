import pkg from './package.json'
import _throttle from 'lodash/throttle'

const CONFIG = {
  activeClass: 'is-fixed',
  offset: 0,
  version: pkg.version,
  related: [],
}

const run = (header, cnf) => {
  if (window.pageYOffset > cnf.offset) {
    if (cnf.fixedHeight) updateFixedHeight(header)
    header.classList.add(cnf.activeClass)
    cnf.related.map(
      ({ obj, activeClass = cnf.activeClass }) =>
        obj && document.querySelector(obj)?.classList.add(activeClass)
    )
  } else {
    header.classList.remove(cnf.activeClass)
    if (cnf.fixedHeight) updateFixedHeight(header)
    cnf.related.map(
      ({ obj, activeClass = cnf.activeClass }) =>
        obj && document.querySelector(obj)?.classList.remove(activeClass)
    )
  }
}

const updateFixedHeight = (elm) => {
  elm.style?.removeProperty('height')
  const height = elm.offsetHeight
  if (!elm.dataset.maxHeight || elm.dataset.maxHeight < height) {
    elm.style.height = `${height}px`
    elm.dataset.maxHeight = height
  }
}

const fixedHeader = (cls, config = {}) => {
  const header = document.querySelector(cls)
  const cnf = { ...CONFIG, ...config }

  if (header) {
    if (cnf.fixedHeight) {
      window.addEventListener(
        'resize',
        _throttle(() => {
          header.removeAttribute('data-max-height')
          updateFixedHeight(header)
        }, 100),
        { passive: true }
      )

      updateFixedHeight(header)
    }

    window.addEventListener(
      'scroll',
      _throttle(() => {
        if (window.pageYOffset === 0 && cnf.fixedHeight) updateFixedHeight(header)
        run(header, cnf), 100
      }),
      { passive: true }
    )
    run(header, cnf)
  }
}

export default fixedHeader
