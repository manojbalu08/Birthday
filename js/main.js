'use strict';

/* =====================================================================
   EDIT THESE: photos, captions, letter, wish and final message
   ===================================================================== */
// "நீ" part of the Memories page: her photos, in assets/images/ramya/. image = full photo (phones) · thumb = lighter copy for wider screens · focus = part of the photo kept on the cards ("x% y%")
// title + poem (Tamil) show under each photo; "\n" starts a new line
const MEMORIES = [
  { id:'photo-01', image:'assets/images/ramya/photo-01.jpg', thumb:'assets/images/ramya/thumbs/photo-01.jpg', focus:'42% 45%',
    title:'தென்னங்கீற்று', poem:'தென்னங்கீற்றும் தலை குனிகிறது\nஉன் சிரிப்பின் அழகுக்கு' },
  { id:'photo-02', image:'assets/images/ramya/photo-02.jpg', thumb:'assets/images/ramya/thumbs/photo-02.jpg', focus:'50% 40%',
    title:'பதிவான நொடி', poem:'கேமரா பதிவு செய்தது ஒரு நொடி\nஎன் இதயம் பதிவு செய்தது உன்னை' },
  { id:'photo-03', image:'assets/images/ramya/photo-03.jpg', thumb:'assets/images/ramya/thumbs/photo-03.jpg', focus:'38% 35%',
    title:'பின்னல் அழகி', poem:'உன் நீண்ட பின்னலில்\nஎன் மனம் சிக்கிக் கொண்டது' },
  { id:'photo-04', image:'assets/images/ramya/photo-04.jpg', thumb:'assets/images/ramya/thumbs/photo-04.jpg', focus:'50% 32%',
    title:'நீல நிலவு', poem:'நீல உடையில் நீ நடந்தால்\nவானமே தரையில் இறங்கியது போல்' },
  { id:'photo-05', image:'assets/images/ramya/photo-05.jpg', thumb:'assets/images/ramya/thumbs/photo-05.jpg', focus:'50% 30%',
    title:'கருப்பு வெள்ளை', poem:'வண்ணம் இல்லாத படத்திலும்\nஉன் சிரிப்பே என் வானவில்' },
  { id:'photo-06', image:'assets/images/ramya/photo-06.jpg', thumb:'assets/images/ramya/thumbs/photo-06.jpg', focus:'45% 35%',
    title:'சுருள் கூந்தல்', poem:'உன் சுருள் கூந்தலின் சுழலில்\nதொலைந்து போனேன் நான்' },
  { id:'photo-07', image:'assets/images/ramya/photo-07.jpg', thumb:'assets/images/ramya/thumbs/photo-07.jpg', focus:'50% 22%',
    title:'வெட்கப் புன்னகை', poem:'உன் வெட்கச் சிரிப்பில்\nஎன் உலகமே மயங்கி நிற்கிறது' },
  { id:'photo-09', image:'assets/images/ramya/photo-09.jpg', thumb:'assets/images/ramya/thumbs/photo-09.jpg', focus:'50% 35%',
    title:'ஊஞ்சல் ஆட்டம்', poem:'ஊஞ்சல் ஆடுவது நீ\nமனம் ஆடுவது நான்' },
  { id:'photo-10', image:'assets/images/ramya/photo-10.jpg', thumb:'assets/images/ramya/thumbs/photo-10.jpg', focus:'45% 28%',
    title:'தோட்டத்துப் பூ', poem:'தோட்டத்தில் எத்தனை பூக்கள்\nஎன் கண்ணுக்கு நீ மட்டும்' },
  { id:'photo-11', image:'assets/images/ramya/photo-11.jpg', thumb:'assets/images/ramya/thumbs/photo-11.jpg', focus:'50% 25%',
    title:'சேலை அழகி', poem:'சேலை கட்டிய நிலவொன்று\nஎன் முன்னே அமர்ந்திருக்கிறது' },
  { id:'photo-12', image:'assets/images/ramya/photo-12.jpg', thumb:'assets/images/ramya/thumbs/photo-12.jpg', focus:'55% 30%',
    title:'கடற்கரை காற்று', poem:'கடல் காற்றும் உன் கூந்தலோடு\nகாதல் பேசிச் செல்கிறது' },
  { id:'photo-13', image:'assets/images/ramya/photo-13.jpg', thumb:'assets/images/ramya/thumbs/photo-13.jpg', focus:'50% 30%',
    title:'மௌனப் பேச்சு', poem:'நீ குனிந்து சிரிக்கும் அந்த நொடி\nஆயிரம் கவிதைகள் சொல்கிறது' },
  { id:'photo-14', image:'assets/images/ramya/photo-14.jpg', thumb:'assets/images/ramya/thumbs/photo-14.jpg', focus:'45% 35%',
    title:'ரோஜா இளவரசி', poem:'ரோஜா நிற உடையில் நீ\nஎன் கதையின் இளவரசி' },
  { id:'photo-15', image:'assets/images/ramya/photo-15.jpg', thumb:'assets/images/ramya/thumbs/photo-15.jpg', focus:'45% 30%',
    title:'ஓரப் பார்வை', poem:'உன் ஓரப் பார்வை ஒன்றே போதும்\nஎன் நாள் முழுதும் பூக்க' },
  { id:'photo-16', image:'assets/images/ramya/photo-16.jpg', thumb:'assets/images/ramya/thumbs/photo-16.jpg', focus:'50% 20%',
    title:'நதிக்கரை நிலா', poem:'நதி ஓடுவதை மறந்து நிற்கிறது\nஉன் புன்னகையைப் பார்த்து' },
  { id:'photo-17', image:'assets/images/ramya/photo-17.jpg', thumb:'assets/images/ramya/thumbs/photo-17.jpg', focus:'40% 40%',
    title:'பூக்களின் நடுவே', poem:'திரும்பிப் பார்க்காமலே\nஎன் இதயத்தைக் கொண்டு சென்றாய்' },
  { id:'photo-18', image:'assets/images/ramya/photo-18.jpg', thumb:'assets/images/ramya/thumbs/photo-18.jpg', focus:'40% 40%',
    title:'பூவுக்கொரு பூ', poem:'உன் கையில் இருக்கும் பூ வெட்கப்படுகிறது\nஉன்னை விட அழகில்லை என்று' },
  { id:'photo-19', image:'assets/images/ramya/photo-19.jpg', thumb:'assets/images/ramya/thumbs/photo-19.jpg', focus:'50% 28%',
    title:'மஞ்சள் வெயில்', poem:'மஞ்சள் உடையில் நீ வந்தால்\nவெயிலும் மெல்லத் தென்றலாகிறது' },
  { id:'photo-20', image:'assets/images/ramya/photo-20.jpg', thumb:'assets/images/ramya/thumbs/photo-20.jpg', focus:'55% 40%',
    title:'காபி நேரம்', poem:'உன்னோடு பருகும் காபிக்கு\nசர்க்கரையே தேவையில்லை' },
  { id:'photo-21', image:'assets/images/ramya/photo-21.jpg', thumb:'assets/images/ramya/thumbs/photo-21.jpg', focus:'50% 30%',
    title:'வான் பார்வை', poem:'நீ வானத்தைப் பார்க்கிறாய்\nநான் என் வானத்தைப் பார்க்கிறேன்' },
  { id:'photo-22', image:'assets/images/ramya/photo-22.jpg', thumb:'assets/images/ramya/thumbs/photo-22.jpg', focus:'50% 40%',
    title:'மூங்கில் காடு', poem:'மூங்கில் இலைகளும் தலை சாய்க்கின்றன\nஉன் கை தொட்ட மகிழ்ச்சியில்' },
  { id:'photo-23', image:'assets/images/ramya/photo-23.jpg', thumb:'assets/images/ramya/thumbs/photo-23.jpg', focus:'40% 25%',
    title:'புன்னகை வெளிச்சம்', poem:'சூரியனுக்கே வெளிச்சம் தருவது\nஉன் புன்னகைதான்' },
  { id:'photo-24', image:'assets/images/ramya/photo-24.jpg', thumb:'assets/images/ramya/thumbs/photo-24.jpg', focus:'42% 30%',
    title:'திரும்பிப் பார்', poem:'நீ ஒரு முறை திரும்பிப் பார்த்தாய்\nஎன் உலகமே திரும்பிவிட்டது' },
  { id:'photo-25', image:'assets/images/ramya/photo-25.jpg', thumb:'assets/images/ramya/thumbs/photo-25.jpg', focus:'50% 35%',
    title:'மேகங்களின் நடுவே', poem:'மேகங்கள் கூட நின்று பார்க்கின்றன\nஉன் சிரிப்பின் அழகை' }
];

