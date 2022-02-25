let playerChoices = [];
let colourPalette = [];
let fontFamilyD3 = ['Lobster', 'Roboto', 'Satisfy', 'Oxygen'];
const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const day3 = document.getElementById('day3');
const reset = document.querySelector('#reset-button');
const startingGame = document.getElementById('start');
const startingId = document.getElementById('starting');
const end = document.getElementById('end');
let yourScore = 0;

const day1Story = `






Day 1








[PTeCo office. 8:30 AM]
Wednesday. It’s been a week since I was first hired by Peerless Technology Company - PTeCo for short - and I’ve just arrived at the office. Today’s my first day working with a dev team on a website, my first ever professional project. Honestly? I’m a little nervous about how it’ll turn out, but at the same time, I’m also pretty happy. This is the perfect time to show off what I can do. But enough talk. Here comes the project manager.

Alan: Good morning, Seth. Good to see you managed to get here. The snow’s pretty bad outside, after all.

That’s Alan Phillips, the guy in charge of the project. He’s pretty chill about our progress even though the deadline for deployment’s at the end of this week. 

Seth: Morning. Just show me to my desk and I’ll get to work.

Alan: Sure thing. Follow me.

Alan leads me to an empty desk and places some kind of name plaque on it. Guess it’s mine now.

Alan: Here’s your desk. We’ll be holding a meeting at 10 with the client, so I’ll call you over later when it’s time.

Seth: Got it. I’ll be ready.

Our goal is simple: we’re designing a new site for a tech-focused school in Winnipeg. My name is Seth Campbell, and this is the path of the web developer.

[The meeting. 10:00 AM]
Alan: All right, let’s start. Mr. Brooks, would you like to start us off?

The man across the table from me stands up. That’s Mr. Brooks, our client. 

Mr. Brooks: Here’s the mockup I made of what I want the site to look like.

He shows us what he’s done so far and all I can do is stare at it in horror. Who designed this, exactly? This looks like it was designed for kids, not high schoolers or parents who are interested in the program. It also seems like my sentiment is shared, as the guy next to me is giving Mr. Brooks a dirty look. That’s Sam Hendrix, who’s a senior developer that also got assigned to this project. We’ve met before during my orientation here, so I can say that I sort of look up to him.

Sam: I don’t think you understand how users would see the site.

I nod.

Seth: Agreed. 

Mr. Brooks: What’s the issue? All of these looked pretty good to me.

In a vacuum, maybe. But all together? No way.

Seth: Just look at the colour palette! The navigation! The font! Not to mention the name. What kind of name is “Brooks’s Cool College of Tech”?  Do you really expect us to make something this bad? 

Mr. Brooks: I gave you my idea. If you have any better ones, go right ahead and make them. But I’ll remind you that you only have 3 days. The Open House is on Monday.

Alan: No need to argue, everyone. Let’s just take this slow.

Seth: Alan, we don’t have the time to go slow!

And that’s Sam’s cue to cut in.

Sam: No, he’s right. If we rush this, we’ll only create more problems. Plus, most of these issues aren’t major. We can fix them in time. It’s just a matter of what changes we need to make.

Alan: Let’s start off with the colour palette then. That should be simple enough.

Sam: I think we should go with this.

Sam presents a simple blue and black colour scheme.

Mr. Brooks: A bit too simple.

Alan: Then how’s this?

Alan presents a sunset-like gradient.

Mr. Brooks: Too busy. This is a school site, not a music service!

Guess it’s up to me now to come up with something. I pick out some colours and show what I picked out to Mr. Brooks. He stares at my colour palette and looks back up at me.

Mr. Brooks: I’ll take it. Not too simple, not too complicated. It’s a little off from what I was thinking, but it’ll do.

Sam: The real question is if this looks good on the finished site.

Seth: Then let’s get to it. We won’t know how it looks until it’s actually done.

Alan: Meeting adjourned then. Mr. Brooks, thank you for your time.

Mr. Brooks: I expect good things.

Mr. Brooks then leaves the building. Now, time to get to work on making this site design actually look good!


`;


