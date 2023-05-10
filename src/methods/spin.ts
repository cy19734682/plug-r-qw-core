let count = 0
let loader = document.createElement('div')
loader.setAttribute('class', 'spinModal')

loader.innerHTML =
  '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>'

window.onload = function () {
  document.getElementsByTagName('body')[0].append(loader)
}

/**
 * 开关spin
 * @param d 开为：true，关：不传
 */
export function toggleSpin(d?: boolean): void {
  if (d) {
    loader.classList.add('show')
  }
  else {
    loader.classList.remove('show')
  }
}

/**
 * 网络请求计数
 * @param d 增加计数：true，减少计数：不传
 */
export function counts(d?: boolean) {
  let t = count
  if (d) {
    count++
  }
  else if (count > 0) {
    count--
  }

  if (t !== count) {
    if (count === 0) {
      toggleSpin(false)
    }
    else if (t === 0) {
      toggleSpin(true)
    }
  }
}
