var ruleNames = [];

$("[data-rule]").each(function (i, element) {
	var ruleName = element.getAttribute('data-rule');
	if ($.inArray(ruleName, ruleNames) < 0) {
		ruleNames.push(ruleName);
	}
});

var validate = function () {
	$(".validation-messages span").addClass('hide');

	var valid = document.getElementById('contact-form').checkValidity();
	if (valid) {
		$('#submit').removeClass('disabled');
	}

};

var validationFail = function (e) {
	$('#submit').addClass('disabled');
	var element = e.srcElement;
	var validity = element.validity;

	if (!validity.valid) {
		ruleNames.forEach(function (ruleName) {
			checkRule(validity, ruleName, element);
		});
		e.preventDefault();
	}
};

var checkRule = function (state, ruleName, element) {
	if (state[ruleName]) {
		$(element).next().find('[data-rule="' + ruleName + '"]').removeClass('hide');
	}
};

$(':input:not(:button)').each(function () {
	this.oninvalid = validationFail;
	this.onblur = validate;

})