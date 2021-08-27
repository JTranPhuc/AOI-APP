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
  "uk",
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

const SIDE_EFFECT_DATA = {
  showLoadingSpinner: false,
};

const COUNTRY_DEFAULT_LIST = [
  { code: "ad", country_mails: [], results: "" },
  { code: "ae", country_mails: [], results: "" },
  { code: "af", country_mails: [], results: "" },
  { code: "us", country_mails: [], results: "" },
  { code: "ag", country_mails: [], results: "" },
  { code: "ai", country_mails: [], results: "" },
  { code: "as", country_mails: [], results: "" },
  { code: "bb", country_mails: [], results: "" },
  { code: "bm", country_mails: [], results: "" },
  { code: "bs", country_mails: [], results: "" },
  { code: "ca", country_mails: [], results: "" },
  { code: "dm", country_mails: [], results: "" },
  { code: "do", country_mails: [], results: "" },
  { code: "gd", country_mails: [], results: "" },
  { code: "gu", country_mails: [], results: "" },
  { code: "jm", country_mails: [], results: "" },
  { code: "kn", country_mails: [], results: "" },
  { code: "ky", country_mails: [], results: "" },
  { code: "lc", country_mails: [], results: "" },
  { code: "mp", country_mails: [], results: "" },
  { code: "ms", country_mails: [], results: "" },
  { code: "pr", country_mails: [], results: "" },
  { code: "sx", country_mails: [], results: "" },
  { code: "tc", country_mails: [], results: "" },
  { code: "tt", country_mails: [], results: "" },
  { code: "vc", country_mails: [], results: "" },
  { code: "vg", country_mails: [], results: "" },
  { code: "vi", country_mails: [], results: "" },
  { code: "al", country_mails: [], results: "" },
  { code: "am", country_mails: [], results: "" },
  { code: "ao", country_mails: [], results: "" },
  { code: "ar", country_mails: [], results: "" },
  { code: "at", country_mails: [], results: "" },
  { code: "au", country_mails: [], results: "" },
  { code: "cc", country_mails: [], results: "" },
  { code: "cx", country_mails: [], results: "" },
  { code: "aw", country_mails: [], results: "" },
  { code: "fi", country_mails: [], results: "" },
  { code: "ax", country_mails: [], results: "" },
  { code: "az", country_mails: [], results: "" },
  { code: "ba", country_mails: [], results: "" },
  { code: "bd", country_mails: [], results: "" },
  { code: "be", country_mails: [], results: "" },
  { code: "bf", country_mails: [], results: "" },
  { code: "bg", country_mails: [], results: "" },
  { code: "bh", country_mails: [], results: "" },
  { code: "bi", country_mails: [], results: "" },
  { code: "bj", country_mails: [], results: "" },
  { code: "gp", country_mails: [], results: "" },
  { code: "bl", country_mails: [], results: "" },
  { code: "mf", country_mails: [], results: "" },
  { code: "bn", country_mails: [], results: "" },
  { code: "bo", country_mails: [], results: "" },
  { code: "cw", country_mails: [], results: "" },
  { code: "bq", country_mails: [], results: "" },
  { code: "br", country_mails: [], results: "" },
  { code: "bt", country_mails: [], results: "" },
  { code: "bw", country_mails: [], results: "" },
  { code: "by", country_mails: [], results: "" },
  { code: "bz", country_mails: [], results: "" },
  { code: "cd", country_mails: [], results: "" },
  { code: "cf", country_mails: [], results: "" },
  { code: "cg", country_mails: [], results: "" },
  { code: "ch", country_mails: [], results: "" },
  { code: "ci", country_mails: [], results: "" },
  { code: "ck", country_mails: [], results: "" },
  { code: "cl", country_mails: [], results: "" },
  { code: "cm", country_mails: [], results: "" },
  { code: "cn", country_mails: [], results: "" },
  { code: "co", country_mails: [], results: "" },
  { code: "cr", country_mails: [], results: "" },
  { code: "cu", country_mails: [], results: "" },
  { code: "cv", country_mails: [], results: "" },
  { code: "cy", country_mails: [], results: "" },
  { code: "cz", country_mails: [], results: "" },
  { code: "de", country_mails: [], results: "" },
  { code: "dj", country_mails: [], results: "" },
  { code: "dk", country_mails: [], results: "" },
  { code: "dz", country_mails: [], results: "" },
  { code: "ec", country_mails: [], results: "" },
  { code: "ee", country_mails: [], results: "" },
  { code: "eg", country_mails: [], results: "" },
  { code: "ma", country_mails: [], results: "" },
  { code: "er", country_mails: [], results: "" },
  { code: "es", country_mails: [], results: "" },
  { code: "et", country_mails: [], results: "" },
  { code: "fj", country_mails: [], results: "" },
  { code: "fk", country_mails: [], results: "" },
  { code: "fm", country_mails: [], results: "" },
  { code: "fo", country_mails: [], results: "" },
  { code: "fr", country_mails: [], results: "" },
  { code: "ga", country_mails: [], results: "" },
  { code: "uk", country_mails: [], results: "" },
  { code: "gg", country_mails: [], results: "" },
  { code: "im", country_mails: [], results: "" },
  { code: "je", country_mails: [], results: "" },
  { code: "ge", country_mails: [], results: "" },
  { code: "gf", country_mails: [], results: "" },
  { code: "gh", country_mails: [], results: "" },
  { code: "gi", country_mails: [], results: "" },
  { code: "gl", country_mails: [], results: "" },
  { code: "gm", country_mails: [], results: "" },
  { code: "gn", country_mails: [], results: "" },
  { code: "gq", country_mails: [], results: "" },
  { code: "gr", country_mails: [], results: "" },
  { code: "gt", country_mails: [], results: "" },
  { code: "gw", country_mails: [], results: "" },
  { code: "gy", country_mails: [], results: "" },
  { code: "hk", country_mails: [], results: "" },
  { code: "hn", country_mails: [], results: "" },
  { code: "hr", country_mails: [], results: "" },
  { code: "ht", country_mails: [], results: "" },
  { code: "hu", country_mails: [], results: "" },
  { code: "id", country_mails: [], results: "" },
  { code: "ie", country_mails: [], results: "" },
  { code: "il", country_mails: [], results: "" },
  { code: "in", country_mails: [], results: "" },
  { code: "io", country_mails: [], results: "" },
  { code: "iq", country_mails: [], results: "" },
  { code: "ir", country_mails: [], results: "" },
  { code: "is", country_mails: [], results: "" },
  { code: "it", country_mails: [], results: "" },
  { code: "jo", country_mails: [], results: "" },
  { code: "jp", country_mails: [], results: "" },
  { code: "ke", country_mails: [], results: "" },
  { code: "kg", country_mails: [], results: "" },
  { code: "kh", country_mails: [], results: "" },
  { code: "ki", country_mails: [], results: "" },
  { code: "km", country_mails: [], results: "" },
  { code: "kp", country_mails: [], results: "" },
  { code: "kr", country_mails: [], results: "" },
  { code: "kw", country_mails: [], results: "" },
  { code: "ru", country_mails: [], results: "" },
  { code: "kz", country_mails: [], results: "" },
  { code: "la", country_mails: [], results: "" },
  { code: "lb", country_mails: [], results: "" },
  { code: "li", country_mails: [], results: "" },
  { code: "lk", country_mails: [], results: "" },
  { code: "lr", country_mails: [], results: "" },
  { code: "ls", country_mails: [], results: "" },
  { code: "lt", country_mails: [], results: "" },
  { code: "lu", country_mails: [], results: "" },
  { code: "lv", country_mails: [], results: "" },
  { code: "ly", country_mails: [], results: "" },
  { code: "mc", country_mails: [], results: "" },
  { code: "md", country_mails: [], results: "" },
  { code: "me", country_mails: [], results: "" },
  { code: "mg", country_mails: [], results: "" },
  { code: "mh", country_mails: [], results: "" },
  { code: "mk", country_mails: [], results: "" },
  { code: "ml", country_mails: [], results: "" },
  { code: "mm", country_mails: [], results: "" },
  { code: "mn", country_mails: [], results: "" },
  { code: "mo", country_mails: [], results: "" },
  { code: "mq", country_mails: [], results: "" },
  { code: "mr", country_mails: [], results: "" },
  { code: "mt", country_mails: [], results: "" },
  { code: "mu", country_mails: [], results: "" },
  { code: "mv", country_mails: [], results: "" },
  { code: "mw", country_mails: [], results: "" },
  { code: "mx", country_mails: [], results: "" },
  { code: "my", country_mails: [], results: "" },
  { code: "mz", country_mails: [], results: "" },
  { code: "na", country_mails: [], results: "" },
  { code: "nc", country_mails: [], results: "" },
  { code: "ne", country_mails: [], results: "" },
  { code: "nf", country_mails: [], results: "" },
  { code: "ng", country_mails: [], results: "" },
  { code: "ni", country_mails: [], results: "" },
  { code: "nl", country_mails: [], results: "" },
  { code: "no", country_mails: [], results: "" },
  { code: "sj", country_mails: [], results: "" },
  { code: "np", country_mails: [], results: "" },
  { code: "nr", country_mails: [], results: "" },
  { code: "nu", country_mails: [], results: "" },
  { code: "nz", country_mails: [], results: "" },
  { code: "om", country_mails: [], results: "" },
  { code: "pa", country_mails: [], results: "" },
  { code: "pe", country_mails: [], results: "" },
  { code: "pf", country_mails: [], results: "" },
  { code: "pg", country_mails: [], results: "" },
  { code: "ph", country_mails: [], results: "" },
  { code: "pk", country_mails: [], results: "" },
  { code: "pl", country_mails: [], results: "" },
  { code: "pm", country_mails: [], results: "" },
  { code: "ps", country_mails: [], results: "" },
  { code: "pt", country_mails: [], results: "" },
  { code: "pw", country_mails: [], results: "" },
  { code: "py", country_mails: [], results: "" },
  { code: "qa", country_mails: [], results: "" },
  { code: "re", country_mails: [], results: "" },
  { code: "yt", country_mails: [], results: "" },
  { code: "ro", country_mails: [], results: "" },
  { code: "rs", country_mails: [], results: "" },
  { code: "rw", country_mails: [], results: "" },
  { code: "sa", country_mails: [], results: "" },
  { code: "sb", country_mails: [], results: "" },
  { code: "sc", country_mails: [], results: "" },
  { code: "sd", country_mails: [], results: "" },
  { code: "se", country_mails: [], results: "" },
  { code: "sg", country_mails: [], results: "" },
  { code: "sh", country_mails: [], results: "" },
  { code: "si", country_mails: [], results: "" },
  { code: "sk", country_mails: [], results: "" },
  { code: "sl", country_mails: [], results: "" },
  { code: "sm", country_mails: [], results: "" },
  { code: "sn", country_mails: [], results: "" },
  { code: "so", country_mails: [], results: "" },
  { code: "sr", country_mails: [], results: "" },
  { code: "ss", country_mails: [], results: "" },
  { code: "st", country_mails: [], results: "" },
  { code: "sv", country_mails: [], results: "" },
  { code: "sy", country_mails: [], results: "" },
  { code: "sz", country_mails: [], results: "" },
  { code: "td", country_mails: [], results: "" },
  { code: "tg", country_mails: [], results: "" },
  { code: "th", country_mails: [], results: "" },
  { code: "tj", country_mails: [], results: "" },
  { code: "tk", country_mails: [], results: "" },
  { code: "tl", country_mails: [], results: "" },
  { code: "tm", country_mails: [], results: "" },
  { code: "tn", country_mails: [], results: "" },
  { code: "to", country_mails: [], results: "" },
  { code: "tr", country_mails: [], results: "" },
  { code: "tv", country_mails: [], results: "" },
  { code: "tw", country_mails: [], results: "" },
  { code: "tz", country_mails: [], results: "" },
  { code: "ua", country_mails: [], results: "" },
  { code: "ug", country_mails: [], results: "" },
  { code: "uy", country_mails: [], results: "" },
  { code: "uz", country_mails: [], results: "" },
  { code: "va", country_mails: [], results: "" },
  { code: "ve", country_mails: [], results: "" },
  { code: "vn", country_mails: [], results: "" },
  { code: "vu", country_mails: [], results: "" },
  { code: "wf", country_mails: [], results: "" },
  { code: "ws", country_mails: [], results: "" },
  { code: "ye", country_mails: [], results: "" },
  { code: "za", country_mails: [], results: "" },
  { code: "zm", country_mails: [], results: "" },
  { code: "zw", country_mails: [], results: "" },
  { code: "other", country_mails: [], results: "------OTHERS------" },
];

