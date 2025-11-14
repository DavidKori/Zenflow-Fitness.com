//ZENFLOW YOGA STUDIO 

const page =document.body.dataset.page;

if (page === 'index') {


    const headerSection = document.getElementById('header');
    const mainSection = document.getElementById('hero');
    const classesSection = document.querySelector(".classes");
    const instructorsSection = document.querySelector('.instructors');
    const contactSection = document.querySelector('.contact');
    const footerSection = document.getElementById('footer');


    const lecturersFirstName = [
                    'David ',
                    'Liam ',
                    'Sofia ',
                    'Ethan ',
                    'Maya ',
                    'Noah '
    ]
    const lecturersLastName = [
                    'Kori',
                    'Patel',
                    'Martinez',
                    'Wallace',
                    'Thompson',
                    'Brooks'
    ];
    const lecturerPosition = [
                    'Head Instructor & Founder',
                    'Strength & Core Specialist',
                    'Restorative & Yin Yoga Instructor',
                    'Meditation & Mindfulness Coach',
                    'Flexibility & Flow Instructor',
                    'Balance & Mobility Coach'
    ];

    const lecturesImages = [
                    './david.jpg',
                    'https://images.pexels.com/photos/15901955/pexels-photo-15901955.jpeg',
                    'https://images.pexels.com/photos/28886583/pexels-photo-28886583.jpeg',
                    'https://images.pexels.com/photos/32407923/pexels-photo-32407923.jpeg',
                    'https://images.pexels.com/photos/18885850/pexels-photo-18885850.jpeg',
                    'https://images.pexels.com/photos/32972623/pexels-photo-32972623.jpeg'
    ];

    const lecturerDescription = [
                    "With over 10 years of teaching experience,Ava specializes in Hatha and Vinyasa yoga. His calm energy and attention to alignment helpstudents build both strength and mindfulness.",
                    'Liam blends yoga with functional strength training, focusing on posture correction and endurance. His sessions are perfect for students looking to balance flexibility with power.',
                    'Sofia’s classes focus on relaxation, breathwork, and deep tissue release. She helps students unwind from stress through gentle movements and mindfulness.',
                    'Ethan guides students through meditation, pranayama, and stress management practices. Her sessions emphasize inner stillness and emotional balance.',
                    'Maya’s vibrant and creative sequences challenge both the body and mind. She’s known for her uplifting energy and focus on graceful transitions.',
                    'Noah combines yoga, balance drills, and mobility work to improve coordination and stability. His classes are great for athletes and beginners alike.'
    ];


         let selectedDay = undefined;
        const dayContainer = document.getElementById('day');
        const dayBtn = document.querySelector('.daybtn');

        const days = ['monday', 'tuesday', 'wednesday', 
                        'thursday','friday', 'saturday'];
        const times = ['8:00 AM - 10:00 AM', 
                        '10:00 AM - 12:00 NOON',
                        '1:00 PM - 3:00 PM',
                        '3:00 PM - 5:00 PM'];
        const lessons = [
                    'Foundations of Yoga Poses (Asanas)',
                    'Pranayama (Breathing Techniques)',
                    'Mindfulness and Meditation for Beginners',
                    'Sun Salutation (Surya Namaskar) Flow',

                    'Yoga for Flexibility and Mobility',
                    'Restorative and Yin Yoga',
                    'Balance and Core Stability in Yoga',
                    'Chakras and Energy Alignment',

                    'Strength Training Fundamentals',
                    'HIIT (High-Intensity Interval Training)',
                    'Functional Mobility and Movement',
                    'Stretching and Recovery Techniques',

                    'Nutrition Basics for Energy and Recovery',
                    'Building a Sustainable Workout Routine',
                    'Mind-Body Connection in Fitness',
                    'Stress Relief Through Movement',

                    'Yoga for Stress and Anxiety Relief',
                    'Morning Flow for Energy & Focus',
                    'Partner Yoga & Connection',
                    'Evening Yoga for Deep Sleep',

                    'Yoga for Back Pain & Posture Correction',
                    'Pilates Fusion: Core & Control',
                    'Balance & Coordination Training',
                    'Mindful Movement & Body Awareness'
        ];

        const classes = {
                day:"",
                sessions:{
                    morning:{
                        time:`${times[0]}`,
                        lesson: "",
                        lecturer: "",
                        img: ""
                    },
                    midMorning:{
                        time:`${times[1]}`,
                        lesson: "",
                        lecturer: "",
                        img: ""
                    },
                    afternoon:{
                        time:`${times[2]}`,
                        lesson: "",
                        lecturer: "",
                        img: ""
                    },
                    evening:{
                        time:`${times[3]}`,
                        lesson: "",
                        lecturer: "",
                        img: ""
                    }
                }
                
            };
        const classImages = [
            './morningyoga.png',
            './midmorningyoga.png',
            './afternoonyoga.jpeg',
            './eveningyoga.png'
        ];
    const facts = [
        "Yoga was originally practiced by ancient warriors to stay strong and focused.",
        "Just 10 minutes of walking can boost your mood and increase energy levels.",
        "Planks work more than 20 muscles at the same time, including your core, shoulders, and glutes.",
        "Laughing for 10–15 minutes can burn up to 40 calories.",
        "Flexibility can improve at any age — even people over 70 can gain range of motion with regular stretching.",
        "Listening to music while exercising can increase endurance by up to 15%.",
        "Yoga helps activate the parasympathetic nervous system, which reduces stress and improves digestion.",
        "Strength training boosts metabolism even hours after the workout is done.",
        "Just smelling peppermint can make you feel more energized during workouts.",
        "Doing balance exercises can improve brain function and coordination.",
        "You burn more calories sleeping than watching TV, because your brain is more active during sleep.",
        "Regular yoga practice increases lung capacity and improves breathing efficiency.",
        "Walking backward can strengthen different muscle groups and improve balance.",
        "The human body has over 650 muscles, and most are active during everyday movement.",
        "Exercise can increase your hippocampus size — the part of the brain responsible for memory.",
        "Yoga inversions like downward dog help improve circulation and reduce fatigue.",
        "Jumping rope burns more calories per minute than running.",
        "Sitting for long periods can weaken glutes, leading to posture problems and back pain.",
        "Stretching after a workout can reduce soreness and improve recovery speed.",
        "Even light exercise releases endorphins, which act as natural painkillers and mood boosters."
        ];


   /*NO.1*/displayClasses();
   /*NO.3*/lightDarkMode()
   /*NO.3*/ search();
   /*NO.4*/ filter();
   /*NO.5*/ displayInstructors;
   /*NO.6*/ displayFact();
   /*NO.7*/ showFact();
   /*NO.8*/ PrevInstructor();
   /*NO.9*/ nextInstructor();
   /*NO.10*/ showInstructorContact();
   /*NO.11*/ sendAMessage();
          // HEADER SECTION
    // darkMode functionality
    function lightDarkMode () {

        const lightDarkBtn = document.querySelector('.parent');
        const childBtn = document.querySelector(".child");
        const modeQuote = document.querySelector('.mode');
        const lists = document.querySelectorAll('li');
        const buttons = document.querySelectorAll('button');
        const backDropFilter = document.querySelector('.backDropFilter');
        const lotusImg = document.querySelector("img[alt='Zenflow']");
        const whiteTextOnDarkmode = document.querySelectorAll('.whiteOnDarkmode');
        const instructor = document.querySelector('.instructor1');
        const blackBackgroundOnDarkMode = [document.querySelector('.description', '#fanFact'), document.querySelector('#fanFact')];
        const instructorName = document.querySelector('.name')
        const contactForm = document.querySelector('form');
        const formInputs = document.querySelectorAll('input');
        const formTextArea = document.querySelectorAll('textarea');
        const formLabels = document.querySelectorAll('label');
        const whiteTextonDarkMode = document.querySelectorAll('.white')
        const tradeMarks = document.querySelector('.tradeMarks');
        const koriDevifys = document.querySelector('.KoriDevifys');
        const classesDiv = document.querySelectorAll('.session');
        const contactInstructorfunctionality = document.getElementById('contactInstructorfunctionality');

        



        try {
            lightDarkBtn.addEventListener("click", () => {
                if (childBtn.style.justifySelf !== "end") {
                    
                    childBtn.style.justifySelf = "end";
                     childBtn.style.border = '4px solid white';
                      childBtn.style.backgroundColor = 'white';
                    modeQuote.textContent = '🌙 Dark Mode';
                    document.body.classList.add('darkMode');
                    lightDarkBtn.style.border = '4px solid rgba(255, 255, 255, 1)';
                    lightDarkBtn.style.backgroundColor = 'rgba(7, 7, 7, 0.88)';
                    headerSection.style.backgroundColor = 'hsla(0, 2%, 8%, 0.80)';
                    lists.forEach( (list) => {list.style.backgroundColor = 'rgba(171, 166, 166, 0.56)';
                                              list.style.color = 'white';
                    })
                    buttons.forEach((button) => {
                                                button.classList.add('darkModeBtnHover')
                    })
                    footerSection.style.backgroundColor = 'rgba(43, 40, 40, 0.8)';
                    footerSection.style.color = 'rgba(238, 233, 233, 0.76)';
                    backDropFilter.style.backgroundColor= "rgba(62, 62, 62, 0.7)";
                    backDropFilter.style.backdropFilter= "blur(3px)";
                    lotusImg.style.opacity ='.6';
                    whiteTextOnDarkmode.forEach((text) => text.style.color = "rgba(255, 255, 255, 0.69)");
                    instructor.style.background = 'radial-gradient(circle at center, hsla(0, 0%, 50%, 1.00), hsla(0, 0%, 50%, 1.00), hsla(60, 100%, 30%, 1.00))';
                    blackBackgroundOnDarkMode.forEach(element => element.style.background = 'radial-gradient(ellipse at center, rgba(137, 43, 226, 0.525), hsl(0,0%,50%), transparent)')
                    instructorName.style.color = 'hsla(110, 92%, 49%, 1.00)';
                    contactForm.style.backgroundColor = 'hsla(0, 3%, 60%, 0.89)';
                    contactForm.style.color = 'hsla(0, 10%, 86%, 0.89)';
                    formInputs.forEach((input) => {input.classList.add('darkModeform')});
                    formTextArea.forEach((input) => {input.classList.add('darkModeform')});
                    formLabels.forEach((label) => label.style.color = 'rgba(255, 255, 255, 0.84)')
                    whiteTextonDarkMode.forEach((text) => text.classList.add('darkModeWhiteText'))
                    tradeMarks.classList.add('darkModeWhiteText');
                    koriDevifys.classList.add('darkModeWhiteText');
                    classesDiv.forEach(div => {div.classList.add('darkMode')});
                    contactInstructorfunctionality.classList.add('darkMode');


                }
                else {
                    childBtn.style.justifySelf = "start";
                     childBtn.style.border = '';
                      childBtn.style.backgroundColor = ''
                    modeQuote.textContent = '☀ Light Mode';
                    document.body.classList.remove('darkMode');
                     lightDarkBtn.style.border = "";
                     lightDarkBtn.style.backgroundColor = '';
                    headerSection.style.backgroundColor = '';
                     lists.forEach( (list) => { list.style.backgroundColor = '';
                        list.style.color = '';
                        
                     });
                    buttons.forEach((button) => {
                                                button.classList.remove('darkModeBtnHover');
                    })
                    footerSection.style.backgroundColor = '';
                    footerSection.style.color = '';
                    backDropFilter.style.backgroundColor= "";
                    backDropFilter.style.backdropFilter= "";
                    lotusImg.style.opacity ='';
                    whiteTextOnDarkmode.forEach((text) => text.style.color = "");
                    instructor.style.background = '';
                    blackBackgroundOnDarkMode.forEach(element => element.style.background = '');
                    instructorName.style.color = '';
                    contactForm.style.backgroundColor = "";
                    contactForm.style.color = '';
                    formInputs.forEach(input => input.style.color = '')
                    formInputs.forEach((input) => {input.classList.remove('darkModeform')});
                    formTextArea.forEach((input) => {input.classList.remove('darkModeform')});
                    formLabels.forEach((label) => label.style.color = '');
                    whiteTextonDarkMode.forEach((text) => text.classList.remove('darkModeWhiteText'))
                    tradeMarks.classList.remove('darkModeWhiteText');
                    koriDevifys.classList.remove('darkModeWhiteText');
                    classesDiv.forEach(div => {div.classList.remove('darkMode')});
                    contactInstructorfunctionality.classList.remove('darkMode');


                }
            });

        }
        catch(error){
            console.error(error);
        };
    };
    // MAIN SECTION
    // CLASSES SECTION
    function displayClasses () {
 
        try {


            const selectedDayContaiber = document.createElement('h2');
            selectedDayContaiber.classList.add('selectedDay');
            dayContainer.append(selectedDayContaiber);

            const classesSection = document.createElement('div');
            classesSection.classList.add('sessions');
            classesSection.id = 'mondayClasses';
            dayContainer.append(classesSection);

            //morning

            const morningClass = document.createElement('div');
            morningClass.id = 'morning';
            morningClass.classList.add('session');
            classesSection.append(morningClass);

            const classTime1 = document.createElement('p');
            classTime1.classList.add('time');
            classTime1.classList.add('time1');
            morningClass.append(classTime1)

            const lesson1 = document.createElement('h3');
            lesson1.classList.add('lesson');
            lesson1.classList.add('lesson1');
            morningClass.append(lesson1);

            const lecturer1 = document.createElement('p');
            lecturer1.classList.add('lecturer');
            lecturer1.classList.add('lecturer1');
            morningClass.append(lecturer1);

            const yogaImage1 = document.createElement('img');
            yogaImage1.alt = 'morning';
            yogaImage1.classList.add('img1');
            morningClass.append(yogaImage1);

            const joinBtn1 = document.createElement('button');
            joinBtn1.classList.add('join');
            joinBtn1.id = 'join';
            joinBtn1.textContent = 'Join';
            morningClass.append(joinBtn1);

            //midmorning

            const midMorningClass = document.createElement('div');
            midMorningClass.id = 'morning';
            midMorningClass.classList.add('session');
            classesSection.append(midMorningClass);

            const classTime2= document.createElement('p');
            classTime2.classList.add('time');
            classTime2.classList.add('time2');
            midMorningClass.append(classTime2)

            const lesson2 = document.createElement('h3');
            lesson2.classList.add('lesson');
            lesson2.classList.add('lesson2');
            midMorningClass.append(lesson2);

            const lecturer2 = document.createElement('p');
            lecturer2.classList.add('lecturer');
            lecturer2.classList.add('lecturer2');
            midMorningClass.append(lecturer2);

            const yogaImage2 = document.createElement('img');
            yogaImage2.alt = 'morning';
            yogaImage2.classList.add('img2');
            midMorningClass.append(yogaImage2);

            const joinBtn2 = document.createElement('button');
            joinBtn2.classList.add('join');
            joinBtn2.id = 'join';
            joinBtn2.textContent = 'Join';
            midMorningClass.append(joinBtn2);

            //afternoon

            const afternoonClass = document.createElement('div');
            afternoonClass.id = 'morning';
            afternoonClass.classList.add('session');
            classesSection.append(afternoonClass);

            const classTime3 = document.createElement('p');
            classTime3.classList.add('time');
            classTime3.classList.add('time3');
            afternoonClass.append(classTime3)

            const lesson3 = document.createElement('h3');
            lesson3.classList.add('lesson');
            lesson3.classList.add('lesson3');
            afternoonClass.append(lesson3);

            const lecturer3 = document.createElement('p');
            lecturer3.classList.add('lecturer');
            lecturer3.classList.add('lecturer3');
            afternoonClass.append(lecturer3);

            const yogaImage3 = document.createElement('img');
            yogaImage3.alt = 'morning';
            yogaImage3.classList.add('img3');
            afternoonClass.append(yogaImage3);

            const joinBtn3 = document.createElement('button');
            joinBtn3.classList.add('join');
            joinBtn3.id = 'join';
            joinBtn3.textContent = 'Join';
            afternoonClass.append(joinBtn3);

            //evening

            const eveningClass = document.createElement('div');
            eveningClass.id = 'morning';
            eveningClass.classList.add('session');
            classesSection.append(eveningClass);

            const classTime4 = document.createElement('p');
            classTime4.classList.add('time');
            classTime4.classList.add('time4');
            eveningClass.append(classTime4)

            const lesson4 = document.createElement('h3');
            lesson4.classList.add('lesson');
            lesson4.classList.add('lesson4');
            eveningClass.append(lesson4);

            const lecturer4 = document.createElement('p');
            lecturer4.classList.add('lecturer');
            lecturer4.classList.add('lecturer4');
            eveningClass.append(lecturer4);

            const yogaImage4 = document.createElement('img');
            yogaImage4.alt = 'morning';
            yogaImage4.classList.add('img4');
            eveningClass.append(yogaImage4);

            const joinBtn4 = document.createElement('button');
            joinBtn4.classList.add('join');
            joinBtn4.id = 'join';
            joinBtn4.textContent = 'Join';
            eveningClass.append(joinBtn4);

            const newError = document.createElement('p');
            newError.classList.add('sortError');
            const classSessions = document.querySelector('.classSessions');
            classSessions.prepend(newError);


           
            dayBtn.addEventListener('click', (event) => {

                selectedDay = event.target.id;
                dayContainer.classList.contains('hide') ?
                    dayContainer.classList.remove('hide') :
                    dayContainer.classList.add('hide');
                
                const random = Math.floor(Math.random()*6);
                const random1 = Math.floor(Math.random()*6);
                const random2 = Math.floor(Math.random()*6);
                const random3 = Math.floor(Math.random()*6);
                  
                switch (event.target.id) {
                    case 'monday': {
                        
                        selectedDayContaiber.textContent = `${selectedDay}`;

                        classTime1.textContent = `${times[0]}`;
                        lesson1.textContent = `${lessons[0]}`;
                        lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                        yogaImage1.src = `${classImages[0]}`;

                        classTime2.textContent = `${times[1]}`;
                        lesson2.textContent = `${lessons[1]}`;
                        lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                        yogaImage2.src = `${classImages[1]}`;

                        classTime3.textContent = `${times[2]}`;
                        lesson3.textContent = `${lessons[2]}`;
                        lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                        yogaImage3.src = `${classImages[2]}`;

                        classTime4.textContent = `${times[3]}`;
                        lesson4.textContent = `${lessons[3]}`;
                        lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                        yogaImage4.src = `${classImages[3]}`;



                    };
                    break;
                    case 'tuesday': {
                         
                        selectedDayContaiber.textContent = `${selectedDay}`

                        classTime1.textContent = `${times[0]}`;
                        lesson1.textContent = `${lessons[4]}`;
                        lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                        yogaImage1.src = `${classImages[0]}`;

                        classTime2.textContent = `${times[1]}`;
                        lesson2.textContent = `${lessons[5]}`;
                        lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                        yogaImage2.src = `${classImages[1]}`;

                        classTime3.textContent = `${times[2]}`;
                        lesson3.textContent = `${lessons[6]}`;
                        lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                        yogaImage3.src = `${classImages[2]}`;

                        classTime4.textContent = `${times[3]}`;
                        lesson4.textContent = `${lessons[7]}`;
                        lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                        yogaImage4.src = `${classImages[3]}`;

                    };
                    break;
                    case 'wednesday': {
                         
                         selectedDayContaiber.textContent = `${selectedDay}`

                        classTime1.textContent = `${times[0]}`;
                        lesson1.textContent = `${lessons[8]}`;
                        lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                        yogaImage1.src = `${classImages[0]}`;

                        classTime2.textContent = `${times[1]}`;
                        lesson2.textContent = `${lessons[9]}`;
                        lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                        yogaImage2.src = `${classImages[1]}`;

                        classTime3.textContent = `${times[2]}`;
                        lesson3.textContent = `${lessons[10]}`;
                        lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                        yogaImage3.src = `${classImages[2]}`;

                        classTime4.textContent = `${times[3]}`;
                        lesson4.textContent = `${lessons[11]}`;
                        lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                        yogaImage4.src = `${classImages[3]}`;
                    };
                    break;
                    case 'thursday': {
                         
                         selectedDayContaiber.textContent = `${selectedDay}`

                        classTime1.textContent = `${times[0]}`;
                        lesson1.textContent = `${lessons[12]}`;
                        lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                        yogaImage1.src = `${classImages[0]}`;

                        classTime2.textContent = `${times[1]}`;
                        lesson2.textContent = `${lessons[13]}`;
                        lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                        yogaImage2.src = `${classImages[1]}`;

                        classTime3.textContent = `${times[2]}`;
                        lesson3.textContent = `${lessons[14]}`;
                        lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                        yogaImage3.src = `${classImages[2]}`;

                        classTime4.textContent = `${times[3]}`;
                        lesson4.textContent = `${lessons[15]}`;
                        lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                        yogaImage4.src = `${classImages[3]}`;
                    };
                    break;
                    case 'friday': {
                         
                        selectedDayContaiber.textContent = `${selectedDay}`

                        classTime1.textContent = `${times[0]}`;
                        lesson1.textContent = `${lessons[16]}`;
                        lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                        yogaImage1.src = `${classImages[0]}`;

                        classTime2.textContent = `${times[1]}`;
                        lesson2.textContent = `${lessons[17]}`;
                        lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                        yogaImage2.src = `${classImages[1]}`;

                        classTime3.textContent = `${times[2]}`;
                        lesson3.textContent = `${lessons[18]}`;
                        lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                        yogaImage3.src = `${classImages[2]}`;

                        classTime4.textContent = `${times[3]}`;
                        lesson4.textContent = `${lessons[19]}`;
                        lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                        yogaImage4.src = `${classImages[3]}`;
                    };
                    break;
                    case 'saturday': {
                         
                        selectedDayContaiber.textContent = `${selectedDay}`

                        classTime1.textContent = `${times[0]}`;
                        lesson1.textContent = `${lessons[20]}`;
                        lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                        yogaImage1.src = `${classImages[0]}`;

                        classTime2.textContent = `${times[1]}`;
                        lesson2.textContent = `${lessons[21]}`;
                        lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                        yogaImage2.src = `${classImages[1]}`;

                        classTime3.textContent = `${times[2]}`;
                        lesson3.textContent = `${lessons[22]}`;
                        lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                        yogaImage3.src = `${classImages[2]}`;

                        classTime4.textContent = `${times[3]}`;
                        lesson4.textContent = `${lessons[23]}`;
                        lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                        yogaImage4.src = `${classImages[3]}`;
                    };
                    break;
                    default: {
                        console.log('Hey developer/user you have not selected any day!!');
                        selectedDay = null;
                    }
                    break;
                }
                console.log(selectedDay);
               
            })


        }
        catch(error) {
            console.error(error);
        };

         
    };

    function filter () {
        const selectedDayContaiber = document.querySelector('.selectedDay')
       //console.log(selectedDayContaiber);
        const classTime1 = document.querySelectorAll('.time1');
        const classTime2 = document.querySelector('.time2');
        const classTime3 = document.querySelector('.time3');
        const classTime4 = document.querySelector('.time4');
                const lesson1 = document.querySelector('.lesson1');
        const lesson2 = document.querySelector('.lesson2');
        const lesson3 = document.querySelector('.lesson3');
        const lesson4 = document.querySelector('.lesson4');
                const lecturer1 = document.querySelector('.lecturer1');
        const lecturer2 = document.querySelector('.lecturer2');
        const lecturer3 = document.querySelector('.lecturer3');
        const lecturer4 = document.querySelector('.lecturer4');
                const yogaImage1 = document.querySelector('.img1');
        const yogaImage2 = document.querySelector('.img2');
        const yogaImage3 = document.querySelector('.img3');
        const yogaImage4 = document.querySelector('.img4');

         const newError = document.querySelector('.sortError');
        const classSessions = document.querySelector('.classSessions');




        try {

            const classSort = document.querySelector('#sortby');
            //console.log(classSort);

            let day =undefined;
            

            classSort.addEventListener('click', (event) => {
                               
                        //console.log(event.target.value)
                        switch (event.target.value) {
                            case 'beginner': {
                                const random = Math.floor(Math.random()*2);
                                 day = days[random];
                                dayContainer.classList.contains('hide') ?
                                dayContainer.classList.remove('hide') :
                                dayContainer.classList.add('hide');
                                newError.classList.add('hide');

                                //console.log(event.target.value);
                            };
                            break;
                            case 'advanced': {
                               // console.log(event.target.value);
                                const random = Math.floor(Math.random()*2) + 2;
                                 day = days[random];
                                dayContainer.classList.contains('hide') ?
                                dayContainer.classList.remove('hide') :
                                dayContainer.classList.add('hide');
                                newError.classList.add('hide');

                            };
                            break;
                            case 'meditation': {
                                //console.log(event.target.value);
                                const random = Math.floor(Math.random()*2) + 4;
                                 day = days[random];
                                dayContainer.classList.contains('hide') ?
                                dayContainer.classList.remove('hide') :
                                dayContainer.classList.add('hide');
                                newError.classList.add('hide');

                            };
                            break;
                            default: {
                                console.log('please select a value');
                                                               
                                newError.classList.contains('hide') ?
                                newError.classList.remove('hide') :
                                newError.classList.add('null');
                                           
                                newError.textContent = "Sort didn't match any class !";
                               
                                newError.style.color = 'red';
                              
                                dayContainer.classList.contains('hide') ?
                                dayContainer.classList.toggle('null') :
                                dayContainer.classList.add('hide');

                              

                            };
                            break;
                        };


                          console.log(day)
                                                    
                            const random = Math.floor(Math.random()*6);
                            const random1 = Math.floor(Math.random()*6);
                            const random2 = Math.floor(Math.random()*6);
                            const random3 = Math.floor(Math.random()*6);
                            switch (day) {
                            case 'monday': {
                                
                                selectedDayContaiber.textContent = `${day}`;

                                classTime1.forEach( (time) => { time.textContent = `${times[0]}`});
                                lesson1.textContent = `${lessons[0]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[1]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[2]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[3]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;



                            };
                            break;
                            case 'tuesday': {
                                
                                selectedDayContaiber.textContent = `${day}`;

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[4]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[5]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[6]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[7]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;

                            };
                            break;
                            case 'wednesday': {
                                
                                selectedDayContaiber.textContent = `${day}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[8]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[9]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[10]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[11]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            };
                            break;
                            case 'thursday': {
                                
                                selectedDayContaiber.textContent = `${day}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[12]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[13]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[14]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[15]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            };
                            break;
                            case 'friday': {
                                
                                selectedDayContaiber.textContent = `${day}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[16]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[17]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[18]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[19]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            };
                            break;
                            case 'saturday': {
                                
                                selectedDayContaiber.textContent = `${day}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[20]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[21]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[22]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[23]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            };
                            break;
                            default: {
                                console.log('Hey developer/user you have not selected any day!!');
                                selectedDay = null;
                            }
                            break;
                        }
                      
                    });
                        setInterval(() => {

                                newError.classList.add('hide');
                                newError.classList.remove('null')

                                }, 20000)

        }
        catch(error) {
            console.error(error);
        };
  
    };

    function search () {
        try {
          const selectedDayContaiber = document.querySelector('.selectedDay')
              const classSessions = document.querySelector('.classSessions');
             const classTime1 = document.querySelectorAll('.time1');
        const classTime2 = document.querySelector('.time2');
        const classTime3 = document.querySelector('.time3');
        const classTime4 = document.querySelector('.time4');
                const lesson1 = document.querySelector('.lesson1');
        const lesson2 = document.querySelector('.lesson2');
        const lesson3 = document.querySelector('.lesson3');
        const lesson4 = document.querySelector('.lesson4');
                const lecturer1 = document.querySelector('.lecturer1');
        const lecturer2 = document.querySelector('.lecturer2');
        const lecturer3 = document.querySelector('.lecturer3');
        const lecturer4 = document.querySelector('.lecturer4');
                const yogaImage1 = document.querySelector('.img1');
        const yogaImage2 = document.querySelector('.img2');
        const yogaImage3 = document.querySelector('.img3');
        const yogaImage4 = document.querySelector('.img4');

        
        

        const newError = document.querySelector('.sortError');
        //console.log(newError);
            let normal = [];
            const searchBox = document.querySelector('#search');
            //console.log(searchBox);

            searchBox.addEventListener('keypress', (event) => {


                if (event.key === 'Enter') {
                    const random = Math.floor(Math.random()*6);
                    const random1 = Math.floor(Math.random()*6);
                    const random2 = Math.floor(Math.random()*6);
                    const random3 = Math.floor(Math.random()*6);
                    
                    dayContainer.classList.remove('hide');
                    
                 
                    normal = searchBox.value;
                    let normal1 = normal.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

                    const newNormal = normal1.split(" "); // new array ready to be searched
                   const matches = lessons.filter(sentence =>
                    newNormal.some(word =>
                        sentence.toLowerCase().includes(word.toLowerCase())
                    )
                    );
                    const matchIndex = lessons.indexOf(`${matches[1]}`);
                    const dayNumber= Number(searchBox.value);

                        if ((typeof normal) === 'string' && normal !== '') {
                            
                   // console.log(matchIndex);
                    // console.log(matches)
                    // console.log(newNormal);
                    // console.log(searchBox.value);
                    // console.log(typeof normal);
                            
                            
                        if  (dayNumber === 1 && dayNumber !== NaN) {
                                newError.classList.add('hide');
                                
                                selectedDayContaiber.textContent = `${days[0]}`;

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[0]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[1]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[2]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[3]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;



                            }
                            
                            else if (dayNumber == 2 && dayNumber !== NaN) {
                                newError.classList.add('hide');
                                
                                selectedDayContaiber.textContent = `${days[1]}`;

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[4]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[5]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[6]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[7]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;

                            }
                            
                            else if  (dayNumber === 3 && dayNumber !== NaN) {
                                newError.classList.add('hide');
                                
                                selectedDayContaiber.textContent = `${days[2]}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[8]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[9]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[10]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[11]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            }
                            
                            else if  (dayNumber === 4 && dayNumber !== NaN) {
                                newError.classList.add('hide');
                                
                                selectedDayContaiber.textContent = `${days[3]}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[12]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[13]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[14]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[15]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            }
                            
                            else if (dayNumber === 5 && dayNumber !== NaN) {
                                newError.classList.add('hide');
                             
                                selectedDayContaiber.textContent = `${days[4]}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[16]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[17]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[18]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[19]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            }
                            
                            else if (dayNumber === 6 && dayNumber !== NaN) {
                                newError.classList.add('hide');
                       
                                selectedDayContaiber.textContent = `${days[5]}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[20]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[21]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[22]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[23]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            }
                            else if ( matchIndex < 4){
                                newError.classList.add('hide');
                                
                                
                                selectedDayContaiber.textContent = `${days[0]}`;

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[0]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[1]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[2]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[3]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;



                            }
                            else if ( matchIndex > 3 && matchIndex <= 7) {
                                newError.classList.add('hide');
                                
                                selectedDayContaiber.textContent = `${days[1]}`;

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[4]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[5]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[6]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[7]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;

                            }
                            else if (  matchIndex > 7 && matchIndex <= 11) {
                                newError.classList.add('hide');
                                
                                selectedDayContaiber.textContent = `${days[2]}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[8]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[9]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[10]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[11]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            }
                            else if (  matchIndex > 11 && matchIndex <= 15 ) {
                                newError.classList.add('hide');
                                
                                selectedDayContaiber.textContent = `${days[3]}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[12]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[13]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[14]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[15]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            }                         
                            else if (  matchIndex > 15 && matchIndex <= 19) {
                                newError.classList.add('hide');
                             
                                selectedDayContaiber.textContent = `${days[4]}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[16]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[17]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[18]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[19]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            }                          
                            else if (  matchIndex > 19 && matchIndex <= 23) {
                                  newError.classList.add('hide');
                       
                                selectedDayContaiber.textContent = `${days[5]}`

                                classTime1.textContent = `${times[0]}`;
                                lesson1.textContent = `${lessons[20]}`;
                                lecturer1.textContent = `${lecturersFirstName[random]}  ${lecturersLastName[random]}`;
                                yogaImage1.src = `${classImages[0]}`;

                                classTime2.textContent = `${times[1]}`;
                                lesson2.textContent = `${lessons[21]}`;
                                lecturer2.textContent = `${lecturersFirstName[random1]}  ${lecturersLastName[random1]}`;
                                yogaImage2.src = `${classImages[1]}`;

                                classTime3.textContent = `${times[2]}`;
                                lesson3.textContent = `${lessons[22]}`;
                                lecturer3.textContent = `${lecturersFirstName[random2]}  ${lecturersLastName[random2]}`;
                                yogaImage3.src = `${classImages[2]}`;

                                classTime4.textContent = `${times[3]}`;
                                lesson4.textContent = `${lessons[23]}`;
                                lecturer4.textContent = `${lecturersFirstName[random3]}  ${lecturersLastName[random3]}`;
                                yogaImage4.src = `${classImages[3]}`;
                            }
                            
                            

                    } else {
                                console.log('Hey developer/user your search didnt match our records!!');
                                
                                newError.classList.contains('hide') ?
                                newError.classList.remove('hide') :
                                newError.classList.toggle('null');
                               
                                 dayContainer.classList.add('hide');

                                newError.textContent = "Sorry! didn't find class, please try again!";
                                newError.style.width = 'fitContent';
                            

                                newError.style.color = 'red';

                            }

                }
                else {
                    dayContainer.classList.add('hide');
                }
                
            });
             setInterval(() => {

                                newError.classList.add('hide');
                                newError.classList.remove('null')

                                }, 20000)
        }
        catch(error) {
            console.error(error);
        };

    };


    // INSTRUCTORS SECTION 

    function displayInstructors () {
        const instructor = document.createElement('div');
        instructor.id = 'instructor1';
        instructor.classList.add('instructor1');
        instructorsSection.append(instructor);
        console.log(instructor);

        const instructorName = document.createElement('p');
        instructorName.classList.add('name');
        instructor.append(instructorName);

        const instructorPosition = document.createElement('p');
        instructorPosition.classList.add('position');
        instructor.append(instructorPosition);

        const instructorImage = document.createElement('img');
        instructorImage.src = '';
        instructorImage.alt = '';
        instructorImage.classList.add('image');
        instructorImage.classList.add('lecturerImage');
        instructor.append(instructorImage);

        const instructorDesc = document.createElement('p');
        instructorDesc.classList.add('description');
        instructor.append.apply(instructorDesc);

        const contactInstructorBtn = document.createElement('button');
        contactInstructorBtn.classList.add('contactInstructor');
        contactInstructorBtn.textContent = 'Contact 📞';
        instructor.append(contactInstructorBtn);

        const prevBtn = document.createElement('button');
        prevBtn.classList.add('prevNextbtn');
        prevBtn.id = 'prevbtn';
        prevBtn.innerHTML = `&#10094`;
        instructor.append(prevBtn);

        const nextBtn = document.createElement('button');
        nextBtn.id = 'nextbtn';
        nextBtn.classList.add('prevNextbtn');
        nextBtn.innerHTML = '&#10095';
        instructor.append(nextBtn);



    };
    function displayFact () {
                //FACT DIV AND DISPLAY FUNCTIONALITY
               const instructor= document.getElementById('instructor1');
               const contactInstructorBtn =document.getElementById('contactInstructor');

        const fanFact = document.createElement('p');
        fanFact.id = 'fanFact';
        fanFact.classList.add('hide');
        fanFact.classList.add('fanFact');
         instructor.insertBefore(fanFact, contactInstructorBtn);

        const factTitle = document.createElement('h3');
        factTitle.id = 'factTitle';
        factTitle.textContent = 'fan fact 😂👻';
        fanFact.append(factTitle);

        const fact = document.createElement('p');
        fact.id = 'fact';
        fanFact.append(fact);
        console.log(fanFact)
    }


    let count = 0;

    function PrevInstructor () {
        const instructorName = document.querySelector('.name');
        const instructorPosition = document.querySelector('.position');
        const instructorImage = document.querySelector('.image');
        const instructorDesc = document.querySelector('.description')
        const prevBtn = document.getElementById('prevbtn');
        const nextBtn = document.getElementById('nextbtn');
        const contactInstructorBtn = document.querySelector('#contactInstructor');
        

        prevBtn.addEventListener('click', () => {
            
            if (count === 0) { count = 6;};
            count-=1;
                //console.log(count);
                   switch (count) {
                case 0: {
                    instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                    contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor1');

                    

                };
                break;
                case 1: {
                                        instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor2');

                };
                break;
                case 2: {
                                        instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor3');

                };
                break;
                case 3: {
                                        instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor4');

                };
                break;
                case 4: {
                                        instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor5');

                };
                break;
                case 5: {
                                        instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor6');

                };
                break;
                default: {
                    console.error('please check your count logic');
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    
                }
            }
            //console.log(contactInstructorBtn);
        });



    };

    function nextInstructor () {
        const instructorName = document.querySelector('.name');
        const instructorPosition = document.querySelector('.position');
        const instructorImage = document.querySelector('.image');
        const instructorDesc = document.querySelector('.description')
        const prevBtn = document.getElementById('prevbtn');
        const nextBtn = document.getElementById('nextbtn');
        const contactInstructorBtn = document.querySelector('.contactInstructor');
        
        nextBtn.addEventListener('click', () => {
            if (count===5) {count = -1};
            count +=1;
            //console.log(count);
            // console.log(nextBtn);
            switch (count) {
                case 0: {
                    instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor1');

                };
                break;
                case 1: {
                                        instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor2');

                };
                break;
                case 2: {
                                        instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor3');

                };
                break;
                case 3: {
                                        instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor4');

                };
                break;
                case 4: {
                                        instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor5');

                };
                break;
                case 5: {
                                        instructorName.textContent = `${lecturersFirstName[count]}  ${lecturersLastName[count]}`;
                    instructorPosition.textContent = `${lecturerPosition[count]}`;
                    instructorImage.src = `${lecturesImages[count]}`;
                    instructorDesc.textContent = `${lecturerDescription[count]}`;
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    contactInstructorBtn.classList.add('contactInstructor6');

                };
                break;
                default: {
                    console.error('please check your count logic');
                                        contactInstructorBtn.className = "";
                    contactInstructorBtn.classList.add('contactInstructor');
                    
                } 
            }
            //console.log(contactInstructorBtn);

        })

    };
    //console.log(count);
    function showInstructorContact () {
        const instructorName = document.querySelector('#instructorName');
        const instructorImage = document.querySelector('#lecturerImage');
        const contactInstructorBtn = document.querySelector('.contactInstructor');
        const contactInstructorfunctionality = document.getElementById('contactInstructorfunctionality');
        const sendMessageBtn = document.querySelector('.sendMessage');
        const overlay = document.getElementById('overlay1');
        const enteredName = document.getElementById('enteredName');
        const enteredMessage = document.getElementById('enteredMessage');
        const contacts = document.querySelector('.contacts');
        let count = 0;
                        const sendError = document.createElement('p');
                sendError.style.margin = '10px auto';
                sendError.style.color = 'tomato';
                sendError.id = 'sendError';
               
                sendError.style.textAlign = 'center';
                sendError.textContent = `We don't accept null messages!!`;
                contactInstructorfunctionality.insertBefore(sendError, contacts);

        const sendResultMessage = document.getElementById('sendResultMessage');
    
        
        contactInstructorBtn.addEventListener('click', () => {
            sendError.className ='';
             sendError.classList.add('hide');



            //add overlay div before contact section 
            switch (true) {
                case (contactInstructorBtn.classList.contains('contactInstructor1')): {
                    overlay.className ='';
                    overlay.classList.add('overlay')
                    contactInstructorfunctionality.className ='';
                    contactInstructorfunctionality.classList.add('contactInstructorfunctionality');
                    instructorName.textContent = `Hey! Talk To: ${lecturersFirstName[0]} ${lecturersLastName[0]}`;
                    instructorImage.src = `${lecturesImages[0]}`;
                    count =0;


                };
                break;
                case contactInstructorBtn.classList.contains('contactInstructor2'): {
                                        overlay.className ='';
                    overlay.classList.add('overlay')
                    contactInstructorfunctionality.className ='';
                    contactInstructorfunctionality.classList.add('contactInstructorfunctionality');
                    instructorName.textContent = `Hey! Talk To: ${lecturersFirstName[1]} ${lecturersLastName[1]}`;
                    instructorImage.src = `${lecturesImages[1]}`;
                    count =1;
                    
                };
                break;
                case contactInstructorBtn.classList.contains('contactInstructor3'): {
                                        overlay.className ='';
                    overlay.classList.add('overlay')
                    contactInstructorfunctionality.className ='';
                    contactInstructorfunctionality.classList.add('contactInstructorfunctionality');
                    instructorName.textContent = `Hey! Talk To: ${lecturersFirstName[2]} ${lecturersLastName[2]}`;
                    instructorImage.src = `${lecturesImages[2]}`;
                    count = 2;
                    
                };
                break;
                case contactInstructorBtn.classList.contains('contactInstructor4'): {
                                        overlay.className ='';
                    overlay.classList.add('overlay')
                    contactInstructorfunctionality.className ='';
                    contactInstructorfunctionality.classList.add('contactInstructorfunctionality');
                    instructorName.textContent = `Hey! Talk To: ${lecturersFirstName[3]} ${lecturersLastName[3]}`;
                    instructorImage.src = `${lecturesImages[3]}`;
                    count =3;
                    
                };
                break;
                case contactInstructorBtn.classList.contains('contactInstructor5'): {
                                        overlay.className ='';
                    overlay.classList.add('overlay')
                    contactInstructorfunctionality.className ='';
                    contactInstructorfunctionality.classList.add('contactInstructorfunctionality');
                    instructorName.textContent = `Hey! Talk To: ${lecturersFirstName[4]} ${lecturersLastName[4]}`;
                    instructorImage.src = `${lecturesImages[4]}`;
                    count = 4;
                    
                };
                break;
                case contactInstructorBtn.classList.contains('contactInstructor6'): {
                    
                                        overlay.className ='';
                    overlay.classList.add('overlay')
                    contactInstructorfunctionality.className ='';
                    contactInstructorfunctionality.classList.add('contactInstructorfunctionality');
                    instructorName.textContent = `Hey! Talk To: ${lecturersFirstName[5]} ${lecturersLastName[5]}`;
                    instructorImage.src = `${lecturesImages[5]}`;
                    count = 5;
                };
                break;
                default: {
                    overlay.className ='';
                    overlay.classList.add('hide')
                    contactInstructorfunctionality.className ='';
                    contactInstructorfunctionality.classList.add('hide');
                    instructorName.textContent = `Hey! Talk To: ${lecturersFirstName[0]} ${lecturersLastName[0]}`;
                    instructorImage.src = `${lecturesImages[0]}`;
                    count = 0;

                };
                break;
            }
        });

        sendMessageBtn.addEventListener('click', () => {
            const nameValue = enteredName.value;
            const messageValue = enteredMessage.value;
            const sendError = document.getElementById('sendError');
            sendError.className ='';
            sendError.classList.add('hide');

            if (nameValue !== '' && nameValue !== " " && messageValue !== '' && messageValue !== " ") {
               fetch( "https://formspree.io/f/xgvrwojj", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( {
                    message: `1. Name or Contact: ${nameValue}  2. Message: ${messageValue}`
                })
               }).then(response => {
                if (response.ok) {
                    console.log('message sent')
                    sendResultMessage.className = '';
                    sendResultMessage.classList.add('sendResultMessage');
                    sendResultMessage.textContent = 'message sent successfully! 😊 ✔';
                    sendResultMessage.style.color = 'lightgreen';
                                    overlay.className ='';
                    overlay.classList.add('overlay');
                    setInterval(() => {
                        overlay.className ='';
                        overlay.classList.add('hide')
                        
                        sendResultMessage.className = '';
                        sendResultMessage.classList.add('hide')

                     }, 3000)


                } else {
                    console.log("couldn't send message")
                                        sendResultMessage.className = '';
                    sendResultMessage.classList.add('sendResultMessage');
                    sendResultMessage.textContent = 'check your network! and try again  🥵 ❌';
                    sendResultMessage.style.color = 'tomato';
                    sendResultMessage.style.height = '350px';
                                    overlay.className ='';
                     overlay.classList.add('overlay')
                    setInterval(() => {
                        overlay.className ='';
                        overlay.classList.add('hide')

                        sendResultMessage.className = '';
                        sendResultMessage.classList.add('hide')

                     }, 5000)
                }
               }).catch(error => {
                console.error("Error: ", error);
                                      sendResultMessage.className = '';
                    sendResultMessage.classList.add('sendResultMessage');
                    sendResultMessage.textContent = 'check your network! and try again  🥵 ❌';
                    sendResultMessage.style.color = 'tomato';
                    sendResultMessage.style.height = '350px';
                                    overlay.className ='';
                     overlay.classList.add('overlay')
                    setInterval(() => {
                        overlay.className ='';
                        overlay.classList.add('hide')

                        sendResultMessage.className = '';
                        sendResultMessage.classList.add('hide')

                     }, 5000)
               })

                overlay.className ='';
            overlay.classList.add('hide')
            contactInstructorfunctionality.className ='';
            contactInstructorfunctionality.classList.add('hide');
            sendError.className ='';
             sendError.classList.add('hide');
            

             enteredName.value ='';
             enteredMessage.value = '';


            
            }
            else {

                    enteredName.value ='';
             enteredMessage.value = '';
                 sendError.className ='';
                 sendResultMessage.className = '';
                 sendResultMessage.classList.add('hide')
            }

        
  


        });
        overlay.addEventListener('click', ()=> {
                    overlay.className ='';
                    overlay.classList.add('hide')
                    contactInstructorfunctionality.className ='';
                    contactInstructorfunctionality.classList.add('hide');
                    sendResultMessage.className = '';
                    sendResultMessage.classList.add('hide')
        });
   
    };

    function showFact () {
        
        const fanFact = document.getElementById('fanFact');
        const fact = document.getElementById('fact');
        const instructorDesc = document.getElementById('theDescription');
        
        try {
            instructorDesc.addEventListener('mouseover', () => {


                instructorDesc.style.transform = 'rotateY(45deg)';


            })
                


    
            instructorDesc.addEventListener('mouseout', () => {
                     instructorDesc.style.transform = 'rotateX(-45deg)';
              
            })
       


        }
        catch(error) {
            console.error(error);
        };
    };
    

    // CONTACT SECTION
    function sendAMessage () {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const number = document.getElementById('number');
        const message = document.getElementById('message');
        const formElement = document.querySelector('.formElement');
        const formSubmit = document.getElementById('formSubmit');
          const overlay = document.getElementById('overlay1');
           const sendResultMessage = document.getElementById('sendResultMessage');
        const sendMessageBtn = document.getElementById('formSubmit');
      


        const sendError = document.createElement('p');
                sendError.style.margin = '0px auto 60px';
                sendError.style.color = 'tomato';           
                sendError.classList.add('hide');              
                sendError.style.textAlign = 'center';
                sendError.textContent = `We don't accept null messages!!`;
                formElement.append(sendError);
                //console.log(sendError);


        try {
            sendMessageBtn.addEventListener('click', (event) => {
            event.preventDefault();
                const nameValue = name.value;
            const messageValue = message.value;
            const emailValue = email.value;
            const numberValue = number.value;
            sendError.className ='';
            
            
            sendError.classList.add('hide');
             
            
            

            if (nameValue !== '' && nameValue !== " " && messageValue !== '' && messageValue !== " " && numberValue !== '' && numberValue !== " " && emailValue !== '' && emailValue !== " ") {
               fetch( "https://formspree.io/f/xgvrwojj", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( {
                    message: `1. Name: ${nameValue}  2. Message: ${messageValue} 3. Contact: ${numberValue} 4. Email: ${emailValue}`
                })
               }).then(response => {
                if (response.ok) {
                    console.log('message sent')
                    sendResultMessage.className = '';
                    sendResultMessage.classList.add('sendResultMessage');
                    sendResultMessage.textContent = 'message sent successfully! 😊 ✔';
                    sendResultMessage.style.color = 'lightgreen';
                                    overlay.className ='';
                    overlay.classList.add('overlay');
                    setInterval(() => {
                        overlay.className ='';
                        overlay.classList.add('hide')
                        
                        sendResultMessage.className = '';
                        sendResultMessage.classList.add('hide')

                     }, 3000)


                } else {
                    console.log("couldn't send message")
                                        sendResultMessage.className = '';
                    sendResultMessage.classList.add('sendResultMessage');
                    sendResultMessage.textContent = 'check your network! and try again  🥵 ❌';
                    sendResultMessage.style.color = 'tomato';
                    sendResultMessage.style.height = '350px';
                                    overlay.className ='';
                     overlay.classList.add('overlay')
                    setInterval(() => {
                        overlay.className ='';
                        overlay.classList.add('hide')

                        sendResultMessage.className = '';
                        sendResultMessage.classList.add('hide')

                     }, 5000)
                }
               }).catch(error => {
                console.error("Error: ", error);
                                      sendResultMessage.className = '';
                    sendResultMessage.classList.add('sendResultMessage');
                    sendResultMessage.textContent = 'check your network! and try again  🥵 ❌';
                    sendResultMessage.style.color = 'tomato';
                    sendResultMessage.style.height = '350px';
                                    overlay.className ='';
                     overlay.classList.add('overlay')
                    setInterval(() => {
                        overlay.className ='';
                        overlay.classList.add('hide')

                        sendResultMessage.className = '';
                        sendResultMessage.classList.add('hide')

                     }, 5000)
               })

                overlay.className ='';
            overlay.classList.add('hide')

            sendError.className ='';
             sendError.classList.add('hide');
        
             name.value ='';
             email.value = '';
             message.value = '';
             number.value = '';

            }
            else {


                 sendError.classList.remove('hide');
                 sendError.className = '';

                 sendResultMessage.className = '';
                 sendResultMessage.classList.add('hide')
            }

        
  


        });
        overlay.addEventListener('click', ()=> {
                    overlay.className ='';
                    overlay.classList.add('hide')

                    sendResultMessage.className = '';
                    sendResultMessage.classList.add('hide')
        });

        }
        catch(error){
            console.error(error);
        }

    };

    // FOOTER SECTION


}

