import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Reglament() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const reglamentTitles = document.querySelectorAll('.join-title');
    const [searchText, setSearchText] = useState('');
    // const [searchTitles, setSearchTitles] = useState([])
    // find title in reglaments
    // useEffect(() => {
    //     setSearchTitles(reglamentTitles);
    // }, [])
    const reglamentData = [{
        title: '1.Umumiy qoidalar.',
        text: <><p>
            <span>1.1.</span> Ushbu musobaqa sun’iy qoplamali stadionda o’tkaziladigan, 5*5 formatdagi <span>mini futbol</span> turniridir.<br />
            <span>1.2.</span> Turnirda 15 yoshdan 45 yoshgacha bo’lgan yigit va erkaklar ishtirok etishi mumkin.
            Shuningdek qonunchiligimiz va tibbiy xulosaga ko’ra ularning futbol musobaqalarida
            ishtirok etishiga <span>moneliklar</span> bo’lmasligi kerak.
        </p>,
            <p><span>1.3.</span> Musobaqani otkazish jarayonida <span>O’zbekiston</span> Respublikasi Konstitutsiyasi va qonunlariga,
                O’zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, <span>O’zbekiston</span> Respublikasi
                Prezidentining Farmonlari, qarorlari va farmoyishlariga, <span>O’zbekiston</span> Respublikasi Vazirlar
                Mahkamasining qarorlari va farmoyishlariga, mazkur Nizomga hamda boshqa qonun
                hujjatlariga amal qilinadi.</p>
            <p>
                <span>1.4.</span> Musobaqaning asosiy <span>maqsadi</span> - yoshlarni mini futbol sport turiga jalb qilish, hamda
                pirovardida, sog’lom turmush tarzini shakllantirish, mini futbol sport turini
                ommaviylashtirish va uni yanada <span>rivojlantirish.</span>
            </p>
            <p>
                <span>1.5.</span> O’sib kelayotgan <span>yosh avlodni</span> jismoniy rivojlanishini takomillashtirish.
            </p>
        </>
    },
    {
        title: '2. Musobaqani tashkil etish, unga rahbarlik qilish va boshqa tashkiliy masalalar',
        text: <>
            <p>
                <span>2.1.</span> Musobaqani o’tkazishga umumiy rahbarlik Jomboy tumani futbolida o’ziga yarasha obro’-
                e'tiborga ega, professional va yarim professional jamoalarda faoliyat yuritgan, futbol qonun
                qoidalari haqida to’liq tushunchaga ega bir necha kishidan tashkil topgan <span>“BOSHQARUV
                    KENGASHI"</span> ( keyingi o’rinlarda <span>KENGASH</span>) tomonidan amalga oshiriladi. Shuningdek
                hakamlar va ishtirokchi jamoalar <span>sardorlari</span> ham avtomatik ravishda <span>KENGASH </span>a’zolari
                hisoblanishadi.
            </p>
            <p>
                <span>2.2.</span> BORSHQARUV KENGASHI a’zolari o’zaro kelishgan holda <span>KENGASH</span> tarkibidan bir
                kishini ma’lum muddatga musobaqa <span>DIREKTORi</span> lovozimiga saylaydilar. Musobaqa
                direktori (keyingi o’rinlarda direktor) tushunchasi, vazifasi, majburiyat va huquqlari
                quyidagilardan iborat:
                <span>
                    <p>
                        2.2.1. Direktor kengash a’zolari tomonidan 1 yil muddatga saylanadi. Bir kishi ketma ket
                        ikkinchi marta saylanish huquqisiz umumiy hisobda 5 martagacha saylanishi mumkin.
                    </p>
                    <p>
                        2.2.2. Direktor, kengash va musobaqa ishtirokchilarining boshqa tashkilotlar bilan muzokara,
                        suhbat va kelishuvlarda birlamchi bosh vakili sifatida e’tirof etiladi.
                    </p>
                    <p>
                        2.2.3. Direktor kengash va hakamlar qo’mitasining barcha intizomiy qarorlarini tasdiqlash
                        yoki inkor etish huquqiga ega.U intizomiy qarorlar chiqarishda barchadan umumiy ustunlik
                        holatiga ega.
                    </p>
                    <p>
                        2.2.4. Direktor musobaqa taqvimini o’zgartirish, o’yinlarni qoldirish (reglamentda ko’rsatilgan
                        holatlardan chiqmagan holda)huquqiga ega.
                    </p>
                    <p>
                        2.2.5. Direktor musobaqa rivoji yo’lida yangi tashabbuslar, qonun va qoidalar olib kirish
                        huquqiga ega.
                    </p>
                    <p>
                        2.2.6. Direktor uchrashuvlarga to’g’ridan to’gri hakamlarni tayilash yoki musobaqa bosh
                        hakamini tayinlab, u bilan birgalikda uchrashuvlarga hakamlar tayinlash huquqiga ega.
                    </p>
                    <p>
                        2.2.7. Fors major holatlarda derektordan tashqari hisoblaganda kengash a’zolarining umumiy
                        70 % dan ortiq ovozi musobaqa direktorini lavozimidan chetlatish uchun yetralidir. Bu
                        holatda yangi saylangan direktor musobaqa uchrashuvlari umumiy 50 % dan ortiq turlarda
                        lavozimda ishlasa, “1 yil ishladi” deb hisoblanadi va keyingi yilda qayta saylana olmaydi.
                        Boshqa holatda “vaqitcha vazifa bajaruvchi” maqomida bo’lib, yangi mavsumda qayta
                        saylanish vakolatiga ega
                    </p>
                </span>
            </p>
            <p>
                <span>2.3.</span> Musobaqalarni <span>adolatli</span> va shaffof holda o’tkazilishi <span>KENGASH</span> va hakamlar zimmasiga
                yuklatiladi. Direktor bu holatni nazorat qiladi.
            </p>
            <p>
                <span>2.4.</span> Tashkiliy, intizomiy qarorlar <span>KENGASH</span> a’zolari tomonidan o’zaro kelishuv – maslahat
                asosida qabul qilinadi. Intizomiy masalalarda hakamlarning fikri boshqa a’zolarga nisbatan
                ustunlikka ega. <span>Direktor</span> qarorlarni o’zgartirish va qo’shimchalar kiritish huquqiga ega.
            </p>
            <p>
                <span>2.5.</span> Jamoalarni moliyalashtirish bevosita talabnoma topshirgan <span>jamoa a'zolari</span> tomonidan
                amalga oshiriladi.
            </p>
        </>
    },
    {
        title: '3. Musobaqani o’tkazish joyi, shakli va muddati.',
        text:
            <>
                <p>
                    <span>3.1.</span> Musobaqa <span>MAHALLIY PRIMYER LIGA</span>(bundan keyingi o’rinlarda <span>MPL</span>) deb
                    nomlanadi. <span>MPL</span> minimum 10 jamoa ishtirokida 2 davrali tizimda o’tkaziladi. Davralar
                    orasida kengash qaroriga muvofiq 2 xaftadan 4 xaftagacha tanaffus e’lon qilinishi mumkin.
                </p>
                <p>
                    <span>3.2.</span> Xar xafta bitta tur o’yinlari o’tkaziladi. Uchrashuvlar dam olish kunlari (<span>shanba</span> yoki
                    <span>yakshanba</span> kuni) o’tkaziladi
                </p>
                <p>
                    <span>3.3. MPL</span> markazlashgan holatda, oldindan belgilangan <span>bitta</span> stadionda o’tkaziladi.
                </p>
                <p>
                    <span>3.4. MPL</span> xaftaning oldindan belgilangan kunlarida <span>kalendar</span> asosida, ketma-ketlik bilan
                    o’tkaziladi.
                </p>
                <p>
                    <span>3.5. MPL</span> 13 (14)-may kuni start oladi. Bir necha kun oldin <span>KENGASH</span> va ishtirokchi jamoalar
                    a'zolaridan xoxlovchilar ishtirokida <span>qur'a</span> tashlash marosimi bo’lib o’tadi. Jarayonda ochiqlik
                    va oshkoralikni ta'minlash maqsadida imkon qadar <span>onlayn</span> translyatsiya yo’lga qo’yiladi.
                </p>
            </>
    },
    {
        title: '4. Musobaqada ishtirok etish shartlari. Jamoalarni ro’yxatdan o’tkazish.',
        text: <>
            <p>
                <span>4.1.</span> <span>MPL</span>da 15 yoshdan 45 yoshgacha bo’lgan erkaklardan tuzilgan jamoa qatnashishi
                mumkin.
            </p>
            <p>
                <span>4.2.</span> Jamoalar musobaqada qatnashish uchun tashkilotchilarga <span>TALABNOMA</span> (zayavka)
                topshirishi lozim.
            </p>
            <p>
                <span>4.3.</span> Musobaqa uchun jamoalar maksimum 10-12 ta futbolchi va bitta jamoa mas'ul xodimi
                (rahbar)ni ro’yxatdan o’tkazishi mumkin. <span>Mas’ul xodim maydonda to’p surishi taqiqlanadi.
                    Agar mas’ul xodim bir vaqtda futbolchi sifatida ham ro’yxatdan o’tkazilgan bo’lsa
                    maydonga tushishi mumkin.</span>
            </p>
            <p>
                <span>4.4.</span> <span>MPL</span>da qatnashish uchun jamoalar KENGASHga quyidagi hujjatlarni taqdim etishi shart:
                - o’rnatilgan shakldagi futbolchilar va rahbarning ism familiyasi ro’yxati va <span>100*100</span> px
                o’lchamdagi <span>jpeg</span> formatdagi rasmi
                - har bir ishtirokchining tibbiy ko’rikdan o’tkazilib, musobaqada ishtirok etish uchun ruxsat
                berilganligi to’g’risidagi (imzo va muhr bilan tasdiqlangan holda) ma’lumotnoma
            </p>
            <p>
                <span>4.5.</span> Musobaqada professional futbolchilar qatnashishi taqiqlanadi. Bunda quyidagi holatlar
                nazarda tutiladi:
                <i>
                    <p>a) O’zbekiston PFLning superliga, proliga va birinchi ligasida faoliyat yuritayotgan jamoalar
                        tomonidan ro’yxatdan o’tkazilgan futbolchilar professional futbolchilar maqomida
                        hisoblanadi. Shuningdek ushbu musobaqalarning O’rinbosarlar, U21chempionatlarida
                        ishtirok etganlar ham professional maqomda bo’ladi. U19 va undan kichik yosh toifasidagi
                        jamoalar, shuningdek futbol akademiyalari, viloyat terma komandalari tarkibiga kirgan 19
                        yoshdan kichik toifadagi futbolchilar ushbu musobaqada ishtirok etishi mukin.</p>
                    <p>b) PFL musobaqasida mavsum boshi yoki o’rtasida ro’yxatdan o’tgan futbolchi kamida 6 oy
                        professional maqomida hisoblanadi</p>
                    <p>c) Ro’yxatdan o’tganiga 6 oydan oshgan va (yoki) turli rasmiy saytlar orqali jamoani tark
                        etganligi ko’rsatilgan futbolchi professional maqomida bo’lmaydi</p>
                    <p>d) Ro’yxatdan o’tganiga 6 oydan oshgan, shuningdek o’z jamoasi tarkibida so’nggi marta
                        maydonga tushganiga 6 oydan oshgan bo’lsa professional maqomida bo’lmaydi</p>
                    <p>e) Yuqoridagi d band bo’yicha ushbu musobaqada ro’yxatdan o’tkazilgan davrda:
                        1. Futbolchi ro’yxatdan o’tgan professional jamoasi tarkibida maydonga tushsa, ushbu
                        (bizning) musobaqa qaydnomasiga kiritilgan barcha o’yinlarda ishtirokchi jamoaga texnik
                        mag’lubiyat yoziladi. Shuningdek bu futbolchi musobaqadan chetlashtiriladi. O’rniga
                        boshqa futbolchini ro’yxatdan o’tkazishga (transfer davri bo’lmasa) yo’l qo’yilmaydi.
                        2. Futbolchi ro’yxatdan o’tgan professional jamoasi tarkibida maydonga tushsa, ushbu
                        (bizning) musobaqa qaydnomasiga kiritilmagan o’yinlar uchun ishtirokchi jamoaga texnik
                        mag’lubiyat yozilmaydi. Shuningdek bu futbolchi musobaqadan chetlashtiriladi. O’rniga
                        boshqa futbolchini ro’yxatdan o’tkazishga (transfer davri bo’lmasa) yo’l qo’yilmaydi.
                        f) Boshqa davlatlar professional ligalarida faoliyat yuritganlarga ham yuqoridagi holatlar
                        taalluqli</p>
                </i>
            </p>
        </>
    },
    {
        title: '5. Stadion va uchrashuv o’tkazishga bo’lgan talablar. Mezbon jamoa vazifalari.',
        text: <>
            <p>
                <span>5.1.</span> Uchrashuvlar o’tkaziladigan stadion sun'iy qoplamali, <span>20*40</span> m o’lchamli bo’lishi kerak.
                Holati, <span>yoritish tizimi</span> va <span>sifati</span> yaxshi bo’lishi maqsadga muvofiq.
            </p>
            <p>
                <span>5.2.</span> Mezbon jamoa stadionni oldindan tuzilgan <span>MPL</span> kalendari asosida haftaning ayni kuni va
                ayni soatiga tayyor qilishi kerak. Bunda mezbonlar kalendar va uchrashuv boshlanish
                vaqtlarini <span>o’zgartirish</span> vakolatiga ega emas
            </p>
            <p>
                <span>5.3.</span> Mezbon jamoa tomonidan uchrashuvlar o’tkazilishiga xalaqit qiluvchi ehtimoliy omillarga
                (masalan, elektr ta'minoti uzilishiga) qarshi zaruriy <span>choralar</span> ko’rilishi kerak.
            </p>
            <p>
                <span>5.4.</span> O’yinda ishtirok etadigan ikkala jamoaning <span>zaxira</span> o’rindig’i oldida ichimlik suvi bo’lishi
                kerak.
            </p>
            <p>
                <span>5.5.</span> Ikki raqib jamoa formalari bir xil rangli bo’lib qolishini oldini olish maqsadida 5 dona bir
                xil <span>rangli</span> nakidka tashkil qilinishi maqsadga muvofiq
            </p>
            <p>
                <span>5.6.</span> O’yin uchun 2 dona 4 lik to’p bo’lishi kerak.
            </p>
            <p>
                <span>5.7.</span> Imkon darajasida uchrashuvlar natijasi haqida <span>TELEGRAM</span> tarmog’i orqali onlayn
                ma'lumotlar berib borilishi maqsadga muvofiq.
            </p>
            <p>
                <span>5.8.</span> Har bir uchrashuvdan fotolavhalar olib, <span>TELEGRAM</span> tarmog’idagi MPL kanaliga
                joylashtirib borilishi maqsadga muvofiq. Bunda <span>rasmlar</span> o’yindan oldin jamoaviy va o’yin
                jarayonlarida portret xolida, sifatli <span>kameraga ega telefon</span> orqali tushirilishi tavsiya shaklida
                kiritiladi.
            </p>
        </>
    },
    {
        title: "6. Musobaqa o’tkazish shartlari, o’yinning ba'zi qoidalari.",
        text: <>
            <p><span>6.1.</span> O’yinlar <span>FIFA</span> ning minifutbol (futzal) qoidalari asosida o’tkaziladi</p>
            <p>
                <span>6.2.</span> Maydonda <span>yalang oyoq</span>, tuflida yoki tagi tishli butsada o’ynashga ruxsat berilmaydi.
                <span>Tishlari</span> kalta qilingan butsa xam shu jumladan.
            </p>
            <p>
                <span>6.3.</span> Istisno tarzda jamoa a'zolari tomonidan maydonning istalgan qismidan o’z jamoasi
                darvozaboniga to’p oshirilishi cheksiz qilib belgalangan
                <i> Bunda darvozabon maydonning o’z
                    darvozasi tomonidagi yarim qismida to’p bilan uzluksiz <span>5</span> sekunddan ortiq harakatda bo’lishi
                    mumkinmas.
                </i>
            </p>
            <p>
                <span>6.4.</span> Darvozabonlar o’z jamoadoshi tomonidan ongli tarzda berilgan uzatmani <span>ushlashi
                    mumkinmas</span>
            </p>
            <p>
                <span>6.5.</span> O’yin vaqtida zaxira o’rindig’ida qaydnomaga kiritilgan futbolchilar va jamoa rahbari yoki
                murabbiyi bo’lishiga <span>ruxsat beriladi.</span> Shuningdek stadion hududida mezbon jamoa tomonidan
                tayinlangan <span>fotograf</span> xarakatlanishiga ruxsat etiladi. Bunda ushbu shaxs o’yinning borishi va
                zaxiradagilarga xalaqit <span>qilmasligi</span> kerak.
            </p>
            <p>
                <span>6.6. MPLning</span> barcha bahslari aylanma (krugovoy) tartibda o’tkaziladi.
            </p>
            <p>
                <span>6.7.</span> O’yinlarning davomiyligi va maydonning o’lchamlari quyidagicha:<br />
                <span>-</span> o’yin ikkita ( 25 daqiqalik) taymdan iborat bo’lib taymlar orasidagi <span>tanaffus</span> 5 daqiqadan
                iborat:<br />
                <span>-</span> maydonning o’lchami – 20x40 metr:<br />
                <span>-</span> darvoza o’lchami: <span>3x2</span> metr.
            </p>
            <p>
                <span>6.8.</span> Har bir jamoa ma'lum rangli minimum <span>bir komplekt</span> libosga ega bo’lishi kerak.
            </p>
            <p>
                <span>6.9.</span> Barcha ishtirokchilarda shitkilar, getralar, sport poyafzallari, sport liboslari bo’lishi shart.
                Futbolchilar uchrashuv <span>qaydnomasida qayd</span> etilgan raqamlar asosida maydonda xarakat
                qilishlari shart
            </p>
            <p>
                <span>6.10.</span> Zaruriyat va e'tiroz bo’lgan vaqtda <span>KENGASH</span> a'zolari va uchrashuv bosh xakami
                <span>maydonga</span> chiqish oldidan belgilangan tartib asosida futbolchilarnig xujjatlarini tekshirishi
                mumkin.
            </p>
            <p>
                <span>6.11.</span> To’p maydon tashqarisiga chiqib ketgan (ot vorot) xolatda, <span>darvozabon</span> uni qo’l bilan
                o’yinga <span>kiritishi</span> lozim
            </p>
            <p>
                <span>6.12.</span> O’yin qoidasi buzilganda yoki standart holatlar (aut, korner)da jamoa <span>xakam</span> xushtagini
                kutmasdan o’yinni boshlash mumkin. Bunda to’p qoida belgilangan nuqtadan, qo’l bilan
                avval teginib keyin o’yinga kiritilishi kerak. <span>Qoida</span> buzilgan nuqtadan o’yin boshlangani yoki
                boshqa nuqta ekanligini hal qilish xakam ixtiyorida. Xakam to’p boshqa nuqtadan kiritildi
                deb hisoblasa, <span>xushtak</span> orqali qaytadan boshlashga undaydi. To’pni o’yinga kiritishda
                raqiblar to’p yo’lini to’sish orqali xalaqit qilishi mumkin. Bu xarakat o’yin qoidasi
                <span>buzilmagan</span> deb xisoblanadi. Agar to’pni o’yinga kiritishi kerak bo’lgan jamoa xakamdan
                raqiblar to’pdan uzoqlashishi xaqida so’rasa, <span>5 metr</span> masofada jonli devor surilib, to’p xakam
                xushtagidan so’ng o’yinga kiritiladi.
            </p>
            <p>
                <span>6.13.</span> Uchrashuv davomida futbolchi almashtirish cheklanmagan (zaxiraga chiqqan futbolchi
                qaytib maydonga tushishi mumkin). <span>Almashtirilayotgan</span> futbolchi maydonning o’z darvozasi
                joylashgan qismida <span>zaxira</span> o’rindig’i tomonidan chiqishi kerak. Maydonga tushayotgan
                <span>futbolchi</span> ham ayni shu tomondan o’yinga qo’shiladi.
            </p>
            <p>
                <span>6.14.</span> Futbolchi almashtirish o’yin davom etayotgan holatda xam bo’lishi mumkin. Faqat bunda
                avval kimdir maydonni tark etgach, <span>zaxira</span> o’yinchisi tushishiga ruxsat beriladi.
            </p>
        </>
    },
    {
        title: '7. Futbolchilar va jamoa rahbarlarining javobgarligi',
        text: <>
            <p><span>7.1.</span> Musobaqa ishtirokchilari <span>KENGASH</span> qarorlariga va ushbu nizomga qat'iy rioya qilishlari
                shart.
            </p>
            <p>
                <span>7.2.</span> Jamoalarning rasmiy rahbarlari xakamlar hamda xakamlar xay'atining ishiga mutlaqo
                aralashmasliklari lozim va o’z jamoasi a'zolarining <span>yurish-turishlariga</span>, futbolchilarning
                xulqiga javobgar shaxs hisoblanishadi.
            </p>
            <p>
                <span>7.3.</span> Maydon uchun to’lovni jamoa sardori o’yin <span>boshlanishidan</span> oldin yig’ib berishi kerak.
            </p>
            <p>
                <span>7.4.</span> Sardorlar o’z jamoasi tarkibida faqat ro’yxatdan <span>o’tgan</span> va diskvalifikatsiya qilinmagan
                <span>futbolchilar</span> maydonga tushishini nazorat qilishi lozim. Va bunga to’g’ridan to’g’ri
                javobgardir.
            </p>
        </>
    },
    {
        title: '8. Xakamlik.',
        text: <>
            <p>
                <span>8.1.</span> O’yinlar <span>FIFA</span> ning minifutbol qoidalari va nizom <span>asosida</span> boshqariladi.
            </p>
            <p>
                <span>8.2.</span> Musobaqaga bosh xakamni va xakamlarni tayinlash <span>KENGASH</span> tomonidan amalga
                oshiriladi. Bunda <span>hakamlikka</span> jamoalar orasida hurmatga ega, <span>futbol</span> qonun qoidalaridan
                xabardor kishi tanlanishi maqsadga muvofiq.
            </p>
            <p>
                <span>8.4.</span> O’yin davomida gol urgan, ogohlantirish va jaroxat olgan, maydondan chetlatilgan
                <span>futbolchilarni</span> xamda maydonda aniqlangan kamchiliklar <span>to’g’risida</span> bosh xakam uchrashuv
                qaydnomasiga yozib <span>qo’yishi</span> maqsadga muvofiq.
            </p>
            <span>8.5.</span> Uchrashuv xakamlari uchrashuvdan oldin <span>jamoalar</span> qaydnomasiga kiritilgan yoki
            <span>diskvalifikatsiya</span> qilingan futbolchilarni aniqlash majburiyatini olmaydi.
        </>
    },
    {
        title: '9. O’yin qoldirilish holatlari.',
        text: <>
            <p>
                <span>9.1.</span> Tuman, viloyat va respublika miqyosidagi rasmiy turnirlarda 3 nafar a’zosi ishtirok etgan
                <span>jamoaning</span> o’yini qoldiriladi. Bunda quyidagilar inobatga olinadi:<br />
                <i>
                    a) Rasmiy turnir markazlashgan va qisqa muddatli (masalan barcha bosqich o’yinlari 1 xaftada
                    o’tkazilib tugatiladigan, lekin o’yinlar orasidan dam olish kunlari bo’ladigan turnir) bo’lsa,
                    musobaqa boshlanishidan bir kun oldin va musobaqa tugaguncha yoki jamoaning oxirgi
                    o’yindan keyingi yana 1 kun mobaynida bo’lagan muddatda LIGA uchrashuvini qoldirish
                    huquqiga ega.<br />
                    b) Rasmiy turnir markazlashgan va qisqa muddatli bo’lmasa, faqat rasmiydan bir kun oldin va
                    o’yin bo’ladigan kuni MPL uchrashuvini qoldirish huquqiga ega. Agar rasmiy musobaqa
                    boshqa viloyatda o’tkazilib, jamoa safarga chiqadigan bo’lsa o’yindan keyingi bir kun ham
                    uchrashuv qoldirilishiga asos bo’ladi.<br />
                    c) Kasaba uyishmalari, tashkilotlar tomonidan rasmiy maqomida bo’lmagan, lekin kamida
                    voloyat miqyosidagi musobaqalar o’tkazilishi ham KENGASH qaroriga asosan rasmiy
                    musobaqaga tenglashtirilishi mumkin.
                </i>
            </p>
            <p>
                <span>9.2.</span> Uchrashuvlar <span>KENGASH</span> qaroriga asososan, turli baxtsiz hodisalar, tabiiy ofatlar va shu
                kabi <span>holatlarda</span> qoldirilishi mumkin.
            </p>
            <p>
                <span>9.3.</span> Uchrashuvni qoldirish to’g’risida <span>jamoa</span> vakili (sardori) kamida 2 kun oldin KENGASHga
                murojaat qilishi lozim. <span>Murojaatda</span> uchrashuvni qoldirish <span>uchun</span> asos keltirilishi kerak.
            </p>
        </>
    },
    {
        title: '10. Transferlar.',
        text: <>
            <p>
                <span>10.1.</span> Birinchi va ikkinchi davralar orasida <span>jamoalar</span> 2 ta yangi futbolchini ro’yxatdan o’tkazishi
                mumkin. Bunda 2 ta <span>boshqa o’yinchini</span> ro’yxatdan chiqarishi kerak bo’ladi.
            </p>
            <p>
                <span>10.2.</span> Ro’yxatdan o’tkazish muddati 1-davra <span>so’nggi</span> turidan keyin 2-davra dastlabki turi
                <span>boshlanishiga</span> 1 kun qolgungacha bo’lgan <span>muddatni</span> o’z ichiga oladi. Yangi ro’yxatdan
                o’tkazilgan o’yinchilar,shuningdek tarkibdan chiqarilgan futbolchi jamoaning 2-davra
                <span>boshlangandan</span> keyingi 1-davrada qoldirilgan o’yinlarida ishtirok etish huquqida ega emas.
                Shu bilan birga, <span>jamoadan</span> ketgan futbolchi ham ikkinchi davra boshlangach, 1-davra
                qoldirilgan <span>o’yinida</span> qatnasha olmaydi.
            </p>
        </>
    },
    {
        title: "11. Fors-major holatlar, futbolchilarning ogohlantirilishi, chetlatishlar va ziddiyatli masalalar. ",
        text: <>
            <p>
                <span>11.1. Jamoalarning jazolanishi:</span><br />
                <span>a.</span> Uchrashuvga uzrli sababsiz 15 daqiqadan ortiq kech qolgan jamoaga texnik mag’lubiyat
                yoziladi. Raqib jamoaga esa texnik g’alaba beriladi. Bunda sababsiz uchrashuvga kelmagan
                jamoaga (- : +) hisobida texnik mag’lubiyat yoziladi. Raqib jamoaga esa <span>(+ : -)</span> hisobida
                texnik g’alaba beriladi. Bu holat to’plar nisbatiga qo’shib hisoblanmaydi. Jamoalarning
                o’zaro kelishuvi yoki bir birini “tushunishi” hakamlar tomonidan inobatga olinmaydi. Texnik
                mag’libiyat yoziladi. <i>Jamoalarning kechikkanligini va texnik mag’lubiyat yozilishini bevosita
                    bosh hakam qayd etishi lozim.</i><br />
                <span>b.</span> Agarda ikkala jamoa sababsiz uchrashuvga 20 daqiqadan ortiq kech qolsa, unda ikkala
                jamoaga xam texnik mag’lubiyat yoziladi<br /> <span>(yani OCHKO berilmaydi)</span>. Jamoalarning o’zaro
                kelishuvi yoki bir birini “tushunishi” hakamlar tomonidan inobatga olinmaydi. Texnik
                mag’libiyat yoziladi. <i>Jamoalarning kechikkanligini va texnik mag’lubiyat yozilishini bevosita
                    bosh hakam qayd etishi lozim.</i><br />
                <span>c.</span> Uchrashuvni davom ettirishdan bosh tortgan, hamda o’yin yakunlanmasdan maydonni tark
                etgan jamoa yoki chetlatilgan futbolchisi (yoki bir necha futbolchisi) maydondan chiqishni
                istamagan jamoaga texnik mag’lubiyat yoziladi. Raqib jamoaga esa texnik g’alaba yoziladi.<br />
                <span>d.</span> Diskvalifikatsiya qilingan, uchrashuv qaydnomasida qayd qilinmagan yoki musobaqada
                qatnashish uchun ro’yxatdan o’tmagan lekin uchrashuv qaydnomasiga kiritilgan futbolchi
                uchrashuvda ishtirok etsa, bu jamoaga texnik mag’lubiyat yoziladi. Raqib jamoaga esa texnik
                g’alaba beriladi.<br />
                <span>e.</span> Musobaqa davomida uch marotaba uzrli sababsiz o’yinlarga vaqtida yetib kelmagan jamoani
                musobaqadan chetlatish masalasi KENGASH kun tartibiga olib chiqiladi. Yakuniy qarorni
                KENGASH qabul qiladi. Bu masalada atayin o’yinga kelmaslik holatlarini (sun’iy)
                tashkillashtirgan futbolchilarning keyingi musobaqalarda (shu bilan birga boshqa jamoa
                tarkibida bo’lsa ham) ishtirok etishi masalasi ko’rib chiqiladi.<br />
                <span>f.</span> Jamoalardan biri MPLda ishtirok etishdan bosh tortsa, KENGASH tomonidan yig’ilgan
                a’zolik badali kompensatsiya maqsadida qaytarib berilmaydi.<br />
                <span>g.</span> Jamoalardan birining qonun qoidalarni qo’pol buzishi yoki boshqa jamoa tomonidan
                shikoyat bildirilishi ortidan KENGASH tomonidan ushbu jamoa LIGAdan chetlatilishi
                mumkin.
            </p>
            <p>
                <span>11.2. Futbolchilarning jazolanishi:</span><br />
                <span>a.</span> O’tkazilayotgan uchrashuv mobaynida ikki marta ogohlantirilgan (ketma ket ikki marta sariq
                olgan) futbolchi ushbu va navbatdagi uchrashuvni o’tkazib yuboradi. To’g’ridan-to’g’ri
                qizil kartochka olgan (shuningdek dastlab sariq olib, ortidan to’gridan tog’ri qizil kartochka
                olgan) futbolchi navbatdagi ikkita o’yinni o’tkazib yuboradi.<br />
                <span>b.</span> Maydondan chetlatilgan futbolchi o’rniga 2 minutdan so’ng boshqa futbolchi o’yinni davom
                ettirishi mumkin.<br />
                <span>c.</span> Maydondan chetlashtirilgan futbolchi va murabbiy (mas’ul xodim) keyingi o’yinni o’tkazib
                yuborishi bilan birga, uning kelgusi uchrashuvlardagi ishtiroki KENGASH va xakamlar
                tomonidan ko’rib chiqiladi.<br />
                <span>d.</span> Uchrashuv mobaynida va undan keyin qasddan qo’pol harakatlar amalga oshirilishi
                quyidagicha ko’rib chiqiladi:<br />
                <i>
                    1. Uchrashuv davom etayotgan holatda raqibga jaroxat yetkazish maqsadida atayin o’ta qo’pol
                    harakat qilinishi to’g’ridan to’g’ri qizil va 3-5 ta o’yingacha chetlashtiriladi,<br />
                    2. Uchrashuv davom etayotgan holatda raqibga jaroxat yetkazish maqsadida qasddan atayin
                    o’ta qo’pol harakat qilinishi to’g’ridan to’g’ri qizil va 5-8 ta o’yingacha chetlashtiriladi,<br />
                    3. Uchrashuv hakam xushtagi orqali to’xtatilgan holatda raqibga nisbatan agressiv harakat
                    qilish to’g’ridan to’g’ri qizil va 3-8 ta o’yingacha chetlashtiriladi,<br />
                    4. Uchrashuv hakam xushtagi orqali to’xtatilgan holatda raqibga nisbatan qasddan jarohat
                    yetkazish maqsadida harakat qilish to’g’ridan to’g’ri qizil va 5-15 ta o’yingacha
                    chetlashtiriladi,<br />
                    5. Uchrashuv hakam xushtagi orqali to’xtatilgan yoki o’yin tugagan holatda raqibni
                    do’pposlash, janjal keltirib chiqarish to’g’ridan to’g’ri qizil va musobaqadan chetlashtiriladi,<br />
                    6. Uchrashuv hakam xushtagi orqali to’xtatilgan yoki o’yin tugagan holatda raqibni
                    do’pposlash, ommaviy janjal keltirib chiqarish jamoani musobaqadan chetlashtiriladi,
                </i><br />
                <span>e.</span> Jami sariq kartochkalari 4 taga yetgan futbolchi navbatdagi turni o’tkazib yuboradi. Bir
                o’yinda 2 ta sariq olib maydonni tark etsa, ushbu sariq kartochkalar qayta hisoblanmaydi. Bir
                o’yinda sariq, undan keyin to’g’ridan to’g’ri qizil olib maydonni tark etsa, olingan sariq
                kartochka umumiy songa qo’shib hisoblanadi.<br />
                <span>f.</span> Navbatdagi o’yin deganda jamoaning ketma ketlikdagi o’yinlari tushuniladi, bunda
                qoldirilgan o’yin ham navbatdagi o’yin qatoriga kiritiladi. Faqat kubok bahslari bundan
                mustasno, chunki kubok bahslarida chempionat ishtirokchilaridan tashqari boshqa jamoalar
                ham ishtirok etishi mumkin. Shuning uchun kubok va chempionat uchrashuvlari
                kartochkalari bir biriga ta’sir etmaydi.<br />
                <span>g.</span> O’yin davom etayotgan vaqtda futbolchi almashtirish amalga oshirilayotgan bo’lsa,
                maydonga tushayotgan futbolchi jamoadoshi maydondan chiqmasdan o’yinga qo’shilsa
                (bunda bir vaqtda maydonda 6 ta a'zo bor deb hisoblanadi), o’yinga qo’shilgan futbolchiga
                sariq kartochka beriladi. Almashinuv boshqatdan o’tkaziladi. Ushbu holatda sariq olgan
                o’yinchi uchun bu kartochka shu o’yindagi ikkinchi sariq bo’lsa, avtomatik qizilga aylanadi
                va o’yinni davom ettira olmaydi. Lekin futbolchining sarig’i zaxira o’rindig’idagi sariq deb
                qabul qilinadi va uning jamoadoshlari 2 minut bir kishi kam bo’lib o’ynash jazosi tadbiq
                etilmaydi.<br />
                <span>h.</span> Futbolchining uchrashuv davomidagi har qanday sabab tufayli futbolka yoki shortigini
                yechib harakatlanishi sariq kartochka bilan jazolanadi.<br />
                <span>i.</span> Jamoadoshi tomonidan ongli ravishda berilgan uzatmani ushlab olgan darvozabonga sariq
                kartochka beriladi, to’p ushlangan nuqtadan erkin (svobodny) zarba belgilanadi. Agar
                belgilangan nuqta darvoza chizig’igacha 5 metrdan kam bo’lsa, nuqta maydon markaziga
                tomon vertikal tarzda 5 metr masofa bo’lgunga qadar suriladi.<br />
                <span>j.</span> Agar darvozabon to’pni maydonga qo’yib oyoq bilan boshlashga xarakat qilsa, bunda jarima
                belgilanmaydi, xakam darvozabonga qaytadan o’yinga kiritishni talab qiladi. Bu hol ongli
                ravishda bir necha marotaba takrorlansa, xakam bu holatni atayin ongli ravishda yoki vaqt
                cho’zish uchun qilindi deb xisoblasa, darvozabonga sariq yoki ikkinchi sariq berish xuquqiga
                ega bo’ladi.
            </p>
            <p>
                <span>11.3. Ziddiyatli holatlar</span><br />
                <span>a.</span> Agar tur uchrashuvlari yakuniga yetmay qolsa, 2 davrali tizimda 1-davradagi qoldirilgan
                o’yinlar 2-davra boshlangungacha o’tkazilishi maqsadga muvofiq, 2-davradagi qoldirilgan
                o’yinlar so’nggi ikki turdan oldin o’tkazilishi shart.<br />
                <span>b.</span> O’yinda bahs munozaraga sabab bo’ladigan holat kuzatilib o’yin to’xtaydigan bo’lsa (bunda
                hakamning inson faktori inobatga olingan xolda vaziyatni to’liq ko’rmagan deb qabul
                qilinadi);<br />
                <i>
                    <span>-</span> videomaterial bo’lsa, hakamlar videomaterialni ko’rib chiqishi va qarorini o’zgartirishi
                    mumkin.
                    <span>-</span> hakam KENGASH bilan maslaxatlashgan holda o’z qarorini o’zgartirishi mumkin.
                </i><br />
                <span>c.</span> O’yindagi bahsli vaziyatda jamoa sardori yoki jamoa rahbari tomonidan faqat 1 marta
                KENGASHga holatni baxolash haqida taklif kiritishi mumkin. Bunda KENGASH qarori
                xakam qaroridan ustun bo’ladi.<br />
                <span>d.</span> Hakamda baxsli vaziyat yuzasidan aniq bir to’xtam bo’lmaganda KENGASHga murojaat
                qilib qaror chiqarish huquqi bor. Bu holat bir o’yin davomida 2 martadan oshmasligi kerak.<br />
                <span>e.</span> Hakam xatosi tufayli uchrashuv belgilangan vaqtdan ancha erta yakunlansa, uchrashuvni
                o’ynalmay qolgan qismini davom ettirish masalasi kengash tomonidan hal qilinadi.<br />
                <span>f.</span> Agar biror ishtirokchi jamoa musobaqaning jami uchrashuvlar sonining 50 % ini
                o’tkazmagan holatda musobaqadan chiqib ketsa, ushbu o’yinlar natijalari bekor qilinadi.
                Jamoalarga hisoblangan ochkolar, gollar olib tashlanadi, kartochkalar va
                diskvalifikatsiyalar (tartibni saqlash, turli fors major holatlarni oldini olish maqsadida) o’z
                kuchida qoldiriladi. Bunda jamoaning olingan texnik mag’lubiyatlari ham o’tkazilgan
                uchrashuvlar qatorida bo’ladi.<br />
                <span>g.</span> Agar biror ishtirokchi jamoa musobaqaning jami uchrashuvlar sonining 50 % va undan ko’p
                qismini o’tkazgan holatda musobaqani tark etsa, bu uchrashuvlar natijalari o’z kuchida
                qoldiriladi. Keyingi turlarda ushbu jamoa bilan uchrashuv o’tkazishi kerak bo’lgan jamoaga
                texnik g’alaba (+:-) beriladi.<br />
                <span>h.</span> Agar ikkinchi davra startigacha ikki va undan ortiq jamoa musobaqani tark etsa, kengash
                tomonidan ikkinchi davra uchun qaytadan qur’a tashlash masalasi ko’rib chiqiladi.
            </p>
        </>
    },
    {
        title: "12. E'tiroz bildirish tartibi.",
        text: <>
            <p>
                <span>12.1.</span> E'tiroz bildirayotgan murabbiy yoziladigan e'tiroz <span>to’g’risida</span> raqib jamoa va bosh
                xakamni <span>avvaldan</span> ogoxlantirishi lozim.
            </p>
            <p>
                <span>12.2.</span> Jamoa sardori <span>(KENGASH a’zosi)</span> e'tirozni uchrashuv yakunlangandan keyin 12 soat
                davomida <span>KENGASH</span> xay'atiga yuborishi lozim. Belgilangan vaqtdan o’tib yuborilgan
                e'tiroz qabul qilinmaydi. Bunda diskvalifikatsiya qaydnomaga kiritilmagan yoki noto’g’ri
                <span>kiritilgan</span> e’tiroz yoki xatolik vaqt qoplipiga solinmaydi, har doim aktual holatda bo’ladi.
            </p>
            <p>
                <span>12.3.</span> E'tiroz yozgan tomon, u yerda yozilgan barcha <span>fakt</span> va raqamlarni isbotlab berish kerak.
            </p>
            <p>
                <span>12.4.</span> E'tiroz quyidagi xolatlarda ko’rib chiqiladi:<br />
                <i>
                    <span>-</span> uchrashuv qaydnomasiga kiritilmagan futbolchi maydonga tushganida;<br />
                    <span>-</span> oldingi uchrashuvlarda diskvalifikatsiya qilingan futbolchi maydonga tushirilganda<br />
                    <span>-</span> xakamlarni ish faoliyatiga xalaqit qilish va hakamlikni noxolis deb baholaganda.
                </i>
            </p>
            <p>
                <span>12.5.</span> Quyidagi xollarda o’yinning <span>o’zida</span> e'tirozlar ko’rib chiqiladi. Bunda e'tiroz bildirayotgan
                tomon <span>videomaterial</span> taqdim qilganda, ushbu material <span>VAR</span> material sifatida quyidagi
                xollarda ko’rib chiqiladi:<br />
                <i>
                    <span>-</span> xakamlar tomonidan 6 metrlik jarima to’pi belgilanganligi yoki belgilanmaganligi;
                    <span>-</span> gol bo’lgan yoki bo’lmaganligi;
                    <span>-</span> darvoza to’g’ri yoki noto’g’ri ishg’ol qilinganligi;
                    <span>-</span> qasddan jarohat yetkazish xolatlari (raqib futbolchisini xayotiga xavf soladigan tajovuskor
                    xatti-xarakatlar qilinsa, bir nechta o’yindan yoki butun turnirdan chetlatilishi inobatga
                    olinsin)
                    <span>-</span> boshqa xolatlarda videomaterial o’yin payti ko’rib chiqilmaydi.
                    <span>-</span> e'tiroz bildirayotgan tomon xolat sodir bo’lgan videomaterialni ko’rib chiqish uchun xakamga
                    1 minutdan ortiq bo’lmagan vaqt ichida xabar bildirishi kerak.
                </i>
            </p>
        </>
    },
    {
        title: '13. Musobaqani moliyalashtirish manbalari.',
        text: <>
            <p>
                <span>13.1. MPL</span> uchrashuvlarini o’tkazish uchun ijaraga olingan stadion xarajatlari ishtirokchi
                jamoalar hisobidan qoplanadi.
            </p>
            <p>
                <span>13.2.</span> Tur uchrashuvlari uchun qo’shimcha <span>xarajatlar</span> (nakidka, agar dvijok ishlatilsa benzin
                puli, <span>rasmga</span> olish uchun kimnidir yollash xarajatlari) mezbon jamoa xisobidan qoplanadi.
            </p>
            <p>
                <span>13.3.</span> Turli fors-major xolatlarini oldini olish, musobaqaning <span>to’xtab</span> qolmasligini ta'minlash
                uchun jamoalardan oldindan <span>300.000</span> so’mdan pul yig’ib olinadi. <span>KENGASH</span> yig’ib olgan
                ushbu summa <span>stadion</span> xarajatlariga yo’naltiriladi. Agar qaysidir jamoa LIGAda ishtirokini
                to’xtatsa, berilgan <span>summa</span> qaytarilmaydi.
            </p>
        </>
    },
    {
        title: '14.G’olib va turnirni tark etadigan jamoalarni aniqlash.',
        text: <>
            <p>
                <span>14.1.</span> Ushbu musobaqa liga shaklida <span>o’tkazilayotgani</span> va jamoalar aylanma tarzda o’ynashi
                inobatga <span>olinadi</span> (durang natija qayd etilsa ham qo’shimcha daqiqalar belgilanmaydi va
                penaltilar tepilmaydi).
            </p>
            <p>
                <span>14.2.</span> Har bir o’yin natijasi quyidagi miqdorda baholanadi: <span>g’alaba 3 ochko;</span> durrang 1 ochko;
                <span>mag’lubiyat 0 ochko.</span> Jamg’arilgan ochkolarga ko’ra jamoalar <span>egallagan</span> o’rni va g’oliblar
                aniqlanadi.
            </p>
            <p>
                <span>14.3.</span> Texnik g’alaba yoki texnik mag’lubiyatda to’plar nisbati <span>o’zgarmaydi,</span> urilgan va
                <span>o’tkazilgan</span> gollarda o’zgarish bo’lmaydi.
            </p>
            <p>
                <span>14.4.</span> Ikki yoki undan ortiq jamoalarning to’plagan <span>ochkolari</span> bir xil bo’lsa, unda jamoalarning
                <span>musobaqadagi</span> o’rinlari quyidagi ko’shimcha ko’rsatkichlar orqali aniqlanadi:<br />
                <i>
                    <span>-</span> o’zaro uchrashuvlar natijasiga ko’ra:<br />
                    <span>-</span> ogohlantirish kartochkalari soni kamligiga ko’ra, bunda 1 ta qizil kartochka 2 ta sariq
                    kartochka miqdoriga teng deb olinadi.<br />
                    <span>-</span> kiritilgan va o’tkazib yuborilgan to’plar nisbatiga ko’ra:
                </i>
            </p>
            <p>
                <span>14.5.</span> Agar ikki jamoada barcha ko’rsatkichlar teng <span>bo’lib qolsa</span>, shu vaqtning o’zida
                qo’shimcha <span>FINAL</span> o’yini o’tkaziladi.
            </p>
            <p>
                <span>14.6.</span> Mavsum yakunida (keyingi musobaqa uchun qatnashchilar soni 16 taga yetadigan bo’lsa)
                turnir jadvalida so’nggi o’rinni egallagan 4 jamoa quyi ligaga tushib ketadi. Agar ushbu
                jamoalar ichida <span>kubok finalchisi</span> bo’lsa, uning o’rniga pastki 5-jamoa quyi ligaga tushiriladi.
            </p>
        </>
    },
    {
        title: '15. Taqdirlash.',
        text: <>
            <p>
                <span>15.1. MPL</span> g’oliblari oxirgi turda e'lon qilinadi.
            </p>
            <p>
                <span>15.2.</span> So’nggi tur o’yinlaridan keyin <span>MPL</span> g’olibiga ko’chma kubok topshiriladi.
            </p>
            <p>
                <span>15.3.</span> Shuningdek quyidagi nominatsiyalar <span>bo’yicha</span> futbolchi va jamoalarga sovg’alar
            </p>
            <p>
                <span>topshiriladi:</span><br />
                <i>
                    <span>-</span> eng yaxshi futbolchi
                    <span>-</span> eng yaxshi to’purar
                    <span>-</span> eng yaxshi darvozabon
                    <span>-</span> eng yaxshi veteran
                    <span>-</span> muxlislar tanlovi
                    <span>-</span> eng na’munali futbolchi
                    <span>-</span> eng umidli futbolchi
                    <span>-</span> mavsum kashfiyoti (jamoa)
                    <span>-</span> fair play (jamoa)
                </i>
            </p>
        </>
    },
    {
        title: '16. Yakuniy natijalar tahlili.',
        text: <>
            <p>
                <span>16.1.</span> O’tkazilgan mavsum yakuni bo’yicha <span>kengashga</span> amaldagi direktor va moliyaviy
                harakatlarga <span>javobgar</span> shaxs hisobot berishadi.
            </p>
            <p>
                <span>16.2.</span> O’tkazilgan musobaqa yakunlangach, <span>jamoalarning</span> taklif va fikrlarini inobatga olgan
                holda ishtirokchilar <span>sonini</span> oshirish va asta sekinlik bilan 16 ta jamoa ishtirok etadigan (yoki
                8 tadan 2 divizionli), ikki davrali <span>chempionat</span> tashkil etish masalasi muxokama qilinadi.
            </p>
            <p>
                <span>16.3.</span> Yangi mavsum uchun tashkilot rahbarligi uchun <span>kengash</span> tomonidan saylov o’tkaziladi.
            </p>
        </>
    }
    ]
    return (
        <>
            <div className="join" onDoubleClick={() => {
                console.log(true);
            }}>
                <div className="tp">
                    <div className="container">
                        <div className="join-head" id='join-head'>
                            <button onClick={goBack} className="back-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
                                </svg>
                                Ortga
                            </button>
                            {/* <div className="reglament-search">
                                <input type="search" placeholder='qidirish...' id="reglament-search-input" onInput={(e) => setSearchText(e.target.value)} autoComplete='off' />
                                <ul>
                                    {
                                        reglamentTitles.forEach((item,index) => {
                                            return (
                                                item.textContent.toLowerCase().includes(searchText) ?
                                                    <li className="search-title-card" key={index}>
                                                        {item.textContent}
                                                    </li> : ''
                                            )
                                        })
                                    }
                                </ul>

                            </div> */}
                        </div>
                        {reglamentData.map(item => {
                            return (
                                <>
                                    <div className="join-title">
                                        {item.title}
                                    </div>
                                    <div className="join-text">
                                        {item.text}
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}
