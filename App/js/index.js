// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setLeft("3.0476190476190474em")
                .setTop("6.857142857142857em")
                .setWidth("8.076190476190476em")
                .setHeight("2.361904761904762em")
                .setLabelSize("8em")
                .setLabelCaption("LOGIN")
                .setMultiLines(true)
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#5F9EA0",
                        "background-color" : "#F0F8FF"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input8")
                .setLeft("11.428571428571429em")
                .setTop("9.904761904761905em")
                .setWidth("18em")
                .setHeight("2.361904761904762em")
                .setLabelSize("8em")
                .setLabelCaption("Username")
                .setMultiLines(true)
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#B0E0E6"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input9")
                .setLeft("10.666666666666666em")
                .setTop("12.19047619047619em")
                .setWidth("26.36190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("Password ")
                .setType("password")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#B0E0E6"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});