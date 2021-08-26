import { configureStore, createSlice } from "@reduxjs/toolkit";

export const COUNTRY_CODES = [
  "ad",
  "ae",
  "af",
  "us",
  "ag",
  "ai",
  "as",
  "bb",
  "bm",
  "bs",
  "ca",
  "dm",
  "do",
  "gd",
  "gu",
  "jm",
  "kn",
  "ky",
  "lc",
  "mp",
  "ms",
  "pr",
  "sx",
  "tc",
  "tt",
  "vc",
  "vg",
  "vi",
  "al",
  "am",
  "ao",
  "ar",
  "at",
  "au",
  "cc",
  "cx",
  "aw",
  "fi",
  "ax",
  "az",
  "ba",
  "bd",
  "be",
  "bf",
  "bg",
  "bh",
  "bi",
  "bj",
  "gp",
  "bl",
  "mf",
  "bn",
  "bo",
  "cw",
  "bq",
  "br",
  "bt",
  "bw",
  "by",
  "bz",
  "cd",
  "cf",
  "cg",
  "ch",
  "ci",
  "ck",
  "cl",
  "cm",
  "cn",
  "co",
  "cr",
  "cu",
  "cv",
  "cy",
  "cz",
  "de",
  "dj",
  "dk",
  "dz",
  "ec",
  "ee",
  "eg",
  "ma",
  "er",
  "es",
  "et",
  "fj",
  "fk",
  "fm",
  "fo",
  "fr",
  "ga",
  "gb",
  "gg",
  "im",
  "je",
  "ge",
  "gf",
  "gh",
  "gi",
  "gl",
  "gm",
  "gn",
  "gq",
  "gr",
  "gt",
  "gw",
  "gy",
  "hk",
  "hn",
  "hr",
  "ht",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "io",
  "iq",
  "ir",
  "is",
  "it",
  "jo",
  "jp",
  "ke",
  "kg",
  "kh",
  "ki",
  "km",
  "kp",
  "kr",
  "kw",
  "ru",
  "kz",
  "la",
  "lb",
  "li",
  "lk",
  "lr",
  "ls",
  "lt",
  "lu",
  "lv",
  "ly",
  "mc",
  "md",
  "me",
  "mg",
  "mh",
  "mk",
  "ml",
  "mm",
  "mn",
  "mo",
  "mq",
  "mr",
  "mt",
  "mu",
  "mv",
  "mw",
  "mx",
  "my",
  "mz",
  "na",
  "nc",
  "ne",
  "nf",
  "ng",
  "ni",
  "nl",
  "no",
  "sj",
  "np",
  "nr",
  "nu",
  "nz",
  "om",
  "pa",
  "pe",
  "pf",
  "pg",
  "ph",
  "pk",
  "pl",
  "pm",
  "ps",
  "pt",
  "pw",
  "py",
  "qa",
  "re",
  "yt",
  "ro",
  "rs",
  "rw",
  "sa",
  "sb",
  "sc",
  "sd",
  "se",
  "sg",
  "sh",
  "si",
  "sk",
  "sl",
  "sm",
  "sn",
  "so",
  "sr",
  "ss",
  "st",
  "sv",
  "sy",
  "sz",
  "td",
  "tg",
  "th",
  "tj",
  "tk",
  "tl",
  "tm",
  "tn",
  "to",
  "tr",
  "tv",
  "tw",
  "tz",
  "ua",
  "ug",
  "uy",
  "uz",
  "va",
  "ve",
  "vn",
  "vu",
  "wf",
  "ws",
  "ye",
  "za",
  "zm",
  "zw",
];

const ACC_BUILDER_DATA = {
  first_name: [],
  last_name: [],
  extension_domains: [],
  special_chars: [],
  resultArr: [],
  result: "",
};
const AccBuilderSlice = createSlice({
  name: "Account_Builder",
  initialState: ACC_BUILDER_DATA,
  reducers: {
    BuildAccount: (state, action) => {
      state.resultArr = [];
      state.result = "";
      state.first_name = [];
      state.last_name = [];
      state.extension_domains = [];

      const { data } = action.payload;
      if (
        data.firstNameArr.length === 0 ||
        data.lastNameArr.length === 0 ||
        data.extensionArr.length === 0
      ) {
        alert("First/Last name & Extension must be invalid format");
        return;
      }
      state.first_name.push(...data.firstNameArr);
      state.last_name.push(...data.lastNameArr);
      state.extension_domains.push(...data.extensionArr);

      for (let index = 0; index < 500; index++) {
        const f_index = Math.floor(Math.random() * state.first_name.length) + 1;
        const f_val = state.first_name[f_index - 1].trim().toLowerCase();
        if(f_val==="") continue;

        const l_index = Math.floor(Math.random() * state.last_name.length) + 1;
        const l_val = state.last_name[l_index - 1].trim().toLowerCase();
        if(l_val==="") continue;

        const code_index = Math.floor(Math.random() * COUNTRY_CODES.length) + 1;
        const code_selected = COUNTRY_CODES[code_index - 1];

        const d_index =
          Math.floor(Math.random() * state.extension_domains.length) + 1;
        const d_val = state.extension_domains[d_index - 1].trim().toLowerCase();
        if(d_val==="") continue;

        const rand_birth = Math.floor(Math.random() * 100000) + 1;

        const user = `${f_val}${l_val}${code_selected}${rand_birth}${d_val}`;
        let password = "";
        const rand_pass = Math.floor(Math.random() * 2);
        if (rand_pass === 0) {
          password = `${f_val.charAt(0).toUpperCase()}${f_val.slice(
            1
          )}${code_selected}${rand_birth}`;
        } else {
          password = `${l_val.charAt(0).toUpperCase()}${l_val.slice(
            1
          )}${code_selected}${rand_birth}`;
        }

        const acc = {
          user: user,
          pass: password,
        };
        state.resultArr.push(acc);
        state.result += `user: ${acc.user}/pass: ${acc.pass}\n`;
      }

      state.isBuildingAcc = false;
    },
  },
});

const SIDE_EFFECT_DATA = {
  showLoadingSpinner: false,
};
const SideEffectReducer = createSlice({
  name: "side_effect",
  initialState: SIDE_EFFECT_DATA,
  reducers: {
    LoadSpinner: (state, action) => {
      state.showLoadingSpinner = action.payload;
    },
  },
});

export const side_effect_actions = SideEffectReducer.actions;
export const acc_builder_actions = AccBuilderSlice.actions;
const store = configureStore({
  reducer: {
    acc_builder_reducer: AccBuilderSlice.reducer,
    side_effect_reducer: SideEffectReducer.reducer,
  },
});

export default store;
