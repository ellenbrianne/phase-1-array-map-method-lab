const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let tutorialString = []
  let firstChar0 = [];
  let firstChar1 = [];
  let firstChar2 = [];
  let firstChar3 = [];
  let firstChar4 = [];
  let firstChar5 = [];
  let firstChar6 = [];
  let firstChar7 = [];
  let firstChar8 = [];
  let firstChar9 = [];

  for (const string of tutorials) {
    tutorialString.push(string.split(' '));
   };

    for (const string of tutorialString[0]) {
      firstChar0.push(string[0].toUpperCase() + string.slice(1)); 
     };

      for (const string of tutorialString[1]) {
        firstChar1.push(string[0].toUpperCase() + string.slice(1));    
      };

      for (const string of tutorialString[2]) {
        firstChar2.push(string[0].toUpperCase() + string.slice(1));    
      };

        for (const string of tutorialString[3]) {
          firstChar3.push(string[0].toUpperCase() + string.slice(1));  
        };

          for (const string of tutorialString[4]) {
            firstChar4.push(string[0].toUpperCase() + string.slice(1));    
          };

            for (const string of tutorialString[5]) {
              firstChar5.push(string[0].toUpperCase() + string.slice(1));    
            };

              for (const string of tutorialString[6]) {
                firstChar6.push(string[0].toUpperCase() + string.slice(1));    
              };

                for (const string of tutorialString[7]) {
                  firstChar7.push(string[0].toUpperCase() + string.slice(1));    
                  };

                  for (const string of tutorialString[8]) {
                    firstChar8.push(string[0].toUpperCase() + string.slice(1));    
                  };

                    for (const string of tutorialString[9]) {
                      firstChar9.push(string[0].toUpperCase() + string.slice(1));    
                    };

  return [firstChar0.join(' '), firstChar1.join(' '), firstChar2.join(' '), firstChar3.join(' '), firstChar4.join(' '), firstChar5.join(' '), firstChar6.join(' '), firstChar7.join(' '), firstChar8.join(' '), firstChar9.join(' ')];
};