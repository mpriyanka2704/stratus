//     Stratus.Components.Base.js 1.0

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

// Stratus Base Component
// ----------------------

// Define AMD, Require.js, or Contextual Scope
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['stratus', 'underscore', 'angular', 'angular-material', 'stratus.components.help'], factory);
    } else {
        factory(root.Stratus, root._);
    }
}(this, function (Stratus, _) {
    // This component intends to allow editing of various permissions depending on context.
    Stratus.Components.Permission = {
        bindings: {
            elementId: '@',
            ngModel: '=',
            user: '@',
            role: '@',
            bundle: '@',
            type: '@',
            target: '@',
            sentinel: '@'
        },
        controller: function ($scope, $attrs, $log) {
            this.uid = _.uniqueId('permission_');
            Stratus.Instances[this.uid] = $scope;
            $scope.elementId = $attrs.elementId || this.uid;
            $scope.sentinel = new Stratus.Prototypes.Sentinel();
            $scope.$watch('sentinel', function (value) {
                // $log.log('sentinel:', value, );
            }, true);

            // $log.log('component:', this);
        },
        template: '<div id="{{ elementId }}">\
            <!-- Header -->\
            <md-list-item layout="row" flex="100">\
                <!--<div flex><h2>User</h2></div>-->\
                <!-- TODO If they choose a bundle, disable ContentType and Target, or make the list include bundles as well as content type -->\
                <div flex>\
                    <stratus-help flex="5">\
                        Choose an entire bundle of features.\
                    </stratus-help>\
                    <h2 flex="95">Bundle</h2>\
                </div>\
                <div flex>\
                    <stratus-help flex="5">\
                        Choose a specific type of content to restrict.\
                    </stratus-help>\
                    <h2 flex="95">Type</h2>\
                </div>\
                <div flex>\
                    <stratus-help flex="5">\
                        Limit to a specific instance of this content type.\
                    </stratus-help>\
                    <h2 flex="95">Target</h2>\
                </div>\
                <div flex>\
                    <stratus-help flex="5"></stratus-help>\
                    <h2 flex="95">Permissions</h2>\
                </div>\
            </md-list-item>\
            <md-list-item layout="row" flex="100">\
                <div flex></div>\
                <div flex></div>\
                <div flex></div>\
                <div flex>\
                    <md-checkbox ng-show="!sentinel.master" ng-model="sentinel.view" aria-label="View">\
                        View\
                    </md-checkbox>\
                    <md-checkbox ng-show="!sentinel.master" ng-model="sentinel.create" aria-label="Create">\
                        Create\
                    </md-checkbox>\
                    <md-checkbox ng-show="!sentinel.master" ng-model="sentinel.edit" aria-label="Edit">\
                        Edit\
                    </md-checkbox>\
                    <md-checkbox ng-show="!sentinel.master" ng-model="sentinel.delete" aria-label="Delete">\
                        Delete\
                    </md-checkbox>\
                    <md-checkbox ng-show="!sentinel.master" ng-model="sentinel.publish" aria-label="Publish">\
                        Publish\
                    </md-checkbox>\
                    <md-checkbox ng-show="!sentinel.master" ng-model="sentinel.design" aria-label="Design">\
                        Design\
                    </md-checkbox>\
                    <md-checkbox ng-show="!sentinel.master" ng-model="sentinel.dev" aria-label="Dev">\
                        Dev\
                    </md-checkbox>\
                    <md-checkbox ng-model="sentinel.master" aria-label="Master">\
                        Master\
                    </md-checkbox><br>\
                    Total: {{ sentinel.permissions() }}\
                </div>\
            </md-list-item>\
            <!-- TODO: allow adding a new row -->\
        </div>'
    };
}));
