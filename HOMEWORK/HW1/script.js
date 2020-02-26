const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const { fromEvent, of, from, timer } = rxjs;
const { map, switchMap, sequenceEqual, bufferCount, mergeMap, catchError } = rxjs.operators;
const { fromFetch } = rxjs.fetch;


// converted from event handler to Observable 
const eventObs$ = fromEvent(quoteInputElement, 'input');
eventObs$.subscribe( _ => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  const arrayValue = quoteInputElement.value.split('')

  let correct = true

  from(arrayQuote).pipe(
    map((characterSpan, index) => {
      const character = arrayValue[index]
      if (character == null) {
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct = false
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
      } else {
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correct = false
      }
    })
  ).subscribe(x => console.log)

  if (correct) renderNewQuote()
});

const data$ = fromFetch(RANDOM_QUOTE_API_URL).pipe(
  // switchMap : Maps each value to an Observable, then flattens all of these inner Observables.
  switchMap(response => {
    if (response.ok) {
      return response.json();
    } else {
      return of({ error: true, message: `Error ${response.status}` });
    }
  }),
  catchError(err => {
    console.error(err);
    return of({ error: true, message: err.message })
  })
);


function renderNewQuote() {

  data$.subscribe({
    next: function (data) {
      const quote = data.content;
      quoteDisplayElement.innerHTML = ''
      quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
      })
      quoteInputElement.value = null

    }
  })
  startTimer()
}

let startTime
let speedTimer

function startTimer() {
  stopTimer();
  /*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 0 second and subsequent
  values every 1 seconds after
  */
  const source = timer(0, 1000);
  timerElement.innerText = 0
  startTime = new Date()
  //output: 0,1,2,3,4,5......
  speedTimer = source.subscribe(val => {
    if (val === 100) {
      renderNewQuote();
      return;
    }
    timerElement.innerText = val
  });
}

function stopTimer() {
  if (speedTimer) speedTimer.unsubscribe();
}
renderNewQuote()