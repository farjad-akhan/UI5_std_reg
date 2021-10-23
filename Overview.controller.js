sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],function(Controller,JSONModel){
    "use strict";

    return Controller.extend("UI5_new.controller.Overview",{
        onAdd:function(){
            
            if(!this.pDialog){
                this.pDialog=this.loadFragment({
                    name:"UI5_new.fragment.Form"
                });
            }
            this.pDialog.then(function(oDialog){
                oDialog.open();
            });
        },
        onCloseDialog:function(){
            
            var data=sap.ui.getCore().getModel("Main").getProperty("/formData");
            var tableData=sap.ui.getCore().getModel("Main").getProperty("/tableData");


            tableData.push(data);

            sap.ui.getCore().getModel("Main").setProperty("/formData", {})
            sap.ui.getCore().getModel("Main").refresh()

           this.byId("submitDialog").close(); 
        },
        deleteBtn:function(oEvent){
            debugger
            var tableData=sap.ui.getCore().getModel("Main").getProperty("/tableData");
            var p=oEvent.oSource.getBindingContext("Main").sPath;
            tableData.splice(p.split("/")[2],1);

            sap.ui.getCore().getModel("Main").setProperty("/formData", {})
            sap.ui.getCore().getModel("Main").refresh()
        }
    });

});