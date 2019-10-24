/**
 * TODO: flush all listeners and its DOM
 * TODO: handle interaction on story
 * TODO: handle progress indicator
 * TODO: create ticker for handling story
 */

class Sotory {
  constructor(config) {
    this.config = config
    this.datas = []
    this.activeStory = 0
    this.storyContainer = null
    this.image = null
    this.container = null
  }

  init() {
    this.container = document.querySelector(this.config.target)
    // init sotory after First Paint reached
    window.addEventListener('DOMContentLoaded', () => {
      this.renderAvatar()
      this.grabStory()
    })
  }

  grabStory() {
    window
      .fetch(this.config.endpoint)
      .then(res => res.json())
      .then(datas => {
        this.image.style.display = 'block'

        // only show avatar & its purple border
        // while data is exists
        if (datas.length) {
          this.image.classList.add('c-sotory-avatar__image--has-story')
          this.datas = datas
          this.setupStoryWithLength(datas.length)
        }
      })
  }

  createDivWithClass(className) {
    const div = document.createElement('div')
    div.setAttribute('class', className)

    return div
  }

  setupStoryWithLength(storyLength) {
    this.storyContainer = this.createDivWithClass('c-sotory__container')
    const storyTopLevelContainer = this.createDivWithClass('c-sotory')
    const indicatorContainer = this.createDivWithClass('c-sotory__indicator')

    // set - - - - indicator on top stories
    // based on story datas length
    for (let i = 0; i < storyLength; i++) {
      const indicator = this.createDivWithClass('c-sotory__indicators')

      indicatorContainer.appendChild(indicator)
    }

    this.storyContainer.appendChild(indicatorContainer)
    storyTopLevelContainer.appendChild(this.storyContainer)

    this.container.appendChild(storyTopLevelContainer)
  }

  handleStory() {
    // show avatar while story was end
    this.image.style.display = 'block'
    this.storyContainer.classList.remove('c-sotory__container--is-show')
  }

  handleClick() {
    const activeStory = this.datas[this.activeStory].url
    // hide avatar while user click on it to show story
    this.image.style.display = 'none'

    this.storyContainer.addEventListener('click', this.handleStory.bind(this))
    this.storyContainer.classList.add('c-sotory__container--is-show')
    this.storyContainer.style.background = `url(${activeStory})`
    this.storyContainer.style.backgroundRepeat = 'no-repeat'
    this.storyContainer.style.backgroundSize = '100% 100%'

    // FIXME: this is temporary ticker
    setTimeout(this.handleStory.bind(this), this.config.storyLength)
  }

  renderAvatar() {
    const avatarContainer = this.createDivWithClass('c-sotory-avatar')
    this.image = document.createElement('img')
    // only show avatar after data was reached
    this.image.style.display = 'none'
    this.image.setAttribute('class', 'c-sotory-avatar__image')
    this.image.setAttribute('src', this.config.avatar)
    this.image.addEventListener('click', this.handleClick.bind(this))

    avatarContainer.append(this.image)
    this.container.append(avatarContainer)
  }
}
