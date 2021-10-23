sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
],function(UIComponent,JSONModel){
    "use strict";

    return UIComponent.extend("UI5_new.Component",{
        metadata:{
            interfaces:["sap.ui.core.IAsyncContentCreation"],
            manifest:"json"
        },
        init:function(){
            

            var oData={
                formData:{
                    
                },
                tableData:[]
            }
           
            var oModel =new JSONModel(oData);
            this.setModel(oModel,"Main");
            sap.ui.getCore().setModel(oModel,"Main");
            sap.ui.getCore().getModel("Main").setProperty("/formData",oData)

            UIComponent.prototype.init.apply(this,arguments);

            this.getRouter().initialize();
        }
    })
});