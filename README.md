# An example implementation of Vuejs plugin for Easy Annotation library 

## Getting Started

Clone repository from github

Install all dependencies
```shell
npm i
```

```js
import EasyAnnotation from './plugins/vue-easy-annotation'

Vue.use(EasyAnnotation);
```

Include code:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue-easy-annotation"></script>
```
### Example

```js
<script>
export default {
    created () {
        this.config = {
            font: {name: 'Verdana', italic: true}
        }
    },

    methods: {
        save(response)  {
            //response being returned in URL encoded PNG, JSON, XML or SVG
            console.log(response);
        }
    }	

}
</script>

<template>

  <easy-annotation src="images/Example2.png" format="json" :config="this.config" v-on:save="this.save"></easy-annotation>

</template>
```
## Options
* src - Specifies the path to the image
* format - the input and output format, can be one of the following:
    png, json, xml and svg
* styles - css style to apply to 
* loadOnClick - true to load EasyAnnotation on image click
* config - a configuration object to apply to EasyAnnotation,
     please check [https://www.npmjs.com/package/easyannotation#options](https://www.npmjs.com/package/easyannotation#options)
* save - a method to be called when user press save button

## License

For more details, please visit [EasyAnnotation.com website](http://easyannotation.com/).
