import Footer from "../Footer/Footer";
import Navbar1 from "../NavbarComp/NavbarComp";
import first_img from "../Article_imgs/first_img2.png"
import second_img from "../Article_imgs/second_img2.png"
import third1_img from "../Article_imgs/third_img2(1).png"
import third2_img from "../Article_imgs/third_img2(2).png"
import fourth_img from "../Article_imgs/fourth_img2.png"




import './Article_page.css';
function Article_page2() {
    return (
        <div>
            <Navbar1 />
            <div className="articles_cont">
                <div className="first_topic">
                    <h1 className="header">Що таке податкова амністія?
                    </h1>
                    <span className="topic_text">
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15 червня депутати проголосували за законопроект, який дає старт податковій амістії. Це законопроект 5153, якщо коротко то цей закон дає можливість без штрафів задекларувати те майно і доходи, з яких не було сплачено податок раніше, а зараз Ви це можете зробити за меншою ставкою податку.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1-го вересня 2021 року податкова амністія стартувала і вона буде тривати до 1 вересня 2022 року.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Протягом цього часу будь-який резидент України має право задекларувати свої кошти, або активи, які були ним отримані до 2021 року без сплати податків. Ті активи, що отримані починаючи з 2021 року - податковій амністії підлягати не можуть.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Глобально, податкова амністія позиціонується державою як можливість почати нове фінансово-податкове життя сплативши відносно не великий платіж в бюджет перед тим, як держава почне закручувати гайки.
                    </span>
                </div>
                <div className="second_topic">


                    <h1 className="header" style={{ fontSize: '40px' }}>Кому може бути цікава податкова амністія, а кому навіть немає сенсу про неї думати?
                    </h1>

                    <span className="topic_text" style={{ flexDirection: 'row' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Якщо у Вас офіційно за весь час задекларовано, наприклад, дохід в розмірі 1 млн. грн., а автомобілів, квартир і іншого майна у Вас на 2 млн грн. Тут виникає питання, а звідки взявся ще один додатковий мільйон, щоб купити все це майно?
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Якраз закон про декларування і має дати відповідь.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  А саме, в контексті закону розглядається, що додаткові кошти на здобуття активів були не задекларовані, тому задекларуйте їх і після цього держава буде мати документи про те, що зі всіх Ваших активів сплачені податки і це дуже важливо, далі розкажу чому.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Очевидно, що про суму реальних своїх активів Вивкурсі ітак, тому стоїть питання в іншому. Як дізнатися що знає податкова, яку суму грошей на їх думку я заробив.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  На цю тему я вже знімав відео де детально пояснив як це можна без проблем перевірити онлайн - запрошую Вас переглянути те відео за посиланням.
                        <img src={first_img} style={{ width: '475px', height: '371px', marginLeft: '20px' }} />
                    </span>
                    <span className="topic_text" style={{ flexDirection: 'row' }}>
                        Проте, не всі Ваші НЕзадекларовані активи треба буде декларувати зараз. Якщо Ваші не заделкаровані активи менші певної межі - їх декларувати не потрібно. Про це далі і статті.
                        Якщо Ваші активи, що мають грошову цінність менш ніж 400 тисяч гривень - то декларувати не потрібно. З моменту вступу в силу цього закону вони вважаються як такі, що задекларовані та з них сплачені податки. Також, якщо у Вас є квартира менше 120 квадратів, або будинок менше 240 квадратів і вони куплені за незадекларовані гроші - це теж не має значення, оскільки такі активи теж будуть автоматично вважатися задекларованими.
                        При цьому, з цих автоматично задекларованих активів не треба платити жодних податків.
                        Відповідно ми доходимо до наступного логічного питання, яке виникає. То все ж, які активи в розумінні закону про амністію треба задекларувати.
                        <br /><br />
                        Наприклад, якщо Ви мали свій бізнес, отримували кошти та не декларували їх - це не задекларовані кошти, з яких не сплачені податки. Їх можна зараз задекларувати.
                        Якщо Вибули закордоном на роботі, або маєте бізнес за кордоном і отримали там певну суму грошей, яка теж не задекларована на території України - теж можете задекларувати ці кошти.
                        Навіть ті хто мають наприклад інтернет магазини і отримують кошти від клієнтів на свої особисті карточки - очевидно такі люди теж не платять податки і можуть подати зараз декларацію і задекларувати прибутки.
                        Насправді подання цієї декларації є добровільним. Тобто, Ви самостійно приймаєте рішення чи подавати таку декларацію, чи не подавати.
                        <br /><br />
                        Але найбільше питання яке виникає - це наслідки, що можуть бути внаслідок декларування чи навпаки не декларування.
                        Зараз держава дає знижену ставку для декларування наявних активів і поки ніяк не каже про те, а що буде тим хто не задекларує. Тому, тут може бути 2 сценарія.
                        Перший сценарій - це коли держава збере зараз кошти з податкової амністії в бюджет і на цьому все закінчиться.
                        Другий сценарій - це такий, що державі більше цікаві не так ті хто подадуть добровільну декларацію, як ті хто не подадуть. Бо зараз з тих, з кого подали декларацію можна буде зібрати не суттєву суму податків.
                        А от проти тих хто не подав декларацію держава вже буде мати нульову точку відліку по сплаті податків та наявних активах і очевидно, що зможе відкривати справи і достягувати вже податків на більшу суму коштів.
                        Закон дає час для подачі декларації з 1 вересня 2021 року по 1 вересня 2022 року, тобто цілий рік. І за цей час кожен чесно собі має признатися якого саме сценарію він прихильник.
                        Держава зі свого боку гарантує, що не буде вимагати підтвердження походження коштів та активів, які декларуються добровільно. Проте, є певні але.
                        Вони полягають у фінансовому моніторингу банку. Просто взяти і задекларувати готівку Ви не можете. Ви маєте купити або облігації внутрішньої державної позики, або ж покласти гроші на спеціально відкритий рахунок в банку і тоді декларувати ці гроші.
                        Щоб покласти гроші в банк, або щоб купити ОВДП однозначно прийдеться заповнювати анкету фінансового опитувальника. А щодо декларування активів у вигляді нерухомих чи рухомих речей - держава обіцяє не питати документи про їх купівлю.
                    </span>
                </div>
                <div className="third_topic">
                    <h1 className="header" style={{ fontSize: '37px' }}>Ну і найцікавіше, які ж податки треба буде заплатити, якщо ви все ж наважитесь добровільно задекларувати кошти.
                    </h1>
                    <span className="topic_text" style={{ flexDirection: 'row', alignItems: 'center', lineHeight: '25px', fontSize: '18px' }}>
                        <img src={second_img} style={{ width: '500px', height: '380px', marginRight: '20px' }} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Якщо Ви купите ОВДП потрібно буде заплатити 2.5%, якщо Ви внесете кошти в український банк потрібно буде заплатити 5%, а якщо Ви тримаєте кошти закордоном треба буде заплатити 9% від суми задекларованих активів.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; На що треба звернути увагу в цьому ролику, та на що треба звернути увагу в законі про амністію це те, що прописано, що особи які не подали добровільну декларацію вважаються такими, що повідомили податкову про відсутність активів, які треба було задекларувати.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Це доволі слизький пункт, який у майбутньому можуть трактувати як приховання реальних доходів та ухилення від сплати податків.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Сподіваюсь Вам це відео було корисним та актуальним і Ви змогли дізнатися про нюанси добровільного декларування. Хоча тут є ще багато питань, про які я в майбутньому обов'язково зніму ролики.
                    </span>
                </div>
                <div className="fourth_topic">


                    <h1 className="header" style={{ fontSize: '40px' }}>Кому може бути цікава податкова амністія, а кому навіть немає сенсу про неї думати?
                    </h1>


                    <span className="topic_text" >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Декларувати можна будь - які активи, тобто гроші, акції, нерухомість, автомобілі, цінні прикраси, раритетні речі і так далі. При чому, не залежно від того чи є ці активи на території України чи ні.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Для готівкових коштів є спеціальний процес декларування який полягає в тому, що Вам їх треба буде покласти на спеціальний банківський рахунок, який призначений для податкової амністії. Просто задекларувати готівку не поклавши їх на цей рахунок - неможливо.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Звичайно, держава в законі заборонила декларувати всі активи, що були отримані злочинним шляхом. Тобто, якщо у Вас є майно, яке Ви здобули внаслідок вчинення злочину і про це є документ - задекларувати це неможливо.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Також цікавим питанням є те, чи можна декларувати криптовалюту. Податкова в перший числах вересня випустила своє роз’яснення, яким пояснила, що оскільки криптовалюта в Україні не врегульована - вона не підлягає декларуванні.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Проте, зробивши крок назад ми пам’ятаємо, що можна декларувати готівку, яка впринципі може походити з будь-яких джерел, в тому числі з криптовалюти. Тому, сам по собі капітал в крипті - не задекларуємо, а от готівку з нього - скоріш за все так.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Для того, щоб зрозуміти чи варто Вам подавати податкову декларацію чи ні - треба самому собі в першу чергу поставити запитання чи зможете Ви довести походження коштів на всі Ваші активи.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   При чому, це питання очевидно варто поставити самому собі до того, як держава його Вам його поставить. Щоб допомогти знайти відповідь собі на це питання можна подати в податкову запит аби взяти довідку про сплачені вами податки.
                        <br />
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Інформація в податковій є з 1998 року, в цій довідці Ви побачите всі доходи з яких Вами було офіційно сплачені податки. При цьому, не варто боятися подавати цей запит - він не є підставою для проведення якихось перевірок, це просто документ який формується в автоматичному режимі з реєстру податкової.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Як подати такий запит є у відео. Відео залишаю прямо тут.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Допустимо Ви вже маєте відповідь на питання чи зможете Ви довести про походження своїх активів, саме тому слід рухатися до двох наступних важливих розділів.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   По-перше, яку суму податків треба буде заплатити; по-друге, до лімітів активів, які дозволено державою не декларувати та не платити з них спеціальний збір.
                        <br />
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Держава пропонує наступне:
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Перший варіант - заплатити 2.5% протягом 30 днів з моменту подачі декларації у випадку, якщо Ви купите державні облігації. Як альтернативний варіант Ви можете оплатити 3% податку і розтермінувати платіж на 3 рази.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Другий варіант - заплатити 5% податку - це є загальна ставка, її треба оплатити протягом 30 днів з моменту подання декларації. А якщо платіж будете розтерміновувати на 3 рази, то треба буде платити - 6% податку.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Третій варіант - заплатити 9% - вона платиться виключно на активи, що розміщені за межами України. Якщо ж Ви знову таки будете платити податок не зразу, а ділити на 3 платежі, то треба буде платити – 11,5% податку. Але, є нюанс. Якщо Ви іноземні активи задекларуєте до 1 березня 2022 року - то треба буде платити не 9%, а 7% податку. Або з розтермінуванням на 3 платежі не 11% податку, а - 9.5%.
                    </span>
                </div>
                <div className="fifth_topic">


                    <h1 className="header" style={{ fontSize: '40px' }}> Що не потрібно декларувати?                    </h1>
                    <span className="topic_text" style={{ flexDirection: 'row', lineHeight: '25px' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Тепер перейдемо до важливого нюансу, а саме лімітів активів, які можна не декларувати.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Якщо у Вас є готівка, або дорогоцінні метали, які в сумарності дешевші ніж 400 000 гривень, то вони вважаються як такі, що автоматично задекларовані і податку з них платити не треба, також не треба подавати декларацію.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Якщо у Вас є квартира, або майнові права на квартиру у разі незавершеного будівництва площа якої менша 120 квадратних метрів - то вона теж буде вважатися автоматично задекларованою і податок платити не потрібно.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; При чому, в нерухомості немає значення чи у Вас 1 квартира, чи 2 чи 5 квартир. Головне, щоб сумарна площа не була більшою 120 квадратів. При чому рахується не житлова площа, а загальна.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - Аналогічна ситуація і з житловим будинком, тільки для нього ліміти вищі і дорівнюють 240 квадратним метрам.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - Для комерційних приміщень ліміти менші і дорівнюють 60 квадратним метрам. А для земельної ділянки до 0.2 гектарів.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Також для автомобілів, які не мають комерційне призначення теж встановлені ліміти.
                        <img src={third1_img} style={{ width: '500px', marginLeft: '20px' }} />
                    </span>
                    <span className="topic_text" style={{ flexDirection: 'row', lineHeight: '22px' }}>
                        <img src={third2_img} style={{ width: '500px', height: '480px', marginRight: '20px' }} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Якщо у Вас є особистий автомобіль, який вартує менше ніж 400 тисяч гривень, або має менше ніж 3 тисячі кубічних метрів його можна не декларувати. Але якщо у Вас більше ніж 1 такий автомобіль і Ви не можете підтвердити його походження - доведеться задекларувати.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Також зверніть увагу, що Ви маєте підтвердити вартість своїх активів на момент подачі декларації. Наприклад, це може бути експертна оцінка Вашого майна, яка покаже скільки воно вартує.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Тепер розуміючи всю теоретичну базу податкової амністії ми можемо подумати разом з Вами чи варто декларувати чи ні.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Станом на зараз у нас в державі є такі принципи, що головне активи назбирати, і якщо Ви купили автомобіль чи квартиру - немає закону який дає право державі запитати, а звідки у Вас ці активи.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;По- перше, у тих людей, які мають активи закордоном з 2023 року є небезпека в тому, що почнеться автоматичний обмін податковою інформацією з іноземними країнами і наша податкова буде знати про активи українців за кордоном.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;По- друге, з 2022 року стартує закон про КІК, який зобов’яже розкривати свої іноземні компанії.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;По-третє, і це якраз найбільш небезпечно для всіх - непрямі методи податкового контролю. Тобто, Ви купили квартиру або автомобіль - податкова цю покупку буде бачити, зможе порівняти з Вашими офіційними доходами і якщо вони не достатні для покупки такого активу – Ви будете зобовязані доплатити податок.
                    </span>
                </div>
                <div className="sixth_topic">


                    <h1 className="header" style={{ fontSize: '40px' }}>Як будуть відслідковувати доходи після податкової амністії.
                    </h1>


                    <span className="topic_text" >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;У прикінцевих та перехідних положення закону про податкову амністію вказано, що кабінет міністрів протягом 9 місяців з моменту вступу закону в силу зобов’язаний напрацювати проект закону, який буде посилювати контроль за оподатковуванням доходів простих фізичних осіб.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Комітет верховної ради з питань фінансів зробив невеличкий анонс і планує ввести так звані не прямі методи податкового контролю.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Що це означає для нас на практиці. Ми маємо добровільне декларування з 1 вересня 2021 року по 1 вересня 2022 року.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Під час цього строку кожна особа може подати декларацію та задекларувати ті кошти та активи, які раніше не декларувала, хоча не все треба декларувати, є встановлено ліміти майна, яке вважаєтсья фактично автоматично задекларованим.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Все нерухоме майно, що Ви купуєте, тобто земельні ділянки, квартири та будинки - вносяться в реєстр і по Вашому податковому номері можна перевірити чим саме Ви володієте.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Так само і з деяким рухомим майном, таким як автомобілі, мотоцикли, вантажівки і тому подібні речі - вони теж вносяться в реєстр і закріплюються за Вашим податковим номером.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Станом на зараз, якщо Ви купуєте якусь рухому чи нерухому річ, яка вноситься в реєстр - податкова не може Вас запитати про те, звідки у Вас гроші на покупку такої речі.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Але зараз це може робити банк, в разі якщо Ви знімаєте гроші з банку, або поповнюєте банківський рахунок для здійснення якоїсь покупки - все це відбувається в межах фінансового моніторингу.
                    </span>
                    <span className="topic_text" style={{ flexDirection: 'column', alignItems: 'center', lineHeight: '25px', fontSize: '18px' }}>
                        <img src={fourth_img} style={{ width: '100%', height: '330px', marginBottom: '20px' }} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Проте, якщо приймуть закон про непрямі методи податкового контролю то ситуація може змінитися на абсолютно протилежну.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Наприклад, якщо Ви зареєструєте на себе квартиру - податкова зразу буде це бачити і зможе Вам відправляти лист з проханням пояснити цю покупку та пояснити де Ви взяли на неї гроші.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Якщо Ви зможете надати документи, які доведуть ці доходи, наприклад, покажите декларацію по якій Ви пройшли по податковій амністії - супер, у Вас проблем не буде.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Якщо ж Ви не зможете довести, що на всю суму податки сплачені - в такому випадку податкова попросить доплатити податок з тої суми, яку Ви не змогли довести.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Це буде стосуватися будь-якої значної покупки, яка вноситься в реєстр і Ви отримуєте на неї право власності. Звичайно, за покупку телевізора, чи холодильника в магазині запитати підтвердження походження коштів у Вас буде складніше.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Хоча концепція непрямого податкового контролю передбачає також і залучення банків в такий контроль.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Частково ці положення можна сказати що скасовують презумпцію правоти платника податків в частині того, що вважається всі податки сплачені, поки не доведено протележне.
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Проте, скоріш за все не прямі методі податквого контролю будуть просто розцінювати як один із винятків із цього принципу.                    </span>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Article_page2