// "நாம்" part: our photos, title + poem like hers. Photos in assets/images/us/ (us-01 … us-14, in the order they show)
const US = [
  // these six come first, in this order
  { image:'assets/images/us/us-01.jpg', thumb:'assets/images/us/thumbs/us-01.jpg',
    title:'வானம் தொடும் நேரம்', poem:'வானம் நம் தலைக்கு மேல்\nஉலகம் நம் கைக்குள்' },
  { image:'assets/images/us/us-02.jpg', thumb:'assets/images/us/thumbs/us-02.jpg',
    title:'மேகங்கள் சாட்சி', poem:'மேகங்கள் சாட்சியாக\nஉன் தோளில் என் கை' },
  { image:'assets/images/us/us-03.jpg', thumb:'assets/images/us/thumbs/us-03.jpg',
    title:'ஏரிக்கரை', poem:'அலைகள் கரையைத் தேடுவது போல்\nஎன் மனம் உன்னைத் தேடும்' },
  { image:'assets/images/us/us-04.jpg', thumb:'assets/images/us/thumbs/us-04.jpg',
    title:'தோளோடு தோள்', poem:'எந்தப் பாதையானாலும்\nதோளோடு தோள் நாம்' },
  { image:'assets/images/us/us-05.jpg', thumb:'assets/images/us/thumbs/us-05.jpg',
    title:'சின்ன சந்தோஷம்', poem:'எதிரே நீ அமர்ந்தால் போதும்\nஎந்த உணவும் விருந்துதான்' },
  { image:'assets/images/us/us-06.jpg', thumb:'assets/images/us/thumbs/us-06.jpg',
    title:'மலைக் காற்று', poem:'மலைக் காற்றும் மெதுவாய் வீசுகிறது\nநம் சிரிப்பைக் கலைக்காமல்' },
  // then the rest
  { image:'assets/images/us/us-07.jpg', thumb:'assets/images/us/thumbs/us-07.jpg',
    title:'கைகோர்த்து', poem:'நீ கை கோர்த்த நாள் முதல்\nஎன் பயணத்தில் தனிமையில்லை' },
  { image:'assets/images/us/us-08.jpg', thumb:'assets/images/us/thumbs/us-08.jpg',
    title:'இரவின் ஒளி', poem:'இருள் சூழ்ந்த இரவிலும்\nஎனக்கு வெளிச்சம் நீதான்' },
  { image:'assets/images/us/us-09.jpg', thumb:'assets/images/us/thumbs/us-09.jpg',
    title:'பசுமை நினைவு', poem:'பச்சை மலைகளின் நடுவே\nபசுமையாய் ஒரு நினைவு' },
  { image:'assets/images/us/us-10.jpg', thumb:'assets/images/us/thumbs/us-10.jpg',
    title:'பூக்களின் கீழ்', poem:'மேலே பூக்கள் மழை பொழிய\nஅருகில் நீ புன்னகை பொழிய' },
  { image:'assets/images/us/us-11.jpg', thumb:'assets/images/us/thumbs/us-11.jpg',
    title:'கோயில் படிகள்', poem:'ஒவ்வொரு படியிலும் வேண்டினேன்\nஒவ்வொரு ஜென்மமும் நீயே வேண்டும் என்று' },
  { image:'assets/images/us/us-12.jpg', thumb:'assets/images/us/thumbs/us-12.jpg',
    title:'அலைகளின் ஓரம்', poem:'அலைகள் வந்து வந்து போகும்\nநம் கைகள் மட்டும் பிரியாது' },
  { image:'assets/images/us/us-13.jpg', thumb:'assets/images/us/thumbs/us-13.jpg',
    title:'மழையில் நாம்', poem:'மழை எவ்வளவு பெய்தாலும்\nஉன் புன்னகை போதும் குடையாக' },
  { image:'assets/images/us/us-14.jpg', thumb:'assets/images/us/thumbs/us-14.jpg',
    title:'இரவுப் பயணம்', poem:'நீண்ட இரவுப் பயணத்திலும்\nஎன் அருகில் நீ இருந்தால் போதும்' }
];

// the home "Memories" button opens this storybook; one entry = one page (photo + caption on the left, Tamil story on the right)
const STORY = [
  { image:'assets/images/ramya/photo-13.jpg', cap:'once upon a time…', title:'ஒரு காலத்தில்…',
    text:'ஒரு ஊரில்,\nஅதிகம் பேசாத ஒரு அமைதியான பெண் இருந்தாள்.\nஅவள் பேசுவது குறைவு...\nஆனால் அவள் கண்கள் பேசுவது அதிகம்.\nஅவள் பெயர் — ரம்யா 🌸' },
  { image:'assets/images/ramya/photo-20.jpg', cap:'and then, him', title:'ஒரு சந்திப்பு',
    text:'ஒரு நாள் அவள் வாழ்க்கையில்\nஒருவன் வந்தான்.\nமுதலில் நண்பனாக...\nபிறகு நெருங்கிய தோழனாக...\nமெல்ல மெல்ல, அவள் உலகமாக ☕' },
  { image:'assets/images/us/us-14.jpg', cap:'our little moments', title:'சின்னச் சின்ன நொடிகள்',
    text:'நீண்ட பேச்சுகள், சின்னச் சிரிப்புகள்,\nஇரவுப் பயணங்கள், செல்லச் சண்டைகள்...\nஒவ்வொரு நொடியையும்\nஅவன் தன் இதயத்தில்\nபத்திரமாய் சேர்த்து வைத்தான் 🌙' },
  { image:'assets/images/us/us-13.jpg', cap:'after every storm', title:'மழைக்குப் பின் வானவில்',
    text:'மழை போல சில சண்டைகள் வந்தன.\nகோபம், மௌனம், கண்ணீர்...\nஆனாலும் ஒவ்வொரு முறையும்\nஅவளே மீண்டும் வந்து பேசினாள் —\nமழைக்குப் பின் வரும் வானவில் போல 🌈' },
  { image:'assets/images/us/us-01.jpg', cap:'my everything', title:'அவளே எல்லாம்',
    text:'அவள் அவனை முழுதாய் நம்பினாள்.\nஅவன் தளரும்போது தாங்கினாள்,\nஅவன் ஜெயிக்கும்போது சிரித்தாள்.\nதோழி, ஆலோசகி, அக்கறைக்காரி,\nசண்டைக்காரி... அவனுக்கு அவளே எல்லாம் 🤍' },
  { image:'assets/images/ramya/photo-23.jpg', cap:'happy birthday ♥', title:'இன்று…',
    text:'இன்று அந்த அழகிய பெண்ணின் பிறந்தநாள் 🎂\nஇந்தக் கதையின் ஒவ்வொரு பக்கமும்\nஅவள் புன்னகையால் எழுதப்பட்டது.\nவா தங்கமே...\nநம் நினைவுகளுக்குள் போவோம் 💖',
    button:'நம் நினைவுகள்' }
];

// short closing kavithai under the photos; text between * * glows gold
const MEM_NOTE = 'எத்தனை படங்கள் எடுத்தாலும்\nஒன்றிலும் உன் அழகு முழுதாய் அடங்கவில்லை…\nஅதனால்தான் உன்னை\n*என் இதயத்திலேயே பதித்து வைத்தேன்* 💗';

// the letter ends with the question; Yes / No buttons show after it (No runs away, only Yes can be pressed)
const LETTER = {
  greeting: '', // leave empty for no greeting line
  body:
'உன்னை என் உள்ளங்கையில் வைத்து\nஉயிர் போல் காப்பேன் 🤲\n\n' +
'இனி வரும் நாட்கள் எல்லாம்\nஉன் இதழ்களில்\nபுன்னகை மட்டுமே பூக்கட்டும் 🌸\n\n' +
'எதற்காகவும், எப்போதும்\nஉன் விழிகளில்\nஒரு துளி கண்ணீர் கூட வர விடமாட்டேன் 🥺\n\n' +
'உன் அப்பா அம்மா\nஇனி எனக்கும் உயிர் —\nஅவர்களுக்கு நான் இன்னொரு மகன் 🏡\n\n' +
'யாருக்காகவும்\nஉன்னை விட்டுக்கொடுக்க மாட்டேன் 🔒\nஎன் கடைசி மூச்சு வரை\nஉன் நிழலாய் நானிருப்பேன் 💞',
  // our special photo (hand in hand) shows after the letter, just before the question
  photo: 'assets/images/us/hands.jpg',
  photoCaption: 'இந்தக் கையை\nவாழ்நாள் முழுதும்\nபிடித்திருக்க ஆசை 💗',
  question: 'என்ன நீ கல்யாணம் பண்ணிப்பியா?', // shows big after the letter, with a 💍
  yes: 'Yes 💖',
  // No changes its words each time she chases it
  no: ['No', 'நிஜமாவா? 🥺', 'யோசிச்சு சொல்லு 🙄', 'முடியாது போ 😜', 'ம்ஹூம்… 🙈', 'Yes தான் அழகு 💕', 'இங்க No-க்கு இடம் இல்ல 😂'],
  // a little kitten pops up beside the running No, dances and says this
  kitty: 'முடிஞ்சா புடிச்சுக்கோ 😜',
  reply: 'நீ சொன்ன இந்த "Yes" தான், என் வாழ்க்கையோட பெரிய பரிசு 💐'
};

const SURPRISE = {
  title: 'Happy Birthday',
  message: 'May this year wrap you in all the happiness you give to everyone around you. You deserve every wish, every dream and every beautiful thing life has to offer.',
  note: 'இந்த box-ல இருக்கிறது ஒரு wish மட்டும் தான்… உண்மையான gift-அ நான் உனக்காக தனியா ready பண்ணி வச்சிருக்கேன் 🎁 அதை open பண்ணி பாரு.',
  ask: 'பார்த்தியா? உனக்கு பிடிச்சிருக்கா?',
  yes: 'Yes ♥',
  no: 'No',
  // shown one by one each time she taps No; Yes keeps growing, No keeps shrinking
  teases: ['உனக்கு பிடிக்கலையா? 🥺', 'அய்யோ… இன்னொரு தடவை நல்லா பாரு 😢', 'Yes-அ தான் நீ press பண்ணணும் 😌', 'சரி சரி… Yes சொல்லு ♥'],
  // shown when she taps Yes, then the page moves on by itself
  yesReply: 'உனக்கு பிடிச்சிருக்கா? 😍 ♥'
};

const FINAL = {
  image: 'assets/images/us/final-photo.jpg',
  focus: '50% 45%',
  // shown right under the photo; "\n" starts a new line
  caption: 'கடற்கரை இரவில்,\nஅலைகள் சாட்சியாக\nநாம் எடுத்த முதல் புகைப்படம்.\n\nயாருக்காகவும் இல்லை,\nநமக்காக மட்டுமே எடுத்தது.\nகாலங்கள் கடந்தாலும்,\nஎன் இதயத்தில் இது என்றும் special ♥',
  quote: 'Every moment with you is a memory I want to keep forever. Happy Birthday, Ramya. ❤️',
  note: 'Thank you for being my best friend, my safe place, my greatest advisor, my caretaker, my fighting partner, my everything.'
};

const TYPE_MS = 28; // letter typing speed (milliseconds per character)

/* =====================================================================
   Helpers
   ===================================================================== */
