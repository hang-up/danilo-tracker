# danilo-tracker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Notes
> July 9th 2020
> For next time: save protocol to the right user?

```
npx eslint src/**/**.js --fix // To fix linting errors project wide.

x Add back in all the pages instead of add new user
  - this.$route instead of this.$router
x Fetching the users to be populated in the select Client
  - clients service layer
x Fixing the pollock protocols selection
  - dynamic imports
```

---

> July 27th 2020
> For next time: Attach all the data together. Build renderless components (to be architected)

- Loaded currentUser in beforeEach route hook
- Experienced with lowdb LocalStorage adapater (found it useless for now)
- Loaded currentUser in vuex state
```
```