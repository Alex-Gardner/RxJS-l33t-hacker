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

const greenHack = {
	color: 'green',
	text: 'TBD'
};

const blueHack = {
	color: 'blue',
	text: 'TBD'
};

const blackHack = {
	color: 'black',
	text: `
	Initiating mega-hacking. . .
	Entrance requested: secret data
	Protocol: flamethrower
	start burndown (y/n)?
	-started-
	for each {user} gather <userdata>
	creating backdoor entrance. . .
	function disableAlert(customers) {
		when (alerts-enabled) {
			run disable-override.exe
			enter ><*perma janky-monkey
		}
	initialize memory takeover . . .
	if (memory-free) {
		run function (memoryGapTakeover) {
			for (mem-alloc = 0; mem-alloc < takeovertot; mem-alloc++){
				createRuntime;
				void cybersecurity*;
				start massiveFishingOp.exe;
			} else {
				delete security-server;
				hax-in-progess += 1;
				run serverless-backdoor;
				deny whitehat-sector;
			}
		}
	}
	/* clean traces of contact */
	int hostile_hacker-alert (total-takeover, gridlines*interference)
		if(beingTraced = true) {
			enter diversionProtocol.exe
		} else {
			while (left-clear) {
				enter left-loop algorithm;
				start safe-cyber-disconnect;
				function secretRunAround {
					start left-loop clear;
					exit loop.exe;
					alloc main-mem
						return 14GB
					run rightSide-RunAround();
					trace(northbound);
					exit sidebridge.exe
				}
			}
		}
	}
	`
};

const assets = [blackHack, greenHack, blueHack];

const numbers = Rx.Observable.interval(1000)
	.take(3)
	.map(i => assets[i]);

const start = document.getElementById('start');

numbers.forEach(item => {
	var div = document.createElement('div');
	div.style.backgroundColor = item.color;
	div.style.color = 'white';
	div.innerHTML = item.text;
	start.append(div);
});