(() => {
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const small = () => innerWidth < 700;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const later = (fn, ms) => setTimeout(fn, ms);

function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const rnd = mulberry(20261031);                 // seeded: the garden looks the same on every load
const R = (a, b) => a + Math.random() * (b - a); // truly random, for effects
const pick = (arr, f = Math.random) => arr[Math.floor(f() * arr.length)];

let toastTimer = 0;
function toast(msg) {
  const el = $('#toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 3600);
}

/* =====================================================================
   Flowers (SVG builders shared by the arch, the foreground and the garden)
   ===================================================================== */
const PINKS = ['#FF5C97', '#FF8FB8', '#E8457F', '#FFB3D1'];
const BLUSH = ['#FFD1E3', '#FFF8FB', '#FFB3D1', '#FFE3EE'];
const DAISY = ['#C9B6FF', '#FFD27A', '#FFF8FB', '#9D86E9'];
function bloomType(f = rnd) {
  const r = f();
  if (r < .42) return { kind: 'rose', color: pick(PINKS, f) };
  if (r < .76) return { kind: 'blossom', color: pick(BLUSH, f) };
  return { kind: 'daisy', color: pick(DAISY, f) };
}
const bloomUse = (b, x, y, s) => `<use href="#${b.kind}" x="${(x - s / 2).toFixed(1)}" y="${(y - s / 2).toFixed(1)}" width="${s}" height="${s}" style="color:${b.color}"/>`;

function stemsMarkup(x0, x1, n, hmin, hmax, baseY, sizeMin, sizeMax) {
  let out = '';
  for (let i = 0; i < n; i++) {
    const x = x0 + (x1 - x0) * (i + rnd() * .8) / n;
    const h = hmin + rnd() * (hmax - hmin), lean = (rnd() - .5) * 34, size = sizeMin + rnd() * (sizeMax - sizeMin);
    const b = bloomType();
    out += `<g transform="translate(${x.toFixed(1)} ${baseY})"><g class="sway" style="animation-delay:${(-rnd() * 4).toFixed(2)}s;animation-duration:${(3.4 + rnd() * 2).toFixed(2)}s">` +
      `<path d="M0 0Q${(lean * .2).toFixed(1)} ${(-h * .5).toFixed(1)} ${lean.toFixed(1)} ${(-h).toFixed(1)}" fill="none" stroke="#2F7D5B" stroke-width="3" stroke-linecap="round"/>` +
      `<use href="#leaf" x="0" y="-4" width="22" height="9" transform="translate(${(lean * .3).toFixed(1)} ${(-h * .36).toFixed(1)}) rotate(-35)" style="color:#3F8F6E"/>` +
      `<use href="#leaf" x="0" y="-4" width="22" height="9" transform="translate(${(lean * .5).toFixed(1)} ${(-h * .6).toFixed(1)}) rotate(155)" style="color:#2F7D5B"/>` +
      bloomUse(b, lean, -h, size) + `</g></g>`;
  }
  return out;
}

function buildScene() {
  // final garden strip: glow, a far hill with smaller flowers, the near bed, grass and fireflies
  let grass = '', flies = '';
  for (let i = 0; i < 70; i++) {
    const x = (1200 * (i + rnd())) / 70, y = 176 + rnd() * 14, h = 10 + rnd() * 10;
    grass += `<path d="M${x.toFixed(1)} ${y.toFixed(1)}q-3 ${(-h * .6).toFixed(1)} -8 ${(-h).toFixed(1)}M${x.toFixed(1)} ${y.toFixed(1)}q1 ${(-h * .7).toFixed(1)} 2 ${(-h * 1.2).toFixed(1)}M${x.toFixed(1)} ${y.toFixed(1)}q4 ${(-h * .5).toFixed(1)} 9 ${(-h * .9).toFixed(1)}"/>`;
  }
  for (let i = 0; i < 26; i++) {
    const x = (rnd() * 1200).toFixed(1), y = (14 + rnd() * 100).toFixed(1);
    flies += `<g class="tw" style="animation-delay:${(-rnd() * 3).toFixed(2)}s;animation-duration:${(2 + rnd() * 2.4).toFixed(2)}s"><circle cx="${x}" cy="${y}" r="7" fill="url(#bulb)"/><circle cx="${x}" cy="${y}" r="1.6" fill="#FFF1C2"/></g>`;
  }
  $('#finalGarden').innerHTML = `<svg viewBox="0 0 1200 190" preserveAspectRatio="xMidYMax slice" focusable="false">
    <defs>
      <linearGradient id="gHill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A1A6A"/><stop offset="1" stop-color="#1A0F44"/></linearGradient>
      <linearGradient id="gSoil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8A55A8"/><stop offset=".55" stop-color="#77479C"/><stop offset="1" stop-color="#6A3F92"/></linearGradient>
      <linearGradient id="gFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6A3F92" stop-opacity="0"/><stop offset="1" stop-color="#6A3F92"/></linearGradient>
      <radialGradient id="gGlow" cx=".5" cy="1" r=".6"><stop offset="0" stop-color="#FF5C97" stop-opacity=".32"/><stop offset=".6" stop-color="#9D86E9" stop-opacity=".12"/><stop offset="1" stop-color="#9D86E9" stop-opacity="0"/></radialGradient>
    </defs>
    <rect x="0" y="0" width="1200" height="190" fill="url(#gGlow)"/>
    <path d="M0 116C150 90 320 110 480 98C640 86 820 114 980 96C1080 86 1150 98 1200 92L1200 190L0 190Z" fill="url(#gHill)"/>
    <g opacity=".6">${stemsMarkup(0, 1200, 26, 26, 64, 150, 16, 24)}</g>
    <path d="M0 150C200 118 420 140 600 128C800 116 1000 142 1200 124L1200 190L0 190Z" fill="url(#gSoil)"/>
    <path d="M0 150C200 118 420 140 600 128C800 116 1000 142 1200 124" fill="none" stroke="rgba(201,182,255,.25)" stroke-width="1.5"/>
    ${stemsMarkup(0, 1200, 30, 40, 128, 188, 26, 40)}
    <g fill="none" stroke="#2F7D5B" stroke-width="2" stroke-linecap="round" opacity=".85">${grass}</g>
    <rect x="0" y="168" width="1200" height="22" fill="url(#gFade)"/>
    ${flies}</svg>`;
}

/* =====================================================================
   Ambient effects: fairy lights, petals, hearts, butterflies, particles
   ===================================================================== */
function buildLights() {
  const w = innerWidth, swags = Math.max(4, Math.round(w / 160)), seg = w / swags, drop = small() ? 14 : 22;
  const cols = ['#FFD27A', '#FF8FB8', '#C9B6FF', '#FFF1C2'];
  let d = 'M0 2', bulbs = '', n = 0;
  for (let i = 0; i < swags; i++) {
    const x0 = i * seg;
    d += ` Q${(x0 + seg / 2).toFixed(1)} ${2 + drop * 2} ${(x0 + seg).toFixed(1)} 2`;
    for (let k = 1; k <= 4; k++) {
      const t = k / 5, x = x0 + seg * t, y = 2 + 4 * drop * t * (1 - t), c = cols[n++ % 4];
      bulbs += `<g class="tw" style="animation-delay:${(-Math.random() * 3).toFixed(2)}s"><circle cx="${x.toFixed(1)}" cy="${(y + 6).toFixed(1)}" r="9" fill="${c}" opacity=".28"/><circle cx="${x.toFixed(1)}" cy="${(y + 6).toFixed(1)}" r="3.4" fill="${c}"/></g>`;
    }
  }
  $('#lights').innerHTML = `<svg viewBox="0 0 ${w} 60" preserveAspectRatio="none" focusable="false"><path d="${d}" fill="none" stroke="rgba(255,210,122,.4)" stroke-width="1.4"/>${bulbs}</svg>`;
}

function buildPetals() {
  const n = small() ? 9 : 18, box = $('#fxPetals');
  box.innerHTML = Array.from({ length: n }, () => {
    const s = R(10, 20).toFixed(0), d = R(11, 20).toFixed(1);
    return `<span class="petal" style="--x:${R(0, 100).toFixed(1)}%;--s:${s}px;--d:${d}s;--dl:${(-R(0, 20)).toFixed(1)}s;--dx:${R(-12, 12).toFixed(1)}vw;--sw:${R(2.2, 4).toFixed(1)}s"><i></i></span>`;
  }).join('');
}

function buildHearts() {
  const n = small() ? 5 : 9, box = $('#fxHearts'), cols = ['#FF5C97', '#FF8FB8', '#C9B6FF', '#FFD27A'];
  box.innerHTML = Array.from({ length: n }, () =>
    `<span class="fheart" style="--x:${R(2, 96).toFixed(1)}%;--s:${R(14, 28).toFixed(0)}px;--c:${pick(cols)};--d:${R(12, 22).toFixed(1)}s;--dl:${(-R(0, 18)).toFixed(1)}s;--dx:${R(-8, 8).toFixed(1)}vw">♥</span>`).join('');
}

const WING = [['#FF8FB8', '#FF5C97'], ['#C9B6FF', '#9D86E9'], ['#FFD27A', '#F5B04A'], ['#9FB6FF', '#7088F0'], ['#FFB09A', '#FF7A8A']];
/* every butterfly flaps at its own speed and phase, so they never move in sync */
const flapVars = () => `--fd:${R(.28, .46).toFixed(2)}s;--fl:${(-R(0, 1)).toFixed(2)}s;--bd:${R(1.4, 2.2).toFixed(1)}s;--bl:${(-R(0, 2)).toFixed(1)}s;`;
function butterflyMarkup(c1, c2) {
  return `<svg viewBox="-32 -26 64 52" aria-hidden="true">
    <g class="wl"><path d="M-1 -2C-8 -26 -32 -24 -29 -8C-28 2 -12 4 -1 -2Z" style="fill:${c1}"/><path d="M-1 1C-6 8 -24 8 -20 20C-17 26 -6 18 -1 3Z" style="fill:${c2}"/><circle cx="-19" cy="-11" r="3.2" fill="rgba(255,255,255,.7)"/><circle cx="-12" cy="14" r="2" fill="rgba(255,255,255,.55)"/></g>
    <g class="wr"><path d="M1 -2C8 -26 32 -24 29 -8C28 2 12 4 1 -2Z" style="fill:${c1}"/><path d="M1 1C6 8 24 8 20 20C17 26 6 18 1 3Z" style="fill:${c2}"/><circle cx="19" cy="-11" r="3.2" fill="rgba(255,255,255,.7)"/><circle cx="12" cy="14" r="2" fill="rgba(255,255,255,.55)"/></g>
    <ellipse cx="0" cy="2" rx="1.8" ry="10" fill="#2B1A3F"/>
    <path d="M-1 -8C-4 -16 -8 -18 -9 -20M1 -8C4 -16 8 -18 9 -20" stroke="#2B1A3F" stroke-width="1" fill="none" stroke-linecap="round"/></svg>`;
}
function buildButterflies() {
  const n = small() ? 5 : 9, paths = ['flyA', 'flyB', 'flyC', 'flyD', 'flyE'], box = $('#fxButterflies');
  box.innerHTML = Array.from({ length: n }, (_, i) => {
    const [c1, c2] = WING[i % WING.length];
    return `<div class="bf bfly" style="--w:${R(30, 54).toFixed(0)}px;--path:${paths[i % paths.length]};--dur:${R(24, 42).toFixed(0)}s;--dl:${(-R(0, 30)).toFixed(1)}s;${flapVars()}">${butterflyMarkup(c1, c2)}</div>`;
  }).join('');
}

function initStars() {
  const cv = $('#stars'), ctx = cv.getContext('2d'), COLS = ['255,210,122', '255,143,184', '201,182,255', '255,248,251'];
  let w = 0, h = 0, parts = [], raf = 0;
  function size() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    parts = Array.from({ length: small() ? 70 : 150 }, () => ({ x: R(0, w), y: R(0, h), r: R(.5, 2.1), vy: R(.05, .24), vx: R(-.05, .05), ph: R(0, 6.28), sp: R(.008, .026), c: pick(COLS) }));
  }
  let frame = 0;
  function draw() {
    if (!reduce) raf = requestAnimationFrame(draw);
    if (!reduce && small() && (frame++ & 1)) return; // phones: 30 fps is plenty for twinkling dots
    ctx.clearRect(0, 0, w, h);
    const halo = !small();
    for (const p of parts) {
      if (!reduce) { p.y -= p.vy; p.x += p.vx; p.ph += p.sp; if (p.y < -4) { p.y = h + 4; p.x = R(0, w); } }
      const a = .25 + .6 * (.5 + .5 * Math.sin(p.ph));
      ctx.fillStyle = `rgba(${p.c},${a})`; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
      if (halo && p.r > 1.5) { ctx.fillStyle = `rgba(${p.c},${a * .16})`; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3.4, 0, 6.2832); ctx.fill(); }
    }
  }
  size(); draw();
  let lastW = innerWidth, rt = 0;
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (innerWidth !== lastW) { lastW = innerWidth; size(); buildLights(); if (reduce) draw(); } }, 200); });
  document.addEventListener('visibilitychange', () => { cancelAnimationFrame(raf); if (!document.hidden && !reduce) raf = requestAnimationFrame(draw); });
  addEventListener('pagehide', () => cancelAnimationFrame(raf));
}

