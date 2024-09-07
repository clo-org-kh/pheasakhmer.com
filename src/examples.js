// Note: descriptions here are imported into translations.js

export const examples = [

  //---------------------------------------------------------------------------------------------------
  // ខ្មែរ
  //---------------------------------------------------------------------------------------------------
  {
    text: 'ខ្មែរ',
    id: 'word-khmer',
    description: { en: "the word 'Khmer'", km: "" },
    alternates: [
      {
        id: 1,
        text: "ខ្មែរ",
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
        text: "ខែ្មរ",
        description: { en: `
          <p>
            In this example, the COENG MO subconsonant ្ម has been typed after the vowel ែ.
            With the NiDA keyboard and the existing Khmer Unicode encoding, this appears
            identical to the alternate (correct) order, so it is not possible to tell by
            reading that it is wrong.
          </p>

          <p>
            This is an example of <b>Case #1</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will both fix this incorrect ordering automatically.
          </p>

          <p>
            <b>Important note:</b> The Khmer Busra Test font cannot show a dotted circle for
            Case #1 issues, because the text rendering engine internally reorders the vowel
            before it reaches the font. Making this issue visible to the user requires a change
            to the renderer. This is the only scenario where this problem arises.
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

  //---------------------------------------------------------------------------------------------------
  // ស្ត្រី
  //---------------------------------------------------------------------------------------------------
  {
    text: 'ស្ត្រី',
    id: "woman",
    description: { en: "stri, 'woman'", km: "" },
    alternates: [
      {
        id: 1,
        text: "ស្ត្រី",
        description: { en: `
          <p>
            This example follows the NiDA keying order. That means that the user is
            typing in exactly the same order as the encoded order.
          </p>
        `, km: ""
        },
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
        text: "ស្រ្តី",
        description: { en: `
          <p>
            In this example, the COENG RO ្រ is being typed before COENG TA ្ត. This
            does not match the expected phonetic ordering of the subconsonants. On
            many devices, this renders identically to the correct phonetic encoding
            order.
          </p>

          <p>
            This is an example of <b>Case #2</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will both fix this incorrect ordering automatically.
          </p>
        `, km: "" },
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
        text: "ស្ដ្រី",
        description: { en: `
          <p>
            This is one of the most contentious issues: COENG DA ្ដ is being used
            instead of COENG TA ្ត. In modern Khmer, COENG DA ្ដ and
            COENG TA ្ត have an identical presentation. This makes them confusable.
          </p>

          <p>
            In old and middle Khmer, COENG DA can have a differentiated form; see the
            <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank">proposal document</a>,
            <i>Coeng ta and Coeng da</i> section, for more detail.
          </p>

          <p>
            This is an example of <b>Case #8</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer change COENG DA ្ដ to COENG TA ្ត automatically.
          </p>
        `, km: "" },
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
        text: "ស្រ្ដី",
        description: { en: `
          <p>
            In this example, there are two problems:
          </p>

          <ol>
            <li>
              This is one of the most contentious issues: COENG DA ្ដ is being used
              instead of COENG TA ្ត. In modern Khmer, COENG DA ្ដ and
              COENG TA ្ត have an identical presentation. This makes them confusable.
            </li>
            <li>
              The COENG RO ្រ is being typed before COENG DA ្ដ. This
              does not match the expected phonetic ordering of the subconsonants. On
              many devices, this renders identically to the correct phonetic encoding
              order.
            </li>
          </ol>

          <p>
            In old and middle Khmer, COENG DA can have a differentiated form; see the
            <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank">proposal document</a>,
            <i>Coeng ta and Coeng da</i> section, for more detail.
          </p>

          <p>
            This is an example of <b>Case #2</b> and <b>Case #8</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will both fix these two problems automatically.
          </p>
        `, km: "" },
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
        text: "សី្រ្ត",
        description: { en: `
          <p>
            This example illustrates two problems:
          </p>

          <ul>
            <li>
              COENG TA ្ត and COENG RO ្រ have been typed after the vowel ី. This
              is not linguistically consistent with the expected order.
            </li>
            <li>
              COENG RO ្រ is being typed before COENG TA ្ត. This
              does not match the expected phonetic ordering of the subconsonants.
            </li>
          </ul>

          <p>
            On many devices, this appears identical to the alternate (correct) order,
            so it is not possible to tell by reading that it is wrong.
          </p>

          <p>
            This is an example of <b>Case #1</b> and <b>Case #2</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will both fix this incorrect ordering automatically.
          </p>
        `, km: "" },
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
        text: "សី្រ្ដ",
        description: { en: `
          <p>
            This example illustrates <i>three</i> problems!
          </p>

          <ul>
            <li>
              This is one of the most contentious issues: COENG DA ្ដ is being used
              instead of COENG TA ្ត. In modern Khmer, COENG DA ្ដ and
              COENG TA ្ត have an identical presentation. This makes them confusable.
            </li>
            <li>
              COENG DA ្ដ and COENG RO ្រ have been typed after the vowel ី. This
              is not linguistically consistent with the expected order.
            </li>
            <li>
              COENG RO ្រ is being typed before COENG DA ្ដ. This
              does not match the expected phonetic ordering of the subconsonants.
            </li>
          </ul>

          <p>
            On many devices, this appears identical to the alternate (correct) order,
            so it is not possible to tell by reading that it is wrong.
          </p>

          <p>
            In old and middle Khmer, COENG DA can have a differentiated form; see the
            <a href="https://github.com/sillsdev/khmer-character-specification/blob/master/encoding_structure/Khmer%20Encoding%20Structure.pdf" target="_blank">proposal document</a>,
            <i>Coeng ta and Coeng da</i> section, for more detail.
          </p>

          <p>
            This is an example of <b>Case #1</b>, <b>Case #2</b>, and <b>Case #8</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will both fix the ordering, and replace
            COENG DA ្ដ with COENG TA ្ត automatically.
          </p>
        `, km: "" },
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

  //---------------------------------------------------------------------------------------------------
  // ស៊ើប
  //---------------------------------------------------------------------------------------------------
  {
    text: 'ស៊ើប',
    id: 'detect',
    description: { en: "'to detect, investigate'", km: "" },
    alternates: [
      {
        id: 1,
        text: "ស៊ើប",
        description: { en: `
          <p>
            This example follows the NiDA keying order. That means that the user is
            typing in exactly the same order as the encoded order.
          </p>
        `, km: "" },
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
        text: "ស៉ើប",
        description: { en: `
          <p>
            This example uses the wrong consonant shifter, ៉ MUSIKATOAN
            instead of ៊ TRISAP on ស. While this is not technically an
            invalid encoding, it is not linguistically plausible, because
            the consonant ស is already in the first series, and so the new
            Khmer Encoding Structure enforces use of ៊ TRISAP in this
            position.
          </p>

          <p>
            On many devices, ៉ MUSIKATOAN may render in its down-shifted
            form, even when used with ស, which makes this confusable.
          </p>

          <p>
            This is an example of <b>Case #4</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will correct the shifter automatically
            when it is used in the down-shifted form.
          </p>
        `, km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: '៉', key: 'default-K_QUOTE+shift' },
          { cap: 'ើ', key: 'default-K_COLON' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_nida_desktop: [
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
        text: "ស៊េីប",
        description: { en: `
          <p>
            In this example, the vowels េ and ី have been typed separately, which on
            many devices renders identically to the correct single vowel character ើ.
            The Khmer Unicode encoding expects only a single vowel character per syllable.
          </p>

          <p>
            This is an example of <b>Case #7</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will merge the two vowels េ and ី into ើ automatically.
          </p>
        `, km: "" },
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
        text: "សុើប",
        description: { en: `
          <p>
            This is one of the most common typing issues: using
            the U vowel ុ instead of the appropriate TRISAP ៊ consonant
            shifter, because the consonant shifter looks like the vowel
            when it is rendered underneath the base consonant.
          </p>

          <p>
            This is an example of <b>Case #4</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will convert the U vowel ុ to
            appropriate shifter (TRISAP ៊ or MUSIKATOAN ៉) automatically.
          </p>
        `, km: "" },
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
        text: "សេីុប",
        description: { en: `
          <p>
            This example illustrates two problems:
          </p>

          <ul>
            <li>
              This is one of the most common typing issues: using
              the U vowel ុ instead of the appropriate TRISAP ៊ consonant
              shifter, because the consonant shifter looks like the vowel
              when it is rendered underneath the base consonant.
            </li>
            <li>
              The vowels េ and ី have been typed separately, which on
              many devices renders identically to the correct single vowel character ើ.
              The Khmer Unicode encoding expects only a single vowel character per syllable.
            </li>
          </ul>

          <p>
            This is an example of <b>Case #4</b> and <b>Case #7</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will merge the two vowels AE េ and II ី into ើ,
            and convert the U vowel ុ to appropriate shifter (TRISAP ៊ or MUSIKATOAN ៉)
            automatically.
          </p>
        `, km: "" },
        keys_nida: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: ['Shift', 'ី'], key: ['shift', 'shift-K_I'] },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ប', key: 'default-K_B' },
        ],
        keys_angkor_mobile: [
          { cap: 'ស', key: 'default-K_S' },
          { cap: 'េ', key: 'default-K_E' },
          { cap: 'ិ', key: ['longpress', 'default-K_I'], longpress: true },
          { cap: 'ី', key: ['popup', 'popup-default-K_I+shift'] },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: 'ប', key: 'default-K_B' },
        ],
      },
    ]
  },

  //---------------------------------------------------------------------------------------------------
  // ញ៉ាំ
  //---------------------------------------------------------------------------------------------------
  {
    text: 'ញ៉ាំ',
    id: 'nham',
    description: { en: "'to eat'", km: "" },
    alternates: [
      {
        id: 1,
        text: "",
        description: {
          en: `
          <p>
            This example follows the NiDA keying order. That means that the user is
            typing in exactly the same order as the encoded order.
          </p>

          <p>
            <b>Note:</b> a bug on iOS and macOS means that the correctly encoded order is
            rendered incorrectly, with ៉ MUSIKATOAN shown above ញ, instead of underneath.
            This of course leads to great confusion! This bug has been reported to Apple for
            resolution (FB5761346).
            <a href="https://marc.durdin.net/2017/03/when-nyam-meets-nyam/" target="_blank">More discussion (2017)</a>.
          </p>
        `,
          km: `
        `,
        },
        keys_nida: [
          { cap: 'ញ', key: ['shift', 'shift-K_J'] },
          { cap: '៉', key: 'default-K_QUOTE+shift' },
          { cap: 'ាំ', key: ['shift', 'shift-K_A'] },
        ],
        keys_nida_desktop: [
          { cap: 'ញ', key: ['shift', 'shift-K_J'] },
          { cap: '៉', key: ['shift', 'shift-K_QUOTE'] },
          { cap: 'ាំ', key: ['shift', 'shift-K_A'] },
        ],
        keys_angkor_desktop: [
          { cap: 'ញ', key: ['shift', 'shift-K_J'] },
          { cap: '៉', key: ['shift', 'shift-K_QUOTE'] },
          { cap: 'ាំ', key: ['shift', 'shift-K_A'] },
        ],
        keys_angkor_mobile: [
          { cap: 'ញ', key: 'default-K_J+shift' },
          { cap: '់', key: ['longpress', 'default-K_QUOTE'], longpress: true },
          { cap: '៉', key: ['popup', 'popup-default-K_QUOTE+shift'] },
          { cap: 'ា', key: ['longpress', 'default-K_A'], longpress: true },
          { cap: 'ាំ', key: ['popup', 'popup-default-K_A+shift'] },
        ],
      },

      {
        id: 2,
        text: "ញុំា",
        description: {
          en: `
          <p>
            This example shows two common problems, both deriving from
            typing the text as it is visually presented:
          </p>

          <ul>
            <li>
              This is one of the most common typing issues: using
              the U vowel ុ instead of the appropriate MUSIKATOAN ៉ consonant
              shifter, because the consonant shifter looks like the vowel
              when it is rendered underneath the base consonant.
            </li>
            <li>
              The NIKAHIT sign ំ has been typed separately and before the AA
              vowel ា.
            </li>
          </ul>

          <p>
            On most devices, this example renders almost identically to the expected
            (correct) example. The NIKAHIT mark ំ is usually rendered slightly
            left of the AA ា vowel, but this is very subtle and easily missed.
          </p>

          <p>
            The first three letters of this example are actually a valid sequence for
            typing ញុំ​ (which is not a Khmer word, but follows the same rules as e.g. កុំ 'do not').
            This close similarity is another reason why it is so easily confused.
          </p>

          <p>
            <b>Note:</b> a bug on iOS and macOS means that the correctly encoded order is
            rendered incorrectly, with ៉ MUSIKATOAN shown above ញ, instead of underneath.
            This of course leads to great confusion! This bug has been reported to Apple for
            resolution (FB5761346).
            <a href="https://marc.durdin.net/2017/03/when-nyam-meets-nyam/" target="_blank">More discussion (2017)</a>.
          </p>

          <p>
            This is an example of <b>Case #4</b> and <b>Case #5</b> in <a href="https://lt4all.elra.info/proceedings/lt4all2019/pdf/2019.lt4all-1.35.pdf" target="_blank">the research paper</a>.
          </p>

          <p>
            Khmer Angkor and the normalizer will reorder ា and ំ,
            and convert the U vowel ុ to appropriate shifter (MUSIKATOAN ៉)
            automatically.
          </p>
        `,
          km: `
        `,
        },
        keys_nida: [
          { cap: 'ញ', key: ['shift', 'shift-K_J'] },
          { cap: 'ុ', key: 'default-K_U' },
          { cap: ['Shift', 'ំ'], key: ['shift', 'shift-K_M'] },
          { cap: 'ា', key: 'default-K_A' },
        ],
        keys_angkor_mobile: [
          { cap: 'ញ', key: 'default-K_J+shift' },
          { cap: 'ុ', key: 'default-K_U' },

          { cap: 'ម', key: ['longpress', 'default-K_M'], longpress: true },
          { cap: 'ំ', key: ['popup', 'popup-default-K_M+shift'] },
          { cap: 'ា', key: 'default-K_A' },
        ],
      },
    ]
  },

  // additional examples: កុំ ប៉័ង លោក
];

export const enExampleTranslations = examples.reduce((obj, example) => {
  obj['example-'+example.id] = example.description.en;
  example.alternates.reduce((obj, alt) => {
    obj['example-'+example.id+'-alt-'+alt.id] = alt.description.en;
    return obj;
  }, obj);
  return obj;
}, {});

export const kmExampleTranslations = examples.reduce((obj, example) => {
  obj['example-'+example.id] = example.description.km;
  example.alternates.reduce((obj, alt) => {
    obj['example-'+example.id+'-alt-'+alt.id] = alt.description.km;
    return obj;
  }, obj);
  return obj;
}, {});
