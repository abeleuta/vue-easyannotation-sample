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
<div id="mainDiv" style="margin-top:100px;">
    <easy-annotation src="images/Hallstat.jpg" styles="border-color:red;" format="json" :config="this.config" v-on:save="this.save"></easy-annotation>
</div>
</template>