/* =====================================================================
   Navigation between the five steps
   ===================================================================== */
const STAGES = ['home', 'memories', 'letter', 'surprise', 'final'];
let current = null, swapTimer = 0;
const navEl = $('#nav'), menuBtn = $('#menuBtn');

function setMenu(open) { navEl.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', String(open)); menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); }

function go(id) {
  if (!STAGES.includes(id)) id = 'home';
  setMenu(false);
  if (id === current) return;
  if (current === 'letter') { finishTyping(); homeNo(); }
  const next = $('#stage-' + id), prev = current ? $('#stage-' + current) : null;
  clearTimeout(swapTimer);
  const show = () => {
    $$('.stage').forEach((s) => { if (s !== next) s.classList.remove('is-active', 'in', 'out'); });
    next.classList.remove('out'); next.classList.add('is-active', 'in');
    window.scrollTo(0, 0);
    const f = next.querySelector('[data-focus]'); if (f) f.focus({ preventScroll: true });
  };
  if (prev && prev !== next) { prev.classList.add('out'); swapTimer = setTimeout(show, reduce ? 0 : 320); } else show();
  current = id;
  $$('#nav a').forEach((a) => a.toggleAttribute('aria-current', a.dataset.go === id));
  $$('#nav a[aria-current]').forEach((a) => a.setAttribute('aria-current', 'page'));
  try { history.replaceState(null, '', '#' + id); } catch (e) { /* file:// in some browsers */ }
}

document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-go]');
  if (t) { e.preventDefault(); go(t.dataset.go); return; }
  if (!e.target.closest('#nav') && !e.target.closest('#menuBtn')) setMenu(false);
});
menuBtn.addEventListener('click', () => setMenu(!navEl.classList.contains('open')));
addEventListener('hashchange', () => go(location.hash.slice(1)));

/* =====================================================================
   Memories gallery (நீ + நாம்)
   ===================================================================== */
const flowerPh = (name) => `<div class="ph"><svg viewBox="-20 -20 40 40" aria-hidden="true" style="color:#FF8FB8"><use href="#blossom" x="-20" y="-20" width="40" height="40"/></svg><span>${esc(name)}</span></div>`;
// phones show one big photo per row, so they get the full photo; wider screens get the lighter card copy
const cardSrc = (m) => (innerWidth < 480 || !m.thumb ? m.image : m.thumb);
function mediaMarkup(m, alt) {
  const pos = m.focus ? ` style="object-position:${esc(m.focus)}"` : '';
  return `${flowerPh('Add ' + m.image.split('/').pop())}<img src="${esc(cardSrc(m))}" alt="${esc(alt)}"${pos} loading="lazy" decoding="async">`;
}
function hookImages(root) {
  // a missing photo fires "error" (always after this runs); removing it uncovers the flower placeholder underneath
  $$('img', root).forEach((img) => img.addEventListener('error', () => img.remove(), { once: true }));
}

const memCard = (m) => `
    <article class="mem">
      <div class="media">${mediaMarkup(m, m.title)}</div>
      <div class="mem-body"><h3 class="mem-title" lang="ta">${esc(m.title)}</h3><p class="mem-poem" lang="ta">${esc(m.poem)}</p></div>
    </article>`;
function renderMemories() {
  $('#memGrid').innerHTML = MEMORIES.map(memCard).join('');
  $('#usGrid').innerHTML = US.map(memCard).join('');
  $('#memNote p').innerHTML = esc(MEM_NOTE).replace(/\*([^*]+)\*/g, '<b>$1</b>');
  $$('.mem-grid').forEach(hookImages);
  watchCards();
}
// the நீ · நாம் buttons under the title jump to that part
$$('[data-jump]').forEach((b) => b.addEventListener('click', () => $('#' + b.dataset.jump).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })));

const cardWatch = !reduce && 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  let n = 0;
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const c = e.target; cardWatch.unobserve(c);
    c.style.transitionDelay = `${n++ * 110}ms`;
    c.addEventListener('transitionend', () => { c.style.transitionDelay = ''; }, { once: true });
    c.classList.add('seen');
  });
}, { rootMargin: '0px 0px -6% 0px', threshold: 0.12 }) : null;
function watchCards() {
  if (!cardWatch) return;
  $$('.mem-grid').forEach((g) => g.classList.add('reveal-on'));
  $$('.mem-grid .mem').forEach((c) => { c.classList.remove('seen'); cardWatch.observe(c); });
}

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

/* =====================================================================
   Love letter: scroll + typewriter
   ===================================================================== */
const zone = $('#letterZone'), paper = $('#paper'), typeEl = $('#letterType'), skipBtn = $('#skipType'), nextBtn = $('#toSurprise'), envBtn = $('#envBtn');
let typed = 0, typeTimer = 0, typing = false, letterOpen = false, follow = false;
/* while the letter types, keep the newest line on screen, unless she scrolls by herself */
['wheel', 'touchmove'].forEach((ev) => addEventListener(ev, () => { if (typing) follow = false; }, { passive: true }));
function followCaret() { const over = paper.getBoundingClientRect().bottom - (innerHeight - 70); if (over > 0) window.scrollBy(0, over); }
$('#letterHello').textContent = LETTER.greeting; $('#letterHello').hidden = !LETTER.greeting;
$('#letterFull').textContent = (LETTER.greeting ? LETTER.greeting + ' ' : '') + LETTER.body + ' ' + LETTER.question;
if (!reduce) for (let i = 0; i < 12; i++) {
  const h = document.createElement('span'); h.className = 'mh'; h.textContent = '♥';
  h.style.cssText = `--x:${R(4, 94).toFixed(0)}%;--s:${R(10, 20).toFixed(0)}px;--c:${pick(['#FF5C97', '#FF8FB8', '#B7A3F5', '#FFC56E'])};--d:${R(14, 24).toFixed(1)}s;--dl:${(-R(0, 24)).toFixed(1)}s`;
  $('#paperFx').appendChild(h);
}
$('#letterQ').innerHTML = ''; $('#letterQ').append(LETTER.question + ' ', Object.assign(document.createElement('span'), { textContent: '💍' }));
$('#promiseImg').src = LETTER.photo; $('#promiseCap').textContent = LETTER.photoCaption;

