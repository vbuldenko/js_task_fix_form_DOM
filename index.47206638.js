document.querySelectorAll("input").forEach(function(e){var t=e.name.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),l=document.createElement("label");l.className="field-label",l.textContent=t,l.htmlFor=e.id,e.insertAdjacentElement("beforebegin",l),e.placeholder=t});
//# sourceMappingURL=index.47206638.js.map
