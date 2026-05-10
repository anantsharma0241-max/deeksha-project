const noBtn = document.getElementById('no-btn');

const yesBtn = document.getElementById('yes-btn');

const question = document.getElementById('question');

const subText = document.getElementById('sub-text');

const yesContent = document.getElementById('yes-content');

const btnGroup = document.getElementById('btn-group');

const roastMessages = [

    "Error 404 😂",

    "Mummy ko bataun? 🤨",

    "Jhooth bol rahi ho 😜",

    "Yes daba do 😎",

    "Favorite toh main hi hoon 😂"
];

let roastIndex = 0;

noBtn.addEventListener('mouseover', () => {

    const x = Math.random() * 250;

    const y = Math.random() * 80;

    noBtn.style.left = `${x}px`;

    noBtn.style.top = `${y}px`;

    question.innerText = roastMessages[roastIndex];

    roastIndex =
        (roastIndex + 1) % roastMessages.length;
});

yesBtn.addEventListener('click', () => {

    question.style.display = "none";

    subText.style.display = "none";

    btnGroup.style.display = "none";

    yesContent.style.display = "block";
});

document
.getElementById('confirm-btn')
.addEventListener('click', () => {

    const choice =
        document.getElementById('treat-choice').value;

    const msg =
`Oye bhai, maine maan liya ki tu mera favorite hai ❤️ Treat "${choice}" pakki 😎`;

    window.open(
`https://wa.me/917249971152?text=${encodeURIComponent(msg)}`,
'_blank'
    );
});