/* bring the photo, the question and the buttons on screen together (photo first when they don't all fit) */
function showAsk() {
  const head = ($('.site-header') || {}).offsetHeight || 70, room = innerHeight - head;
  const top = $('#promise').getBoundingClientRect().top, bot = (saidYes ? nextBtn : askBox).getBoundingClientRect().bottom;
  const y = bot - top < room - 24 ? (top + bot) / 2 - (head + innerHeight) / 2 : top - head - 16;
  window.scrollBy({ top: y, behavior: reduce ? 'auto' : 'smooth' });
}
function endTyping() {
  typing = false; paper.classList.remove('typing'); skipBtn.hidden = true;
  $('#promise').hidden = false; $('#letterQ').hidden = false;
  if (!saidYes) askBox.hidden = false; else nextBtn.hidden = false;
  if (follow) { follow = false; later(showAsk, 250); }
}
LETTER.body = LETTER.body.replace(/ (?=\p{Extended_Pictographic})/gu, ' '); // keep each emoji with its word
/* type whole letters (Tamil syllables, emojis) so nothing shows half-drawn */
const LETTER_CHARS = window.Intl && Intl.Segmenter ? [...new Intl.Segmenter().segment(LETTER.body)].map((s) => s.segment) : Array.from(LETTER.body);
let shown = '';
function typeStep() {
  if (typed >= LETTER_CHARS.length) return endTyping();
  const ch = LETTER_CHARS[typed++]; shown += ch; typeEl.textContent = shown;
  if (follow && typed % 20 === 0) followCaret();
  typeTimer = setTimeout(typeStep, /[.!?]/.test(ch) ? 260 : /[,;:]/.test(ch) ? 130 : ch === '\n' ? 220 : ch.length > 1 && /\p{Extended_Pictographic}/u.test(ch) ? 320 : TYPE_MS * 1.6);
}
function finishTyping() { if (!typing) return; clearTimeout(typeTimer); typed = LETTER_CHARS.length; shown = LETTER.body; typeEl.textContent = LETTER.body; endTyping(); }
function openLetter() {
  if (letterOpen) return; letterOpen = true;
  zone.classList.add('opened'); envBtn.disabled = true;
  later(() => {
    zone.classList.add('reading'); paper.setAttribute('aria-hidden', 'false');
    paper.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    if (reduce) { typed = LETTER_CHARS.length; shown = LETTER.body; typeEl.textContent = LETTER.body; endTyping(); return; }
    typing = true; follow = true; paper.classList.add('typing'); skipBtn.hidden = false; typeStep();
  }, reduce ? 0 : 1500);
}
envBtn.addEventListener('click', openLetter);
skipBtn.addEventListener('click', finishTyping);

/* the question: Yes works; No slides away from her finger / cursor, wobbles, shrinks and talks back */
const askBox = $('#ask'), yesBtn = $('#yesBtn'), noBtn = $('#noBtn'), yesReply = $('#yesReply');
let saidYes = false, tries = 0, lastDodge = 0, bqTimer = 0;
yesBtn.textContent = LETTER.yes; noBtn.textContent = LETTER.no[0]; yesReply.textContent = LETTER.reply;
function dodge(px, py) {
  lastDodge = performance.now();
  if (!noBtn.classList.contains('flee')) {
    const r = noBtn.getBoundingClientRect();
    noBtn.style.left = r.left + 'px'; noBtn.style.top = r.top + 'px';
    noBtn.classList.add('flee'); document.body.appendChild(noBtn); noBtn.offsetWidth;
  }
  tries++;
  noBtn.textContent = LETTER.no[Math.min(tries, LETTER.no.length - 1)];
  noBtn.style.setProperty('--shrink', Math.max(.72, 1 - tries * .04).toFixed(2));
  yesBtn.style.setProperty('--grow', Math.min(1.3, 1 + tries * .04).toFixed(2));
  noBtn.classList.remove('wobble'); noBtn.offsetWidth; noBtn.classList.add('wobble');
  const w = noBtn.offsetWidth, h = noBtn.offsetHeight, pad = 16, top = 96;
  const maxX = Math.max(pad, innerWidth - w - pad), maxY = Math.max(top, innerHeight - h - pad);
  const r = noBtn.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  if (px == null) { px = cx + R(-1, 1); py = cy + R(-1, 1); }
  const yes = yesBtn.getBoundingClientRect();
  const clear = (x, y) => Math.hypot(x + w / 2 - px, y + h / 2 - py) > 130 &&
    (x + w < yes.left - 14 || x > yes.right + 14 || y + h < yes.top - 14 || y > yes.bottom + 14);
  /* first try: slip away from the pointer, a little sideways, like it is shy */
  const a = Math.atan2(cy - py, cx - px);
  let x = 0, y = 0, ok = false;
  for (let i = 0; i < 14 && !ok; i++) {
    const ang = a + R(-.9, .9) + (i > 6 ? Math.PI * R(.4, .9) : 0), d = R(150, 240);
    x = Math.min(maxX, Math.max(pad, cx + Math.cos(ang) * d - w / 2));
    y = Math.min(maxY, Math.max(top, cy + Math.sin(ang) * d - h / 2));
    ok = clear(x, y);
  }
  /* cornered: hop somewhere else on the screen */
  for (let i = 0; i < 30 && !ok; i++) { x = R(pad, maxX); y = R(top, maxY); ok = clear(x, y); }
  noBtn.style.left = x.toFixed(0) + 'px'; noBtn.style.top = y.toFixed(0) + 'px';
  placeKitty(x, y, w, h);
}
function runAway(e) { e.preventDefault(); const t = e.touches && e.touches[0]; dodge(t ? t.clientX : e.clientX, t ? t.clientY : e.clientY); }
noBtn.addEventListener('pointerenter', (e) => { if (performance.now() - lastDodge > 250) runAway(e); });
noBtn.addEventListener('pointerdown', runAway);
noBtn.addEventListener('touchstart', runAway, { passive: false });
noBtn.addEventListener('click', (e) => { e.preventDefault(); dodge(); });
noBtn.addEventListener('focus', () => { dodge(); yesBtn.focus(); });
/* a fast mouse can reach it between frames, so move it as soon as the cursor gets close */
addEventListener('pointermove', (e) => {
  if (saidYes || askBox.hidden || e.pointerType !== 'mouse' || performance.now() - lastDodge < 380) return;
  const r = noBtn.getBoundingClientRect();
  if (e.clientX > r.left - 50 && e.clientX < r.right + 50 && e.clientY > r.top - 50 && e.clientY < r.bottom + 50) dodge(e.clientX, e.clientY);
}, { passive: true });
addEventListener('resize', () => { if (noBtn.classList.contains('flee')) dodge(); });

/* a small kitten pops up beside the running No, dances and teases her (LETTER.kitty); it follows the button and goes when No goes home */
const kitty = document.createElement('div');
kitty.className = 'kitty'; kitty.setAttribute('aria-hidden', 'true');
kitty.innerHTML = `<p class="kitty-say"></p><svg viewBox="0 0 100 110">
  <defs><radialGradient id="ktCream" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#FFF4E6"/><stop offset="1" stop-color="#FFD9B3"/></radialGradient>
    <radialGradient id="ktGold" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#FFE2A8"/><stop offset="1" stop-color="#E9A95A"/></radialGradient></defs>
  <g class="k-body">
    <g class="k-tail"><path d="M66 96c14 0 20-10 18-22-1-6 5-8 7-2 3 12-4 30-25 30z" fill="url(#ktCream)" stroke="#E8B989" stroke-width="1.3"/></g>
    <g class="k-arm l"><ellipse cx="33" cy="80" rx="6" ry="10" fill="url(#ktCream)" stroke="#E8B989" stroke-width="1.2" transform="rotate(30 33 80)"/></g>
    <g class="k-arm r"><ellipse cx="67" cy="80" rx="6" ry="10" fill="url(#ktCream)" stroke="#E8B989" stroke-width="1.2" transform="rotate(-30 67 80)"/></g>
    <ellipse cx="41" cy="103" rx="8" ry="5.5" fill="url(#ktCream)" stroke="#E8B989" stroke-width="1.2"/><ellipse cx="59" cy="103" rx="8" ry="5.5" fill="url(#ktCream)" stroke="#E8B989" stroke-width="1.2"/>
    <ellipse cx="50" cy="86" rx="17" ry="18" fill="url(#ktCream)" stroke="#E8B989" stroke-width="1.4"/><ellipse cx="50" cy="90" rx="9" ry="10" fill="#FFF6EC"/>
    <path d="M28 40l4-22 16 12zM72 40l-4-22-16 12z" fill="url(#ktCream)" stroke="#E8B989" stroke-width="1.4" stroke-linejoin="round"/><path d="M32 34l2-10 8 6zM68 34l-2-10-8 6z" fill="#FFC2D6"/>
    <ellipse cx="50" cy="48" rx="24" ry="21" fill="url(#ktCream)" stroke="#E8B989" stroke-width="1.4"/>
    <path d="M46 30q4 4 8 0M44 34q6 3 12 0" fill="none" stroke="#E9A95A" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="40" cy="48" rx="4" ry="5" fill="#2E2A3A"/><ellipse cx="60" cy="48" rx="4" ry="5" fill="#2E2A3A"/><circle cx="41.4" cy="46.4" r="1.5" fill="#fff"/><circle cx="61.4" cy="46.4" r="1.5" fill="#fff"/>
    <path d="M48 55h4l-2 2.4z" fill="#FF7FA8"/><path d="M46 59q2 2.4 4 0 2 2.4 4 0" fill="none" stroke="#5A3A2A" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M24 52h11M24 56l11-1M76 52H65M76 56l-11-1" stroke="#C99A70" stroke-width="1" stroke-linecap="round"/>
    <ellipse cx="34" cy="57" rx="4.5" ry="3" fill="#FFB0C8" opacity=".7"/><ellipse cx="66" cy="57" rx="4.5" ry="3" fill="#FFB0C8" opacity=".7"/>
    <path d="M37 68q13 5 26 0" fill="none" stroke="#FF5C97" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="72" r="3.6" fill="url(#ktGold)" stroke="#C9963A"/>
  </g>
</svg>`;
kitty.querySelector('.kitty-say').textContent = LETTER.kitty;
document.body.appendChild(kitty);
function placeKitty(x, y, w, h) {
  // No shrinks (scale around its centre) as she chases it: stand next to the size it really shows
  const s = parseFloat(noBtn.style.getPropertyValue('--shrink')) || 1;
  x += w * (1 - s) / 2; y += h * (1 - s) / 2; w *= s; h *= s;
  const tw = kitty.offsetWidth, th = kitty.offsetHeight, gap = 8, yes = yesBtn.getBoundingClientRect();
  // stand on the side away from Yes, unless the screen edge is in the way
  let left = yes.left + yes.width / 2 > x + w / 2;
  if (left && x - tw - gap < 8) left = false;
  if (!left && x + w + gap + tw > innerWidth - 8) left = true;
  const tx = left ? x - tw - gap : x + w + gap, ty = Math.max(96, y + h - th);
  if (!kitty.classList.contains('on')) { kitty.classList.add('jump'); kitty.offsetWidth; }
  kitty.style.left = tx.toFixed(0) + 'px'; kitty.style.top = ty.toFixed(0) + 'px';
  // keep the speech bubble on screen
  const sw = kitty.querySelector('.kitty-say').offsetWidth, want = tx + tw / 2 - sw / 2;
  kitty.style.setProperty('--bx', (Math.min(Math.max(8, want), innerWidth - sw - 8) - want).toFixed(0) + 'px');
  kitty.offsetWidth; kitty.classList.remove('jump'); kitty.classList.add('on');
}
function hideKitty() { kitty.classList.remove('on'); }

