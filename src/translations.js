import { examples } from "./examples.js";

const enExampleText = examples.reduce((obj, example) => {
  obj['example-'+example.id] = example.description.en;
  example.alternates.reduce((obj, alt) => {
    obj['example-'+example.id+'-alt-'+alt.id] = alt.description.en;
    return obj;
  }, obj);
  return obj;
}, {});

const kmExampleText = examples.reduce((obj, example) => {
  obj['example-'+example.id] = example.description.km;
  example.alternates.reduce((obj, alt) => {
    obj['example-'+example.id+'-alt-'+alt.id] = alt.description.km;
    return obj;
  }, obj);
  return obj;
}, {});

export const localizedElements = [
  'nav-system-caption', 'nav-example-caption', 'nav-device', 'nav-device-desktop', 'nav-device-phone',
  'help-title', 'help-content', 'help-label-show-help-on-startup', 'help-ok',
  'about-title', 'about-content', 'about-ok',
  'example-info-title', 'example-info-ok',
  "encoding-result-correct", "encoding-result-incorrect",
];

export const resources = {
  en: {
    translation: {

      // Page title
      "title": "ភាសាខ្មែរ.com -- Khmer Encoding Structure",

      // Nav

      "nav-system-caption": "Choose Khmer system:",
      "nav-example-caption": "Choose example:",
      "nav-device": "Device",
      "nav-device-desktop": "Desktop Browsers",
      "nav-device-phone": "Phone Devices",

      // Systems

      "system-today": "Today",
      "system-today-long": "Today: Khmer Unicode",
      "system-future": "Future",
      "system-future-long": "Future: Khmer Encoding Structure",

      // Various

      "text-placeholder": "③ type here",
      "encoding-result-correct": "✅ Text is encoded correctly",
      "encoding-result-incorrect": "❌ Text is encoded incorrectly",

      // Help / Welcome dialog

      "help-title": "Welcome to the Khmer Encoding Structure demo site",
      "help-label-show-help-on-startup": "Show this when page first loads",
      "help-ok": "OK",
      "help-content": `
        <p>
        This website demonstrates the improved
        <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/">Khmer encoding structure</a>,
        using the Khmer Angkor keyboard and Khmer Busra Test font.
        </p>

        <p>
        To get you started, this site has some examples of ambiguous or
        difficult Khmer character encodings. Each example has multiple
        keying orders, only one of which works in today's technology stack.
        </p>

        <p>
        Try typing the examples &mdash; either typing them yourself on your
        keyboard, or by clicking <b>Try it</b>. Then try them again with
        the Khmer system of the Future &mdash; the Khmer Encoding Structure.
        </p>

        <p>
        Do you know which is the right keying order for each example with the
        NiDA keyboard? With the new Khmer Angkor keyboard, harnessing the power
        of the Khmer Encoding Structure, <i>all</i> of the key sequences will
        work correctly! No need to remember complicated rules &mdash; go
        ahead, try it!
        </p>

        <p>
        Learn more at the links below!
        </p>

        <p>&copy; 2024 Cambodia Linguistics Organization</p>

        <p>TODO: CLO logo | SIL logo | NPIC logo | CADT logo</p>

        <p>Powered by Keyman TODO: Keyman logo</p>

        <ul>
          <li><span class="bi-globe-asia-australia"></span> <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/">Khmer Encoding Structure home page</a></li>
          <li><span class="bi-file-earmark-pdf"></span> <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf">Khmer Encoding Structure proposal</a></li>
          <li><span class="bi-github"></span> <a href="https://github.com/mcdurdin/khmer-syllable-example">GitHub source for this site</a></li>
          <li><span class="bi-envelope-at"></span> <a href="about:blank">Contact us</a> TODO</li>
        </ul>
      `,

      // About dialog

      "about-title": "About Khmer Encoding Structure Website",
      "about-ok": "OK",
      "about-content": `
        <p>
        This website demonstrates the improved Khmer Encoding Structure,
        using the Khmer Angkor keyboard and Khmer Busra Test font, and
        compares to existing keyboards and fonts.
        </p>

        <p>&copy; 2024 Cambodia Linguistics Organization</p>

        <p>TODO: CLO logo | SIL logo | NPIC logo | CADT logo</p>

        <p>Powered by Keyman TODO: Keyman logo</p>

        <p>
        If you encounter any issues with this website, please report them
        on our
        <span class="bi-github"></span> <a href="https://github.com/mcdurdin/khmer-syllable-example/issues">issue tracker</a>.
        </p>

        <ul>
          <li><span class="bi-globe-asia-australia"></span> <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/">Khmer Encoding Structure home page</a></li>
          <li><span class="bi-file-earmark-pdf"></span> <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf">Khmer Encoding Structure proposal</a></li>
          <li><span class="bi-github"></span> <a href="https://github.com/mcdurdin/khmer-syllable-example">GitHub source for this site</a></li>
          <li><span class="bi-envelope-at"></span> <a href="about:blank">Contact us</a> TODO</li>
        </ul>
      `,

      // Hamburger menu

      "menu-install-keyboard": "Install Khmer Angkor keyboard",
      "menu-help": "Help using this website",
      "menu-about": "About this website",

      // Examples

      "example-try-it": "Try it",
      "example-info": "ℹ️",

      "example-info-title": "About this example",
      "example-info-ok": "OK",

      // descriptions of examples are imported from examples.js
      ...enExampleText,
    }
  },
  km: {
    translation: {
      "help-title": "សួស្តី",
      "menu-install-keyboard": "សួស្តី Khmer Angkor",

      ...kmExampleText
    }
  }
};
