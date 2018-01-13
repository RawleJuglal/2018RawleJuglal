class FilmListCtrl {
  constructor(AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

let FilmList = {
  controller: FilmListCtrl,
  templateUrl: 'components/film-list.html'
};

export default FilmList;