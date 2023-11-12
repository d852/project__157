AFRAME.registerComponent('poster', {

    init: function () {
    this.placeHolder = this.el;
    this.createPoster();
    },

    createPoster:function(){
        const posters = [
            {id:"Avengers",url:"./assets/Avengers.webp",title:"Avengers"},
            {id:"Spiderdad",url:"./assets/Spiderdad.jpg",title:"Spiderdad"},
            {id:"Spiderman",url:"./assets/Spiderman.jpg",title:"Spiderman"},
            {id:"Superman",url:"./assets/Spiderman.jpg",tile:"Superman"}
        ]
        var position = -14

        for (i of posters){
            var posx = position + 6
            var posy = 0
            var posz = -5

            position = posx

            var pos={x:posx,y:posy,z:posz}

            var border = this.craeteBoundary(pos,i);
            var image = this.createCardImage(i);

            border.appendChild(image)
            this.placeHolder.appendChild(border)
        }
    },

    craeteBoundary:function(position,id){
        var element = document.createElement("a-entity")
        element.setAttribute("id",id)
        element.setAttribute("visible",true)
        element.setAttribute("geometry",{primitive:"ring",radiusInner:1.9,radiusOuter:2})
        element.setAttribute("material",{color:"black",opacity:1})
        element.setAttribute("position",position)
        return element
    },

    createCardImage:function(item){
        var element = document.createElement("a-entity")
        element.setAttribute("visible",true)
        element.setAttribute("geometry",{primitive:"circle",radius:2})
        element.setAttribute("material",{src:item.url})
        return element
    },
});
