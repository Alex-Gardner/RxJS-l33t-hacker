/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<script src="https://unpkg.com/@reactivex/rxjs@5.0.3/dist/global/Rx.js"></script>
  <main>
    <div id='start'></div>
  </main>
</body>
</html>
*/

/* -----------------------------------------------  */
const assets = ['black', 'green', 'blue'];

const numbers = Rx.Observable.interval(1000)
	.take(3)
	.map(i => assets[i]);

const start = document.getElementById('start');

numbers.forEach(item => {
	var div = document.createElement('div');
	div.style.backgroundColor = item;
	div.style.color = 'white';
	div.innerHTML = item;
	start.append(div);
});
