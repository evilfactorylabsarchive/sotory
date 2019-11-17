;(function() {
  const FIVE_SECOND = 5000
  const target = document.createElement('div')
  const config = {
    storyLength: FIVE_SECOND,
    endpoint: 'https://jsonbox.io/box_14a7d13709787b6b8bfe',
    avatar: 'https://avatars0.githubusercontent.com/u/43804217?v=4',
    identifier: 'evilfactorylabs',
    target: '#js-sotory'
  }

  target.setAttribute('id', 'js-sotory')
  document.body.appendChild(target)

  const sotory = new Sotory(config)

  sotory.init()
})()
