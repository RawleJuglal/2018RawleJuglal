class FilmListCtrl {
  constructor(AppConstants, $scope, Film) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._Film = Film;
    this.films = [];
  }

  $onInit() {    
         this._Film.get().then(
             (result) => {
                     this.films = result;
                 }
             )
     }

}

let FilmList = {
  controller: FilmListCtrl,
  templateUrl: 'components/film-list.html'
};

export default FilmList;