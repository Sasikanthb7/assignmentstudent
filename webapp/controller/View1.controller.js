sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("studentapp.controller.View1", {
        onInit() {
        },
        onSave: function () {
            let name = (this.getView().byId("inSname").getValue());
            if (name == "") {
               
                this.getView().byId("inSname").setValueState("Error");
            }
            let phone = parseInt(this.getView().byId("inPhone").getValue());
            if (phone == NaN ) {
                
                this.getView().byId("inPhone").setValueState("Error");
            }
        }
    });
});