"use strict";function noLayout(){myDiagram.div=null,myDiagram=GO(go.Diagram,Diagram_name,{"undoManager.isEnabled":!0,"animationManager.isEnabled":!1}),initOverview(),myDiagram.nodeTemplateMap.add("",circular_node_template()),myDiagram.linkTemplateMap.add("",flow_link_template())}