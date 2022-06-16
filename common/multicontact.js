window.formbutton = window.formbutton || function() {
	(formbutton.q = formbutton.q || []).push(arguments);
};
formbutton("create", {
	action: "https://formspree.io/f/xvolvjlq",
	theme: "classic",
	title: "",
	description: "",
	onResponse: function(ok, setStatus) {
		if (ok) {
			setStatus("they will be scarred for life");
		} else {
			setStatus("YOU FAIL IT");
		}
	},
	fields: [{
		type: "radio",
		label: "I am a spambot",
		name: "identity",
		value: "spambot",
		required: true
	}, {
		type: "radio",
		label: "I am her",
		name: "identity",
		value: "her",
		required: true
	}, {
		type: "radio",
		label: "I am someone else",
		name: "identity",
		value: "other",
		required: true
	}, {
		type: "email",
		label: "Email (optional*):",
		name: "email",
		placeholder: ">_<",
		required: false
	}, {
		type: "textarea",
		label: "What's your whole deal:",
		name: "message",
		placeholder: "*if you want a response please include a valid e-mail address",
		required: true
	}, {
		type: "checkbox",
		label: "Cute",
		name: "cute",
		required: false
	}, {
		type: "checkbox",
		label: "Sweet",
		name: "sweet",
		required: false
	}, {
		type: "submit",
		value: "initiate catharsis"
	}],
	styles: {
		fontFamily: "Montserrat",
		button: {
			background: "black",
		}
	},
	initiallyVisible: false
});
