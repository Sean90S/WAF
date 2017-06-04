/**
 * Created by pafang on 16/10/12.
 */
import angular from 'angular';

class ConfirmDialog{

    constructor($mdDialog){
      this.$mdDialog = $mdDialog;
    }

   showConfirm(ev,title,message) {
    var confirm = this.$mdDialog.confirm()
        .title(title)
        .textContent(message)
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .cancel('取 消')
        .ok('确 认');

    return this.$mdDialog.show(confirm)
}


}

export default angular.module('services.confirm-dialog', [])
    .service('confirmDialog', ConfirmDialog)
    .name;