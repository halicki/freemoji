export type VariantKey = "normalne" | "genz" | "boomer" | "genalpha";

export interface HeroContent {
  headline: string[];
  subtitle: string;
  cta: string;
  ctaSub: string;
}

export interface AboutPoint {
  num: string;
  title: string;
  desc: string;
}

export interface AboutContent {
  label: string;
  heading: string;
  points: AboutPoint[];
}

export interface EmojiShowcaseContent {
  heading: string;
  subheading: string;
}

export interface DigitalCommContent {
  label: string;
  heading: string;
  paragraphs: string[];
  callout: string;
}

export interface ProblemContent {
  heading: string;
  desc: string;
  bullets: string[];
  extra?: string;
}

export interface SolutionContent {
  heading: string;
  desc: string;
  benefits: { emoji: string; text: string }[];
}

export interface WebinarContent {
  heading: string;
  desc: string;
  bullets: { emoji: string; text: string }[];
  cta: string;
}

export interface WebinarPromoContent {
  heading: string;
  subtitle: string;
  bullets: string[];
  cta1: string;
  cta2: string;
}

export interface ForWhomContent {
  heading: string;
  bullets: string[];
}

export interface SectionContent {
  hero: HeroContent;
  about: AboutContent;
  emojiShowcase: EmojiShowcaseContent;
  digitalComm: DigitalCommContent;
  problem: ProblemContent;
  solution: SolutionContent;
  webinar: WebinarContent;
  webinarPromo: WebinarPromoContent;
  forWhom: ForWhomContent;
}

