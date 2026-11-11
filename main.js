// gsap.to('.box1', {
//   x: 1400,
//   duration: 1,
//   delay: 1,
//   rotate: 360,
//   borderRadius: '10px',
//   backgroundColor: 'red',
// });

var tl = gsap.timeline();

tl.to('.box1', {
  x: 1400,
  duration: 1,
  delay: 1.5,
});
tl.to('.box2', {
  x: 1400,
  rotate: 360,
  duration: 1,
});
tl.to('.box3', {
  x: 1400,
  rotate: -360,
  duration: 1,
});
