console.log(localStorage.userName);
console.log(localStorage.question0);
console.log(localStorage.question1);
console.log(localStorage.question2);
console.log(localStorage.question3);

var userName = localStorage.userName;
var sex = localStorage.question0;
var age = localStorage.question1;
var race = localStorage.question2;
var side = localStorage.question3;

var matchName;
var matchImage;
var matchBlurb;

var charachters = [
  {
    name: "Anakin Skywalker",
    age: "young",
    race: "human",
    side: "good",
    sex: "male",
    image: "../images/annakin.png",
    blurb: "Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever, and was believed by some to be the prophesied Chosen One who would bring balance to the Force. A hero of the Clone Wars, Anakin was caring and compassionate, but also had a fear of loss that would prove to be his downfall."
  },
  {
    name: "BB-8",
    age: "young",
    race: "other",
    side: "good",
    sex: "male",
    image: "../images/bb8.png",
    blurb: "A skittish but loyal astromech, BB-8 accompanied Poe Dameron on many missions for the Resistance, helping keep his X-wing in working order. When Poe’s mission to Jakku ended with his capture by the First Order, BB-8 fled into the desert with a vital clue to the location of Jedi Master Luke Skywalker.",
  },
  {
    name: "Obi-Wan Kenobi",
    age: "old",
    race: "human",
    side: "good",
    sex: "male",
    image: "../images/obiwan.png",
    blurb: "A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor.",
  },
  {
    name: "Yoda",
    age: "old",
    race: "other",
    side: "good",
    sex: "male",
    image: "../images/yoda.png",
    blurb: "Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality.",
  },
  {
    name: "Kylo Ren",
    age: "young",
    race: "human",
    side: "bad",
    sex: "male",
    image: "../images/kylo.png",
    blurb: "A dark warrior strong with the Force, Kylo Ren commands First Order missions with a temper as fiery as his unconventional lightsaber. As a leader of the First Order and a student of Supreme Leader Snoke, he seeks to destroy the New Republic, the Resistance and the legacy of the Jedi.",
  },
  {
    name: "Jar Jar Binks",
    age: "young",
    race: "other",
    side: "bad",
    sex: "male",
    image: "../images/jarjar.png",
    blurb: "A clumsy, well-meaning Gungan outcast on Naboo, Jar Jar Binks struggled to prove his worth throughout his life. Putting his awkward past behind him, Jar Jar left the swamps of Naboo to enter the even murkier waters of Coruscant politics, becoming a representative for his people in the galactic capital. There, his best intentions and eagerness to serve were exploited by scheming Senators and others in positions of power.",
  },
  {
    name: "Emperor Palpatine",
    age: "old",
    race: "human",
    side: "bad",
    sex: "male",
    image: "../images/palpatine.png",
    blurb: "Scheming, powerful, and evil to the core, Darth Sidious restored the Sith and destroyed the Jedi Order. Living a double life, Sidious was in fact Palpatine, a Naboo Senator and phantom menace. He slowly manipulated the political system of the Galactic Republic until he was named Supreme Chancellor -- and eventually Emperor -- ruling the galaxy through fear and tyranny.",
  },
  {
    name: "Jabba The Hutt",
    age: "old",
    race: "other",
    side: "bad",
    sex: "male",
    image: "../images/jabba.png",
    blurb: "Jabba the Hutt was one of the galaxy’s most powerful gangsters, with far-reaching influence in both politics and the criminal underworld. There were no second chances with Jabba, something Han Solo would find out -- though the slug-like alien would ultimately fall victim to his own hubris and vengeful ways.",
  },
  {
    name: "Leia Organa",
    age: "old",
    race: "human",
    side: "good",
    sex: "female",
    image: "../images/leia.png",
    blurb: "Princess Leia Organa was one of the Rebel Alliance’s greatest leaders, fearless on the battlefield and dedicated to ending the tyranny of the Empire. Daughter of Padmé Amidala and Anakin Skywalker, sister of Luke Skywalker, and with a soft spot for scoundrels, Leia ranks among the galaxy’s great heroes. But life under the New Republic has not been easy for Leia. Sidelined by a new generation of political leaders, she struck out on her own to oppose the First Order as founder of the Resistance. These setbacks in her political career have been accompanied by more personal losses.",
  },
  {
    name: "Maz Kanata",
    age: "old",
    race: "other",
    side: "good",
    sex: "female",
    image: "../images/maz.png",
    blurb: "Maz Kanata is more than a thousand years old, a diminutive being with vast experience at surviving in the underworld. From her castle on Takodana, Maz has seen galactic powers rise and fall and felt the Force ebb and flow, seeking an elusive balance between darkness and light. She has given many a young smuggler a start by offering credits, equipment or connections, and helped many an old friend rediscover a lost path.",
  },
  {
    name: "Rey",
    age: "young",
    race: "human",
    side: "good",
    sex: "female",
    image: "../images/rey.png",
    blurb: "Rey is a Jakku scavenger, a survivor toughened by life on a harsh desert planet. When the fugitive droid BB-8 appeals to her for help, Rey finds herself drawn into a galaxy-spanning conflict. Despite dismissing herself as “no one,” she learns that her life is being shaped by the mysterious power of the Force. She seeks out Luke Skywalker, the lost Jedi Master, in hopes that he will aid the Resistance against the First Order and help her learn to control her powers.",
  },
  {
    name: "Aayla Secura",
    age: "young",
    race: "other",
    side: "good",
    sex: "female",
    image: "../images/aayla.png",
    blurb: "With an athletic build, an exotic beauty, and blue skin, Aayla Secura stood out among the many faces of the Jedi ranks. A cunning warrior and Jedi Knight during the rise of the Clone Wars, Aayla fought alongside Clone Commander Bly on many exotic battlefields. Having mastered the emotional detachment necessary in the Jedi Order, she always tried to pass on what she had learned to others. Aayla was killed, along with many other Jedi Generals, when her troops turned on her in reaction to Supreme Chancellor Palpatine’s broadcast of Order 66.",
  },
  {
    name: "Aurra Sing",
    age: "old",
    race: "other",
    side: "good",
    sex: "female",
    image: "../images/aurra.png",
    blurb: "A feared bounty hunter known for her chalk-white skin and built-in comlink antenna, Aurra Sing was an expert sniper and trained assassin who would work for anyone who paid her. After the death of Jango Fett, Aurra trained Boba Fett as a bounty hunter, teaching him the skills -- and the ruthlessness -- that he would need in pursuing his deadly profession.",
  },
  {
    name: "Captain Phasma",
    age: "old",
    race: "human",
    side: "bad",
    sex: "female",
    image: "../images/phasma.png",
    blurb: "Clad in distinctive armor of salvaged chromium, Captain Phasma commands the First Order’s legions of stormtroopers. A tough veteran commander, she has no use for fancy titles or complex war rooms, preferring to lead her troops in battle against the First Order’s enemies.",
  },
  {
    name: "Lomi Plo",
    age: "young",
    race: "other",
    side: "bad",
    sex: "female",
    image: "../images/lomi.png",
    blurb: "Lomi Plo is the main antagonist of the Dark Nest trilogy. She is the Unseen Queen of the Gorog nest. Furthermore, she was the dark side Master of fallen Jedi Knight Alema Rar and (earlier) the Dark Jedi Welk, both having served as Night Herald of the Dark Nest.",
  },
  {
    name: "Darth Zannah",
    age: "young",
    race: "human",
    side: "bad",
    sex: "female",
    image: "../images/zannah.jpg",
    blurb: "Zannah, known as 'Rain' during her childhood, was a Human female from the planet Somov Rit. She was recruited to fight for the Jedi's Army of Light during the Ruusan campaign of the New Sith Wars but, after arriving on Ruusan, was separated from the group during a Sith attack and presumed dead. Unbeknownst to the Jedi, she had been saved and befriended by a member of the native Bouncer species called Laa. When the Brotherhood of Darkness later unleashed a planet-wide Force storm, Rain survived by instinctively enveloping herself and Laa with a bubble of Force energy. Not long afterward, the young girl watched as Laa was haplessly killed by Jedi scouts. Stricken with anger and grief, she unwittingly gave in to the dark side and murdered the Jedi. Her display of rage attracted the attention of the war's only surviving Dark Lord, Darth Bane, who decided to take her as his apprentice. Rain cast away the handle of her youth and instead embraced her birth name, becoming Darth Zannah.",
  },
];

findMatch(sex, age, race, side, userName);
function findMatch(gender, old, type, evil, name) {
  var goodOrBad;
  if(evil = "good") {
    goodOrBad = "Jedi Master ";
  }
  else {
    goodOrBad = "Darth ";
  }
  for(var i=0; i<charachters.length; i++) {
    if(charachters[i].age == age && charachters[i].race == type && charachters[i].side == evil && charachters[i].sex == gender) {
      matchName = charachters[i].name;
      matchImage = charachters[i].image;
      matchBlurb = charachters[i].blurb;
      console.log(matchName, matchImage, matchBlurb);
      document.getElementById("imgTag").src = matchImage;
      document.getElementById("blurbTag").innerHTML = matchBlurb;
      document.getElementById("nameTag").innerHTML = matchName;
      document.getElementById("headerText").innerHTML = "Hello " + goodOrBad + name + " your charachter most resmembles the legendary " + matchName + " .";
      break;
    }
    else {
      console.log("broken");
    }
  }
}