const day2Story = `







Day 2








[PTeCo office. 8:00 AM]
Thursday. The second day of working on this three-day website. I’ve written the code for the gallery and the submission form at the bottom for applicants. Not a bad start, but we’re still not done, which is why I’m here early.

Sam: Morning. You’re here early, Seth.

And you’re not?

Seth: Morning. I just thought I’d come in early to get some work done on some other parts of the site.

I then take a seat at my desk and pull up VS Code, but Sam is still turned towards me.

Seth: What is it?

Sam: There’s something I want you to handle. You pointed out yesterday that the navigation bar looked off, right?

Seth: That I did. Are you asking me to handle it?

Sam: Got it in one. I just want to see your skills at work with CSS. I’ll handle the scripting today, so just go ahead. 

Seth: All right. Here goes nothing…

It’s at this point that I start hammering away at my keyboard. I wonder what this will look like?

[5:00 PM.]
It’s now the end of the day. I got quite a bit done, so it’s time for me to get my work checked out before I push to my branch. Sam’s just about to leave, so I stop him before he passes my desk.

Seth: Sam, do you have a minute?

He stops.

Sam: Sure. What’s the deal?

Seth: I just need you to look over what I’ve done today.

Sam: All right. Show me what you’ve done today.

I show him what I’ve done and his expression is hard to determine. Nervously, I turn away, but he puts a hand on my shoulder to reassure me.

Sam: We’ve still got a day, so don’t worry too much. We can still fix any problems before Monday, even if it doesn’t look right by the end.

Seth: Got it. I’ll see you tomorrow then?

Sam: See you then.

His advice lingers in my head as he departs from the office. I leave too not long after, pushing my progress to my branch of the repository. One day’s left. I’ll be sure to make it count.

`;

const day3Story = `







Day 3








[PTeCo Office. 12:00 PM]
Friday. The final day we get to work on this is today. We’ve been doing our best for the past two days getting everything working, but this is our final stretch. I’ve mostly completed what I was assigned to do, but something’s still nagging at me: the list of things I noticed when Mr. Brooks gave us the mockup. We’ve fixed the colour palette choice. We’ve fixed the navbar. We’ve even changed that goofy name to ‘Brooks Technology Collegiate’, which is a little bit better than “Brook’s Cool College of Tech”. But there’s something still missing… Ah, here comes Alan.

Alan: Hey. Seth, can we talk?

Seth: Sure. What’s this about?

He shows me a picture of what the site looks like right now.

Alan: Can you see a problem here? We’ve handled most of the obvious problems, but there’s one other problem that sticks out.

THAT’S what was bugging me! I knew I forgot something!

Seth: It’s the font, isn’t it?

Alan: That’s right. Mr. Brooks is coming in again today to see what we have at 2. This is the final piece of the puzzle. I’ll leave it to you to decide what font you want to use here. However, you shouldn’t use anything weird like Wingdings.

Seth: That should go without saying. This is a professional site, after all.

Now, let’s see what fonts we can use… Ah. I type in the name of the font into the CSS and refresh the page.

Seth: Here’s the font I think would work.

I push the changes to my Github branch and Alan merges it into the main branch.

Alan: Now, let’s get ready for the presentation.



`;
let buttonAudio = new Audio('Audio/ButtonAudio.wav');
let backgroundAudio = new Audio('Audio/BackgroundAudio.mp3');

startingGame.addEventListener('click', function() {
    buttonAudio.play();
    backgroundAudio.loop = true;
    backgroundAudio.play();
    backgroundAudio.volume = 0.2;
    nextScene();
});

