import { kmExampleTranslations, enExampleTranslations } from "./examples.js";

export const localizedElements = [
  'nav-system-caption', 'nav-example-caption', 'nav-device', 'nav-device-desktop', 'nav-device-phone',
  'help-title', 'help-content', 'help-label-show-help-on-startup', 'help-ok',
  'about-title', 'about-content', 'about-ok',
  'example-info-title', 'example-info-ok', "example-info-render-title", "example-info-today-text", "example-info-future-text",
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

      "help-title": "Khmer Encoding Structure demo",
      "help-label-show-help-on-startup": "Show this when page first loads",
      "help-ok": "OK",
      "help-content": `
        <p>
          This website demonstrates the improved
          <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/" target="_blank">Khmer Encoding Structure</a>,
          using the Khmer Angkor keyboard and Khmer Busra Test font.
        </p>

        <p>
          To get you started, this site has some examples of common
          Khmer words that have ambiguous or difficult keying orders. We compare
          today's technology stack (Khmer Unicode standard) and how it will be
          easier in the future with the Khmer Encoding Structure.
        </p>

        <ol>
          <li>
            Start by choosing the Khmer system <b>Today</b> (Khmer Unicode standard).
          </li>
          <li>
            Choose an example to try. Each example has multiple key sequences
            &mdash; but only one of these sequences produces correctly
            encoded text with today's technology.
          </li>
          <li>
            Try typing the examples &mdash; either typing them yourself on your
            keyboard, or by clicking <b><span class="bi-keyboard"></span> Try it</b>. Then
            try them again with the <b>Future</b> system &mdash; the Khmer Encoding Structure.
          </li>
        </ol>

        <p>
          Do you know which is the right keying order for each example with the
          NiDA keyboard? Click the <b><span class="bi-question-octagon"></span> Learn more</b>
          button next to each key sequence to read a detailed explanation.
        </p>

        <p>
          You will see that with the new Khmer Angkor keyboard, harnessing the
          power of the Khmer Encoding Structure, all the key sequences will just
          work! No need to remember complicated rules &mdash; go ahead, try it!
        </p>

        <p>
          You can also type any Khmer text you like: try experimenting with
          other words and watch how Khmer Encoding Structure handles all the
          complex ordering rules.
        </p>

        <p>
        Learn more:
        </p>

        <ul>
          <li><span class="bi-globe-asia-australia"></span> <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/">Khmer Encoding Structure home page</a></li>
          <li><span class="bi-file-earmark-pdf"></span> <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf">Khmer Encoding Structure proposal</a></li>
          <li><span class="bi-journal-text"></span> <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">Spoof-Vulnerable Rendering in Khmer Unicode Implementation research paper</a></li>
          <li><span class="bi-github"></span> <a href="https://github.com/clo-org-kh/pheasakhmer.com">GitHub source for this site</a></li>
          <li><span class="bi-envelope-at"></span> <a href="mailto:camlingorg@gmail.com">Contact us</a></li>
        </ul>

        <p>&copy; 2024 Cambodia Linguistics Organization</p>

        <p><img src="clo-big.png" style="width: 100%" alt="Cambodia Linguistics Organization logo"></p>

        <p style="text-align: center">
        <a href="https://www.sil.org" target="_blank"><img src="sil.png" style="width:30%" alt="SIL Global"></a>
        <a href="https://npic.edu.kh" target="_blank"><img src="npic.png" style="width:30%" alt="National Polytechnic Institute of Cambodia"></a>
        <a href="https://www.cadt.edu.kh" target="_blank"><img src="cadt.png" style="width:30%" alt="Cambodia Academy of Digital Technology"></a>
        </p>

        <p style="text-align: center">
        <a href="https://keyman.com" target="_blank"><img src="powered-by-keyman-280x36.png" alt="Powered by Keyman"></a>
        </p>
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

        <ul>
          <li><span class="bi-globe-asia-australia"></span> <a href="https://www.idri.edu.kh/research/khmer-encoding-structure/" target="_blank">Khmer Encoding Structure home page</a></li>
          <li><span class="bi-file-earmark-pdf"></span> <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank">Khmer Encoding Structure proposal</a></li>
          <li><span class="bi-journal-text"></span> <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">Spoof-Vulnerable Rendering in Khmer Unicode Implementation research paper</a></li>
          <li><span class="bi-github"></span> <a href="https://github.com/clo-org-kh/pheasakhmer.com" target="_blank">GitHub source for this site</a></li>
          <li><span class="bi-envelope-at"></span> <a href="mailto:camlingorg@gmail.com">Contact us</a></li>
        </ul>

        <p>&copy; 2024 Cambodia Linguistics Organization</p>

        <p><img src="clo-big.png" style="width: 100%" alt="Cambodia Linguistics Organization logo"></p>

        <p style="text-align: center">
        <a href="https://www.sil.org" target="_blank"><img src="sil.png" style="width:30%" alt="SIL Global"></a>
        <a href="https://npic.edu.kh" target="_blank"><img src="npic.png" style="width:30%" alt="National Polytechnic Institute of Cambodia"></a>
        <a href="https://www.cadt.edu.kh" target="_blank"><img src="cadt.png" style="width:30%" alt="Cambodia Academy of Digital Technology"></a>
        </p>

        <p style="text-align: center">
        <a href="https://keyman.com" target="_blank"><img src="powered-by-keyman-280x36.png" alt="Powered by Keyman"></a>
        </p>

        <p>
        If you encounter any issues with this website, please report them
        on our
        <span class="bi-github"></span> <a href="https://github.com/clo-org-kh/pheasakhmer.com/issues">issue tracker</a>.
        </p>
      `,

      // Hamburger menu

      "menu-install-keyboard": "Install Khmer Angkor keyboard",
      "menu-help": "Help using this website",
      "menu-about": "About this website",

      // Examples

      "example-try-it": "Try it",
      "example-info": "Learn more",

      "example-info-title": "About this example",
      "example-info-ok": "OK",

      "example-info-render-title": "How the Khmer Encoding Structure displays this encoding error",
      "example-info-today-text": `
        This is the result of typing this sequence with today's keyboard, using today's font. Encoding
        errors may or may not be visible &mdash; depending on your device.
      `,
      "example-info-future-text": `
        This is the result if you type this sequence with today's keyboard, and display with
        the Khmer Busra Test future font. Encoding errors will be clearly shown with
        dotted circles.
      `,

      // descriptions of examples are imported from examples.js
      ...enExampleTranslations,
    }
  },
  km: {
    translation: {
      "help-title": "សួស្តី",
      "menu-install-keyboard": "សួស្តី Khmer Angkor",

      ...kmExampleTranslations,
    }
  }
};
