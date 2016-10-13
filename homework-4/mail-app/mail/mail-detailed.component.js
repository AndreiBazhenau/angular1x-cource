angular.module('mail.module').component('mailDetailed', {
        bindings: {
            letterId: '<',
            mailboxId: '<'
        },
        template: `
            <div>
                <button ng-click="$ctrl.goBack()">Go back</button><button ng-click="$ctrl.delete()">Delete</button>
            </div>
            <div>
                <span>To:</span><span>{{$ctrl.letter.to}}</span>
            </div>
            <div>    
                <span>Subject:</span><span>{{$ctrl.letter.subject}}</span>
            </div>
            <div>    
                <span>Body:</span><span>{{$ctrl.letter.body}}</span>
            </div>`, 
        controller: ['LetterService', '$state', function(LetterService, $state) {
            var ctx = this;
            LetterService.get({ id : this.letterId}, function(letter) {
                ctx.letter = letter;
            });

            this.goBack = function() {
                $state.go('mailboxes.mail-table', { mailboxId: ctx.mailboxId });
            };

            this.delete = function() {
                ctx.letter.$delete(function() {
                    $state.go('mailboxes.mail-table', { mailboxId: ctx.mailboxId });
                });
            };
        }]
    });