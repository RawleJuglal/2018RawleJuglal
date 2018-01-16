class WebListCtrl {
  constructor(AppConstants, $scope, Web) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._Web = Web;
    this.websites = [];
  }

  $onInit() {    
         this._Web.get().then(
             (result) => {
                     this.websites = result;
                 }
             )
     }
}

let WebList = {
  controller: WebListCtrl,
  templateUrl: 'components/web-list.html'
};

export default WebList;