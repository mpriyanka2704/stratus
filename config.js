//     Config.js 1.0

//     Copyright (c) 2016 by Sitetheory, All Rights Reserved
//
//     All information contained herein is, and remains the
//     property of Sitetheory and its suppliers, if any.
//     The intellectual and technical concepts contained herein
//     are proprietary to Sitetheory and its suppliers and may be
//     covered by U.S. and Foreign Patents, patents in process,
//     and are protected by trade secret or copyright law.
//     Dissemination of this information or reproduction of this
//     material is strictly forbidden unless prior written
//     permission is obtained from Sitetheory.
//
//     For full details and documentation:
//     http://docs.sitetheory.io

// Configure Require.js
// -------------

/* Gather Development Information */
var dev = (typeof document.cookie === 'string' && document.cookie.indexOf('env=') !== -1);
var local = (typeof document.cookie === 'string' && document.cookie.indexOf('local=') !== -1) || true;
var suffix = (dev) ? '' : '.min';
var dashSuffix = (dev) ? '' : '-min';
var directory = (dev) ? '' : 'min/';
var cacheTime = cacheTime || '1';

/* Deployment Customization */
var cdn = '/';
var relative = '';
var bundle = '';

// Begin Config Object
requirejs.config({

    // Connection Settings
    waitSeconds: 30,

    // Cache Busting
    urlArgs: 'v=' + cacheTime,

    // Version Location (Disabled During Beta Testing)
    baseUrl: ((dev || local) ? '/' : cdn) + relative,

    // Dependencies
    shim: {
        /* Angular */
        angular: {
            exports: 'angular'
        },
        'angular-aria': { deps: ['angular'] },
        'angular-animate': { deps: ['angular'] },
        'angular-messages': { deps: ['angular'] },
        'angular-material': {
            deps: [
                'angular-aria',
                'angular-animate',
                'angular-messages'
            ]
        },
        'angular-file-upload': { deps: ['angular'] },
        'angular-sanitize': { deps: ['angular'] },

        // Charts
        'chart.js': {
            deps: ['angular', 'chart']
        },

        /* Backbone */
        'backbone.relational': { deps: ['backbone'] },

        /* jQuery */
        'jquery-cookie': { deps: ['zepto'] },
        gridster: { deps: ['zepto'] },
        selectize: { deps: ['zepto'] },
        timeago: { deps: ['zepto'] },
        watch: { deps: ['zepto'] },
        masonry: { deps: ['zepto'] },

        /* Froala */
        'froala-align': { deps: ['froala'] },
        'froala-char-counter': { deps: ['froala'] },
        'froala-code-beautifier': { deps: ['froala'] },
        'froala-code-view': { deps: ['froala'] },
        'froala-colors': { deps: ['froala'] },
        'froala-draggable': { deps: ['froala'] },
        'froala-emoticons': { deps: ['froala'] },
        'froala-entities': { deps: ['froala'] },
        'froala-file': { deps: ['froala'] },
        'froala-font-family': { deps: ['froala'] },
        'froala-font-size': { deps: ['froala'] },
        'froala-forms': { deps: ['froala'] },
        'froala-fullscreen': { deps: ['froala'] },
        'froala-help': { deps: ['froala'] },
        'froala-image': { deps: ['froala'] },
        'froala-image-manager': { deps: ['froala', 'froala-image'] },
        'froala-inline-style': { deps: ['froala'] },
        'froala-line-breaker': { deps: ['froala'] },
        'froala-link': { deps: ['froala'] },
        'froala-lists': { deps: ['froala'] },
        'froala-paragraph-format': { deps: ['froala'] },
        'froala-paragraph-style': { deps: ['froala'] },
        'froala-quick-insert': { deps: ['froala'] },
        'froala-quote': { deps: ['froala'] },
        'froala-save': { deps: ['froala'] },
        'froala-special-characters': { deps: ['froala'] },
        'froala-table': { deps: ['froala'] },
        'froala-url': { deps: ['froala'] },
        'froala-video': { deps: ['froala'] },
        'angular-froala': { deps: ['angular', 'froala'] },
        'angular-countUp': { deps: ['angular', 'countUp'] },
        'angular-scrollSpy': { deps: ['angular'] },

        /* Bootstrap */
        'bootstrap-toggle': { deps: ['bootstrap'] },

        /* Calendar */
        fullcalendar: {
            deps: [
                'zepto',
                'moment'
            ]
        },

        /* Sitetheory Custom */
        'backbone.d3view': {
            deps: [
                'backbone',
                'd3'
            ]
        },
        bootbox: { deps: ['bootstrap'] },
        datetimepicker: {
            deps: [
                'bootstrap',
                'moment'
            ]
        }
        /**
         'jquery-toaster': { deps: ['zepto'] },
         /**/
    },

    // Internal Mapping
    map: {
        // Internal Injection should only be enabled if there
        // is more than one version of jQuery present in this
        // instance of Require.js.
        /**
         '*': { 'jquery': 'jquery-private' },
         'jquery-private': { 'jquery': 'jquery' }
         /**/
    },

    // Package Directories
    packages: [
        /**
         {
             name: 'stratus',
             location: bundle + 'stratus',
             main: 'stratus'
         },
         /**/
        {
            name: 'codemirror',
            location: bundle + 'stratus/bower_components/codemirror',
            main: 'lib/codemirror'
        }
    ],

    // Relative Paths
    paths: {
        /* Require.js Plugins */
        text: bundle + 'stratus/bower_components/text/text',

        /* Stratus Core Library */
        stratus: bundle + 'stratus/stratus' + suffix,

        /* Stratus Core Collections */
        'stratus.collections.generic': bundle + 'stratus/collections/generic' + suffix,

        /* Stratus Core Models */
        'stratus.models.generic': bundle + 'stratus/models/generic' + suffix,

        /* Stratus Core Routers */
        'stratus.routers.generic': bundle + 'stratus/routers/generic' + suffix,
        'stratus.routers.version': bundle + 'stratus/routers/version' + suffix,

        /* Stratus Controllers */
        'stratus.controllers.generic': bundle + 'stratus/controllers/generic' + suffix,

        /* Stratus Core Components */
        'stratus.components.asset': bundle + 'stratus/components/asset' + suffix,
        'stratus.components.base': bundle + 'stratus/components/base' + suffix,
        'stratus.components.dateTime': bundle + 'stratus/components/dateTime' + suffix,
        'stratus.components.delete': bundle + 'stratus/components/delete' + suffix,
        'stratus.components.facebook': bundle + 'stratus/components/facebook' + suffix,
        'stratus.components.help': bundle + 'stratus/components/help' + suffix,
        'stratus.components.mediaSelector': bundle + 'stratus/components/mediaSelector' + suffix,
        'stratus.components.optionValue': bundle + 'stratus/components/optionValue' + suffix,
        'stratus.components.pagination': bundle + 'stratus/components/pagination' + suffix,
        'stratus.components.permission': bundle + 'stratus/components/permission' + suffix,
        'stratus.components.publish': bundle + 'stratus/components/publish' + suffix,
        'stratus.components.tweet': bundle + 'stratus/components/tweet' + suffix,
        'stratus.components.upload': bundle + 'stratus/components/upload' + suffix,

        /* Stratus Core Directives */
        'stratus.directives.base': bundle + 'stratus/directives/base' + suffix,
        'stratus.directives.trigger': bundle + 'stratus/directives/trigger' + suffix,

        /* Stratus Core Filters */
        'stratus.filters.gravatar': bundle + 'stratus/filters/gravatar' + suffix,
        'stratus.filters.moment': bundle + 'stratus/filters/moment' + suffix,
        'stratus.filters.truncate': bundle + 'stratus/filters/truncate' + suffix,

        /* Stratus Core Services */
        'stratus.services.model': bundle + 'stratus/services/model' + suffix,
        'stratus.services.collection': bundle + 'stratus/services/collection' + suffix,
        'stratus.services.registry': bundle + 'stratus/services/registry' + suffix,

        /* Stratus Core Views */
        'stratus.views.base': bundle + 'stratus/views/base' + suffix,

        /* Stratus Core Widgets */
        'stratus.views.widgets.base': bundle + 'stratus/views/widgets/base' + suffix,
        'stratus.views.widgets.autocomplete': bundle + 'stratus/views/widgets/autocomplete' + suffix,
        'stratus.views.widgets.calendar': bundle + 'stratus/views/widgets/calendar' + suffix,
        'stratus.views.widgets.collection': bundle + 'stratus/views/widgets/collection' + suffix,
        'stratus.views.widgets.datetime': bundle + 'stratus/views/widgets/datetime' + suffix,
        'stratus.views.widgets.delete': bundle + 'stratus/views/widgets/delete' + suffix,
        'stratus.views.widgets.dialogue': bundle + 'stratus/views/widgets/dialogue' + suffix,
        'stratus.views.widgets.display': bundle + 'stratus/views/widgets/display' + suffix,
        'stratus.views.widgets.editor': bundle + 'stratus/views/widgets/editor' + suffix,
        'stratus.views.widgets.filter': bundle + 'stratus/views/widgets/filter' + suffix,
        'stratus.views.widgets.generic': bundle + 'stratus/views/widgets/generic' + suffix,
        'stratus.views.widgets.link': bundle + 'stratus/views/widgets/link' + suffix,
        'stratus.views.widgets.map': bundle + 'stratus/views/widgets/map' + suffix,
        'stratus.views.widgets.pagination': bundle + 'stratus/views/widgets/pagination' + suffix,
        'stratus.views.widgets.password': bundle + 'stratus/views/widgets/password' + suffix,
        'stratus.views.widgets.publish': bundle + 'stratus/views/widgets/publish' + suffix,
        'stratus.views.widgets.save': bundle + 'stratus/views/widgets/save' + suffix,
        'stratus.views.widgets.select': bundle + 'stratus/views/widgets/select' + suffix,
        'stratus.views.widgets.text': bundle + 'stratus/views/widgets/text' + suffix,
        'stratus.views.widgets.toggle': bundle + 'stratus/views/widgets/toggle' + suffix,
        'stratus.views.widgets.routing': bundle + 'stratus/views/widgets/routing' + suffix,
        'stratus.views.widgets.upload': bundle + 'stratus/views/widgets/upload' + suffix,

        /* Stratus Core Plugins */
        'stratus.views.plugins.base': bundle + 'stratus/views/plugins/base' + suffix,
        'stratus.views.plugins.addclass': bundle + 'stratus/views/plugins/addclass' + suffix,
        'stratus.views.plugins.addclose': bundle + 'stratus/views/plugins/addclose' + suffix,
        'stratus.views.plugins.carousel': bundle + 'stratus/views/plugins/carousel' + suffix,
        'stratus.views.plugins.dim': bundle + 'stratus/views/plugins/dim' + suffix,
        'stratus.views.plugins.drawer': bundle + 'stratus/views/plugins/drawer' + suffix,
        'stratus.views.plugins.help': bundle + 'stratus/views/plugins/help' + suffix,
        'stratus.views.plugins.masonry': bundle + 'stratus/views/plugins/masonry' + suffix,
        'stratus.views.plugins.morebox': bundle + 'stratus/views/plugins/morebox' + suffix,
        'stratus.views.plugins.onscreen': bundle + 'stratus/views/plugins/onscreen' + suffix,
        'stratus.views.plugins.popover': bundle + 'stratus/views/plugins/popover' + suffix,

        /* Stratus Core Underscore Templates */
        'templates-base': bundle + 'stratus/views/widgets/base.html',
        'templates-filter-search': bundle + 'stratus/views/widgets/filter.search.html',
        'templates-filter-sort': bundle + 'stratus/views/widgets/filter.sort.html',
        'templates-filter-type': bundle + 'stratus/views/widgets/filter.type.html',
        'templates-pagination': bundle + 'stratus/views/widgets/pagination.html',
        'templates-toggle': bundle + 'stratus/views/widgets/toggle.html',
        'templates-widgets-select': bundle + 'stratus/views/widgets/select.html',
        'templates-widgets-select-options': bundle + 'stratus/views/widgets/select.options.html',
        'templates-widgets-selected-options': bundle + 'stratus/views/widgets/selected.options.html',
        'templates-upload': bundle + 'stratus/views/widgets/upload.html',

        /* Froala Libraries */
        froala: bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/froala_editor.min',
        'froala-align': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/align.min',
        'froala-char-counter': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/char_counter.min',
        'froala-code-beautifier': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/code_beautifier.min',
        'froala-code-view': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/code_view.min',
        'froala-colors': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/colors.min',
        'froala-draggable': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/draggable.min',
        'froala-emoticons': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/emoticons.min',
        'froala-entities': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/entities.min',
        'froala-file': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/file.min',
        'froala-font-family': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/font_family.min',
        'froala-font-size': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/font_size.min',
        'froala-forms': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/forms.min',
        'froala-fullscreen': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/fullscreen.min',
        'froala-help': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/help.min',
        'froala-image': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/image.min',
        'froala-image-manager': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/image_manager.min',
        'froala-inline-style': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/inline_style.min',
        'froala-line-breaker': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/line_breaker.min',
        'froala-link': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/link.min',
        'froala-lists': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/lists.min',
        'froala-paragraph-format': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/paragraph_format.min',
        'froala-paragraph-style': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/paragraph_style.min',
        'froala-quick-insert': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/quick_insert.min',
        'froala-quote': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/quote.min',
        'froala-save': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/save.min',
        'froala-special-characters': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/special_characters.min',
        'froala-table': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/table.min',
        'froala-url': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/url.min',
        'froala-video': bundle + 'stratus/bower_components/froala-wysiwyg-editor/js/plugins/video.min',
        'angular-froala': bundle + 'stratus/bower_components/angular-froala/src/angular-froala',

        /* Stratus Core Angular Templates */
        'templates-permission': bundle + 'stratus/components/permission.html',

        /* Common Libraries */
        bowser: bundle + 'stratus/bower_components/bowser/src/bowser',
        chart: bundle + 'stratus/bower_components/chart.js/dist/Chart',
        chartist: '//cdnjs.cloudflare.com/ajax/libs/chartist/0.9.5/chartist' + suffix,
        d3: '//cdnjs.cloudflare.com/ajax/libs/d3/3.5.10/d3' + suffix,
        dropzone: '//cdnjs.cloudflare.com/ajax/libs/dropzone/4.3.0/' + directory + 'dropzone-amd-module' + suffix,
        fullcalendar: bundle + 'stratus/bower_components/fullcalendar/dist/fullcalendar' + suffix,
        highlight: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.3.0/highlight' + suffix,
        less: bundle + 'stratus/bower_components/less/dist/less' + suffix,
        masonry: bundle + 'stratus/bower_components/masonry/dist/masonry.pkgd' + suffix,
        math: bundle + 'stratus/bower_components/mathjs/dist/math' + suffix,
        md5: bundle + 'stratus/bower_components/js-md5/build/md5.min',
        moment: bundle + 'stratus/bower_components/moment/' + directory + 'moment' + suffix,
        'moment-timezone': bundle + 'stratus/bower_components/moment-timezone/builds/moment-timezone-with-data' + suffix,
        'moment-range': bundle + 'stratus/bower_components/moment-range/dist/moment-range' + suffix,
        promise: bundle + 'stratus/bower_components/promise-polyfill/promise' + suffix,
        sortable: bundle + 'stratus/bower_components/Sortable/Sortable' + suffix,
        countUp: bundle + 'stratus/bower_components/countUp.js/countUp',

        /* Angular */
        angular: bundle + 'stratus/bower_components/angular/angular' + suffix,
        'angular-animate': bundle + 'stratus/bower_components/angular-animate/angular-animate' + suffix,
        'angular-aria': bundle + 'stratus/bower_components/angular-aria/angular-aria' + suffix,
        'angular-material': bundle + 'stratus/bower_components/angular-material/angular-material' + suffix,
        'angular-messages': bundle + 'stratus/bower_components/angular-messages/angular-messages' + suffix,
        'angular-sanitize': bundle + 'stratus/bower_components/angular-sanitize/angular-sanitize' + suffix,
        'angular-chart': bundle + 'stratus/bower_components/angular-chart.js/dist/angular-chart' + suffix,
        'angular-file-upload': bundle + 'stratus/bower_components/ng-file-upload/ng-file-upload' + suffix,
        'angular-redactor': bundle + 'stratus/directives/redactor' + suffix,
        'angular-countUp': bundle + 'stratus/bower_components/countUp.js/dist/angular-countUp' + suffix,
        'angular-scrollSpy': bundle + 'stratus/bower_components/angular-scroll-spy/angular-scroll-spy',

        /* Backbone */
        underscore: bundle + 'stratus/bower_components/underscore/underscore' + dashSuffix,
        'backbone.relational': bundle + 'stratus/normalizers/backbone.relational.injector',
        'backbone.relational.core': bundle + 'stratus/bower_components/backbone-relational/backbone-relational',

        /* jQuery */
        'jquery-sandbox': bundle + 'stratus/normalizers/jquery.sandbox' + suffix,
        jquery: bundle + 'stratus/bower_components/jquery/dist/jquery' + suffix,
        'jquery-ui': bundle + 'stratus/bower_components/jquery-ui/jquery-ui' + suffix,
        'jquery-cookie': bundle + 'stratus/bower_components/jquery.cookie/jquery.cookie',
        gridster: '//cdnjs.cloudflare.com/ajax/libs/jquery.gridster/0.5.6/jquery.gridster' + suffix,
        selectize: bundle + 'stratus/bower_components/selectize/dist/js/standalone/selectize' + suffix,
        watch: '//cdnjs.cloudflare.com/ajax/libs/watch/2.0.4/jquery.watch' + suffix,

        /* Bootstrap */
        'bootstrap-toggle': bundle + 'stratus/bower_components/bootstrap-toggle/js/bootstrap-toggle' + suffix,

        /* Tether */
        tether: bundle + 'stratus/bower_components/tether/dist/js/tether' + suffix,
        'tether-drop': bundle + 'stratus/bower_components/tether-drop/dist/js/drop' + suffix,
        'tether-tooltip': bundle + 'stratus/bower_components/tether-tooltip/dist/js/tooltip' + suffix,

        /* Sitetheory Custom */
        backbone: 'sitetheorycore/dist/backbone/backbone' + suffix,
        'backbone.d3view': 'sitetheorycore/dist/backbone/backbone.d3view' + suffix,
        zepto: 'sitetheorycore/dist/zepto/zepto' + suffix,
        'jquery-toaster': 'sitetheorycore/dist/jquery/jquery.toaster' + suffix,
        'jquery-sortable': 'sitetheorycore/dist/jquery/jquery.sortable' + suffix,
        redactor: 'sitetheorycore/dist/redactor/redactor' + suffix,
        'redactor-clips': 'sitetheorycore/dist/redactor/redactor.clips' + suffix,
        'redactor-definedlinks': 'sitetheorycore/dist/redactor/redactor.definedlinks' + suffix,
        'redactor-filemanager': 'sitetheorycore/dist/redactor/redactor.filemanager' + suffix,
        'redactor-fullscreen': 'sitetheorycore/dist/redactor/redactor.fullscreen' + suffix,
        'redactor-imagemanager': 'sitetheorycore/dist/redactor/redactor.imagemanager' + suffix,
        'redactor-table': 'sitetheorycore/dist/redactor/redactor.table' + suffix,
        'redactor-textexpander': 'sitetheorycore/dist/redactor/redactor.textexpander' + suffix,
        'redactor-video': 'sitetheorycore/dist/redactor/redactor.video' + suffix,
        'stratus.views.widgets.location': 'sitetheorylocation/stratus/views/widgets/location',
        'stratus.views.widgets.media': 'sitetheorymedia/stratus/views/widgets/media',
        'stratus.views.plugins.tweet': 'sitetheoryneural/stratus/views/plugins/tweet',
        bootstrap: 'sitetheorycore/dist/bootstrap/bootstrap' + suffix,
        bootbox: 'sitetheorycore/dist/bootstrap/bootbox' + suffix,
        datetimepicker: 'sitetheorycore/dist/bootstrap/bootstrap-datetimepicker' + suffix
    }
});