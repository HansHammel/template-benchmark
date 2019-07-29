// Compiled using marko@4.18.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/template-benchmark$0.1.1/templates/marko/tpl_escaped.html",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>" +
    marko_escapeXml(data.title) +
    "</title></head><body>");

  component_globals_tag({}, out);

  out.w("<p>" +
    marko_escapeXml(data.text) +
    "</p>");

  if (data.projects) {
    var $for$0 = 0;

    marko_forEach(data.projects, function(project) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<a" +
        marko_attr("href", "" + project.url) +
        ">" +
        marko_escapeXml(project.name) +
        "</a><p>" +
        marko_escapeXml(project.description) +
        "</p>");
    });
  } else {
    out.w("No projects");
  }

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "7");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/template-benchmark$0.1.1/templates/marko/tpl_escaped.html",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