/* Yes: a bouquet rises up and blooms, then we go to the birthday surprise */
function rose(x, y, r, [c1, c2, c3], dl) {
  const petals = (n, d, pr, fill, off) => Array.from({ length: n }, (_, i) => { const a = off + i / n * Math.PI * 2;
    return `<circle cx="${(x + Math.cos(a) * d).toFixed(1)}" cy="${(y + Math.sin(a) * d).toFixed(1)}" r="${pr.toFixed(1)}" fill="${fill}" stroke="${c3}" stroke-opacity=".25" stroke-width="1"/>`; }).join('');
  return `<g class="fl" style="transition-delay:${dl}ms">${petals(6, r * .55, r * .5, c1, 0)}${petals(5, r * .3, r * .38, c2, .6)}` +
    `<circle cx="${x}" cy="${y}" r="${(r * .26).toFixed(1)}" fill="${c3}" opacity=".85"/><circle cx="${x - r * .07}" cy="${y - r * .08}" r="${(r * .1).toFixed(1)}" fill="#fff" opacity=".45"/></g>`;
}
function bouquetSvg() {
  const pink = ['#FF5C97', '#FF9CC2', '#B3125F'], deep = ['#D81B72', '#FF5C97', '#7A0B3F'], peach = ['#FFB38A', '#FFD6BF', '#D9653B'],
        lav = ['#B7A3F5', '#DDD2FF', '#6E55C9'], cream = ['#FFE6EF', '#FFFFFF', '#E58AB0'];
  const leaves = [[-62, 70, 150], [-30, 95, 120], [30, 205, 120], [62, 230, 150], [-80, 60, 190], [80, 240, 190]]
    .map(([rot, x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="15" ry="42" fill="${i % 2 ? '#3E9B6A' : '#2F7F57'}" transform="rotate(${rot} ${x} ${y})"/>`).join('');
  const flowers = [[150, 112, 34, deep], [104, 132, 28, pink], [196, 132, 28, peach], [128, 170, 27, lav], [174, 170, 27, pink],
    [78, 176, 22, cream], [222, 176, 22, deep], [150, 70, 22, pink], [108, 88, 19, lav], [192, 88, 19, cream]];
  const breath = Array.from({ length: 26 }, (_, i) => { const a = i / 26 * Math.PI * 2, d = 78 + (i % 3) * 12;
    return `<circle class="fl" style="transition-delay:${900 + i * 30}ms" cx="${(150 + Math.cos(a) * d * 1.05).toFixed(0)}" cy="${(132 + Math.sin(a) * d * .78).toFixed(0)}" r="${3 + i % 3}" fill="#FFF8FB"/>`; }).join('');
  return `<svg viewBox="0 0 300 380" aria-hidden="true"><defs>
    <linearGradient id="bqA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE3EE"/><stop offset="1" stop-color="#FF8FB8"/></linearGradient>
    <linearGradient id="bqB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9B8FF"/><stop offset="1" stop-color="#9D86E9"/></linearGradient>
    <linearGradient id="bqG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#F5B04A"/><stop offset=".5" stop-color="#FFE29A"/><stop offset="1" stop-color="#F5B04A"/></linearGradient></defs>
    <path d="M42 150Q150 104 258 150L150 360Z" fill="url(#bqB)"/>${leaves}${breath}
    ${flowers.map(([x, y, r, c], i) => rose(x, y, r, c, 250 + i * 110)).join('')}
    <path d="M62 178Q106 214 150 196Q194 214 238 178L150 362Z" fill="url(#bqA)"/>
    <path d="M150 196L150 362" stroke="#FF5C97" stroke-width="2" opacity=".35"/>
    <g transform="translate(150 282)"><path d="M0 0C-24 -28 -54 -14 -44 6C-36 22 -14 10 0 0Z" fill="url(#bqG)"/><path d="M0 0C24 -28 54 -14 44 6C36 22 14 10 0 0Z" fill="url(#bqG)"/>
    <path d="M-4 4L-22 50L-10 44L-2 54ZM4 4L22 50L10 44L2 54Z" fill="#F5B04A"/><circle r="9" fill="#FFE29A" stroke="#F5B04A" stroke-width="2"/></g></svg>`;
}
function showBouquet() {
  const bq = document.createElement('div'); bq.className = 'bq'; bq.id = 'bouquet';
  const hearts = Array.from({ length: 16 }, (_, i) => `<i style="--x:${(i * 6.3 + 3) % 100}%;--s:${14 + i % 4 * 7}px;--c:${['#FF5C97', '#FFFFFF', '#E0457F', '#FFC2DA'][i % 4]};--d:${7 + i % 5}s;--dl:${(i * .55).toFixed(2)}s">♥</i>`).join('');
  const sparks = [[6, 18, 22, 0], [88, 12, 18, .7], [96, 52, 24, 1.3], [2, 60, 16, 1.8], [50, -6, 20, .4], [20, 88, 14, 1.1], [80, 84, 16, 1.6]]
    .map(([x, y, sz, dl]) => `<span class="bq-spark" style="--x:${x}%;--y:${y}%;--s:${sz}px;--dl:${dl}s">✦</span>`).join('');
  bq.innerHTML = `<div class="bq-rays"></div><div class="bq-hearts">${hearts}</div><div class="bq-flower">${bouquetSvg()}${sparks}</div>` +
    '<h3><span class="t" data-t="நன்றி"><b>நன்றி</b></span><span>💖</span></h3><div class="bq-card"><p></p></div>'; const p = bq.querySelector('p'), [before, after] = LETTER.reply.replace(', ', ',\n').replace(/ ([^ ]+) ([^ ]+) ([^ ]+)$/, '\n$1\u00a0$2\u00a0$3').split('"Yes"');
  if (after === undefined) p.textContent = before;
  else { const em = document.createElement('em'); em.textContent = 'Yes'; p.append(before, em, after); }
  document.body.appendChild(bq);
  const done = () => { clearTimeout(bqTimer); bq.classList.remove('show'); setTimeout(() => bq.remove(), 500); go('surprise'); };
  bq.addEventListener('click', done, { once: true });
  requestAnimationFrame(() => requestAnimationFrame(() => bq.classList.add('show')));
  setTimeout(() => bq.classList.add('bloom'), reduce ? 0 : 700);
  setTimeout(() => { if (bq.isConnected) launchConfetti(innerWidth / 2, innerHeight * .45); }, 1500);
  bqTimer = setTimeout(done, reduce ? 4500 : 9000);
}
yesBtn.addEventListener('click', () => {
  if (saidYes) return; saidYes = true;
  const r = yesBtn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  launchConfetti(x, y); burstFx(x, y);
  homeNo(); askBox.hidden = true; yesReply.hidden = false; nextBtn.hidden = false;
  setTimeout(showBouquet, reduce ? 0 : 900);
});
/* put No back next to Yes (it lives on <body> while running away) */
function homeNo() { noBtn.classList.remove('flee', 'wobble'); noBtn.style.left = noBtn.style.top = ''; askBox.appendChild(noBtn); hideKitty(); }

/* =====================================================================
   Birthday surprise: gift box, confetti, hearts and butterflies
   ===================================================================== */
const gift = $('#gift'), wish = $('#wish');
let giftOpen = false;
$('#wishTitle').textContent = SURPRISE.title + ' ';
$('#wishText').textContent = SURPRISE.message;
$('#giftNote').textContent = SURPRISE.note; $('#giftAsk').textContent = SURPRISE.ask;

/* did she like the real gift? Yes goes to the final page, No just teases her back toward Yes */
const giftYes = $('#giftYes'), giftNo = $('#giftNo'), giftTease = $('#giftTease');
let giftNos = 0;
giftYes.textContent = SURPRISE.yes; giftNo.textContent = SURPRISE.no;
giftNo.addEventListener('click', () => {
  giftNos++;
  giftTease.textContent = SURPRISE.teases[Math.min(giftNos, SURPRISE.teases.length) - 1];
  giftYes.style.transform = `scale(${(1 + giftNos * .15).toFixed(2)})`;
  giftNo.style.transform = `scale(${Math.max(.55, 1 - giftNos * .12).toFixed(2)})`;
  if (giftNos >= SURPRISE.teases.length) { giftNo.style.opacity = '0'; giftNo.style.pointerEvents = 'none'; }
});
giftYes.addEventListener('click', () => {
  if (giftYes.disabled) return; giftYes.disabled = giftNo.disabled = true;
  const r = giftYes.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  launchConfetti(x, y); burstFx(x, y);
  giftTease.textContent = SURPRISE.yesReply; giftTease.classList.add('yes');
  later(() => go('final'), reduce ? 1200 : 2600);
});

const cf = $('#confetti'), cctx = cf.getContext('2d'); let pieces = [], cfRaf = 0;
function sizeConfetti() { const dpr = Math.min(devicePixelRatio || 1, 2); cf.width = innerWidth * dpr; cf.height = innerHeight * dpr; cctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
sizeConfetti(); addEventListener('resize', sizeConfetti);
function confettiLoop() {
  cctx.clearRect(0, 0, cf.width, cf.height);
  pieces = pieces.filter((p) => p.y < innerHeight + 30 && p.life > 0);
  for (const p of pieces) {
    p.vx *= .985; p.vy = p.vy * .985 + .22; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
    cctx.save(); cctx.translate(p.x, p.y); cctx.rotate(p.rot); cctx.globalAlpha = Math.min(1, p.life / 40); cctx.fillStyle = p.c;
    if (p.shape === 0) cctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
    else if (p.shape === 1) { cctx.beginPath(); cctx.arc(0, 0, p.s / 3, 0, 6.2832); cctx.fill(); }
    else { cctx.beginPath(); cctx.moveTo(0, p.s / 3); cctx.bezierCurveTo(-p.s / 2, -p.s / 6, -p.s / 5, -p.s / 2, 0, -p.s / 5); cctx.bezierCurveTo(p.s / 5, -p.s / 2, p.s / 2, -p.s / 6, 0, p.s / 3); cctx.fill(); }
    cctx.restore();
  }
  if (pieces.length) cfRaf = requestAnimationFrame(confettiLoop); else { cfRaf = 0; cctx.clearRect(0, 0, cf.width, cf.height); }
}
function launchConfetti(x, y) {
  if (reduce) return;
  const cols = ['#FF5C97', '#FF8FB8', '#FFD27A', '#C9B6FF', '#FFF8FB', '#9D86E9'], n = small() ? 110 : 190;
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + R(-1, 1) * .95, sp = R(7, 18);
    pieces.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, s: R(8, 15), rot: R(0, 6.28), vr: R(-.25, .25), c: pick(cols), shape: Math.floor(R(0, 3)), life: R(120, 230) });
  }
  if (!cfRaf) cfRaf = requestAnimationFrame(confettiLoop);
}
function burstFx(x, y) {
  if (reduce) return;
  const box = $('#burst'), cols = ['#FF5C97', '#FF8FB8', '#C9B6FF', '#FFD27A'];
  for (let i = 0; i < (small() ? 10 : 16); i++) {
    const s = document.createElement('span'); s.className = 'bheart'; s.textContent = '♥';
    s.style.cssText = `left:${x}px;top:${y}px;--dx:${R(-170, 170).toFixed(0)}px;--dy:${(-R(150, 380)).toFixed(0)}px;--s:${R(16, 34).toFixed(0)}px;--c:${pick(cols)};animation-delay:${i * 70}ms`;
    s.addEventListener('animationend', () => s.remove()); box.appendChild(s);
  }
  for (let i = 0; i < (small() ? 5 : 8); i++) {
    const [c1, c2] = WING[i % WING.length], b = document.createElement('div');
    b.className = 'bb bfly'; b.style.cssText = `left:${x}px;top:${y}px;--w:${R(34, 56).toFixed(0)}px;--dx:${R(-240, 240).toFixed(0)}px;--dy:${(-R(160, 420)).toFixed(0)}px;${flapVars()}animation-delay:${i * 140}ms`;
    b.innerHTML = butterflyMarkup(c1, c2); b.addEventListener('animationend', () => b.remove()); box.appendChild(b);
  }
}
function openGift() {
  if (giftOpen) return; giftOpen = true;
  gift.disabled = true; gift.classList.add('shake');
  later(() => {
    gift.classList.remove('shake'); gift.classList.add('open'); gift.setAttribute('aria-label', 'Gift box opened');
    $('#giftHint').hidden = true;
    const r = gift.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height * .45;
    launchConfetti(x, y); burstFx(x, y);
    wish.classList.add('show');
    later(() => wish.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }), reduce ? 0 : 700);
  }, reduce ? 0 : 600);
}
gift.addEventListener('click', openGift);

/* =====================================================================
   Final message
   ===================================================================== */
$('#finalMedia').innerHTML = mediaMarkup({ image: FINAL.image, focus: FINAL.focus }, 'Us, together');
hookImages($('#finalMedia'));
$('#finalCap').textContent = FINAL.caption; $('#finalQuote').textContent = FINAL.quote; $('#finalNote').textContent = FINAL.note;

/* =====================================================================
   Music (starts as the site opens; the site works fine without the file)
   ===================================================================== */
const song = $('#song'), musicBtn = $('#musicBtn');
// The song starts at the part that suits the site (1:03.5, a quiet moment) and then plays right to the end of the song, without cuts.
// When it ends it starts again from that same point.
const SONG = { start: 63.5, fadeIn: 2, fadeOut: 3 };
const toSongStart = () => { song.currentTime = SONG.start; };
song.volume = 0;
song.addEventListener('loadedmetadata', () => { if (song.currentTime < SONG.start) toSongStart(); });
song.addEventListener('timeupdate', () => {
  const t = song.currentTime, d = song.duration || Infinity;
  if (t < SONG.start - 1) { toSongStart(); return; }
  song.volume = Math.max(0, Math.min(1, (t - SONG.start) / SONG.fadeIn, (d - t) / SONG.fadeOut));
});
song.addEventListener('ended', () => { toSongStart(); song.play().catch(() => setPlaying(false)); });
function setPlaying(p) { musicBtn.classList.toggle('playing', p); musicBtn.setAttribute('aria-pressed', String(p)); musicBtn.setAttribute('aria-label', p ? 'Pause music' : 'Play music'); }
musicBtn.addEventListener('click', () => {
  if (!song.paused) { song.pause(); setPlaying(false); return; }
  const r = song.play();
  const fail = () => { setPlaying(false); toast('Add your song at assets/music/kalla-nikkiriye.mp3 to hear it here.'); };
  if (r && r.then) r.then(() => setPlaying(true)).catch(fail); else setPlaying(true);
});
song.addEventListener('error', () => setPlaying(false));
// Plays as soon as the site opens. Most browsers block sound until the first tap/click/key,
// so then it starts on her first touch anywhere (the music button itself still just toggles).
let userPaused = false;
musicBtn.addEventListener('click', () => { userPaused = song.paused; });
const GESTURES = ['pointerdown', 'touchend', 'keydown'];
function onGesture(e) { if (!musicBtn.contains(e.target)) autoStart(); }
function stopWaiting() { GESTURES.forEach(g => removeEventListener(g, onGesture, true)); }
function autoStart() {
  if (userPaused || !song.paused) return;
  const r = song.play();
  if (r && r.then) r.then(() => { setPlaying(true); stopWaiting(); }).catch(() => {});
}
GESTURES.forEach(g => addEventListener(g, onGesture, true));
autoStart();
// Leaving the site (home button, another app, another tab, screen locked) pauses the song, and coming back
// carries on from the same place. Phones otherwise keep playing it in the background until the tab is closed.
let hidePaused = false;
function pauseHidden() { if (!song.paused) { song.pause(); hidePaused = true; } }
function resumeShown() {
  if (!hidePaused || document.hidden) return;
  hidePaused = false;
  const r = song.play();
  // if the browser wants a fresh touch first, it starts again on her next tap
  if (r && r.catch) r.catch(() => { setPlaying(false); GESTURES.forEach(g => addEventListener(g, onGesture, true)); });
}
document.addEventListener('visibilitychange', () => { if (document.hidden) pauseHidden(); else resumeShown(); });
addEventListener('pagehide', pauseHidden);
addEventListener('pageshow', resumeShown);

/* =====================================================================
   Opening "Golden Night": a gold arrow writes "Happy Birthday"; her tap opens the gift box, then the home page plays
   ===================================================================== */
function playIntro(done = () => {}) {
  const el = $('#intro');
  if (!el) { done(); return; }
  if (current !== 'home' || new URLSearchParams(location.search).get('intro') === '0') { el.remove(); done(); return; }
  document.body.classList.add('intro-on');
  const cv = $('#n-fx', el), cx = cv.getContext('2d'), DPR = Math.min(devicePixelRatio || 1, 2);
  let W = 0, H = 0, alive = true;
  const size = () => { W = innerWidth; H = innerHeight; cv.width = W * DPR; cv.height = H * DPR; cx.setTransform(DPR, 0, 0, DPR, 0, 0); };
  size(); addEventListener('resize', size);
  // gold glitter that drifts down and twinkles, plus firework sparks
  const glitter = Array.from({ length: 140 }, () => ({ x: R(0, 1), y: R(0, 1), r: R(.6, 2), v: R(.0004, .0014), p: R(0, 6.3) }));
  let sparks = [];
  const burst = (x, y, n = 70) => {
    const c = pick(['#FFD27A', '#FFF3C4', '#FF8FB8', '#FF5C97', '#F5C04A']);
    for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2, s = R(1.6, 4.2); sparks.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, c: Math.random() < .3 ? '#fff' : c }); }
  };
  const heartBurst = (x, y) => {
    for (let i = 0; i < 60; i++) {
      const t = (i / 60) * Math.PI * 2, hx = 16 * Math.sin(t) ** 3, hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      sparks.push({ x, y, vx: hx * .22, vy: hy * .22, life: 1, c: '#FF5C97' });
    }
  };
  const loop = (t) => {
    if (!alive) return;
    cx.clearRect(0, 0, W, H);
    for (const g of glitter) {
      if (!reduce) { g.y += g.v; if (g.y > 1.02) { g.y = -.02; g.x = R(0, 1); } }
      cx.globalAlpha = .35 + .65 * Math.abs(Math.sin(t / 700 + g.p)); cx.fillStyle = '#F7D58B'; cx.beginPath(); cx.arc(g.x * W, g.y * H, g.r, 0, 7); cx.fill();
    }
    sparks = sparks.filter((s) => s.life > 0);
    for (const s of sparks) {
      s.x += s.vx; s.y += s.vy; s.vx *= .975; s.vy = s.vy * .975 + .035; s.life -= .012;
      cx.globalAlpha = Math.max(0, s.life); cx.fillStyle = s.c; cx.beginPath(); cx.arc(s.x, s.y, 2.2, 0, 7); cx.fill();
    }
    cx.globalAlpha = 1;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  let ready = false, gone = false;
  const start = () => {
    if (el.classList.contains('n-play')) return;
    el.classList.add('n-play');
    if (reduce) { el.classList.add('n-still', 'n-ready'); ready = true; return; }
    setTimeout(() => burst(W * .2, H * .25), 2500);
    setTimeout(() => heartBurst(W * .5, H * .2), 2800);
    setTimeout(() => burst(W * .8, H * .28), 3100);
    setTimeout(() => { ready = true; el.classList.add('n-ready'); }, 5300);
  };
  Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]).then(start);

  const finish = () => {
    alive = false; removeEventListener('resize', size);
    el.remove(); document.body.classList.remove('intro-on');
    const home = $('#stage-home'); home.classList.remove('in'); void home.offsetWidth; home.classList.add('in');   // replay the home entrance
    const f = home.querySelector('[data-focus]'); if (f) f.focus({ preventScroll: true });
    done();
  };
  const open = () => {
    if (!ready || gone) return;
    gone = true; el.classList.add('n-go');
    if (reduce) { setTimeout(finish, 300); return; }
    // the lid flies off at ~0.45 s: hearts pour out of the box, then fireworks
    const g = $('.n-gift', el).getBoundingClientRect(), gx = g.left + g.width / 2, gy = g.top + g.height * .45;
    for (let i = 0; i < 26; i++) {
      const h = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); h.setAttribute('class', 'n-lift'); h.setAttribute('viewBox', '0 0 100 92');
      h.innerHTML = '<use href="#n-hp" fill="currentColor"/>';
      h.style.cssText = `left:${gx}px;top:${gy}px;--s:${R(14, 34)}px;--c:${pick(['#FF5C97', '#FF8FB8', '#FFD27A', '#fff', '#F5C04A'])};--dx:${R(-260, 260)}px;--dy:${R(-H * .75, -H * .3)}px;--r:${R(-30, 30)}deg;--t:${R(1.4, 2.4)}s;--d:${R(.45, .8)}s`;
      el.appendChild(h);
    }
    setTimeout(() => { burst(gx, gy, 90); heartBurst(gx, gy - 40); }, 500);
    [[.25, .25, 900], [.75, .22, 1100], [.5, .14, 1350]].forEach(([x, y, d]) => setTimeout(() => burst(W * x, H * y), d));
    setTimeout(() => el.classList.add('n-bye'), 2300);
    setTimeout(finish, 3200);
  };
  el.addEventListener('click', open);
  el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  el.focus({ preventScroll: true });
}

/* =====================================================================
   Start
   ===================================================================== */

/* home: a heart made of 46 different photos (assets/images/mosaic/h01.jpg ... h46.jpg, no photo used twice).
   Hover (computer) or tap (phone) shows one photo big and sharp (assets/images/mosaic/big/hNN.jpg, loaded only then). */
function buildMosaic() {
  const box = $('#mosaic');
  if (!box) return;
  const HEART = ['.XX...XX.', 'XXXX.XXXX', 'XXXXXXXXX', 'XXXXXXXXX', '.XXXXXXX.', '..XXXXX..', '...XXX...', '....X....'];
  // full addresses: a url() inside a CSS variable is read relative to css/style.css, not to this page
  const dir = new URL('assets/images/mosaic/', document.baseURI).href;
  let n = 0, cells = '';
  HEART.forEach((row, r) => [...row].forEach((ch, c) => {
    if (ch !== 'X') { cells += '<i class="e"></i>'; return; }
    const f = `h${String(++n).padStart(2, '0')}.jpg`;
    cells += `<i style="--lo:url(${dir}${f});--hi:url(${dir}big/${f});--ox:${(c / 8 * 100).toFixed(1)}%;--oy:${(r / 7 * 100).toFixed(1)}%;--dl:${((r + c) * 0.06).toFixed(2)}s"><b></b></i>`;
  }));
  box.innerHTML = cells;
  if (matchMedia('(hover: hover)').matches) return;
  // phones: tap a photo to see it big, tap it again (or anywhere else) to close
  const closeAll = (keep) => box.querySelectorAll('i.big').forEach((x) => { if (x !== keep) x.classList.remove('big'); });
  box.addEventListener('click', (e) => {
    const t = e.target.closest('i:not(.e)');
    closeAll(t);
    if (t) t.classList.toggle('big');
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('#mosaic')) closeAll(null); });
}
buildMosaic();

buildScene(); buildLights(); initStars(); renderMemories();
if (!reduce) { buildPetals(); buildHearts(); buildButterflies(); }
go((location.hash || '#home').slice(1));
playIntro();

/* =====================================================================
   Story book (home "Memories" button → STORY pages → Memories page)
   ===================================================================== */
function initStory() {
  const box = $('#story'), book = $('#stBook'), dots = $('#stDots');
  let page = 0, lastFocus = null;
  if (!reduce) $('#stFloat').innerHTML = Array.from({ length: 14 }, (_, i) =>
    `<i style="--x:${(i * 7.3 + 3) % 100}%;--s:${14 + (i % 4) * 6}px;--t:${12 + (i % 5) * 3}s;--d:${-i * 1.7}s;--r:${i % 2 ? 40 : -40}deg">${['💗', '🌸', '✨', '💕'][i % 4]}</i>`).join('');
  dots.innerHTML = STORY.map((_, i) => `<button type="button" aria-label="Page ${i + 1}" data-p="${i}"></button>`).join('');

  function show(i, dir = 1) {
    page = Math.max(0, Math.min(STORY.length - 1, i));
    const p = STORY[page], lines = p.text.split('\n');
    $('#stImg').src = p.image; $('#stCap').textContent = p.cap;
    $('#stTitle').textContent = p.title;
    $('#stLines').innerHTML = lines.map((l, k) => `<p style="--i:${k}">${esc(l)}</p>`).join('') +
      (p.button ? `<button class="btn btn-primary st-cta" type="button" id="stEnd" style="--i:${lines.length}">${esc(p.button)} <svg class="ic" aria-hidden="true"><use href="#i-arrow"/></svg></button>` : '');
    $('#stNum').textContent = `${page + 1} / ${STORY.length}`;
    $$('button', dots).forEach((b, k) => b.toggleAttribute('aria-current', k === page));
    $('#stPrev').disabled = page === 0; $('#stNext').disabled = page === STORY.length - 1;
    box.scrollTop = 0;
    book.classList.remove('turn', 'back'); void book.offsetWidth;
    book.classList.add('turn'); book.classList.toggle('back', dir < 0);
  }
  function open() {
    lastFocus = document.activeElement;
    STORY.forEach((p) => { const im = new Image(); im.decoding = 'async'; im.src = p.image; });
    box.hidden = false; void box.offsetWidth; box.classList.add('on');
    document.body.style.overflow = 'hidden';
    show(0); $('#stNext').focus({ preventScroll: true });
  }
  function close(toMemories) {
    box.classList.remove('on'); document.body.style.overflow = '';
    setTimeout(() => { box.hidden = true; }, reduce ? 0 : 600);
    if (toMemories) go('memories'); else if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  $('#storyBtn').addEventListener('click', open);
  $('#stPrev').addEventListener('click', () => show(page - 1, -1));
  $('#stNext').addEventListener('click', () => show(page + 1));
  dots.addEventListener('click', (e) => { const b = e.target.closest('[data-p]'); if (b) show(+b.dataset.p, +b.dataset.p < page ? -1 : 1); });
  box.addEventListener('click', (e) => { if (e.target.closest('#stEnd')) close(true); });
  addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'ArrowRight' && page < STORY.length - 1) show(page + 1);
    else if (e.key === 'ArrowLeft' && page > 0) show(page - 1, -1);
    else if (e.key === 'Escape') close(false);
  });
  let x0 = null;   // swipe left / right on phones
  box.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (dx < -50 && page < STORY.length - 1) show(page + 1);
    else if (dx > 50 && page > 0) show(page - 1, -1);
  });
}
initStory();

/* while she reads the home page, quietly fetch the gallery photos so they are already there when she arrives
   (after the page has loaded, or after 5 s at the latest on a slow connection) */
let photosFetched = false;
function fetchPhotos() {
  if (photosFetched) return; photosFetched = true;
  [...[...MEMORIES, ...US].map(cardSrc), FINAL.image].forEach((src) => { const im = new Image(); im.fetchPriority = 'low'; im.decoding = 'async'; im.src = src; });
}
addEventListener('load', () => later(fetchPhotos, 1500), { once: true });
later(fetchPhotos, 5000);
})();

/* moving wave under the header: two wave periods per half, so sliding by half loops seamlessly */
(() => {
  const hdr = document.querySelector('.site-header'); if (!hdr) return;
  hdr.insertAdjacentHTML('beforeend', '<div class="hdr-wave" aria-hidden="true"><svg viewBox="0 0 1200 16" preserveAspectRatio="none"><defs><linearGradient id="hdrWaveG" x1="0" x2="1"><stop offset="0" stop-color="#FF5C97"/><stop offset=".25" stop-color="#9D86E9"/><stop offset=".5" stop-color="#FF5C97"/><stop offset=".75" stop-color="#9D86E9"/><stop offset="1" stop-color="#FF5C97"/></linearGradient></defs><path d="M0 8Q75 0 150 8T300 8T450 8T600 8T750 8T900 8T1050 8T1200 8" fill="none" stroke="url(#hdrWaveG)" stroke-width="2"/></svg></div>');
})();
