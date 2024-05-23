AFRAME.registerComponent('flying-birds', {
    schema:{

    },init: function(){
        this.pajaritos('h', {x: 10, y: 20, z: 20})
    },pajaritos: function (id, position){
        //crear a los pajaros
        var birdEl = document.createElement('a-entity')
        birdEl.setAttribute('id', id)
        birdEl.setAttribute('position', position)  
        birdEl.setAttribute('scale', {x: 500, y: 500, z: 500})
        birdEl.setAttribute('gltf-model', './assets/models/flying_bird/scene.gltf')
        birdEl.setAttribute('animation-mixer', {})
    }
})