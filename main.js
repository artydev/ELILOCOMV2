const { m, dom, udom, render } = MVU;

function App() {
  let app = dom();
  html`<div>TEST</div>`;
  udom();
  return app;
}

document.getElementById('app').appendChild(App());

function html(template) {
  var text = typeof template == 'string' ? [template] : [template[0]];

  for (var i = 1, length = arguments.length; i < length; i++) {
    text.push(arguments[i], template[i]);
  }

  return MVU.html(text.join(''));
}
