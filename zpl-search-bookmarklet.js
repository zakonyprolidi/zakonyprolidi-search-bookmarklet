javascript: q = '' + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
if (!q) q = prompt('Hledej zákon:', '');
if (q != null) location = 'http://www.zakonyprolidi.cz/hledani?text=' + escape(q).replace(/ /g, '+') + '';
void 0
