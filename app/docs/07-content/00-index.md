---
title: "Content Design"
---

<p>Use the GOV.UK style guide as a reference for content style, spelling and grammar conventions for any service you’re working on.</p>

<div>
{% for guide in guides %}
	{% if guide.items.length > 0 %}
		<h3>{{ guide.label }}</h3>
		{% for item in guide.items %}
			<p>{{ item.title }} - {{ item.text }}</p>
		{% endfor %}
	{% endif %}
{% endfor %}
</div>
