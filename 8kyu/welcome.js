function greet(language) {
    const languages = {
      english: "Welcome",
      czech: "Vitejte",
      danish: "Velkomst",
      dutch: "Welkom",
      estonian: "Tere tulemast",
      finnish: "Tervetuloa",
      flemish: "Welgekomen",
      french: "Bienvenue",
      german: "Willkommen",
      irish: "Failte",
      italian: "Benvenuto",
      latvian: "Gaidits",
      lithuanian: "Laukiamas",
      polish: "Witamy",
      spanish: "Bienvenido",
      swedish: "Valkommen",
      welsh: "Croeso"
    };
    // Check if the input language is in the languages database
    if (languages[language]) {
      return languages[language];
    }
    
    // Default to English greeting
    return languages.english;
}