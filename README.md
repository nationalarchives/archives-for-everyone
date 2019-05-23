# Archives for everyone 


## Development machine configuration

We're using [Parcel.js](https://parceljs.org/) to transpile SASS to CSS. Run the following commands **from the project root**:

### Initial setup
```bash
npm install -g parcel-bundler
```

### Daily use
```bash 
parcel watch styles.scss & parcel index.html & open http://localhost:1234
```
Note: you might need to refresh the browser after running this command.
