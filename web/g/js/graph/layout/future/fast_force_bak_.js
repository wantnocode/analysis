"use strict";function ownKeys(t,e){var o,a=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,o)),a}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(o),!0).forEach(function(e){_defineProperty(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function f_layout(){if(rendering_type="worker",linkArray.forEach(function(e){e.source=e.from,e.target=e.to}),myDiagram.div=null,1500<nodeArray.length&&1500<linkArray.length)return myDiagram=GO(go.Diagram,Diagram_name,{initialAutoScale:go.Diagram.Uniform,"animationManager.isEnabled":!1}),void apply_layoutofBackEnd(nodeArray,linkArray);myDiagram=GO(go.Diagram,Diagram_name,{initialAutoScale:go.Diagram.Uniform,"animationManager.isEnabled":!1,layout:GO(go.CircularLayout)}),initOverview(),myDiagram.nodeTemplate=circular_node_template(),myDiagram.nodeTemplateMap.add("emphasize",fivePoints_node_template()),myDiagram.linkTemplate=flow_link_template(),myDiagram.groupTemplate=GO(go.Group,"Vertical",{},GO(go.TextBlock,{font:"bold 30px sans-serif"},new go.Binding("text","text").makeTwoWay(),new go.Binding("font",function(e,t){return"bold "+80/myDiagram.scale+"px sans-serif"})),GO(go.Panel,"Auto",GO(go.Shape,"Ellipse",{fill:null,stroke:null,strokeWidth:3,portId:"",cursor:"pointer"},new go.Binding("fill")),GO(go.Placeholder,{margin:0,background:"transparent"})),{selectionAdornmentTemplate:GO(go.Adornment,"Vertical",GO(go.Shape,"RoundedRectangle",{width:0,height:0,fill:null,stroke:null,strokeWidth:5,margin:new go.Margin(0,0,0,0)}),GO(go.Placeholder))});var e=new Worker("./js/graph/worker.js");e.postMessage({nodes:nodeArray,links:linkArray}),e.onmessage=function(e){switch(e.data.type){case"tick":return;case"end":document.querySelector(".loading").style.display="none",document.querySelector(".loading_box").style.display="none",1500<e.data.nodes.length&&1500<e.data.links.length?(document.querySelector(".loading").style.display="none",document.querySelector(".loading_box").style.display="none",document.getElementById(Diagram_name).style.display="none",document.querySelector(".eye_c").style.display="none",document.getElementById("graph-container").style.zIndex=10,webgl_render("graph-container",e.data.nodes,e.data.links)):(myDiagram.model.nodeDataArray=e.data.nodes,myDiagram.model.linkDataArray=e.data.links),console.log(new Date+"======================layout计算完成时间"),setTimeout(function(){myDiagram.commandHandler.zoomToFit(),document.querySelector(".loading").style.display="none",document.querySelector(".loading_box").style.display="none"})}}}function onSegment(e,t,o){var a=((t.y-e.y)/(t.x-e.x)).toFixed(3),r=((o.y-e.y)/(o.x-e.x)).toFixed(3);o.x,e.x,o.y,e.y;var n=Math.sqrt(Math.abs(o.x-e.x)*Math.abs(o.x-e.x)+Math.abs(o.y-e.y)*Math.abs(o.y-e.y)),d=Math.sqrt(Math.abs(o.x-t.x)*Math.abs(o.x-t.x)+Math.abs(o.y-t.y)*Math.abs(o.y-t.y)),i=Math.sqrt(Math.abs(e.x-t.x)*Math.abs(e.x-t.x)+Math.abs(e.y-t.y)*Math.abs(e.y-t.y)),i=i-.01<n+d&&n+d<i+.01,a=Math.abs(+r-+a)-.1;return i&&(t.y-e.y<0&&t.x-e.x<0&&a<=Number.EPSILON&&o.x<e.x&&o.y<e.y&&o.x>t.x&&o.y>t.y||(t.y-e.y<0&&0<t.x-e.x&&a<=Number.EPSILON&&o.x>e.x&&o.y<e.y&&o.x<t.x&&o.y>t.y||(0<t.y-e.y&&t.x-e.x<0&&a<=Number.EPSILON&&o.x<e.x&&o.y>e.y&&o.x>t.x&&o.y<t.y||(0<t.y-e.y&&0<t.x-e.x&&a<=Number.EPSILON&&o.x>e.x&&o.y>e.y&&o.x<t.x&&o.y<t.y||void 0))))}function webgl_render(e,t,o){rendering_type=2;var e=document.getElementById(e),i=new Sigma.MultiGraph;console.log(t),t.map(function(e,t){var o=null!=e.key?e.key:e.id;i.addNode(o,{x:e.x,y:e.y,color:nodeArray[t].fill,label:nodeArray[t].text,icon:nodeArray[t].icon})}),linkArray.map(function(e){i.addEdge(e.from,e.to,{label:e.text,color:e.stroke,size:.1})}),i.nodes().forEach(function(e){i.mergeNodeAttributes(e,{size:1})});var l=new Sigma.Sigma(i,e,{defaultEdgeType:"arrow",defaultEdgeColor:"#888",nodeReducer:function(e,t){return highlighedNodes.has(e)?_objectSpread(_objectSpread({},t),{},{color:"#f00",zIndex:1}):selectedNodes.has(e)?_objectSpread(_objectSpread({},t),{},{color:"#000",zIndex:1}):t},edgeReducer:function(e,t){return highlighedEdges.has(e)?_objectSpread(_objectSpread({},t),{},{color:"#f00",zIndex:1}):selectedEdges.has(e)?_objectSpread(_objectSpread({},t),{},{color:"#000",zIndex:1}):t},renderEdgeLabels:!0});l.on("clickNode",function(e){var t=e.node;e.captor,e.event;selectedNodes.has(t)?selectedNodes.delete(t):selectedNodes.add(t),l.refresh()}),l.on("clickStage",function(e){var a=e.event;selectedNodes.clear(),selectedEdges.clear(),l.refresh(),i.edges().forEach(function(e){var t=i.source(e),o=i.target(e);onSegment(l.graphToViewport({x:i.getNodeAttributes(t).x,y:i.getNodeAttributes(t).y}),l.graphToViewport({x:i.getNodeAttributes(o).x,y:i.getNodeAttributes(o).y}),a)&&(selectedEdges.add(e),l.refresh())})});var r=l.getCamera(),e=l.getMouseCaptor(),s=null,c=!1;l.on("downNode",function(e){c=!0,s=e.node,r.disable(),x=!1});var y,u,g,m,n=null,x=!1;e.on("mouseup",function(){var o,a,e;c=!1,s=null,r.enable(),clearTimeout(n),x&&((0<Math.abs(g)||0<Math.abs(m))&&(selectedNodes.clear(),selectedEdges.clear(),o=g+y,a=m+u,i.nodes().forEach(function(e){var t=l.graphToViewport({x:i.getNodeAttributes(e).x,y:i.getNodeAttributes(e).y});t.x>y&&t.x<o&&t.y>u&&t.y<a&&selectedNodes.add(e),t.x>y&&t.x<o&&t.y>a&&t.y<u&&selectedNodes.add(e),t.x<y&&t.x>o&&t.y>u&&t.y<a&&selectedNodes.add(e),t.x<y&&t.x>o&&t.y>a&&t.y<u&&selectedNodes.add(e)}),linkArray.map(function(e){selectedNodes.has(e.from)&&selectedNodes.has(e.to)&&selectedEdges.add(e.id)}),l.refresh()),x=!1,e=document.querySelector("canvas"),l.getCanvasContexts().mouse.clearRect(0,0,e.width,e.height))}),e.on("mousemove",function(t){var e,o,a,r,n,d;c&&s?setTimeout(function(){window.requestAnimationFrame(function(){var e;s&&(x=!1,e=l.viewportToGraph(t),i.setNodeAttribute(s,"x",e.x),i.setNodeAttribute(s,"y",e.y))})}):x&&(g=t.x-y,m=t.y-u,e=l.getCanvasContexts().mouse,o=y,a=u,r=g,n=m,d=document.querySelector("canvas"),e.fillStyle="rgba(22,124,243,0.07)",e.clearRect(0,0,d.width,d.height),e.fillRect(o,a,r,n))}),e.on("mousedown",function(e){n=setTimeout(function(){r.disable(),x=!0,y=e.x,u=e.y},300)})}