const EMAILSORTER_DATA = {
  mailList: [],
  countryArr: COUNTRY_CODES,
  resultArr: COUNTRY_DEFAULT_LIST,
  result: "",
  total: 0,
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
        if (f_val === "") continue;

        const l_index = Math.floor(Math.random() * state.last_name.length) + 1;
        const l_val = state.last_name[l_index - 1].trim().toLowerCase();
        if (l_val === "") continue;

        const code_index = Math.floor(Math.random() * COUNTRY_CODES.length) + 1;
        const code_selected = COUNTRY_CODES[code_index - 1];

        const d_index =
          Math.floor(Math.random() * state.extension_domains.length) + 1;
        const d_val = state.extension_domains[d_index - 1].trim().toLowerCase();
        if (d_val === "") continue;

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

const SideEffectSlice = createSlice({
  name: "side_effect",
  initialState: SIDE_EFFECT_DATA,
  reducers: {
    LoadSpinner: (state, action) => {
      state.showLoadingSpinner = action.payload;
    },
  },
});

const EmailSorterSlice = createSlice({
  name: "emai_sorter_by_country",
  initialState: EMAILSORTER_DATA,
  reducers: {
    ResetState: (state) => EMAILSORTER_DATA,

    SortSingleCuntry: (state, action) => {
      const { mails, filter } = action.payload;
      const country_index = state.resultArr.findIndex((x) => x.code === filter);
      if (country_index === -1) {
        alert("Country code not found: " + filter);
        return;
      }
      const { country_mails } = state.resultArr[country_index];
      const default_val = `------Country code: ${filter.toUpperCase()}------`;
      state.resultArr[country_index].results = default_val;

      for (const mail in mails) {
        const m = mails[mail].toLowerCase().trim();
        if (!m.includes("@")) continue;
        if (m.split("@")[0].length < 4) continue;
        const split = m.split(".");
        if (split.length === 0) continue;
        const country = split.pop();

        if (country === filter) {
          country_mails.push(m);
          state.resultArr[country_index].results += `\n${m}`;
        }
      }
      state.total = country_mails.length;
      state.result = state.resultArr[country_index].results;

      if (country_mails.length === 0) {
        alert("No result found for country code: " + filter);
        return;
      }
    },

    SortEmail: (state, action) => {
      const { mails } = action.payload;

      const { resultArr, countryArr } = state;
      for (const mail in mails) {
        const m = mails[mail].toLowerCase().trim();
        if (!m.includes("@")) continue;
        if (m.split("@")[0].length < 4) continue;
        const split = m.split(".");
        if (split.length === 0) continue;
        const country = split.pop();

        const isExisted = countryArr.find((x) => x === country);
        if (!isExisted) {
          resultArr[resultArr.length - 1].country_mails.push(m);
          resultArr[resultArr.length - 1].results += `\n${m}`;
          continue;
        }

        var countryIndex = resultArr.findIndex((x) => x.code === country);
        const { code, country_mails } = resultArr[countryIndex];
        country_mails.push(m);
        if (resultArr[countryIndex].results === "") {
          const default_val = `------Country code: ${code.toUpperCase()}------`;
          resultArr[countryIndex].results = default_val;
        }
        resultArr[countryIndex].results += `\n${m}`;
      }

      for (const key in state.resultArr) {
        if (state.resultArr[key].results === "") continue;

        const content = state.resultArr[key].results;
        state.total += state.resultArr[key].country_mails.length;
        state.result += `${content}\n\r`;
      }
    },
  },
});

export const side_effect_actions = SideEffectSlice.actions;
export const acc_builder_actions = AccBuilderSlice.actions;
export const email_sorter_actions = EmailSorterSlice.actions;
const store = configureStore({
  reducer: {
    acc_builder_reducer: AccBuilderSlice.reducer,
    side_effect_reducer: SideEffectSlice.reducer,
    email_sorter_reducer: EmailSorterSlice.reducer,
  },
});

export default store;
