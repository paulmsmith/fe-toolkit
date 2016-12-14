---
label: "Content styleguide"
---

<p class="lede">This guide covers style, spelling and grammar conventions for all content published by Department for Work and Pensions (DWP). These patterns are based on the research and experience of the DWP content community.</p>

<p>Use the <a href="https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style">GOV.UK style guide</a> as a reference for content style, spelling and grammar conventions for any service you’re working on.</p>

<div class="content-patterns js-accordion">
	{%- for guide in guides -%}
		{%- if guide.items.length > 0 -%}
			{% set guideIndex = loop.index %}
			<div class="content-pattern js-accordion-item">
				<h3 class="content-pattern__title js-accordion-item-toggler" id="{{ guideIndex }}">{{ guide.label }}</h3>
				<dl class="content-pattern__content js-accordion-item-content js-hide">
				{%- for item in guide.items -%}
					<dt class="content-pattern__subtitle" id="{{ guideIndex + '_' + loop.index }}">{{ item.title }}</dt>
					<dd class="content-pattern__text">{{ item.text }}</dd>
				{%- endfor -%}
			</dl>
			</div>
		{%- endif -%}
	{%- endfor -%}
</div>
