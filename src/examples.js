// Note: descriptions here are imported into translations.js

export const examples = [
  {
    text: 'ខ្មែរ',
    id: 'word-khmer',
    description: { en: "The word 'Khmer'", km: "" },
    alternates: [
      {
        id: 1,
        description: {
          en: `
          <p>
            This example follows the NiDA keying order. That means that the user is
            typing in exactly the same order as the encoded order.
          </p>
        `,
          km: `

        `,
        },
        keys_nida: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ម', key: 'default-K_M' },
          { cap: ['Shift', 'ែ'], key: ['shift', 'shift-K_E'] },
          { cap: 'រ', key: 'default-K_R' }
        ],
        keys_angkor_mobile: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: 'ម', key: ['longpress', 'default-K_M'], longpress: true },
          { cap: '្ម', key: ['popup', 'popup-default-T_17D2_1798'] },
          { cap: 'េ', key: ['longpress', 'default-K_E'], longpress: true },
          { cap: 'ែ', key: ['popup', 'popup-default-K_E+shift'] },
          { cap: 'រ', key: 'default-K_R' }
        ],
      },
      {
        id: 2,
        description: { en: `
          <p>
            In this example, the coeng ma subconsonant ្ម has been typed after the vowel ែ.
            With the NiDA keyboard and the existing Khmer Unicode encoding, this appears
            identical to the alternate (correct) order, so it is not possible to tell by
            reading that it is wrong.
          </p>

          <p>
            Khmer Angkor and the normalizer will both fix this incorrect ordering automatically.
          </p>
        `, km: "" },
        keys_nida: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: ['Shift', 'ែ'], key: ['shift', 'shift-K_E'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ម', key: 'default-K_M' },
          { cap: 'រ', key: 'default-K_R' }
        ],
        keys_angkor_mobile: [
          { cap: 'ខ', key: 'default-K_X' },
          { cap: 'េ', key: ['longpress', 'default-K_E'], longpress: true },
          { cap: 'ែ', key: ['popup', 'popup-default-K_E+shift'] },
          { cap: 'ម', key: ['longpress', 'default-K_M'], longpress: true },
          { cap: '្ម', key: ['popup', 'popup-default-T_17D2_1798'] },
          { cap: 'រ', key: 'default-K_R' }
        ],
      },
    ]
  },
  {
    text: 'ស្ត្រី',
    id: "woman",
    description: { en: "stri, 'woman'", km: "" },
    alternates: [
      {
        id: 1,
        description: { en: "NiDA keying order", km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ត', key: ['longpress', 'default-K_T'], longpress: true },
          { cap: '្ត', key: ['popup', 'popup-default-T_17D2_178F'] },
          { cap: 'រ', key: ['longpress', 'default-K_R'], longpress: true },
          { cap: '្រ', key: ['popup', 'popup-default-T_17D2_179A'] },
          { cap: 'ិ', key: ['longpress', 'default-K_I'], longpress: true },
          { cap: 'ី', key: ['popup', 'popup-default-K_I+shift'] },
        ],
      },
      {
        id: 2,
        description: { en: "coeng ro typed before coeng to", km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'រ', key: ['longpress', 'default-K_R'], longpress: true },
          { cap: '្រ', key: ['popup', 'popup-default-T_17D2_179A'] },
          { cap: 'ត', key: ['longpress', 'default-K_T'], longpress: true },
          { cap: '្ត', key: ['popup', 'popup-default-T_17D2_178F'] },
          { cap: 'ិ', key: ['longpress', 'default-K_I'], longpress: true },
          { cap: 'ី', key: ['popup', 'popup-default-K_I+shift'] },
        ],
      },
      {
        id: 3,
        description: { en: "coeng do instead of coeng to", km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ដ', key: ['longpress', 'default-K_D'], longpress: true },
          { cap: '្ដ', key: ['popup', 'popup-default-T_17D2_178A'] },
          { cap: 'រ', key: ['longpress', 'default-K_R'], longpress: true },
          { cap: '្រ', key: ['popup', 'popup-default-T_17D2_179A'] },
          { cap: 'ិ', key: ['longpress', 'default-K_I'], longpress: true },
          { cap: 'ី', key: ['popup', 'popup-default-K_I+shift'] },
        ],
      },
      {
        id: 4,
        description: { en: "coeng do instead of coeng to, wrong order", km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] }
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'រ', key: ['longpress', 'default-K_R'], longpress: true },
          { cap: '្រ', key: ['popup', 'popup-default-T_17D2_179A'] },
          { cap: 'ដ', key: ['longpress', 'default-K_D'], longpress: true },
          { cap: '្ដ', key: ['popup', 'popup-default-T_17D2_178A'] },
          { cap: 'ិ', key: ['longpress', 'default-K_I'], longpress: true },
          { cap: 'ី', key: ['popup', 'popup-default-K_I+shift'] },
        ],
      },
      {
        id: 5,
        description: { en: "vowel before coengs", km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ត', key: 'default-K_T' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ិ', key: ['longpress', 'default-K_I'], longpress: true },
          { cap: 'ី', key: ['popup', 'popup-default-K_I+shift'] },
          { cap: 'រ', key: ['longpress', 'default-K_R'], longpress: true },
          { cap: '្រ', key: ['popup', 'popup-default-T_17D2_179A'] },
          { cap: 'ត', key: ['longpress', 'default-K_T'], longpress: true },
          { cap: '្ត', key: ['popup', 'popup-default-T_17D2_178F'] },
        ],
      },
      {
        id: 6,
        description: { en: "vowel before coengs, coengs wrong order, do instead of to!", km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: '្', key: 'default-K_J' },
          { cap: 'រ', key: 'default-K_R' },
          { cap: '្', key: 'default-K_J' },
          { cap: 'ដ', key: 'default-K_D' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ិ', key: ['longpress', 'default-K_I'], longpress: true },
          { cap: 'ី', key: ['popup', 'popup-default-K_I+shift'] },
          { cap: 'រ', key: ['longpress', 'default-K_R'], longpress: true },
          { cap: '្រ', key: ['popup', 'popup-default-T_17D2_179A'] },
          { cap: 'ដ', key: ['longpress', 'default-K_D'], longpress: true },
          { cap: '្ដ', key: ['popup', 'popup-default-T_17D2_178A'] },
        ],
      },
    ]
  },
  {
    text: 'ស៊ើប',
    id: 'detect',
    description: { en: "'to detect, investigate'", km: "" },
    alternates: [
      {
        id: 1,
        description: { en: "NiDA keying order", km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '៊', key: 'default-K_SLASH' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '់', key: ['longpress', 'default-K_QUOTE'], longpress: true },
          { cap: '៊', key: ['popup', 'popup-default-K_SLASH'] },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
      },
      {
        id: 2,
        description: { en: `
          <p>
            This example uses the wrong consonant shifter, ៉ MUSIKATOAN
            instead of ៊ TRISAP on ស. While this is not technically an
            invalid encoding, it is never valid in Khmer, and so the new
            Khmer Encoding Structure enforces use of ៊ TRISAP in this
            position.
          </p>

          <p>
            On some devices, ៉ MUSIKATOAN may render in its down-shifted
            form, even when on ស, which would make this confusable.
          </p>
        `, km: "" },
        keys_nida_desktop: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', '៉'], key: ['shift', 'shift-K_QUOTE'] },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', '៉'], key: ['shift', 'shift-K_QUOTE'] },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_desktop: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: ['Shift', '៉'], key: ['shift', 'shift-K_QUOTE'] },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '់', key: ['longpress', 'default-K_QUOTE'], longpress: true },
          { cap: '៉', key: ['popup', 'popup-default-K_QUOTE+shift'] },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
      },

      {
        id: 3,
        description: { en: "two vowel chars instead of correct one", km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '៊', key: 'default-K_SLASH' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '់', key: ['longpress', 'default-K_QUOTE'], longpress: true },
          { cap: '៊', key: ['popup', 'popup-default-K_SLASH'] },
          { cap: 'េ', key: 'default-K_E' },
          { cap: 'ិ', key: ['longpress', 'default-K_I'], longpress: true },
          { cap: 'ី', key: ['popup', 'popup-default-K_I+shift'] },
          { cap: 'ប', key: 'default-K_B' },
        ],
      },

      {
        id: 4,
        description: { en: "ou vowel instead of dropped shifter", km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
      },

      {
        id: 5,
        description: { en: "ou vowel instead of dropped shifter, and two vowel chars", km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ិ', key: ['longpress', 'default-K_I'], longpress: true },
          { cap: 'ី', key: ['popup', 'popup-default-K_I+shift'] },
          { cap: 'ប', key: 'default-K_B' },
        ],
      },
    ]
  }
];
