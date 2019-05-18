import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from 'gsap/all';
var tl = new TimelineMax();

//tl.add(TweenMax.to('#logo', 2, { x: 100 }));
tl.to('#logo', 2, { x: 100 }).to('#menu', 2, { x: -100 });

//TweenMax.to('.logo', 3, { x: 100, rotationY: 360 });
//TweenMax.from('.logo', 3, { scale: 0.5, opacity: 0 });
// TweenMax.fromTo(
//   '.logo',
//   1.5,
//   { width: 0, height: 0 },
//   { width: 100, height: 200 }
// );

//TweenMax.to('#logo', 1, { x: 300, ease: Bounce.easeOut });
// TweenMax.to('#logo', 1, { x: 100, onComplete: tweenComplete });

// function tweenComplete() {
//   console.log('the tween is complete');
// }

//var tween = TweenMax.to('#logo', 1, { x: 100 });

//pause
//tween.pause();

//resume (honors direction - reversed or not)
//tween.resume();

//reverse (always goes back towards the beginning)
//tween.reverse();

//jump to exactly 0.5 seconds into the tween
//tween.seek(0.5);

//jump to exacty 1/4th into the tween's progress:
//tween.progress(0.25);

//make the tween go half-speed
//tween.timeScale(0.5);

//make the tween go double-speed
//tween.timeScale(2);

//immediately kill the tween and make it eligible for garbage collection
//tween.kill();
export default test;
