class WebListCtrl {
  constructor(AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

let WebList = {
  controller: WebListCtrl,
  templateUrl: 'components/web-list.html'
};

export default WebList;