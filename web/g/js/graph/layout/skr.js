"use strict";function skr_layout(){myDiagram.div=null,myDiagram=GO(go.Diagram,Diagram_name,{initialAutoScale:go.Diagram.Uniform,"undoManager.isEnabled":!0,layout:GO(go.TreeLayout,{nodeSpacing:20})}),initOverview(),myDiagram.nodeTemplateMap.add("",GO(go.Node,"vertical",{fromSpot:go.Spot.Right,toSpot:go.Spot.Left,doubleClick:function(){send_newGraph("属性")}},{toolTip:tooltipTemplate},GO(go.Panel,"Auto",GO(go.Picture,{name:"icon_enetity",source:"./img/tree/b_frame.svg",margin:new go.Margin(0,0,0,64),width:104,height:38,visible:!1},new go.Binding("visible","tags",function(e){return console.log(e),""!=e[0].text})),GO(go.Picture,{source:"./img/tree/prompt_n.svg",margin:new go.Margin(0,0,10,80),cursor:"pointer"},{click:function(){send_newGraph("帮助")}}),GO(go.TextBlock,{text:"",margin:new go.Margin(-8,0,0,0),stroke:"#fff"},new go.Binding("text","tags",function(e){return e[0].text}))),GO(go.Panel,"vertical",{margin:new go.Margin(0,0,0,0),portId:""},new go.Binding("margin","tags",function(e){return e&&""!==e[0].text?new go.Margin(40,0,0,0):new go.Margin(0,0,0,0)}),GO(go.Shape,"RoundedRectangle",{name:"node_shape",stroke:"#fff",fill:"#fff",width:233,cursor:"pointer",height:60,margin:new go.Margin(0,0,0,0),strokeWidth:1},new go.Binding("stroke","d_stroke"),new go.Binding("strokeWidth","width")),GO(go.Shape,"RoundedRectangle",{name:"node_shape",stroke:null,fill:"#000",width:60,cursor:"pointer",height:60,margin:new go.Margin(0,175,0,0)},new go.Binding("fill","d_fill")),GO(go.Picture,{name:"icon_enetity",source:"./img/account.svg",margin:new go.Margin(16,175,0,12),width:36,height:28},new go.Binding("source","icon",geoFunc)),GO(go.TextBlock,{name:"icon_label",text:"1",cursor:"pointer",opacity:1,stroke:"#333",width:150,maxLines:1,overflow:go.TextBlock.OverflowEllipsis,margin:new go.Margin(20,0,0,80)},new go.Binding("text","text")),GO(go.Picture,{name:"icon_enetity",source:"./img/tree/open.svg",margin:new go.Margin(20,0,0,236)},{click:function(e,n){var o=n.part.data;if(1==o.isExpand){if(1==o.isExpanded){var i=n.part;return myDiagram.commandHandler.expandTree(i),void myDiagram.model.setDataProperty(o,"isExpand",0)}i={event_name:"拓展节点",nodeArray:o,layout:layout,graph_id:graph_id};postmessageToParent(i)}else{n=n.part;myDiagram.model.setDataProperty(o,"isExpand",1),myDiagram.model.setDataProperty(o,"isExpanded",1),myDiagram.startTransaction("CollapseExpandTree"),myDiagram.commandHandler.collapseTree(n),myDiagram.commitTransaction("CollapseExpandTree")}}},new go.Binding("margin","tags",function(e){return e&&""!==e[0].text?new go.Margin(20,0,0,236):new go.Margin(20,0,0,234)}),new go.Binding("source","isTreeExpanded",function(e){return e?"./img/tree/close.svg":"./img/tree/open.svg"}).ofObject(""),new go.Binding("source","isExpand",function(e){return 1==e?"./img/tree/open.svg":"./img/tree/close.svg"}))),{selectionAdornmentTemplate:GO(go.Adornment,"Auto",GO(go.Shape,"RoundedRectangle",{width:100,height:130,fill:null,stroke:null,strokeWidth:5,margin:new go.Margin(0,0,0,0)}),GO(go.Placeholder))})),myDiagram.nodeTemplateMap.add("r_group",GO(go.Node,"Auto",{doubleClick:function(){}},GO(go.Panel,"Auto",GO(go.TextBlock,{width:62,name:"icon_label",text:"",cursor:"pointer",stroke:"#000",margin:2,textAlign:"center"},new go.Binding("text","text"))),{toolTip:tooltipTemplate},{selectionAdornmentTemplate:GO(go.Adornment,"Auto",GO(go.Shape,"RoundedRectangle",{width:100,height:130,fill:null,stroke:null,strokeWidth:5,margin:new go.Margin(0,0,0,0)}),GO(go.Placeholder))})),myDiagram.nodeTemplateMap.add("skr_company",GO(go.Node,"Auto",{layerName:"Foreground",doubleClick:function(){send_newGraph("属性")}},GO(go.Panel,"Auto",GO(go.Shape,"RoundedRectangle",{name:"node_shape",stroke:null,fill:"red",width:220,cursor:"pointer",height:44,strokeWidth:1},new go.Binding("fill","d_fill"),new go.Binding("stroke","d_stroke"),new go.Binding("strokeWidth","width")),GO(go.TextBlock,{name:"icon_label",text:"1",cursor:"pointer",opacity:1,stroke:"#fff",width:200,maxLines:1,overflow:go.TextBlock.OverflowEllipsis,margin:new go.Margin(0,0,0,15)},new go.Binding("text","text"))),GO(go.Picture,{name:"icon_enetity",source:"./img/tree/open.svg",margin:new go.Margin(0,0,0,220)},{click:function(e,n){var o=n.part.data;if(1==o.isExpand){if(1==o.isExpanded){var i=n.part;return myDiagram.commandHandler.expandTree(i),void myDiagram.model.setDataProperty(o,"isExpand",0)}i={event_name:"拓展节点",nodeArray:o,layout:layout,graph_id:graph_id};postmessageToParent(i)}else{n=n.part;myDiagram.model.setDataProperty(o,"isExpand",1),myDiagram.model.setDataProperty(o,"isExpanded",1),myDiagram.startTransaction("CollapseExpandTree"),myDiagram.commandHandler.collapseTree(n),myDiagram.commitTransaction("CollapseExpandTree")}}},new go.Binding("source","isTreeExpanded",function(e){return e?"./img/tree/close.svg":"./img/tree/open.svg"}).ofObject(""),new go.Binding("source","isExpand",function(e){return 1==e?"./img/tree/open.svg":"./img/tree/close.svg"})),{toolTip:tooltipTemplate},{selectionAdornmentTemplate:GO(go.Adornment,"Auto",GO(go.Shape,"RoundedRectangle",{width:100,height:130,fill:null,stroke:null,strokeWidth:5,margin:new go.Margin(0,0,0,0)}),GO(go.Placeholder))})),myDiagram.linkTemplate=Orthogonal_link()}function ishave_clild(){myDiagram.links.each(function(e){console.log(e)})}