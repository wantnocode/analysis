"use strict";function SmarterForceDirectedLayout(){go.ForceDirectedLayout.call(this),this.radial=new RadialLayout,this.radial.layerThickness=200}function structure_layout(){myDiagram.div=null,myDiagram=GO(go.Diagram,Diagram_name,{initialAutoScale:go.Diagram.Uniform,"undoManager.isEnabled":!0,layout:GO(SmarterForceDirectedLayout,{defaultSpringLength:50})}),initOverview(),myDiagram.nodeTemplateMap.add("tree_square",tree_square_node_template()),myDiagram.nodeTemplateMap.add("square",square_node_template()),myDiagram.nodeTemplateMap.add("",circular_node_template()),myDiagram.nodeTemplateMap.add("emphasize",fivePoints_node_template()),myDiagram.nodeTemplateMap.add("square_text",square_text_template()),myDiagram.linkTemplateMap.add("routing",routing_link_template()),myDiagram.linkTemplateMap.add("",flow_link_template()),myDiagram.linkTemplateMap.add("bezier",bezier_link_template()),myDiagram.linkTemplateMap.add("dash",dash_link_template())}go.Diagram.inherit(SmarterForceDirectedLayout,go.ForceDirectedLayout),SmarterForceDirectedLayout.prototype.needsClusterLayout=function(){return go.ForceDirectedLayout.prototype.needsClusterLayout.call(this)&&(this.radial.network=this.network,this.radial.doLayout(this.diagram)),!1};