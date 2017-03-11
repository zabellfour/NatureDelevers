/* Javascript document : actions commun */

// fonction d'appel jscrollpane
function callScrollpane (_elemWrapper) {
    var settings = {
    verticalDragMinHeight : 22,
    verticalDragMaxHeight : 22,
    animateScroll         : true,
    // contentWidth: 0,
    mouseWheelSpeed: 50,
    autoReinitialise: true,
    };
    var pane = $(_elemWrapper);
    pane.jScrollPane(settings);
};

