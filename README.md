# sotory

create Instagram-like story on the web.

This library is still under heavy development and was purposefully made to be showcased and discussed on our [blog](https://blog.evilfactory.id).

## Demo

![](./meta/demo.gif)

## Development

- Clone this repository
- Install `devDependencies`, this step is unnecessary if you have `serve` globally installed
- `yarn dev` (`npm run dev` is frowned upon)

## Usage

To use this library, you're going to have to setup a configuration file.

Folder structure:

```
    .
    ├── ...
    ├── lib                    
    │   ├── config.js      # create config.js file
    │   ├── sotory.js         
    │   └── sotory.css           
    └── ...
```



| Key         | Value  | Description                                                  |
| ----------- | ------ | :----------------------------------------------------------- |
| storyLength | number | **Required**. Length of each story (in millisecond)          |
| endpoint    | string | **Required**. Source of your data<br />You can use [jsonbox.io](https://jsonbox.io), like we did |
| avatar      | string | **Required**. Avatar just like your Instagram                |
| identifier  | string | Not used yet. xD                                             |
| target      | string | **Required**. Target DOM element. To display the avatar. (Must be an `id`) |



This is an example data for `jsonbox.io` :

```json
[
    {
        "type": "image",
        "url": "https://i.pinimg.com/originals/69/59/fa/6959fa736605235642d0f057e6cf9795.jpg",
    },
    {
        "type": "image",
        "url": "https://i.pinimg.com/originals/69/59/fa/6959fa736605235642d0f057e6cf9795.jpg",
    }
]
```



Configuration file example:

```js
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
```



Then import configuration file to `index.html`.

```html
<body>
    <script src="../lib/sotory.js"></script>
    <script src="../lib/config.js"></script>
</body>
```



Enjoy.

## License

This library is licensed under MIT. The license file is available to be seen [here](https://github.com/evilfactorylabs/sotory/blob/master/LICENSE).