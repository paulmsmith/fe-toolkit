---
title: "Content Design"
---

<p>Use the GOV.UK style guide as a reference for content style, spelling and grammar conventions for any service you’re working on.</p>

{% for item in guide %}
	{% if item.items.length > 0 %}
		<h3>{{ item.label }}</h3>
		{% for contentItem in item.items %}
			<p>{{ contentItem.title }} - {{ contentItem.text }}</p>
		{% endfor %}
	{% endif %}
{% endfor %}
