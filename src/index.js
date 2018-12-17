import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

function createView(el, binding) {
  if (el.viewer) {
    el.viewer.destroy()
  }
  el.viewer = new Viewer(el, {
    zIndex: 100000000,
    ...binding.value,
  })
}
function isIdentical(el) {
  const imgarr = el.viewer.images || []
  el.viewer.update()
  const imgarr2 = el.viewer.images || []
  if (!imgarr.length && !imgarr2.length) return true
  if (imgarr.length !== imgarr2.length) return false
  return imgarr2.every((img, index) => imgarr[index] === img && img.src === imgarr[index].src)
}
export default {
  Viewer,
  install(Vue) {
    Vue.directive('viewer', {
      inserted(el, binding) {
        createView(el, binding)
      },
      componentUpdated(el, binding) {
        setTimeout(() => {
          if (!el.viewer || isIdentical(el)) return
          createView(el, binding)
        }, 0);
      },
      unbind(el) {
        if (el.viewer) {
          el.viewer.destroy()
        }
      },
    })
  },
}

