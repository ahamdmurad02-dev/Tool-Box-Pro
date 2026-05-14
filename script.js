function multiply(){
  let a = Number(document.getElementById("n1").value);
  let b = Number(document.getElementById("n2").value);

  setResult("Result: " + (a * b));
}

function upper(){
  let t = document.getElementById("txt").value;

  setResult(t.toUpperCase());
}

function random(){
  let r = Math.floor(Math.random() * 1000);

  setResult("Random: " + r);
}

function joke(){
  const jokes = [
    "Code works until it doesn’t.",
    "Debugging is like detective work.",
    "A bug is just a feature.",
    "Keep calm and fix bugs."
  ];

  setResult(jokes[Math.floor(Math.random() * jokes.length)]);
}

function quote(){
  const quotes = [
    "Focus on progress.",
    "Keep building.",
    "Consistency wins.",
    "Small steps matter."
  ];

  setResult(quotes[Math.floor(Math.random() * quotes.length)]);
}