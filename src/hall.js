var url = 'https://www.trin.cam.ac.uk/wp-content/uploads/Hall-Menu-cur.pdf';
url = 'https://cors-anywhere.herokuapp.com/' + url
pdfjsLib.GlobalWorkerOptions.workerSrc = '../node_modules/pdfjs-dist/build/pdf.worker.js';
var loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(function(pdf) {
    pdf.getPage(1).then(function(page) {
        page.getTextContent().then(function(text) {
            var menu = text.items.map(s => s.str).join('');
            //document.getElementById('menu').innerHTML = menu;
            var days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
            var idx = 0;
            var idxs = [];
            for (var i = 0; i < days.length; i++) {
                idx = menu.indexOf('LUNCH', idx);
        	idxs.push(idx);
                idx = menu.indexOf('DINNER', idx);
                if (menu.slice(idx-3, idx) == 'NO ')
                    idx -= 3;
                idxs.push(idx);
            }
            idxs.push(menu.indexOf(' DISHES MAY CONTAIN'));
            var lunches = [];
            var dinners = [];
            for (var i = 0; i < days.length; i++) {
                var lunch = menu.slice(idxs[i*2], idxs[i*2+1]);
                var dinner = menu.slice(idxs[i*2+1], idxs[i*2+2]);
                if (dinner.startsWith('NO')) {
                    dinner = 'NO DINNER';
                }
                lunch = lunch.replace('  Starte', '\nStarte');
                lunch = lunch.replace('  Mains:', '\nMains:');
                lunch = lunch.replace('  Sides:', '\nSides:');
                lunch = lunch.replace('  Daily ', '\nDaily ');
                lunch = lunch.replace('  Desser', '\nDesser');
                lunches.push(lunch);
                dinners.push(dinner);
            }
            console.log(lunches);
            document.getElementById('menu').innerHTML = lunches.join('<br>') + '<br>' + dinners.join('<br>');
        });
    });
});
