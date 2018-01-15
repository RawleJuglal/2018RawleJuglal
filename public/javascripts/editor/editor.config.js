function EditorConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.editor', {
    url: '/editor/:slug',
    controller: 'EditorCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'editor/editor.html',
    title: 'Editor',
  });

};

export default EditorConfig;