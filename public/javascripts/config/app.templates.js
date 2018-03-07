angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('blog/blog.html','\r\n<div class=\'d-none d-md-block vid-container\'>\r\n\t<video id=\'blog-vid\' ng-src=\'https://res.cloudinary.com/relentlessrawle/video/upload/v1516732424/Blog_Vid_hmwlrx.mp4\' autoplay loop muted></video>\r\n</div>\r\n<div class=\'d-md-none\'>\r\n\t<img class=\'img-fluid\' ng-src=\'https://res.cloudinary.com/relentlessrawle/image/upload/v1516741513/PhoenixVid_jwmo2v.jpg\'>\r\n</div>\r\n<div class=\'container-fluid screen-bg\'>\r\n\t<div class=\'row\'>\r\n\t\t<div class=\'col-12 text-center\'>\r\n\t\t\t<h2 class=\'d-md-none marigold\'>Rawle\'s Coaching Journey</h2>\r\n\t\t\t<h2 class=\'display-1 d-none d-md-block marigold\'>Rawle\'s Coaching Journey</h2>\r\n\t\t</div><!--End of col-12-->\r\n\t</div><!--End of row-->\r\n\t<div class=\'row pb-3\' ng-repeat=\'blog in $ctrl.blogs | orderBy: reverse\' >\r\n\t\t<div class=\'col-12\'>\r\n\t\t\t<div class=\'card border-marigold\'>\r\n\t\t\t\t<div class=\'card-header\'>\r\n\t\t\t\t\t<div class=\'row\'>\r\n\t\t\t\t\t\t<div class=\'col-3 col-md-2\'>\r\n\t\t\t\t\t\t\t<img class=\'img-fluid\' ng-src=\'https://res.cloudinary.com/relentlessrawle/image/upload/v1516747302/whistle_yhdell.svg\'>\r\n\t\t\t\t\t\t</div><!--End of col-md-2-->\r\n\t\t\t\t\t\t<div class=\'col-9 col-md-7\'>\r\n\t\t\t\t\t\t\t<h3 class=\'d-sm-none denim\'>{{blog.title}}</h3>\r\n\t\t\t\t\t\t\t<h3 class=\'h1 pt-3 d-none d-sm-block d-md-none denim\'>{{blog.title}}</h3>\r\n\t\t\t\t\t\t\t<h3 class=\'display-4 pt-3 d-none d-md-block d-xl-none denim\'>{{blog.title}}</h3>\r\n\t\t\t\t\t\t\t<h3 class=\'display-1 pt-3 d-none d-xl-block denim\'>{{blog.title}}</h3>\r\n\t\t\t\t\t\t</div><!--End of col-md-7-->\r\n\t\t\t\t\t\t<div class=\'col-12 col-md-3\'>\r\n\t\t\t\t\t\t\t<p class=\'d-sm-none denim\'>{{blog.publishDate | date:\'mediumDate\'}}</p>\r\n\t\t\t\t\t\t\t<p class=\'h4 d-none d-sm-block d-md-none denim\'>{{blog.publishDate | date:\'mediumDate\'}}</p>\r\n\t\t\t\t\t\t\t<p class=\'h4 d-none d-md-block d-lg-none pt-5 denim\'>{{blog.publishDate | date:\'mediumDate\'}}</p>\r\n\t\t\t\t\t\t\t<p class=\'h4 d-none d-lg-block d-xl-none pt-4 denim\'>{{blog.publishDate | date:\'mediumDate\'}}</p>\r\n\t\t\t\t\t\t\t<p class=\'h2 d-none d-xl-block pt-5 denim\'>{{blog.publishDate | date:\'mediumDate\'}}</p>\r\n\t\t\t\t\t\t</div><!--End of col-md-3-->\r\n\t\t\t\t\t</div><!--End of row-->\r\n\t\t\t\t</div><!--End of card-header-->\r\n\t\t\t\t<div class=\'card-body\'>\r\n\t\t\t\t\t<p class=\'card-text denim d-sm-none\'>{{blog.body}}</p>\r\n\t\t\t\t\t<p class=\'card-text h3 denim d-none d-sm-block d-md-none\'>{{blog.body}}</p>\r\n\t\t\t\t\t<p class=\'card-text h1 denim d-none d-md-block\'>{{blog.body}}</p>\r\n\t\t\t\t</div><!--End of card body-->\r\n\t\t\t\t<div class=\'card-footer\'>\r\n\t\t\t\t\t<div class=\'row\'>\r\n\t\t\t\t\t\t<div class=\'col-12\'>\r\n\t\t\t\t\t\t\t<a class=\'float-right view-link\' data-toggle=\'collapse\' data-target="#commentDiv" role="button" aria-expanded="false" aria-controls="commentDiv"><u><span class=\'h4\'><i class="fa fa-comments" aria-hidden="true"></i> View Comments ({{blog.comments.length}})</span></u></a>\r\n\t\t\t\t\t\t</div><!--End of col-12-->\r\n\t\t\t\t\t\t<div class=\'col-12\'>\r\n\t\t\t\t\t\t\t<div class="collapse" id="commentDiv">\r\n\t\t\t\t\t\t\t  <div class="card card-body denim-bg mb-2 shadow-inset" ng-repeat=\'comment in blog.comments\'>\r\n\t\t\t\t\t\t\t    \t<p class=\'card-title screen h3\'>{{comment.username}}</p>\r\n\t\t\t\t\t\t\t    \t<p class=\'card-text screen\'>{{comment.comment}}</p> \r\n\t\t\t\t\t\t\t  </div><!--End of card-body-->\r\n\t\t\t\t\t\t\t</div><!--End of commentDiv-->\r\n\t\t\t\t\t\t</div><!--End of col-12-->\r\n\t\t\t\t\t</div><!--End of row-->\t\t\t\r\n\t\t\t\t</div><!--End of card footer-->\r\n\t\t\t</div><!--End of card-->\r\n\t\t</div><!--End of col-12-->\r\n\t\t<div class=\'col-12\'>\r\n\t\t\t<form class=\'steel-bg mt-1 pt-3 pl-2 pr-2 pb-2 rounded-bottom\' ng-submit="$ctrl.submitForm(blog._id)">\r\n\t\t\t\t<fieldset class=\'screen-bg p-1\' ng-disabled=\'$ctrl.isSubmitting\'>\r\n\t\t\t\t\t<fieldset class=\'text-center\'>\r\n\t\t\t\t\t\t<p class=\'h1 marigold\'>Add a Comment</p>\r\n\t\t\t\t\t\t<p class=\'marigold\'>Any abusive criticism will be deleted, think before you post</p>\r\n\t\t\t\t\t</fieldset>\r\n\t\t\t\t\t<fieldset class=\'screen-bg p-2\'>\r\n\t\t\t\t\t  \t\t<fieldset class=\'form-group\'>\r\n\t\t\t\t\t  \t\t\t<div class="input-group input-group-lg mb-3">\r\n\t\t\t\t\t\t\t\t  <input type="text" class="form-control form-control-sm denim" placeholder="Username (optional)" \r\n\t\t\t\t\t\t\t\t  ng-model="$ctrl.formData.username"\r\n\t\t\t\t\t\t\t\t  aria-label="username" aria-describedby="person-icon">\r\n\t\t\t\t\t\t\t\t  <div class="input-group-append">\r\n\t\t\t\t\t\t\t\t    <span class="input-group-text" id="person-icon"><i class=\'fa fa-user\' aria-hidden="true"></i></span>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  \t\t</fieldset>\r\n\t\t                    <fieldset class=\'form-group\'>\r\n\t\t\t\t\t\t\t\t  \t<label class=\'sr-only denim h3\' for=\'commentBody\'>Comment</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\'form-control\' type="text" id=\'projectDescription\' ng-model=\'$ctrl.formData.comment\' rows=\'3\'></textarea>\r\n\t\t\t\t\t  \t\t</fieldset>\r\n\t\t                        <!-- button will use auth.controller.js var stored in title\r\n\t\t                         which it receives from auth.config.js -->\r\n\t\t                        <button class="btn btn-sm btn-light float-right  bg-screen denim-btn" type="submit">\r\n\t\t                        \tSubmit\r\n\t\t                        </button>\r\n\t\t\t\t\t  </fieldset>\r\n\t\t\t\t</fieldset>\r\n\t\t\t</form>\r\n\t\t</div><!--End of col-12-->\r\n\t</div><!--End of row-->\r\n</div><!--End of container-fluid-->\r\n');
$templateCache.put('comment/comment.html','<div class=\'container-fluid marigold-bg comment-container\'>\r\n\t<div class=\'row\'>\r\n\t\t<div class=\'col-12 p-3\'>\r\n\t\t\t<button class=\'btn btn-lg screen-bg denim-btn pull-right\' ng-click="$ctrl.back()">Back</button>\r\n\t\t</div><!--End of col-12-->\r\n\t</div><!--End of row-->\r\n\t<div class=\'row\'>\r\n\t\t<div class=\'col-12 col-md-8 offset-md-2\'>\r\n\t\t\t<div class="card denim-bg shadow-inset m-2" ng-repeat="comment in $ctrl.blog.comments">\r\n\t\t\t\t<div class=\'card-header\'>\r\n\t\t\t\t\t<div class=\'row\'>\r\n\t\t\t\t\t\t<div class=\'col-9\'>\r\n\t\t\t\t\t\t\t<h3 class=\'card-title screen\'>{{comment.username}}</h3>\r\n\t\t\t\t\t\t</div><!--End of col-9-->\r\n\t\t\t\t\t\t<div class=\'col-3\'>\r\n\t\t\t\t\t\t\t<button type="button" class="close float-right marigold" aria-label="Close" ng-click="$ctrl.deleteComment($ctrl.blog._id, comment._id)">\r\n\t\t\t\t\t\t\t\t<span aria-hidden="true">&times;</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div><!--End of col-3-->\r\n\t\t\t\t\t</div><!--End of row-->\r\n\t\t\t\t</div><!--End of card-header-->\r\n\t\t\t  \t<div class="card-body">\r\n\t\t\t    \t<p class=\'care-text screen\'>{{comment.comment}}</p>\r\n\t\t\t  \t</div>\r\n\t\t\t</div><!--End of card-->\r\n\t\t</div><!--End of offset-md-2-->\r\n\t</div><!--End of row-->\r\n</div>\r\n');
$templateCache.put('components/film-list.html','<div id=\'film\' class=\'container-fluid project-container\'>\r\n\t<div class=\'row\' ng-repeat="film in $ctrl.films">\r\n\t\t<div class=\'col-12 col-md-6 pt-3 filmProjectBox\'>\r\n\t\t\t<div class=\'row\'>\r\n\t\t\t\t<h2 class=\'sr-only\'>Film Projects</h2>\r\n\t\t\t\t<div class=\'col-3\'>\r\n\t\t\t\t\t<img class=\'web-bullet img-fluid\' src="https://res.cloudinary.com/relentlessrawle/image/upload/c_scale,q_100,w_150/v1515783507/001-ticket_n6dh11.svg">\r\n\t\t\t\t</div><!--End of col-sm-3-->\r\n\t\t\t\t<div class=\'col-9\'>\r\n\t\t\t\t\t<h3 class=\'h2 d-block d-sm-none pt-1\'>{{film.title}}</h3>\r\n\t\t\t\t\t<p class=\'display-3 d-none d-sm-block d-md-none\'>{{film.title}}</p>\r\n\t\t\t\t\t<p class=\'h1 d-none d-md-block d-lg-none pt-2\'>{{film.title}}</p>\r\n\t\t\t\t\t<p class=\'display-4 d-none d-lg-block pt-3\'>{{film.title}}</p>\r\n\t\t\t\t</div><!--End of col-sm-9-->\r\n\t\t\t</div><!--End of row-->\r\n\t\t\t<div class=\'row\'>\r\n\t\t\t\t<div class=\'col-3\'>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\'col-9\'>\r\n\t\t\t\t\t<img class=\'cal-glyph\' src="https://res.cloudinary.com/relentlessrawle/image/upload/q_100/v1515720530/match_pk0wfk.svg">\r\n\t\t\t\t\t<span class=\'d-inline-block d-xl-none\'>{{film.publishDate|date:\'MMM\'}} \'{{film.publishDate|date:"yy"}}</span>\r\n\t\t\t\t\t<span class=\'h1 d-none d-xl-inline-block\'>{{film.publishDate|date:\'MMM\'}} \'{{film.publishDate|date:"yy"}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\'row pt-3\'>\r\n\t\t\t\t<div class=\'col-12 text-center\'>\r\n\t\t\t\t\t<p class=\'d-xl-none\'>{{film.description}}</p>\r\n\t\t\t\t\t<p class=\'h2 d-none d-xl-block\'>{{film.description}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\'col-12 col-md-6 pb-3 screen-bg\'>\r\n\t\t\t<p class=\'sr-only\'>Screen Box</p>\r\n\t\t\t<div class="embed-responsive embed-responsive-16by9 mt-5">\r\n\t\t\t  <iframe class="embed-responsive-item" ng-src="{{film.linkToVideo | trusted}}" allowfullscreen></iframe>\r\n\t\t\t</div>\r\n\t\t</div><!--marigoldBox-->\r\n\t</div>\r\n</div>');
$templateCache.put('components/web-list.html','<div id=\'web\' class=\'container-fluid project-container\'>\r\n\t<div class=\'row\' ng-repeat="website in $ctrl.websites">\r\n\t\t<div class=\'col-12 col-md-6 d-none d-md-block marigold-bg\'>\r\n\t\t\t<p class=\'sr-only\'>Marigold Box</p>\r\n\t\t</div><!--marigoldBox-->\r\n\t\t<div class=\'col-12 col-md-6 pt-3 webProjectBox\'>\r\n\t\t\t<h2 class=\'sr-only\'>Web Projects</h2>\r\n\t\t\t<div class=\'row\'>\r\n\t\t\t\t<div class=\'col-3\'>\r\n\t\t\t\t\t<img class=\'web-bullet img-fluid\' src="https://res.cloudinary.com/relentlessrawle/image/upload/c_scale,q_100,w_150/v1515711777/pennant_z0xwyy.svg">\r\n\t\t\t\t</div><!--End of col-sm-3-->\r\n\t\t\t\t<div class=\'col-9\'>\r\n\t\t\t\t\t<h3 class=\'h1 d-block d-sm-none\'>{{website.title}}</h3>\r\n\t\t\t\t\t<p class=\'display-2 d-none d-sm-block d-md-none\'>{{website.title}}</p>\r\n\t\t\t\t\t<p class=\'display-4 d-none d-md-block d-lg-none\'>{{website.title}}</p>\r\n\t\t\t\t\t<p class=\'display-2 d-none d-lg-block\'>{{website.title}}</p>\r\n\t\t\t\t</div><!--End of col-sm-9-->\r\n\t\t\t</div><!--End of row-->\r\n\t\t\t<div class=\'row\'>\r\n\t\t\t\t<div class=\'col-3\'>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\'col-9\'>\r\n\t\t\t\t\t<img class=\'cal-glyph\' src="https://res.cloudinary.com/relentlessrawle/image/upload/q_100/v1515720530/match_pk0wfk.svg">\r\n\t\t\t\t\t<span class=\'d-inline-block d-xl-none\'>{{website.startDate|date: "MMM"}} \'{{website.startDate|date:"yy"}} - {{website.endDate|date:"MMM"}} \'{{website.endDate|date:"yy"}}</span>\r\n\t\t\t\t\t<span class=\'h1 d-none d-xl-inline-block\'>{{website.startDate|date:"MMM"}} \'{{website.startDate|date:"yy"}} - {{website.endDate|date:"MMM"}} \'{{website.endDate|date:"yy"}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\'row pt-3\'>\r\n\t\t\t\t<div class=\'col-12 text-center\'>\r\n\t\t\t\t\t<p class=\'d-xl-none\'>{{website.description}}</p>\r\n\t\t\t\t\t<p class=\'h2 d-none d-xl-block\'>{{website.description}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\'row pt-2\'>\r\n\t\t\t\t<div class=\'col-12 col-md-6 text-center\'>\r\n\t\t\t\t\t<a href="{{website.linkToWeb}}"><u class=\'view-link\'><span class=\'h4\'><i class=\'fa fa-eye\' aria-hidden="true"></i> View on the Web</span></u></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\'col-12 col-md-6 text-center\'>\r\n\t\t\t\t\t<a href="{{website.linkToGithub}}"><u class=\'view-link\'><span class=\'h4\'><i class=\'fa fa-github\' aria-hidden="true"></i> View on Github</span></u></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\'row pt-3\'>\r\n\t\t\t\t<ul class="nav nav-pills">\r\n\t\t\t\t  <li class="nav-item m-1 animated technologies" ng-repeat="item in website.listOfTechnologies track by $index">\r\n\t\t\t\t    <a class="nav-link btn btn-sm btn-warning disabled" href="#">{{website.listOfTechnologies[$index]}}</a>\r\n\t\t\t\t  </li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div><!--Web Project Container-->\r\n\t</div><!--End of row-->\r\n</div><!--End of container-->');
$templateCache.put('dashboard/dashboard.html','<div class=\'container-fluid steel-bg\'>\r\n\t<div class=\'row\'>\r\n\t\t<div class=\'col-12 col-xl-5\'>\r\n\t\t\t<div class=\'row\'>\r\n\t\t\t\t<div class=\'col-12 p-1\'>\r\n\t\t\t\t\t<h2 class=\'marigold\'>Web Projects</h2>\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\'col-12 col-xl-4 pb-2\'  ng-repeat="website in $ctrl.websites">\r\n\t\t\t\t\t<div class=\'card\'>\r\n\t\t\t\t\t\t<div class=\'card-header\'>\r\n\t\t\t\t\t\t\t<div class=\'row\'>\r\n\t\t\t\t\t\t\t\t<div class=\'col-9\'>\r\n\t\t\t\t\t\t\t\t\t<p class=\'h5\'>{{website.title}}</p>\r\n\t\t\t\t\t\t\t\t</div><!--End of col-9-->\r\n\t\t\t\t\t\t\t\t<div class=\'col-3\'>\r\n\t\t\t\t\t\t\t\t\t<button type="button" class="close" aria-label="Close" ng-click="$ctrl.deleteProject(\'web\', website._id)">\r\n\t\t\t\t\t\t\t\t\t  <span aria-hidden="true">&times;</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div><!--End of col-3-->\r\n\t\t\t\t\t\t\t</div><!--End of row-->\r\n\t\t\t\t\t\t</div><!--End of card-header-->\r\n\t\t\t\t\t\t<img class="card-img-top" ng-src="{{website.linkImage}}" alt="Card image cap">\r\n\t\t\t\t\t\t<div class=\'card-body\'>\r\n\t\t\t\t\t\t\t<p class=\'card-text\'>{{website.description}}</p>\r\n\t\t\t\t\t\t</div><!--End of card-body-->\r\n\t\t\t\t\t\t<div class=\'card-footer\'>\r\n\t\t\t\t\t\t\t<button type="button" class="btn btn-dark btn-sm float-right" ui-sref="app.editor({type:\'website\', slug: website._id})">Edit</button>\r\n\t\t\t\t\t\t</div><!--End of card-footer-->\r\n\t\t\t\t\t</div><!--End of card-->\r\n\t\t\t\t</div><!--End of col-xl-4-->\t\t\t\t  \r\n\t\t\t</div>\r\n\t\t\t<div class=\'row\'>\r\n\t\t\t\t<div class=\'col-12 p-1\'>\r\n\t\t\t\t\t<h2 class=\'marigold\'>Film Projects</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\'col-12 col-xl-4 pb-2\' ng-repeat="film in $ctrl.films">\r\n\t\t\t\t\t<div class=\'card\'>\r\n\t\t\t\t\t\t<div class=\'card-header\'>\r\n\t\t\t\t\t\t\t<div class=\'row\'>\r\n\t\t\t\t\t\t\t\t<div class=\'col-9\'>\r\n\t\t\t\t\t\t\t\t\t<p class=\'h5\'>{{film.title}}</p>\r\n\t\t\t\t\t\t\t\t</div><!--End of col-9-->\r\n\t\t\t\t\t\t\t\t<div class=\'col-3\'>\r\n\t\t\t\t\t\t\t\t\t<button type="button" class="close" aria-label="Close" ng-click="$ctrl.deleteProject(\'film\', film._id)">\r\n\t\t\t\t\t\t\t\t\t  <span aria-hidden="true">&times;</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div><!--End of col-3-->\r\n\t\t\t\t\t\t\t</div><!--End of row-->\r\n\t\t\t\t\t\t</div><!--End of card-header-->\r\n\t\t\t\t\t\t<img class="card-img-top" ng-src="{{film.linkImage}}">\r\n\t\t\t\t\t\t<div class=\'card-body\'>\r\n\t\t\t\t\t\t\t<p class=\'card-text\'>{{film.description}}</p>\r\n\t\t\t\t\t\t</div><!--End of card-body-->\r\n\t\t\t\t\t\t<div class=\'card-footer\'>\r\n\t\t\t\t\t\t\t<button type="button" ui-sref="app.editor({type:\'film\', slug: film._id})" class="btn btn-dark btn-sm float-right">Edit</button>\r\n\t\t\t\t\t\t</div><!--End of card-footer-->\r\n\t\t\t\t\t</div><!--End of card-->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\'col-12 col-xl-7\'>\r\n\t\t\t<div class=\'row\'>\r\n\t\t\t\t<div class=\'col-12 col-xl-9\'>\r\n\t\t\t\t\t<div class=\'row\'>\r\n\t\t\t\t\t\t<div class=\'col-12 p-1\'>\r\n\t\t\t\t\t\t\t<h2 class=\'marigold\'>Blogs</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\'col-12 col-xl-4 pb-2\' ng-repeat="blog in $ctrl.blogs">\r\n\t\t\t\t\t\t\t<div class=\'card\'>\r\n\t\t\t\t\t\t\t\t<div class=\'card-header\'>\r\n\t\t\t\t\t\t\t\t\t<div class=\'row\'>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\'col-9\'>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\'h5\'>{{blog.title}}</p>\r\n\t\t\t\t\t\t\t\t\t\t</div><!--End of col-9-->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\'col-3\'>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="close" aria-label="Close" ng-click="$ctrl.deleteProject(\'blog\', blog._id)">\r\n\t\t\t\t\t\t\t\t\t\t\t  <span aria-hidden="true">&times;</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div><!--End of col-3-->\r\n\t\t\t\t\t\t\t\t\t</div><!--End of row-->\r\n\t\t\t\t\t\t\t\t</div><!--End of card-header-->\r\n\t\t\t\t\t\t\t\t<div class=\'card-body\'>\r\n\t\t\t\t\t\t\t\t\t<p class=\'card-text\'>{{blog.publishDate | date:\'mediumDate\'}}</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\'card-text\'>{{blog.body | limitTo: 144:0}}</p>\r\n\t\t\t\t\t\t\t\t</div><!--End of card-body-->\r\n\t\t\t\t\t\t\t\t<div class=\'card-footer\'>\r\n\t\t\t\t\t\t\t\t\t<div class=\'row\'>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\'col-9\'>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type="button" ui-sref="app.comment({slug: blog._id})" class="btn btn-link"><i class=\'fa fa-comments\' aria-hidden="true"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t</div><!--End of col-9-->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\'col-3\'>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type="button" ui-sref="app.editor({type:\'blog\', slug: blog._id})" class="btn btn-dark btn-sm float-right">Edit</button>\r\n\t\t\t\t\t\t\t\t\t\t</div><!--End of col-3-->\r\n\t\t\t\t\t\t\t\t\t</div><!--End of row-->\r\n\t\t\t\t\t\t\t\t</div><!--End of card-footer-->\r\n\t\t\t\t\t\t\t</div><!--End of card-->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div><!--End of row-->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\'col-12 col-xl-3\'>\r\n\t\t\t\t\t<div class=\'btn-group\' role="group" aria-label="Button group with nested dropdown">\r\n\t\t\t\t\t\t<div class="btn-group" role="group">\r\n\t\t\t\t\t\t\t<div class="dropdown mt-5">\r\n\t\t\t\t\t\t\t  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n\t\t\t\t\t\t\t    Add...\r\n\t\t\t\t\t\t\t  </button>\r\n\t\t\t\t\t\t\t  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">\r\n\t\t\t\t\t\t\t    <button ui-sref="app.editor({type:\'website\'})" class="dropdown-item denim-btn" type="button">New Web Project</button>\r\n\t\t\t\t\t\t\t    <button ui-sref="app.editor({type:\'film\'})" class="dropdown-item denim-btn" type="button">New Film Project</button>\r\n\t\t\t\t\t\t\t    <button ui-sref="app.editor({type:\'blog\'})" class="dropdown-item denim-btn" type="button">New Blog Post</button>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\'mt-5\'>\r\n\t\t\t\t\t\t\t<button class=\'btn btn-danger\' ng-click="$ctrl.logout()">Logout</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div><!--End of row-->\r\n</div><!--End of container-->');
$templateCache.put('editor/editor.html','<div class=\'container-fluid steel-bg p-5 editor-container\'>\r\n\t<div class=\'row\'>\r\n\t\t<div class=\'col-12 p-3\'>\r\n\t\t\t<button class=\'btn btn-lg screen-bg denim-btn pull-right\' ng-click="$ctrl.back()">Back</button>\r\n\t\t</div><!--End of col-12-->\r\n\t</div><!--End of row-->\r\n\t<form ng-submit="$ctrl.submitForm()" ng-show="$ctrl.type == \'website\'">\r\n\t\t<fieldset class=\'screen-bg p-5\' ng-disabled=\'$ctrl.isSubmitting\'>\r\n\t\t\t<div class=\'row p-3\'>\r\n\t\t\t\t<div class=\'col-12 col-xl-5\'>\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'projectTitle\'>Title</label>\r\n\t\t\t\t\t\t<input class=\'form-control\' type="text" id=\'projectTitle\' ng-model=\'$ctrl.project.title\'>\r\n\t\t\t\t\t</div><!--End of form-group-->\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'projectDescription\'>Description</label>\r\n\t\t\t\t\t\t<textarea class=\'form-control\' type="text" id=\'projectDescription\' ng-model=\'$ctrl.project.description\' rows=\'6\'></textarea>\r\n\t\t\t\t\t</div><!--End of form-group-->\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'sr-only\'>Technologies</label>\r\n\t\t\t\t\t\t<ul class=\'nav nav-pills\'>\r\n\t\t\t\t\t\t\t<li class=\'nav-item m-1 btn btn-warning\' ng-repeat="item in $ctrl.project.listOfTechnologies">{{item}} <i class="fa fa-times-circle-o" aria-hidden="true" ng-click=\'$ctrl.removeTag(item)\'></i></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div><!--End of form-group-->\r\n\t\t\t\t</div><!--End of col-xl-5-->\r\n\t\t\t\t<div class=\'col-12 col-xl-5\'>\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'linkImage\'>Link to Image</label>\r\n\t\t\t\t\t\t<input  class=\'form-control\'  type="text" id=\'linkImage\' ng-model=\'$ctrl.project.linkImage\'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'linkToWeb\'>Link to Website</label>\r\n\t\t\t\t\t\t<input  class=\'form-control\'  type="text" id=\'linkToWeb\' ng-model=\'$ctrl.project.linkToWeb\'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'linkToGithub\'>Link to Github</label>\r\n\t\t\t\t\t\t<input  class=\'form-control\'  type="text" id=\'linkToGithub\' ng-model=\'$ctrl.project.linkToGithub\'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'listOfTechnologies\'>Technology Input</label>\r\n\t\t\t\t\t\t<input  class=\'form-control\'  type="text" id=\'listOfTechnologies\' ng-model="$ctrl.tagField" ng-keyup="$event.keyCode == 186 && $ctrl.addTag()" placeholder="add new technologies here">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\'col-12 col-xl-2\'>\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'startDate\'> Start Date</label>\r\n\t\t\t\t\t\t<input class=\'form-control\' type="date" id=\'startDate\' ng-model="$ctrl.project.startDate">\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'endDate\'> End Date</label>\r\n\t\t\t\t\t\t<input class=\'form-control\' type="date" id=\'endDate\' ng-model="$ctrl.project.endDate">\r\n\t\t\t\t\t</div><!--End of form-group-->\r\n\t\t\t\t</div><!--End of col-xl-2-->\r\n\t\t\t</div><!--End of row-->\r\n\t\t\t<div class=\'row\'>\r\n\t\t\t\t<div class=\'col-12\'>\r\n\t\t\t\t\t<button class=\'mr-5 btn btn-lg float-right bg-screen denim-btn\' ng-click=\'$ctrl.submit()\'>Save</button>\r\n\t\t\t\t</div><!--End of col-12-->\r\n\t\t\t</div><!--End of row-->\t\r\n\t\t</fieldset>\r\n\t</form>\r\n\r\n\t<form ng-submit=\'$ctrl.submitForm()\' ng-show="$ctrl.type == \'film\'">\r\n\t\t<fieldset class=\'screen-bg p-5\' ng-disabled=\'$ctrl.isSubmitting\'>\r\n\t\t\t<div class=\'row p-3\'>\r\n\t\t\t\t<div class=\'col-12 col-xl-5\'>\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'projectTitle\'>Title</label>\r\n\t\t\t\t\t\t<input class=\'form-control\' type="text" id=\'projectTitle\' ng-model=\'$ctrl.project.title\'>\r\n\t\t\t\t\t</div><!--End of form-group-->\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'projectDescription\'>Description</label>\r\n\t\t\t\t\t\t<textarea class=\'form-control\' type="text" id=\'projectDescription\' ng-model=\'$ctrl.project.description\' rows=\'6\'></textarea>\r\n\t\t\t\t\t</div><!--End of form-group-->\r\n\t\t\t\t</div><!--End of col-xl-5-->\r\n\t\t\t\t<div class=\'col-12 col-xl-5\'>\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'linkImage\'>Link to Image</label>\r\n\t\t\t\t\t\t<input  class=\'form-control\'  type="text" id=\'linkImage\' ng-model=\'$ctrl.project.linkImage\'>\r\n\t\t\t\t\t</div><!--End of form-group-->\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'linkToVideo\'>Link to Video</label>\r\n\t\t\t\t\t\t<input  class=\'form-control\'  type="text" id=\'linkToVideo\' ng-model=\'$ctrl.project.linkToVideo\'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div><!--End of col-xl-5-->\r\n\t\t\t\t<div class=\'col-12 col-xl-2\'>\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'publishDate\'>Publish Date</label>\r\n\t\t\t\t\t\t<input class=\'form-control\' type="date" id=\'publishDate\' ng-model=\'$ctrl.project.publishDate\'>\r\n\t\t\t\t\t</div><!--End of form-group-->\r\n\t\t\t\t</div><!--End of col-xl-2-->\r\n\t\t\t</div><!--End of row-->\r\n\t\t\t<div class=\'row\'>\r\n\t\t\t\t<div class=\'col-12\'>\r\n\t\t\t\t\t<button class=\'mr-5 btn btn-lg float-right bg-screen denim-btn\' ng-click=\'$ctrl.submit()\'>Save</button>\r\n\t\t\t\t</div><!--End of col-12-->\r\n\t\t\t</div><!--End of row-->\r\n\t\t</fieldset>\r\n\t</form>\r\n\r\n\t<form ng-submit=\'$ctrl.submitForm()\' ng-show="$ctrl.type == \'blog\'">\r\n\t\t<fieldset class=\'screen-bg p-5\' ng-disabled=\'$ctrl.isSubmitting\'>\r\n\t\t\t<div class=\'row p-3\'>\r\n\t\t\t\t<div class=\'col-12 col-xl-5\'>\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'projectTitle\'>Title</label>\r\n\t\t\t\t\t\t<input class=\'form-control\' type="text" id=\'projectTitle\' ng-model=\'$ctrl.project.title\'>\r\n\t\t\t\t\t</div><!--End of form-group-->\r\n\t\t\t\t\t<div class=\'form-group\'>\r\n\t\t\t\t\t\t<label class=\'denim h3\' for=\'projectDescription\'>Description</label>\r\n\t\t\t\t\t\t<textarea class=\'form-control\' type="text" id=\'projectDescription\' ng-model=\'$ctrl.project.body\' rows=\'6\'></textarea>\r\n\t\t\t\t\t</div><!--End of form-group-->\r\n\t\t\t\t</div><!--End of col-xl-5-->\r\n\t\t\t</div><!--End of row-->\r\n\t\t\t<div class=\'row\'>\r\n\t\t\t\t<div class=\'col-12\'>\r\n\t\t\t\t\t<button class=\'mr-5 btn btn-lg float-right bg-screen denim-btn\' ng-click=\'$ctrl.submit()\'>Save</button>\r\n\t\t\t\t</div><!--End of col-12-->\r\n\t\t\t</div><!--End of row-->\r\n\t\t</fieldset>\r\n\t</form>\r\n</div><!--End of steel-bg-->');
$templateCache.put('home/home.html','<div class="jumbotron jumbotron-fluid jumbotron-home">\r\n  <div class="container">\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\'container-fluid\'>\r\n\t<div class=\'row\'>\r\n\t\t<div class=\'col-12 col-md-11 offset-md-1 col-xl-10 offset-xl-2\'>\r\n\t\t\t<p class=\'display-1 text-center text-sm-left animated fadeInLeft delay\'>Rawle Juglal</p>\r\n\t\t</div>\r\n\t\t<div class=\'col-12 col-xl-10 offset-xl-1\'>\r\n\t\t\t<p class=\'display-4 text-center text-sm-left animated fadeInRight delay\'>"It\'s hard to beat someone who never quits"</p>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n</div>\r\n\r\n<web-list ></web-list>\r\n<film-list></film-list>');
$templateCache.put('layout/app-view.html','<app-header></app-header>\r\n\r\n<div class=\'content\' ui-view></div>\r\n\r\n<app-footer></app-footer>');
$templateCache.put('layout/footer.html','<footer>\r\n    <div class="container-fluid denim-bg">\r\n        <ul class="list-unstyled pt-3">\r\n            <li><a class=\'text-white f6\' ui-sref="app.login"><h2 class=\'d-none\'>Login</h2>LOGIN</a></li>\r\n        </ul>\r\n        \r\n        <div class="row text-white f6">\r\n            <div class="col-sm-6 ml-1">\r\n            </div><!-- col-sm-6-->\r\n            <div class="col-sm-5">\r\n                <span class=\'float-right\'>\r\n                    Developed By: <a class=\'text-white f6\' href="http://www.rawlejuglal.me">rawlejuglal.me</a>.\r\n                </span>\r\n            </div>\r\n        </div><!--End of row -->\r\n        \r\n    </div>\r\n</footer>');
$templateCache.put('layout/header.html','<nav class="navbar fixed-top navbar-expand-md navbar-dark denim-bg">\r\n  <a class="navbar-brand" href="#">\r\n    <img src="https://res.cloudinary.com/relentlessrawle/image/upload/q_100/v1515711657/Logo_e1thd9.png" width="30" height="30" alt="">\r\n  </a>\r\n  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\r\n    <span class="navbar-toggler-icon"></span>\r\n  </button>\r\n\r\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\r\n    <ul class=\'navbar-nav ml-auto\'>\r\n      <li class=\'nav-item h5\'><a  class=\'nav-link mt-md-3 screen\' href="#web" du-smooth-scroll>Web Projects</a></li>\r\n      <li class=\'nav-item h5\'><a  class=\'nav-link mt-md-3 screen\' href="#film" du-smooth-scroll>Film Projects</a></li>\r\n      <li class=\'nav-item h5\'><a  class=\'nav-link mt-md-3 screen\' ui-sref=\'app.blog\'>Blog</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>');
$templateCache.put('login/login.html','<div class=\'container-fluid login-container mt-5\'>\r\n\t<div class=\'row mt-5\'>\r\n\t\t<div class=\'col-12 col-sm-6 offset-sm-3 col-md-4 offset-md-4 mt-5 mb-5\'>\r\n\t\t\t<form class=\'steel-bg mt-5 pt-3 pl-2 pr-2 pb-2 rounded-bottom animated bounceInLeft\' ng-submit="$ctrl.submitForm()">\r\n\t\t\t\t<fieldset class=\'text-center\'>\r\n\t\t\t\t\t<p class=\'h1 marigold\'>LOGIN</p>\r\n\t\t\t\t\t<p class=\'marigold\'>If you\'re not an admin you are in the wrong place</p>\r\n\t\t\t\t</fieldset>\r\n\t\t\t\t<fieldset class=\'screen-bg p-2\'>\r\n\t\t\t\t\t<fieldset ng-disabled="$ctrl.isSubmitting">\r\n\t\t\t\t  \t\t<fieldset class=\'form-group\'>\r\n\t\t\t\t  \t\t\t<div class="input-group input-group-lg mb-3">\r\n\t\t\t\t\t\t\t  <input type="text" class="form-control form-control-lg denim" placeholder="Username" \r\n\t\t\t\t\t\t\t  ng-model="$ctrl.formData.username" required\r\n\t\t\t\t\t\t\t  aria-label="username" aria-describedby="person-icon">\r\n\t\t\t\t\t\t\t  <div class="input-group-append">\r\n\t\t\t\t\t\t\t    <span class="input-group-text" id="person-icon"><i class=\'fa fa-user\' aria-hidden="true"></i></span>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t  \t\t</fieldset>\r\n\t                    <fieldset class=\'form-group\'>\r\n\t\t\t\t  \t\t\t<div class="input-group input-group-lg mb-3">\r\n\t\t\t\t\t\t\t  <input type="text" class="form-control form-control-lg denim" placeholder="Password" \r\n\t\t\t\t\t\t\t  ng-model="$ctrl.formData.password" required\r\n\t\t\t\t\t\t\t  aria-label="password" aria-describedby="lock-icon">\r\n\t\t\t\t\t\t\t  <div class="input-group-append">\r\n\t\t\t\t\t\t\t    <span class="input-group-text" id="lock-icon"><i class=\'fa fa-lock\' aria-hidden="true"></i></span>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t  \t\t</fieldset>\r\n\t                        <!-- button will use auth.controller.js var stored in title\r\n\t                         which it receives from auth.config.js -->\r\n\t                        <button class="btn btn-sm btn-light float-right" type="submit" ng-bind="$ctrl.title">\r\n\t                        </button>\r\n\t\t\t\t  </fieldset>\r\n\t\t\t\t</fieldset>\t\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>');}]);