import test from "../components/assets/pana12.jpg";
import test1 from "../components/assets/potato.jpg";
import test2 from "../components/assets/makarona-1.jpg"
import test3 from "../components/assets/flourless-chocolate-cake-1-2.jpg"

const recipeData = [
{
    id: 1,
    name: "Recetë mëngjesi",
    recipe: "Petulla me mjaltë",
    afterTitle: "Petullat me mjaltë janë një mënyrë e shkëlqyer për të nisur ditën, pasi ato ofrojnë një mëngjes të kënaqshëm dhe të ëmbël.",
    para:"Petullat me mjaltë janë një mënyrë e shkëlqyer për të nisur ditën, pasi ato ofrojnë një mëngjes të kënaqshëm dhe të ëmbël që me siguri do të sjellë një buzëqeshje në fytyrën tuaj. Ato janë gjithashtu një mënyrë argëtuese dhe e lehtë për të përzier rutinën tuaj të zakonshme të mëngjesit!",
    firstPrep: "Në një tas hidhni qumështin, vajin Floil, vezën, vaniljen, sheqerin dhe rrihini me pirun sa të bashkohen. Sipër tasit sitni së bashku miellin dhe sodën dhe trazojeni me pirun sa të njomet mielli, por jo ta trazoni shumë pasi nuk do ju fryhen petullat. Lëreni brumin të qetësohet për 5 minuta, kohë e mjaftueshmë që tigani të ngrohet dhe ju të copëtoni frutat",
    secondPrep: "Merrni një lugë gjelle nga brumi dhe hidheni mbi tigan duke i dhënë një formë petullave. Sapo të nxihet njëra anë, kthejini petullat nga ana tjetër dhe lërini për 1 minutë që të piqen. Zjarri duhet të jetë mesatar pasi në të kundërt rrezikoni t’ju digjen. Hiqini petullat e pjekura dhe vendosini mbi pjatat e servirjes. Përfundoni edhe me brumin e mbetur. Mbi petullat e ngrohta shtoni frutat ose çokokremin dhe servirini me një gotë qumësht të ftohtë",
    firstIngr: "1 filxhan kafe qumësht",
    secondIngr: "1 vezë",
    thirdIngr: "½ filxhani vaj luledielli Floil",
    fourthIngr: "1 lugë gjelle sheqer i kaftë",
    fifthIngr: "½ lugë çaji sodë buke",
    sixthIngr: "3 lugë gjelle (me maja) miell",
    seventhIngr: "Vanilje",
    eighthIngr: "Çokokrem ose ½ banane ose fruta pylli ",
    ninthIngr: "Pak mjaltë",
    img: test
},{
    id:2,
    name: "Recetë Dreke",
    recipe: "Tavë me patate dhe qepë",
    afterTitle: "Tava me patate dhe qepë është një pjatë klasike që është e dashur, e shijshme dhe e lehtë për t'u përgatitur.",
    para:"Tava me patate dhe qepë është një pjatë klasike që është e dashur, e shijshme dhe e lehtë për t'u përgatitur. Tava me patate dhe qepë është një pjatë e shijshme dhe e përkryer për çdo rast. Është e lehtë për t'u përgatitur dhe e kënaqshme, duke e bërë atë një recetë ideale për drekë. ",
    firstPrep: "Pastrojmë mirë patatet dhe i vendosim në ujë të vluar me kripë për 25-30 minuta. Më pas qërojmë patatet dhe i presim në feta të trasha.Në një tigan me pak yndyrë kavërdisim lehtë qepët e njoma të grira hollë. Sapo të ulim vëllimin shtojmë majdanozin dhe patatet. Rregullojmë shijen me kripë, piper të zi dhe piper të kuq dhe vazhdojmë kavërdisjen për 1-2 minuta.",
    secondPrep: "Të gjithë përbërësit nga tigani i kalojmë në një tavë të lyer me pak vaj luledielli Floil duke i niveluar mirë. Rrahim vezët me qumështin dhe kremin e hedhim në tavë të cilën e vendosim në furrë në temperaturën 200 gradë Celsius për 15-20 minuta.",
    firstIngr: "1 kg patate të reja",
    secondIngr: "3-4 qepë të njoma",
    thirdIngr: "3-4 kokrra vezë",
    fourthIngr: "1 gotë qumësht",
    fifthIngr: "4 lugë gjelle vaj luledielli Floil ",
    sixthIngr: "1 tufë majdanoz",
    seventhIngr: "Kripë",
    eighthIngr: "Piper i zi",
    ninthIngr: "Piper i kuq",
    img: test1
},{
    id:3,
    name: "Recetë Darke",
    recipe: "Makarona me spinaq",
    afterTitle: "Makaronat me spinaq dhe mocarela janë një pjatë darke e shijshme plot vlera ushqyese dhe  me shije.",
    para:"Makaronat me spinaq dhe mocarela janë një pjatë darke e shijshme plot vlera ushqyese dhe  me shije. Kjo pjatë nuk është vetëm e shijshme, por është gjithashtu një burim i shkëlqyer i lëndëve ushqyese pasi që spinaqi është i mbushur me vitamina dhe minerale, duke përfshirë hekurin, kalciumin dhe vitaminat A dhe C.",
    firstPrep: "Zieni makaronat. Përderisa zihen makaronat, përgatisni sosin. Në një tigan të thellë shkrini gjalpën, shtoni djathin mocarella të grirë, kripën, piperin, hudhrën pluhur dhe qumështin. Zieni në temperaturë mesatare duke e përzier shpesh.",
    secondPrep: "Pasi sosi të bëhet masë e trashë, shtoni spinaqin, zieni edhe për 5 min. Largoni nga nxehtësia, dhe këtë masë futeni në blender. Shtoni sosin në pastat e ziera. Përzieni mirë, dhe shtoni ende kripë dhe piper nëse keni dëshirë.",
    firstIngr: "500 gr makarona",
    secondIngr: "3 lugë gjelle gjalpë Floil",
    thirdIngr: "3 gota djath mocarela",
    fourthIngr: "1 lugë e vogël hudhër pluhur",
    fifthIngr: "1 gotë e gjysmë qumësht",
    sixthIngr: "1 lugë e vogël kripë",
    seventhIngr: "Pak piper i zi",
    eighthIngr: "4 gota spinaq",
    img: test2
},{
    id: 4,
    name: "Recetë ëmbëlsire ",
    recipe: "Kek me çokollatë",
    afterTitle: "Keku me çokollatë është receta më klasike dhe më e preferuar në botë.",
    para:"Keku me çokollatë është receta më klasike dhe më e preferuar në botë. Me kaq shumë opsione dekorimi është e lehtë të krijosh një ëmbëlsirë të veçantë dhe të paharrueshme për çdo rast",
    firstPrep: "Në një enë të thellë hedhim katër vezë të cilave i’u shtojmë edhe një gotë e gjysëm sheqer (gotë 200ml), aty vendosim edhe sheqer vaniljen dhe i përziejmë. Pastaj shtojmë një gotë vaj luledielli Floil dhe një gotë kos (gotë 200ml) ku prapë vazhdojmë me përzierjen e tyre dhe në fund i hedhim tri deri në katër lugë gjelle kakao dhe dy gota miell së bashku me pluhurin për pjekje.",
    secondPrep: "Për ti dhënë edhe një aromë i hedhim pak limon. Për fund na mbetet pjekja e kekut të shijshëm në furrën e nxehtë për katërdhjetë minuta në 180 gradë celsius. Për ta kompletuar kekun në anën tjetër ziejmë një gotë me qumësht dhe çokollatën derisa piqet keku dhe pastaj e hedhim mbi të.",
    firstIngr: "4 vezë",
    secondIngr: "1 gotë e gjysmë sheqer",
    thirdIngr: "1 vanilje",
    fourthIngr: "1 gotë vaj luledielli Floil",
    fifthIngr: "1 gotë jogurt",
    sixthIngr: "3-4 lugë kakao",
    seventhIngr: "2 gota miell",
    eighthIngr: "1 pluhur pjekjeje",
    img: test3
}
]

export { recipeData }