function Day1() {
    const buttonChoice = document.getElementsByClassName('buttonChoice');
    const gridcss = document.getElementsByClassName('gridcss');
    if (playerChoices.length == 0) {
        changingColour();
    }
    for (const i of buttonChoice) {

        i.addEventListener('click', function(event) {
            if (i.value == 1) {
                playerChoices.push(i.value);
                colourPalette.push(gridcss[0].style.backgroundColor);
                buttonAudio.play();
                yourScore += Math.floor(Math.random() * 11);
                changingColour();
                nextScene();
                return;
            }
            if (i.value == 2) {
                playerChoices.push(i.value);
                colourPalette.push(gridcss[1].style.backgroundColor);
                buttonAudio.play();
                yourScore += Math.floor(Math.random() * 11);
                changingColour();
                nextScene();
                return;
            }
            if (i.value == 3) {
                playerChoices.push(i.value);
                colourPalette.push(gridcss[2].style.backgroundColor);
                buttonAudio.play();
                yourScore += Math.floor(Math.random() * 11);
                changingColour();
                nextScene();
                return;

            }
            if (i.value == 4) {
                playerChoices.push(i.value);
                colourPalette.push(gridcss[3].style.backgroundColor);
                buttonAudio.play();
                yourScore += Math.floor(Math.random() * 11);
                changingColour();
                nextScene();

                return;

            }
        })

    }



    function generateColour() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return '#' + randomColor;
    }

    function changingColour() {
        for (const i of gridcss) {
            i.style.backgroundColor = generateColour();
        }
    }
}

function Day2() {
    const buttonChoice = document.getElementsByClassName('buttonChoiceD2');
    const gridcss = document.getElementsByClassName('gridcssD2');
    for (const i of buttonChoice) {

        i.addEventListener('click', function(event) {
            if (i.value == 1) {
                playerChoices.push(i.value);
                buttonAudio.play();
                yourScore += 30;
                nextScene();

                return;
            }
            if (i.value == 2) {
                playerChoices.push(i.value);
                buttonAudio.play();
                yourScore += 0;
                nextScene();
                return;
            }
            if (i.value == 3) {
                playerChoices.push(i.value);
                buttonAudio.play();
                yourScore += 5;
                nextScene();
                return;

            }
            if (i.value == 4) {
                playerChoices.push(i.value);
                buttonAudio.play();
                yourScore += 20;
                nextScene();
                return;
            }
        })

    }
}

function Day3() {
    const buttonChoice = document.getElementsByClassName('buttonChoiceD3');
    const gridcss = document.getElementsByClassName('gridcssD3');
    for (const i of buttonChoice) {

        i.addEventListener('click', function(event) {
            if (i.value == 1) {
                playerChoices.push(i.value);
                buttonAudio.play();
                yourScore += 0;
                nextScene();
                return;

            }
            if (i.value == 2) {
                playerChoices.push(i.value);
                buttonAudio.play();
                yourScore += 30;
                nextScene();
                return;
            }
            if (i.value == 3) {
                playerChoices.push(i.value);
                buttonAudio.play();
                yourScore += 0;
                nextScene();
                return;
            }
            if (i.value == 4) {
                playerChoices.push(i.value);
                buttonAudio.play();
                yourScore += 30;
                nextScene();

                return;
            }
        })

    }
}

