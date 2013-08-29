(function (window, undefined) {
    window.elasticforms = {

        showErrorMessage: function (elem, constraints) {
            var errorMessage = window.elasticforms.getErrorFromConstraints(constraints);
            $(elem).notify('Error');
        },

        getErrorFromConstraints: function(constraints){
            $(constraints).each(function( index ){
                if(this.required.valid != true)
                {
                    return 'This field is required';
                }
            });
        }
    };
})(window);

jQuery(document).ready(function () {
    $('#ClientId').change(function () {
        window.KnowledgeBase.KnowledgeArticle.ClientSelectionChange($(this).val());
    });

    $('#elastic-form').parsley( {
        // Override the parsley default here.
        //  successClass: 'parsley-success'
        //, errorClass: 'parsley-error'
        //, validators: {}
        //, showErrors: true
        //, messages: {}
        //, errors: {                     // specify where parsley error-success classes are set
        //    classHandler: function ( elem, isRadioOrCheckbox ) {}
        //    , container: function ( elem, isRadioOrCheckbox ) {}
        //    , errorsWrapper: '<ul></ul>'
        //    , errorElem: '<li></li>'
        //}
        listeners: {
            //onFieldValidate: function ( elem, ParsleyField ) {
            //    return false;
            //}
            //, onFormSubmit: function ( isFormValid, event, ParsleyForm ) {}
            onFieldError: function ( elem, constraints, ParsleyField ) {
                window.elasticforms.showErrorMessage(elem, constraints, ParsleyField)
             }
            //, onFieldSuccess: function ( elem, constraints, ParsleyField ) {}
        }
    });

});
