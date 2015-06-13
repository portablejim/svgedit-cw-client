
svgEditor.addExtension("collabWhiteboardClient", function(methods) {
    return {
        name: "collabWhiteboardClient",
        buttons: [],
        elementChanged: function(elems) {
            console.log("Element changed")
            console.log(elems)
        }
    }
});