export const content: Record<VariantKey, SectionContent> = {
  normalne: {
    hero: {
      headline: ["Dzis\u0301 piszemy", "wie\u0328cej niz\u0307", "mo\u0301wimy"],
      subtitle: "A przeciez\u0307 s\u0142owo pisane, tez\u0307 ma g\u0142os.",
      cta: "Zapisz sie\u0328 na webinar! :)",
      ctaSub: "Dowiedz sie\u0328 wie\u0328cej o cyfrowej mowie cia\u0142a.",
    },
    about: {
      label: "Zatem,",
      heading: "czym jest freemoji?",
      points: [
        {
          num: "01.",
          title: "Pierwsza w Polsce platforma edukacyjna z cyfrowej mowy cia\u0142a",
          desc: "System edukacji dzia\u0142a tak samo od prawie dwustu lat. Nie zosta\u0142a jeszcze wprowadzona z\u0307adna wie\u0328ksza reforma, maja\u0328ca na celu edukowac\u0301 ludzi w sposo\u0301b adekwatny do wspo\u0301\u0142czesnych standardo\u0301w komunikacji. Jestes\u0301my odpowiedzia\u0328 na te braki.",
        },
        {
          num: "02.",
          title: "\u0141a\u0328cznik pomie\u0328dzy pokoleniami.",
          desc: "Chcemy aby osoby wychowane przed rewolucja\u0328 internetowa\u0328 nie odbiega\u0142y komunikacyjnie od standardo\u0301w narzuconych przez znacznie m\u0142odsze osoby. Wierzymy, z\u0307e w ten sposo\u0301b pokaz\u0307emy, z\u0307e moz\u0307liwe jest prze\u0142amanie bariery komunikacyjnej.",
        },
        {
          num: "03.",
          title: "Unikamy nieporozumien\u0301 po przez niew\u0142as\u0301ciwa\u0328 ekspozycje\u0328 emocjonalna\u0328.",
          desc: "Porozumiewanie sie\u0328 z pomoca\u0328 emotikono\u0301w i skro\u0301to\u0301w potrafi wyrazic\u0301 nasze komunikaty w sposo\u0301b emocjonalny, tylko gdy potrafimy uz\u0307ywac\u0301 ich prawid\u0142owo.",
        },
        {
          num: "04.",
          title: "Odczytaj rozmo\u0301wce\u0328 zanim nacis\u0301nie 'enter'.",
          desc: "Czym jest ghosting, hejt, i kropka na kon\u0301cu zdania? Chcemy wyjas\u0301nic\u0301, z\u0307e kaz\u0307dy znak ma znaczenie. Kaz\u0307de napisane s\u0142owo na klawiaturze niczym nie ro\u0301z\u0307ni sie\u0328 od wypowiedzi.",
        },
      ],
    },
    emojiShowcase: {
      heading: "Wszystko kre\u0328ci sie\u0328 woko\u0301\u0142 emocji",
      subheading: "Co uz\u0307ytkownicy traca\u0328, nie rozumiejac\u0328 emocji w komunikacji cyfrowej? Jak okazac\u0301 sympatie\u0328, zaniepokojenie lub gniew w sposo\u0301b zrozumia\u0142y i odpowiadaja\u0328cy naszemu odczuci?",
    },
    digitalComm: {
      label: "Wiedza",
      heading: "Czym jest cyfrowa komunikacja?",
      paragraphs: [
        "Cyfrowa komunikacja to po prostu sposo\u0301b porozumiewania sie\u0328 przez internet \u2013 w wiadomos\u0301ciach, mailach, komunikatorach czy mediach spo\u0142ecznos\u0301ciowych. Poniewaz\u0307 nie widzimy wtedy mimiki ani gesto\u0301w drugiej osoby, waz\u0307na\u0328 role\u0328 zaczynaja\u0328 odgrywac\u0301 emoji i inne elementy tzw. cyfrowej mowy cia\u0142a, kto\u0301re pomagaja\u0328 pokazac\u0301 emocje i w\u0142as\u0301ciwy ton wypowiedzi.",
      ],
      callout: "\u0141zy nie zawsze sa\u0328 spowodowane smutkiem. Emoji to tez\u0307 nie rada na wszystko.",
    },
    problem: {
      heading: "Nie widzisz emocji? Tracisz po\u0142owe\u0328 komunikatu.",
      desc: "Cyfrowa komunikacja to sposo\u0301b porozumiewania sie\u0328 przez internet \u2013 w wiadomos\u0301ciach, mailach, komunikatorach czy mediach spo\u0142ecznos\u0301ciowych. Gdy nie widzimy mimiki ani gesto\u0301w rozmo\u0301wcy, \u0142atwo zgubic\u0301 emocje i w\u0142as\u0301ciwy ton wypowiedzi.",
      bullets: [
        "Emocje w komunikacji zdalnej sa\u0328 cze\u0328sto niedostrzegalne.",
        "Brak kontaktu wzrokowego, mikroekspresji, gesto\u0301w.",
        "Efektem sa\u0328: nieporozumienia, b\u0142e\u0328dne interpretacje, utracone relacje.",
      ],
    },
    solution: {
      heading: "Freemoji jest rozwiazaniem Twojego problemu",
      desc: "Odczytuj emocje z ekranu. Ucz sie cyfrowej empatii.",
      benefits: [
        { emoji: "\uD83D\uDC40", text: "Lepsze odczytywanie emocji \u2013 rozpoznawaj ukryte emocje u rozmo\u0301wco\u0301w" },
        { emoji: "\uD83E\uDDE0", text: "Inteligencja emocjonalna 2.0 \u2013 rozwijaj empatie\u0328 w s\u0301rodowisku cyfrowym" },
        { emoji: "\uD83D\uDCC8", text: "Skuteczniejsze spotkania \u2013 lepsze decyzje, mniej nieporozumien\u0301" },
        { emoji: "\uD83D\uDE0C", text: "Pewnos\u0301c\u0301 w rozmowie \u2013 mniej stresu w negocjacjach i prezentacjach online" },
        { emoji: "\uD83D\uDC51", text: "Wiarygodnos\u0301c\u0301 lidera \u2013 buduj autorytet i zaufanie w zespole" },
      ],
    },
    webinar: {
      heading: "Co obejmuje webinar?",
      desc: "",
      bullets: [
        { emoji: "\uD83D\uDC40", text: "Poznaj podstawy netykiety oraz zrozum podstawowe poje\u0328cia z cyfrowej komunikacji" },
        { emoji: "\uD83E\uDDE0", text: "Zrozum internetowa\u0328 interpunkcje\u0328 i wyraz\u0307anie emocji online" },
        { emoji: "\uD83D\uDCC8", text: "Znacza\u0328cy wzrost jakos\u0301ci spotkan\u0301 i relacji biurowych" },
        { emoji: "\uD83D\uDE0C", text: "Uz\u0307ywanie klarownych komunikato\u0301w, kto\u0301re pozwola\u0328 Cie\u0328 lepiej zrozumiec\u0301" },
        { emoji: "\uD83D\uDC51", text: "Dowiesz sie\u0328 jak prze\u0142amac\u0301 mie\u0328dzypokoleniowa\u0328 bariere\u0328 komunikacyjna\u0328" },
      ],
      cta: "Zarezerwuj miejsce na najbliz\u0307szy webinar",
    },
    webinarPromo: {
      heading: "Podstawy cyfrowej mowy cia\u0142a na spotkaniach online",
      subtitle: "Jak nie byc\u0301 boomerem w rozmowie z Gen Z i jak nie byc\u0301 cringowym w rozmowie z bommerami",
      bullets: [
        "Dowiedz sie\u0328 jak zrozumiec\u0301 cyfrowa\u0328 mowe\u0328 Gen Z",
        "Naucz sie\u0328 wyraz\u0307ania emocji poprzez wiadomos\u0301ci",
        "Zrozum cyfrowy s\u0301wiat i panuja\u0328ce w nim zasady komunikacji",
      ],
      cta1: "Zmien\u0301 swoja\u0328 mowe\u0328 cia\u0142a juz\u0307 dzis\u0301",
      cta2: "Dowiedz sie\u0328 wie\u0328cej",
    },
    forWhom: {
      heading: "Dla kogo dzia\u0142amy?",
      bullets: [
        "Osoby pracuja\u0328ce w s\u0301rodowisku online",
        "Prowadza\u0328cy spotkania zdalne",
        "Zarza\u0328dzaja\u0328cy zespo\u0142ami",
        "Kaz\u0307dy, kto chce lepiej rozumiec\u0301 komunikacje\u0328 w internecie",
      ],
    },
  },

  genz: {
    hero: {
      headline: ["Plot twist:", "Piszesz wie\u0328cej", "niz\u0307 mo\u0301wisz"],
      subtitle: "A Twoje wiadomos\u0301ci tez\u0307 maja\u0328 vibe, aure\u0328 i emocje.",
      cta: "Wbij na webinar \uD83D\uDD25",
      ctaSub: "Jes\u0301li ich nie pokaz\u0307esz\u2026 Twoja wiadomos\u0301c\u0301 brzmi jak NPC dialog z tutoriala.",
    },
    about: {
      label: "Ok, ale",
      heading: "czym jest freemoji?",
      points: [
        {
          num: "01.",
          title: "Platforma, kto\u0301ra uczy cyfrowej mowy cia\u0142a.",
          desc: "Czyli jak pisac\u0301 w internecie tak, z\u0307eby ludzie czuli Two\u0301j vibe, a nie zastanawiali sie\u0328 czy jestes\u0301 z\u0142y, sarkastyczny, czy po prostu suchy jak mail z HR.",
        },
        {
          num: "02.",
          title: "\u0141a\u0328czymy pokolenia \uD83E\uDD1D",
          desc: "Internet zrobi\u0142 ma\u0142y chaos komunikacyjny. Z jednej strony ludzie z ery maili i telefono\u0301w, z drugiej \u2014 ludzie z ery memo\u0301w, emoji i TikToka. Czasem rozmowa mie\u0328dzy nimi to cringe level 100.",
        },
        {
          num: "03.",
          title: "Emoji = emocje",
          desc: "W internecie emocje pokazujesz przez: emoji, styl pisania, interpunkcje\u0328, tempo odpowiedzi. Jedno emoji moz\u0307e zmieni\u0107 ca\u0142y vibe wiadomos\u0301ci. Poro\u0301wnaj: 'ok' vs 'ok \uD83D\uDE42' \u2014 ta sama wiadomos\u0301c\u0301, totalnie inna aura.",
        },
        {
          num: "04.",
          title: "Czytaj rozmo\u0301wce\u0328 zanim kliknie enter",
          desc: "Internet ma swoje zjawiska: ghosting, hejt, pasywna agresja w wiadomos\u0301ciach, legendarna\u0328 kropke\u0328 na kon\u0301cu zdania. Kaz\u0307dy znak ma znaczenie.",
        },
      ],
    },
    emojiShowcase: {
      heading: "Wszystko kre\u0328ci sie\u0328 woko\u0301\u0142 emocji",
      subheading: "Jes\u0301li nie ogarniasz emocji w komunikacji online: wiadomos\u0301ci sa\u0328 z\u0301le rozumiane, rozmowy robia\u0328 sie\u0328 niezre\u0328czne, relacje sie\u0328 psuja\u0328. Czyli klasyczny komunikacyjny chaos.",
    },
    digitalComm: {
      label: "Real talk",
      heading: "Komunikacja online = komunikacja IRL",
      paragraphs: [
        "Przed ekranem komunikujemy sie\u0328 dzis\u0301 prawie tyle samo co na z\u0307ywo. Tylko zamiast gesto\u0301w, mimiki i tonu g\u0142osu mamy: emoji, interpunkcje\u0328, tempo odpowiedzi i styl pisania.",
        "To jest w\u0142as\u0301nie cyfrowa mowa cia\u0142a.",
      ],
      callout: "Dlatego uczymy jak: okazac\u0301 sympatie\u0328, pokazac\u0301 zaniepokojenie, wyrazic\u0301 z\u0142os\u0301c\u0301, albo zachowac\u0301 profesjonalny ton \u2014 bez robienia cringe.",
    },
    problem: {
      heading: "Nie widzisz emocji? Tracisz po\u0142owe\u0328 komunikatu.",
      desc: "W komunikacji online nie mamy kontaktu wzrokowego, mikroekspresji ani gesto\u0301w.",
      bullets: [
        "Wiadomos\u0301ci sa\u0328 z\u0301le rozumiane",
        "Rozmowy robia\u0328 sie\u0328 niezre\u0328czne",
        "Relacje sie\u0328 psuja\u0328",
      ],
      extra: "Czasem nawet nie widzisz, z\u0307e klient lub wspo\u0301\u0142pracownik ma opo\u0301r.",
    },
    solution: {
      heading: "Freemoji rozwiazuje ten problem",
      desc: "Uczymy, jak odczytywac\u0301 emocje z ekranu i rozwijac\u0301 cyfrowa\u0328 empatie\u0328.",
      benefits: [
        { emoji: "\uD83D\uDC40", text: "lepsze rozpoznawanie emocji rozmo\u0301wco\u0301w" },
        { emoji: "\uD83E\uDDE0", text: "inteligencje\u0328 emocjonalna\u0328 w s\u0301wiecie online" },
        { emoji: "\uD83D\uDCC8", text: "skuteczniejsze spotkania i decyzje" },
        { emoji: "\uD83D\uDE0C", text: "wie\u0328ksza\u0328 pewnos\u0301c\u0301 w rozmowach" },
        { emoji: "\uD83D\uDC51", text: "silniejszy autorytet lidera" },
      ],
    },
    webinar: {
      heading: "Co obejmuje webinar?",
      desc: "",
      bullets: [
        { emoji: "\uD83D\uDC40", text: "podstawy netykiety i cyfrowej komunikacji" },
        { emoji: "\uD83E\uDDE0", text: "znaczenie interpunkcji i emocji w wiadomos\u0301ciach" },
        { emoji: "\uD83D\uDCC8", text: "lepsza\u0328 jakos\u0301c\u0301 spotkan\u0301 i relacji w pracy" },
        { emoji: "\uD83D\uDE0C", text: "jasne i zrozumia\u0142e komunikaty" },
        { emoji: "\uD83D\uDC51", text: "prze\u0142amanie bariery komunikacyjnej mie\u0328dzy pokoleniami" },
      ],
      cta: "Zarezerwuj miejsce na najbliz\u0307szy webinar",
    },
    webinarPromo: {
      heading: "Podstawy cyfrowej mowy cia\u0142a",
      subtitle: "Jak nie miec\u0301 boomer vibe w rozmowie z Gen Z i jak nie byc\u0301 cringe w rozmowie z boomerami.",
      bullets: [
        "jak rozumiec\u0301 cyfrowa\u0328 mowe\u0328 Gen Z",
        "jak pokazywac\u0301 emocje w wiadomos\u0301ciach",
        "jak dzia\u0142a komunikacja w internecie",
      ],
      cta1: "Zmien\u0301 swoja\u0328 cyfrowa\u0328 mowe\u0328 cia\u0142a juz\u0307 dzis\u0301",
      cta2: "Dowiedz sie\u0328 wie\u0328cej",
    },
    forWhom: {
      heading: "Dla kogo to jest?",
      bullets: [
        "Kaz\u0307dy kto pracuje online",
        "Kaz\u0307dy kto pisze duz\u0307o wiadomos\u0301ci",
        "Kaz\u0307dy kto prowadzi spotkania zdalne",
        "Albo po prostu chce lepiej ogarniac\u0301 komunikacje\u0328 w internecie",
      ],
    },
  },

  boomer: {
    hero: {
      headline: ["Dzis\u0301 piszemy", "do siebie cze\u0328s\u0301ciej,", "niz\u0307 rozmawiamy"],
      subtitle: "Wiadomos\u0301ci, e-maile, komunikatory i spotkania online sta\u0142y sie\u0328 codziennos\u0301cia\u0328. Warto jednak pamie\u0328tac\u0301, z\u0307e ro\u0301wniez\u0307 s\u0142owo pisane ma swo\u0301j ton i emocje.",
      cta: "Zapisz sie\u0328 na webinar",
      ctaSub: "Dowiedz sie\u0328 wie\u0328cej o cyfrowej mowie cia\u0142a.",
    },
    about: {
      label: "Zatem,",
      heading: "czym jest freemoji?",
      points: [
        {
          num: "01.",
          title: "Pierwsza w Polsce platforma edukacyjna pos\u0301wie\u0328cona cyfrowej mowie cia\u0142a",
          desc: "freemoji to pierwsza w Polsce platforma edukacyjna pos\u0301wie\u0328cona cyfrowej mowie cia\u0142a \u2013 czyli emocjom, tonowi i znaczeniom ukrytym w komunikacji internetowej. System edukacji od wielu lat uczy nas glo\u0301wnie komunikacji bezpos\u0301redniej. Tymczasem wspo\u0301\u0142czesne z\u0307ycie zawodowe i prywatne w duz\u0307ej mierze przenios\u0142o sie\u0328 do internetu.",
        },
        {
          num: "02.",
          title: "\u0141a\u0328czymy pokolenia",
          desc: "Internet stworzy\u0142 nowe standardy komunikacji, kto\u0301re dla wielu oso\u0301b moga\u0328 byc\u0301 nieintuicyjne. Jednoczes\u0301nie m\u0142odsze pokolenia wychowa\u0142y sie\u0328 w s\u0301wiecie wiadomos\u0301ci tekstowych, skro\u0301to\u0301w i emoji. Naszym celem jest zbudowanie mostu mie\u0328dzy pokoleniami.",
        },
        {
          num: "03.",
          title: "Emocje w komunikacji online",
          desc: "W rozmowie twarza\u0328 w twarz widzimy mimike\u0328, gesty i s\u0142yszymy ton g\u0142osu. W komunikacji internetowej te elementy cze\u0328sto znikaja\u0328. Dlatego coraz wie\u0328ksza\u0328 role\u0328 odgrywaja\u0328 takie elementy jak: sposo\u0301b formu\u0142owania wiadomos\u0301ci, interpunkcja, emoji i skro\u0301ty.",
        },
        {
          num: "04.",
          title: "Zrozum rozmo\u0301wce\u0328 zanim nacis\u0301nie wys\u0301lij",
          desc: "W s\u0301wiecie komunikacji cyfrowej nawet drobne elementy moga\u0328 miec\u0301 znaczenie. Zjawiska takie jak ghosting, hejt czy sposo\u0301b zakon\u0301czenia zdania potrafia\u0328 wp\u0142ywac\u0301 na to, jak odbieramy wiadomos\u0301c\u0301. W praktyce oznacza to, z\u0307e kaz\u0307dy znak i kaz\u0307de s\u0142owo moga\u0328 zmieniac\u0301 ton wypowiedzi.",
        },
      ],
    },
    emojiShowcase: {
      heading: "Wszystko zaczyna sie\u0328 od emocji",
      subheading: "Brak zrozumienia emocji w komunikacji cyfrowej moz\u0307e prowadzic\u0301 do: nieporozumien\u0301, b\u0142e\u0328dnych interpretacji, utraty zaufania, napie\u0328c\u0301 w relacjach zawodowych.",
    },
    digitalComm: {
      label: "Wiedza",
      heading: "Czym jest cyfrowa komunikacja?",
      paragraphs: [
        "Cyfrowa komunikacja to sposo\u0301b porozumiewania sie\u0328 za pomoca\u0328 internetu \u2013 w wiadomos\u0301ciach, e-mailach, komunikatorach czy mediach spo\u0142ecznos\u0301ciowych. Poniewaz\u0307 nie widzimy wtedy mimiki ani gesto\u0301w rozmo\u0301wcy, duz\u0307e znaczenie maja\u0328 elementy takie jak styl pisania, interpunkcja czy emoji, kto\u0301re pomagaja\u0328 wyrazic\u0301 emocje i w\u0142as\u0301ciwy ton wypowiedzi.",
      ],
      callout: "Dlatego warto nauczyc\u0301 sie\u0328, jak w sposo\u0301b jasny i zrozumia\u0142y wyraz\u0307ac\u0301 emocje w wiadomos\u0301ciach oraz jak odczytywac\u0301 intencje rozmo\u0301wco\u0301w.",
    },
    problem: {
      heading: "Nie widzisz emocji? Tracisz po\u0142owe\u0328 komunikatu.",
      desc: "W komunikacji zdalnej brakuje wielu sygna\u0142o\u0301w obecnych w rozmowie bezpos\u0301redniej \u2013 kontaktu wzrokowego, gesto\u0301w czy mikroekspresji twarzy. W efekcie \u0142atwo przeoczyc\u0301 emocje rozmo\u0301wcy, opo\u0301r klienta czy niepewnos\u0301c\u0301 wspo\u0301\u0142pracownika.",
      bullets: [
        "nieporozumien\u0301",
        "b\u0142e\u0328dnych decyzji",
        "pogorszenia relacji zawodowych",
      ],
    },
    solution: {
      heading: "Fremoji \u2013 rozwiazanie dla komunikacji cyfrowej",
      desc: "Naszym celem jest nauczyc\u0301 uczestniko\u0301w, jak odczytywac\u0301 emocje w komunikacji online i s\u0301wiadomie budowac\u0301 przekaz.",
      benefits: [
        { emoji: "\uD83D\uDC40", text: "lepsze rozumienie emocji rozmo\u0301wco\u0301w" },
        { emoji: "\uD83E\uDDE0", text: "rozwo\u0301j inteligencji emocjonalnej w komunikacji cyfrowej" },
        { emoji: "\uD83D\uDCC8", text: "skuteczniejsze spotkania i rozmowy biznesowe" },
        { emoji: "\uD83D\uDE0C", text: "wie\u0328ksza\u0328 pewnos\u0301c\u0301 w komunikacji online" },
        { emoji: "\uD83D\uDC51", text: "silniejszy autorytet w zespole" },
      ],
    },
    webinar: {
      heading: "Co obejmuje webinar?",
      desc: "Podczas spotkania:",
      bullets: [
        { emoji: "\uD83D\uDC40", text: "poznasz podstawy netykiety i komunikacji cyfrowej" },
        { emoji: "\uD83E\uDDE0", text: "zrozumiesz znaczenie interpunkcji i emocji w wiadomos\u0301ciach" },
        { emoji: "\uD83D\uDCC8", text: "dowiesz sie\u0328, jak poprawic\u0301 jakos\u0301c\u0301 spotkan\u0301 online" },
        { emoji: "\uD83D\uDE0C", text: "nauczysz sie\u0328 tworzyc\u0301 jasne i zrozumia\u0142e komunikaty" },
        { emoji: "\uD83D\uDC51", text: "poznasz sposoby prze\u0142amywania barier komunikacyjnych mie\u0328dzy pokoleniami" },
      ],
      cta: "Zarezerwuj miejsce na najbliz\u0307szy webinar",
    },
    webinarPromo: {
      heading: "Podstawy cyfrowej mowy cia\u0142a na spotkaniach online",
      subtitle: "Jak nie byc\u0301 boomerem dla Gen Z i jak nie byc\u0301 cringowym dla boomero\u0301w.",
      bullets: [
        "jak rozumiec\u0301 komunikacje\u0328 m\u0142odszych pokolen\u0301",
        "jak wyraz\u0307ac\u0301 emocje w wiadomos\u0301ciach tekstowych",
        "jakie zasady obowia\u0328zuja\u0328 w komunikacji internetowej",
      ],
      cta1: "Zmien\u0301 swoja\u0328 mowe\u0328 cia\u0142a juz\u0307 dzis\u0301",
      cta2: "Dowiedz sie\u0328 wie\u0328cej",
    },
    forWhom: {
      heading: "Dla kogo jest ten webinar?",
      bullets: [
        "Osoby pracuja\u0328ce w s\u0301rodowisku online",
        "Prowadza\u0328cy spotkania zdalne",
        "Zarza\u0328dzaja\u0328cy zespo\u0142ami",
        "Osoby, kto\u0301re chca\u0328 lepiej rozumiec\u0301 komunikacje\u0328 w internecie",
      ],
    },
  },

  genalpha: {
    hero: {
      headline: ["Plot twist:", "Piszesz wie\u0328cej", "niz\u0307 mo\u0301wisz"],
      subtitle: "A Twoje wiadomos\u0301ci tez\u0307 maja\u0328 vibe, aure\u0328 i emocje.",
      cta: "Wbij na webinar \uD83D\uDD25",
      ctaSub: "Jes\u0301li ich nie pokaz\u0307esz\u2026 Twoja wiadomos\u0301c\u0301 brzmi jak NPC dialog z tutoriala.",
    },
    about: {
      label: "Ok, ale",
      heading: "czym jest freemoji?",
      points: [
        {
          num: "01.",
          title: "Platforma, kto\u0301ra uczy cyfrowej mowy cia\u0142a.",
          desc: "Czyli jak pisac\u0301 w internecie tak, z\u0307eby ludzie czuli Two\u0301j vibe, a nie zastanawiali sie\u0328 czy jestes\u0301 z\u0142y, sarkastyczny, czy po prostu suchy jak mail z HR. Szko\u0142a przez prawie 200 lat uczy\u0142a ludzi pisac\u0301 wypracowania. Ale nikt nie uczy\u0142 jak pisac\u0301 na czacie, w mailu, na Slacku, na Messengerze.",
        },
        {
          num: "02.",
          title: "\u0141a\u0328czymy pokolenia \uD83E\uDD1D",
          desc: "Internet zrobi\u0142 ma\u0142y chaos komunikacyjny. Z jednej strony ludzie z ery maili i telefono\u0301w, z drugiej \u2014 ludzie z ery memo\u0301w, emoji i TikToka. Bo kropka na kon\u0301cu zdania ma dziwna\u0328 aure\u0328. freemoji pomaga ogarna\u0328c\u0301 ten mie\u0328dzypokoleniowy bug komunikacyjny.",
        },
        {
          num: "03.",
          title: "Emoji = emocje",
          desc: "W internecie emocje pokazujesz przez: emoji, styl pisania, interpunkcje\u0328, tempo odpowiedzi. Jedno emoji moz\u0307e zmieni\u0107 ca\u0142y vibe wiadomos\u0301ci. Poro\u0301wnaj: 'ok' vs 'ok \uD83D\uDE42' \u2014 ta sama wiadomos\u0301c\u0301, totalnie inna aura.",
        },
        {
          num: "04.",
          title: "Czytaj rozmo\u0301wce\u0328 zanim kliknie enter",
          desc: "Ghosting. Hejt. Pasywna agresja w wiadomos\u0301ciach. Legendarna kropka na kon\u0301cu zdania. Kaz\u0307dy znak ma znaczenie. Pisanie w internecie to troche\u0328 jak rozmowa\u2026 tylko zamiast gesto\u0301w masz: emoji, interpunkcje\u0328, styl pisania, czyli cyfrowa\u0328 mowe\u0328 cia\u0142a.",
        },
      ],
    },
    emojiShowcase: {
      heading: "Wszystko kre\u0328ci sie\u0328 woko\u0301\u0142 emocji",
      subheading: "Jes\u0301li nie ogarniasz emocji w komunikacji online: wiadomos\u0301ci sa\u0328 z\u0301le rozumiane, rozmowy robia\u0328 sie\u0328 niezre\u0328czne, relacje sie\u0328 psuja\u0328. Czyli klasyczny komunikacyjny chaos. Dlatego uczymy jak okazac\u0301 sympatie\u0328, pokazac\u0301 zaniepokojenie, wyrazic\u0301 z\u0142os\u0301c\u0301, albo zachowac\u0301 profesjonalny ton \u2014 bez robienia cringe.",
    },
    digitalComm: {
      label: "Real talk",
      heading: "Cyfrowa komunikacja to rozmowy w internecie",
      paragraphs: [
        "Maile, wiadomos\u0301ci, komunikatory, social media. Problem? Nie widzimy mimiki ani gesto\u0301w. Dlatego ogromne znaczenie maja\u0328: emoji, interpunkcja, styl pisania \u2014 czyli elementy cyfrowej mowy cia\u0142a.",
      ],
      callout: "Jedno emoji moz\u0307e zmieni\u0107 ca\u0142y vibe wiadomos\u0301ci. 'ok' vs 'ok \uD83D\uDE42' \u2014 totalnie inna aura.",
    },
    problem: {
      heading: "Nie widzisz emocji? Tracisz po\u0142owe\u0328 komunikatu.",
      desc: "W komunikacji online nie mamy kontaktu wzrokowego, mikroekspresji ani gesto\u0301w.",
      bullets: [
        "b\u0142e\u0328dne interpretacje",
        "napie\u0328cia w rozmowach",
        "utrata zaufania",
        "gorsze decyzje",
      ],
    },
    solution: {
      heading: "Freemoji rozwiazuje ten problem",
      desc: "Uczymy, jak odczytywac\u0301 emocje z ekranu i rozwijac\u0301 cyfrowa\u0328 empatie\u0328.",
      benefits: [
        { emoji: "\uD83D\uDC40", text: "lepsze rozpoznawanie emocji rozmo\u0301wco\u0301w" },
        { emoji: "\uD83E\uDDE0", text: "inteligencje\u0328 emocjonalna\u0328 w s\u0301wiecie online" },
        { emoji: "\uD83D\uDCC8", text: "skuteczniejsze spotkania i decyzje" },
        { emoji: "\uD83D\uDE0C", text: "wie\u0328ksza\u0328 pewnos\u0301c\u0301 w rozmowach" },
        { emoji: "\uD83D\uDC51", text: "silniejszy autorytet lidera" },
      ],
    },
    webinar: {
      heading: "Co obejmuje webinar?",
      desc: "",
      bullets: [
        { emoji: "\uD83D\uDC40", text: "podstawy netykiety i cyfrowej komunikacji" },
        { emoji: "\uD83E\uDDE0", text: "znaczenie interpunkcji i emocji w wiadomos\u0301ciach" },
        { emoji: "\uD83D\uDCC8", text: "lepsza\u0328 jakos\u0301c\u0301 spotkan\u0301 i relacji w pracy" },
        { emoji: "\uD83D\uDE0C", text: "jasne i zrozumia\u0142e komunikaty" },
        { emoji: "\uD83D\uDC51", text: "prze\u0142amanie bariery komunikacyjnej mie\u0328dzy pokoleniami" },
      ],
      cta: "Zarezerwuj miejsce na najbliz\u0307szy webinar",
    },
    webinarPromo: {
      heading: "Podstawy cyfrowej mowy cia\u0142a",
      subtitle: "Jak nie miec\u0301 boomer vibe w rozmowie z Gen Z i jak nie byc\u0301 cringe w rozmowie z boomerami.",
      bullets: [
        "jak rozumiec\u0301 cyfrowa\u0328 mowe\u0328 Gen Z",
        "jak pokazywac\u0301 emocje w wiadomos\u0301ciach",
        "jak dzia\u0142a komunikacja w internecie",
      ],
      cta1: "Zmien\u0301 swoja\u0328 cyfrowa\u0328 mowe\u0328 cia\u0142a juz\u0307 dzis\u0301",
      cta2: "Dowiedz sie\u0328 wie\u0328cej",
    },
    forWhom: {
      heading: "Dla kogo to jest?",
      bullets: [
        "Kaz\u0307dy kto pracuje online",
        "Kaz\u0307dy kto pisze duz\u0307o wiadomos\u0301ci",
        "Kaz\u0307dy kto prowadzi spotkania zdalne",
        "Albo po prostu chce lepiej ogarniac\u0301 komunikacje\u0328 w internecie",
      ],
    },
  },
};

export const variantLabels: Record<VariantKey, string> = {
  normalne: "Normalne",
  genz: "Gen Z",
  boomer: "Boomer",
  genalpha: "Gen Alpha",
};