function constructorEndScene() {
    document.body.style.backgroundColor = colourPalette[0];
    const nav1End = document.getElementById('nav1End');
    const nav2End = document.getElementById('nav2End');
    const nav3End = document.getElementById('nav3End');
    const nav4End = document.getElementById('nav4End');



    let playersInputNavbar;
    switch (playerChoices[4]) {
        case '1':
            navbarColourSwitcher(nav1End);
            break;
        case '2':
            nav2End.style.display = 'flex';
            nav2End.style.background = colourPalette[1];
            nav2End.childNodes[3].style.color = colourPalette[3];
            nav2End.childNodes[1].childNodes[1].style.color = colourPalette[3];
            nav2End.childNodes[1].childNodes[3].style.color = colourPalette[3];
            nav2End.childNodes[1].childNodes[5].style.color = colourPalette[3];
            nav2End.childNodes[1].childNodes[7].style.color = colourPalette[3];
            nav2End.childNodes[5].style.color = colourPalette[3];

            break;
        case '3':
            navbarColourSwitcher(nav3End);

            break;
        default:
            navbarColourSwitcher(nav4End);

    }

    switch (playerChoices[5]) {
        case '1':
            fontFamilySetters(0, nav1End);
            nav2End.childNodes[5].style.fontFamily = fontFamilyD3[0];
            nav2End.childNodes[1].childNodes[1].style.fontFamily = fontFamilyD3[0];
            nav2End.childNodes[1].childNodes[3].style.fontFamily = fontFamilyD3[0];
            nav2End.childNodes[1].childNodes[5].style.fontFamily = fontFamilyD3[0];
            nav2End.childNodes[1].childNodes[7].style.fontFamily = fontFamilyD3[0];
            nav2End.childNodes[3].style.fontFamily = fontFamilyD3[0];
            fontFamilySetters(0, nav3End);
            fontFamilySetters(0, nav4End);
            break;
        case '2':
            fontFamilySetters(1, nav1End);
            nav2End.childNodes[5].style.fontFamily = fontFamilyD3[1];
            nav2End.childNodes[1].childNodes[1].style.fontFamily = fontFamilyD3[1];
            nav2End.childNodes[1].childNodes[3].style.fontFamily = fontFamilyD3[1];
            nav2End.childNodes[1].childNodes[5].style.fontFamily = fontFamilyD3[1];
            nav2End.childNodes[1].childNodes[7].style.fontFamily = fontFamilyD3[1];
            nav2End.childNodes[3].style.fontFamily = fontFamilyD3[1];
            fontFamilySetters(1, nav3End);
            fontFamilySetters(1, nav4End);
            break;
        case '3':
            fontFamilySetters(2, nav1End);
            nav2End.childNodes[5].style.fontFamily = fontFamilyD3[2];
            nav2End.childNodes[1].childNodes[1].style.fontFamily = fontFamilyD3[2];
            nav2End.childNodes[1].childNodes[3].style.fontFamily = fontFamilyD3[2];
            nav2End.childNodes[1].childNodes[5].style.fontFamily = fontFamilyD3[2];
            nav2End.childNodes[1].childNodes[7].style.fontFamily = fontFamilyD3[2];
            nav2End.childNodes[3].style.fontFamily = fontFamilyD3[2];
            fontFamilySetters(2, nav3End);
            fontFamilySetters(2, nav4End);
            break;
        default:
            fontFamilySetters(3, nav1End);
            nav2End.childNodes[5].style.fontFamily = fontFamilyD3[3];
            nav2End.childNodes[1].childNodes[1].style.fontFamily = fontFamilyD3[3];
            nav2End.childNodes[1].childNodes[3].style.fontFamily = fontFamilyD3[3];
            nav2End.childNodes[1].childNodes[5].style.fontFamily = fontFamilyD3[3];
            nav2End.childNodes[1].childNodes[7].style.fontFamily = fontFamilyD3[3];
            nav2End.childNodes[3].style.fontFamily = fontFamilyD3[3];
            fontFamilySetters(3, nav3End);
            fontFamilySetters(3, nav4End);
    }

    function navbarColourSwitcher(nav) {
        nav.style.display = 'flex';
        nav.style.background = colourPalette[1];
        nav.childNodes[1].style.color = colourPalette[3];
        nav.childNodes[3].childNodes[1].style.color = colourPalette[3];
        nav.childNodes[3].childNodes[3].style.color = colourPalette[3];
        nav.childNodes[3].childNodes[5].style.color = colourPalette[3];
        nav.childNodes[3].childNodes[7].style.color = colourPalette[3];
        nav.childNodes[5].style.color = colourPalette[3];
        nav.childNodes[5].style.background = colourPalette[2];
    }

    function fontFamilySetters(i, nav) {
        nav.childNodes[1].style.fontFamily = fontFamilyD3[i];
        nav.childNodes[3].childNodes[1].style.fontFamily = fontFamilyD3[i];
        nav.childNodes[3].childNodes[3].style.fontFamily = fontFamilyD3[i];
        nav.childNodes[3].childNodes[5].style.fontFamily = fontFamilyD3[i];
        nav.childNodes[3].childNodes[7].style.fontFamily = fontFamilyD3[i];
        nav.childNodes[5].style.fontFamily = fontFamilyD3[i];
    }
}


