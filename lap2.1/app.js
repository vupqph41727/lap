const gameEvent = new Map([
    [17,'Goal'],
    [36,'Subtitution'],
    [47,'Goal'],
    [61,'Subtitution'],
    [64,'Y card'],
    [69,'R card'],
    [70,'Subtitution'],
    [72,'Subtitution'],
    [76,'Goal'],
    [80,'Goal'],
    [92,'Y card'],
]);

const events = [...new Set(gameEvent.values())];
console.log(events);

gameEvent.delete(64);

console.log(`An event happened, on averge, every ${ 90 / gameEvent.size } minutes`);
const time = [...gameEvent.keys()].pop();
console.log(time);
console.log(
    `An event happened, on averge, every ${ time / gameEvent.size } minutes`
);

for(const [min,event] of gameEvent) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}