function nextScene() {
    if (playerChoices.length <= 3) {
        document.getElementById('storytext').innerText = day1Story;
        startingId.style.display = 'none';
        day1.style.display = 'block';
        day2.style.display = 'none';
        day3.style.display = 'none';
        end.style.display = 'none';
    }
    if (playerChoices.length == 4) {
        document.getElementById('storytext').innerText = day2Story;
        document.getElementById('storytext').scrollTop = 0;

        startingId.style.display = 'none';
        day1.style.display = 'none';
        day2.style.display = 'block';
        day3.style.display = 'none';
        end.style.display = 'none';
    }
    if (playerChoices.length == 5) {
        document.getElementById('storytext').innerText = day3Story;
        document.getElementById('storytext').scrollTop = 0;
        startingId.style.display = 'none';
        day1.style.display = 'none';
        day2.style.display = 'none';
        day3.style.display = 'block';
        end.style.display = 'none';
    }
    if (playerChoices.length == 6) {
        startingId.style.display = 'none';
        day1.style.display = 'none';
        day2.style.display = 'none';
        day3.style.display = 'none';
        end.style.display = 'block';
        console.log(yourScore);
        const goodEnd = `






Good Ending


Your score is ${yourScore}



Mr. Brooks’ presentation went off without a hitch and applicants were plentiful. Word of mouth praised the quality of the school’s website, becoming a shining example of professional sites for many years to come. Many of the students at the school were hired by PTeCo later on and almost all of their clients could attest to the quality of their work. Alan managed many of them and he maintained a strong friendship with all of the others involved, working together for multiple other projects in the many years after. Sam got promoted to the position of project manager and led many teams to create numerous other phenomenal projects. As for Seth, he stayed with PTeCo for several years, working on more websites as a full-stack developer. The best part? The new hires looked to him like he had to Sam all those years ago. In the end, the path of the web developer was one that Seth would tread on the red carpet of the Internet’s theatre.`





        const badAndGood = `






Mediocre Ending


Your score is ${yourScore}






Mr. Brooks managed to get plenty of new applicants for his school, but the school’s website became a source of much discussion for the web development classes when they began. Was it intentionally designed with some obvious mistakes as a way of showing what not to do? Was it an invitation for a redesign? Or were these mistakes really just that: mistakes? These debates carry on to this day. Alan and Sam continued working with PTeCo for many more years before retiring, but Seth left the company a year after the project. He then became a teacher at the Brooks Technology Collegiate as a web development instructor and helped ensure that nobody else repeated his mistakes. Why? Because even after the encouragement from Sam and Alan, it wasn’t enough to shake him out of his melancholy for long. None of the websites he made afterwards satisfied him, with even the slightest mistakes throwing him off until he couldn’t take it anymore, no matter how much support or encouragement he was given. In the end, the path of the web developer was one that Seth would cease to tread.`


        const justBad = `







Bad Ending


Your score is ${yourScore}







Mr. Brooks’ presentation went well, but the website for the Brooks Technology Collegiate became famous for its laughable design, joining the likes of the Yale School of Art site on the list of websites to redesign for school projects. Alan was demoted, the embarrassing launch of the site becoming a permanent black mark on his record, but he never held it against. Sam quit his job at PTeCo, becoming a web development teacher at the college and helping his students learn from Seth’s mistakes. And Seth? He continued working at PTeCo, but he never touched another CSS file again, instead becoming the go-to programmer for the backend development of any project he took on. In the end, the path of the web developer was one that Seth would tread behind the stage of the Internet.`

        if (yourScore >= 80) {
            document.getElementById('storytext').innerText = goodEnd;
            document.getElementById('storytext').scrollTop = 0;
        } else if (yourScore > 40 && yourScore < 80) {
            document.getElementById('storytext').innerText = badAndGood;
            document.getElementById('storytext').scrollTop = 0;
        } else {
            document.getElementById('storytext').innerText = justBad;
            document.getElementById('storytext').scrollTop = 0;
        }
        constructorEndScene();
    }
    setTimeout(function () {
        reset.classList.remove('hidden');
    }, 15000);
}

Day1();
Day2();
Day3();



window.setInterval(function() {
    let elem = document.getElementById('storytext');
    elem.scrollTop += 1
}, 50);

reset.addEventListener('click', function() {
    playerChoices = [];
    colourPalette = [];
    yourScore = 0;
    nav1End.style.display = 'none';
    nav2End.style.display = 'none';
    nav3End.style.display = 'none';
    nav4End.style.display = 'none';
    reset.classList.add('hidden');
    nextScene();
    
});